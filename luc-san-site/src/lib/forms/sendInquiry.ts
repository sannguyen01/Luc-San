import "server-only";

import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import type { FormState } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = "Unable to send at this time. Please try again.";

export interface InquiryInput {
  /** Human-readable context for the email subject, e.g. "Commission" or "Acquisition — Ash Talisman". */
  subjectLabel: string;
  /** Enquirer's name. */
  name: string;
  /** Email or phone the enquirer can be reached at. Used as reply-to when it is an email address. */
  contact?: string;
  /** Free-text body of the enquiry. */
  message?: string;
  /** Extra context lines rendered into the email body (talisman id, biography id, inquiry category, …). */
  fields?: Record<string, string | undefined>;
  /** Honeypot field value. When non-empty the submission is silently dropped. */
  honeypot?: string;
}

let ratelimit: Ratelimit | null = null;
let ratelimitResolved = false;

function getRatelimit(): Ratelimit | null {
  if (ratelimitResolved) return ratelimit;
  ratelimitResolved = true;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.warn(
      "[sendInquiry] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set — rate limiting is INACTIVE."
    );
    return null;
  }

  ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    prefix: "lucsan:inquiry",
  });
  return ratelimit;
}

async function getClientKey(): Promise<string> {
  try {
    const headerList = await headers();
    const forwarded = headerList.get("x-forwarded-for");
    if (forwarded) {
      const ip = forwarded.split(",")[0]?.trim();
      if (ip) return ip;
    }
    const realIp = headerList.get("x-real-ip");
    if (realIp) return realIp;
  } catch {
    // headers() unavailable (e.g. local tooling) — fall through to static key.
  }
  return "anonymous";
}

/**
 * Shared handler for every public inquiry form. Runs the honeypot check, rate
 * limiting (when configured), and dispatch via Resend, returning a typed
 * FormState the caller can hand straight back from its server action.
 */
export async function sendInquiry(input: InquiryInput): Promise<FormState> {
  const name = input.name.trim();
  const contact = input.contact?.trim();
  const message = input.message?.trim();

  // Honeypot: a filled field means a bot. Report success without sending.
  if (input.honeypot && input.honeypot.trim().length > 0) {
    return { status: "success" };
  }

  if (!name) {
    return { status: "error", message: "Please provide your name." };
  }

  const limiter = getRatelimit();
  if (limiter) {
    const key = await getClientKey();
    const { success } = await limiter.limit(key);
    if (!success) {
      return {
        status: "error",
        message: "Too many enquiries. Please wait a few minutes and try again.",
      };
    }
  }

  const contextLines = Object.entries(input.fields ?? {})
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([label, value]) => `${label}: ${value}`);

  const bodyLines = [
    `Name: ${name}`,
    contact ? `Contact: ${contact}` : null,
    ...contextLines,
    "",
    message || "(no message)",
  ].filter((line): line is string => line !== null);
  const text = bodyLines.join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "hello@lucsan.com";

  if (!apiKey) {
    // Dev / staging: no key configured, log instead of sending.
    console.log(`[Inquiry — ${input.subjectLabel}]`, { name, contact, message, fields: input.fields });
    return { status: "success" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Lục San <noreply@lucsan.com>",
        to: toEmail,
        ...(contact && EMAIL_REGEX.test(contact) ? { reply_to: contact } : {}),
        subject: `[Lục San] ${input.subjectLabel} — ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("[sendInquiry] Resend error:", res.status, await res.text());
      return { status: "error", message: GENERIC_ERROR };
    }
  } catch (error) {
    console.error("[sendInquiry] Network/fetch failure:", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success" };
}

"use server";

import { sendInquiry } from "@/lib/forms/sendInquiry";
import type { FormState } from "@/types";

export type ContactFormState = FormState;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();
  const inquiry = (formData.get("inquiry") as string | null) ?? "objects";
  const honeypot = formData.get("website") as string | null;

  if (!name || !email) {
    return { status: "error", message: "Name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  return sendInquiry({
    subjectLabel: `Contact — ${inquiry}`,
    name,
    contact: email,
    message: message ?? undefined,
    fields: { Inquiry: inquiry },
    honeypot: honeypot ?? undefined,
  });
}

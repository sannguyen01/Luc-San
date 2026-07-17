"use server";

import { sendInquiry } from "@/lib/forms/sendInquiry";
import type { FormState } from "@/types";

export async function submitCommission(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get("name")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const honeypot = formData.get("website")?.toString();

  if (!name) {
    return { status: "error", message: "Please provide your name." };
  }
  if (!message) {
    return {
      status: "error",
      message: "Please tell us something about what you carry.",
    };
  }

  return sendInquiry({
    subjectLabel: "Commission",
    name,
    message,
    honeypot,
  });
}

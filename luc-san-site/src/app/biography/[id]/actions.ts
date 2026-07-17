"use server";

import { sendInquiry } from "@/lib/forms/sendInquiry";
import type { FormState } from "@/types";

export async function submitContribution(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const author      = formData.get("author")?.toString().trim() ?? "";
  const text        = formData.get("text")?.toString().trim() ?? "";
  const biographyId = formData.get("biographyId")?.toString() ?? "";
  const honeypot    = formData.get("website")?.toString();

  if (!author) {
    return { status: "error", message: "Please provide your name." };
  }
  if (!text || text.length < 20) {
    return {
      status: "error",
      message: "Please write at least a sentence — this is a living document.",
    };
  }
  if (!biographyId) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return sendInquiry({
    subjectLabel: "Biography contribution",
    name: author,
    message: text,
    fields: { "Biography ID": biographyId },
    honeypot,
  });
}

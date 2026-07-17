"use server";

import { sendInquiry } from "@/lib/forms/sendInquiry";
import type { FormState } from "@/types";

export async function submitAcquisitionForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get("name")?.toString().trim() ?? "";
  const contact = formData.get("contact")?.toString().trim() ?? "";
  const note    = formData.get("note")?.toString().trim() ?? "";
  const talismanId    = formData.get("talismanId")?.toString() ?? "";
  const talismanTitle = formData.get("talismanTitle")?.toString() ?? "";
  const honeypot = formData.get("website")?.toString();

  if (!name || !contact) {
    return { status: "error", message: "Please provide your name and a way to reach you." };
  }

  return sendInquiry({
    subjectLabel: `Acquisition — ${talismanTitle || "Talisman"}`,
    name,
    contact,
    message: note,
    fields: { Talisman: talismanTitle, "Talisman ID": talismanId },
    honeypot,
  });
}

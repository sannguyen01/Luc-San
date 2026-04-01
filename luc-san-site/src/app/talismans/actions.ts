"use server";

type FormState = { success: boolean; error: string | null };

export async function submitAcquisitionForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get("name")?.toString().trim() ?? "";
  const contact = formData.get("contact")?.toString().trim() ?? "";

  if (!name || !contact) {
    return { success: false, error: "Please provide your name and a way to reach you." };
  }

  // TODO: wire to Resend — send to studio@lucsan.com with talisman + enquirer details
  return { success: true, error: null };
}

"use server";

type CommissionState = { success: boolean; error: string | null };

export async function submitCommission(
  _prev: CommissionState,
  formData: FormData
): Promise<CommissionState> {
  const name    = formData.get("name")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name) {
    return { success: false, error: "Please provide your name." };
  }
  if (!message) {
    return {
      success: false,
      error: "Please tell us something about what you carry.",
    };
  }

  // TODO: wire to Resend — send enquiry to studio@lucsan.com
  return { success: true, error: null };
}

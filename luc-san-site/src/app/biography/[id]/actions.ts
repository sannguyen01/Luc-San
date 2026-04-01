"use server";

type ContributionState = { success: boolean; error: string | null };

export async function submitContribution(
  _prev: ContributionState,
  formData: FormData
): Promise<ContributionState> {
  const author      = formData.get("author")?.toString().trim() ?? "";
  const text        = formData.get("text")?.toString().trim() ?? "";
  const biographyId = formData.get("biographyId")?.toString() ?? "";

  if (!author) {
    return { success: false, error: "Please provide your name." };
  }
  if (!text || text.length < 20) {
    return {
      success: false,
      error: "Please write at least a sentence — this is a living document.",
    };
  }
  if (!biographyId) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // TODO: store contribution (Resend / DB)
  return { success: true, error: null };
}

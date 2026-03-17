"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();
  const inquiry = (formData.get("inquiry") as string | null) ?? "objects";

  if (!name || !email) {
    return { status: "error", message: "Name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // Send via Resend when RESEND_API_KEY is configured
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "hello@lucsan.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Lục San Contact <noreply@lucsan.com>",
          to: toEmail,
          reply_to: email,
          subject: `[Lục San] ${inquiry} — ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Inquiry: ${inquiry}`,
            "",
            message ?? "(no message)",
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return { status: "error", message: "Unable to send at this time. Please try again." };
      }
    } catch {
      return { status: "error", message: "Unable to send at this time. Please try again." };
    }
  } else {
    // Log locally when no API key (dev / staging)
    console.log("[Contact form submission]", { name, email, inquiry, message });
  }

  return { status: "success" };
}

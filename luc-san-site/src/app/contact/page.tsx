import type { Metadata } from "next";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Conversations develop slowly, the way good materials reveal themselves. Inquiries about objects, materials, spaces, and commissions.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <PageHero label="Lục San — Contact">
        <h1 className="font-serif font-light mb-5" style={{ maxWidth: "28rem" }}>
          Contact
        </h1>
        <p className="text-body" style={{ maxWidth: "36rem", color: "var(--text-secondary)" }}>
          Conversations here develop slowly,
          the way good materials reveal themselves —
          through patience, attention, and time.
          There is no urgency. The objects will wait.
        </p>
      </PageHero>

      <ContentSection>
        <ContactForm />
      </ContentSection>
    </PageContainer>
  );
}

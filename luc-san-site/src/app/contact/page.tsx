import type { Metadata } from "next";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { DarkBand } from "@/components/layout/DarkBand";
import { ContactForm } from "@/components/contact/ContactForm";
import { RevealSection } from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Conversations develop slowly, the way good materials reveal themselves. Inquiries about objects, materials, spaces, and commissions.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <PageHero label="Lục San — Contact">
        <h1 className="page-title mb-5">Contact</h1>
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

      <DarkBand size="sm">
        <RevealSection>
          <div
            className="reveal flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "var(--space-600)" }}
          >
            <p
              className="font-serif font-light"
              style={{
                fontSize:      "clamp(1.3rem, 2vw, 1.8rem)",
                lineHeight:    1.3,
                letterSpacing: "0.02em",
                color:         "var(--ls-void-white)",
              }}
            >
              Conversations develop at<br />
              the pace of good materials.
            </p>
            <p className="text-label" style={{ color: "var(--ls-graphite-skin)" }}>
              Response within 4 hours
            </p>
          </div>
        </RevealSection>
      </DarkBand>
    </PageContainer>
  );
}

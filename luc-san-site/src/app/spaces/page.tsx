import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { SpaceGallery } from "@/components/spaces/SpaceGallery";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RevealSection } from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Spaces & Encounters",
  description:
    "A calm laboratory where materials can be handled, weighed, and examined. Encounters move at the pace of the substances themselves.",
};

export default function SpacesPage() {
  return (
    <PageContainer>
      <PageHero label="Lục San — Spaces">
        <h1 className="font-serif font-light mb-5" style={{ maxWidth: "28rem" }}>
          Spaces & Encounters
        </h1>
        <p className="text-body" style={{ maxWidth: "36rem", color: "var(--text-secondary)" }}>
          A space of 60–100 square meters. Quiet. Ordered.
          Materials on surfaces, light from above. This is not a showroom —
          it is a calm laboratory where materials can be handled, weighed,
          and examined before any decision is made.
        </p>
      </PageHero>

      <ContentSection>
        <RevealSection>
          <SpaceGallery />
        </RevealSection>
      </ContentSection>

      <SectionDivider />

      {/* CTA — left-aligned, matching content width */}
      <ContentSection>
        <RevealSection>
          <div className="reveal" style={{ maxWidth: "36rem" }}>
            <p className="text-body mb-8" style={{ color: "var(--text-secondary)" }}>
              Encounters here move at the pace of the materials themselves —
              unhurried, attentive, designed to reveal rather than persuade.
            </p>
            <Link href="/contact" className="link-pathway">
              Request an encounter
            </Link>
          </div>
        </RevealSection>
      </ContentSection>
    </PageContainer>
  );
}

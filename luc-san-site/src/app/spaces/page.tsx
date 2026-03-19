import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { DarkBand } from "@/components/layout/DarkBand";
import { SpaceGallery } from "@/components/spaces/SpaceGallery";
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
        <h1 className="page-title mb-5">Spaces & Encounters</h1>
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

      <DarkBand size="lg">
        <RevealSection>
          <div className="reveal" style={{ maxWidth: "38rem" }}>
            <p className="text-label mb-8" style={{ color: "var(--ls-slate-haze)" }}>
              The encounter
            </p>
            <p
              className="font-serif font-light"
              style={{
                fontSize:      "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight:    1.2,
                letterSpacing: "0.02em",
                color:         "var(--ls-void-white)",
                marginBottom:  "var(--space-600)",
              }}
            >
              Materials are understood<br />
              through handling, not viewing.
            </p>
            <p className="text-body" style={{ color: "var(--ls-slate-haze)", marginBottom: "var(--space-800)" }}>
              Encounters here move at the pace of the materials themselves —
              unhurried, attentive, designed to reveal rather than persuade.
            </p>
            <Link href="/contact" className="link-pathway">
              Request an encounter
            </Link>
          </div>
        </RevealSection>
      </DarkBand>
    </PageContainer>
  );
}

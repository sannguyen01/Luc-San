import type { Metadata } from "next";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { DarkBand } from "@/components/layout/DarkBand";
import { TierBands } from "@/components/objects/TierBands";
import { RevealSection } from "@/components/ui/RevealSection";
import objectsData from "@/content/objects.json";
import type { LucSanObject } from "@/types";

export const metadata: Metadata = {
  title: "Objects",
  description:
    "Temporal companions shaped by geological gesture and finished by touch intelligence. Organized by the complexity of their transformation.",
};

const objects = objectsData as LucSanObject[];

export default function ObjectsPage() {
  return (
    <PageContainer>
      <PageHero label="Lục San — Objects">
        <h1 className="page-title mb-3">Objects</h1>
        <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>
          Geological patience made tangible.
        </p>
        <p className="text-body" style={{ maxWidth: "36rem", color: "var(--text-secondary)" }}>
          Every object here began as a material with its own biography —
          pearl deposited over decades, jade compressed over epochs,
          wood dried across seasons. The human intervention is measured in hours,
          not production runs. Each piece carries a specific count: the hours
          of handwork that translated raw substance into finished presence.
        </p>
      </PageHero>

      <ContentSection>
        <RevealSection>
          <TierBands objects={objects} />
        </RevealSection>
      </ContentSection>

      <DarkBand size="md">
        <RevealSection>
          <div className="reveal" style={{ maxWidth: "32rem" }}>
            <p className="text-label mb-6" style={{ color: "var(--ls-slate-haze)" }}>
              On handwork
            </p>
            <p
              className="font-serif font-light"
              style={{
                fontSize:      "clamp(1.5rem, 2.5vw, 2.2rem)",
                lineHeight:    1.25,
                letterSpacing: "0.02em",
                color:         "var(--ls-void-white)",
                marginBottom:  "var(--space-400)",
              }}
            >
              Each hour counted.<br />Each method named.
            </p>
            <p className="text-body" style={{ color: "var(--ls-slate-haze)" }}>
              The hours listed with every object are not a measure of price.
              They are a biography of attention — the precise count of human
              time placed in service of geological time.
            </p>
          </div>
        </RevealSection>
      </DarkBand>
    </PageContainer>
  );
}

import type { Metadata } from "next";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
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
        <h1 className="font-serif font-light mb-5" style={{ maxWidth: "28rem" }}>
          Objects
        </h1>
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
    </PageContainer>
  );
}

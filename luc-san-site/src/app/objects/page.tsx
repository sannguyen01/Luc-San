import type { Metadata } from "next";
import { PageContainer, ContentSection, NarrowSection } from "@/components/layout/Layout";
import { TextBlock } from "@/components/ui/TextBlock";
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
      {/* Intro band */}
      <NarrowSection>
        <TextBlock align="center" narrow>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">
            Objects
          </h1>
          <p className="text-muted text-sm leading-relaxed">
            Every object here began as a material with its own biography —
            pearl deposited over decades, jade compressed over epochs,
            wood dried across seasons. The human intervention is measured in hours,
            not production runs. Each piece carries a specific count: the hours
            of handwork that translated raw substance into finished presence.
          </p>
        </TextBlock>
      </NarrowSection>

      {/* Tier bands — each article already carries .reveal inside TierBands */}
      <ContentSection>
        <RevealSection>
          <TierBands objects={objects} />
        </RevealSection>
      </ContentSection>
    </PageContainer>
  );
}

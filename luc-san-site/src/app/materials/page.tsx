import type { Metadata } from "next";
import { PageContainer, ContentSection, NarrowSection } from "@/components/layout/Layout";
import { TextBlock } from "@/components/ui/TextBlock";
import { MaterialStorySlice } from "@/components/materials/MaterialStorySlice";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RevealSection } from "@/components/ui/RevealSection";
import materialsData from "@/content/materials.json";
import type { Material } from "@/types";

export const metadata: Metadata = {
  title: "Materials & Time",
  description:
    "Material infrastructure. Pearl, jade, amber, wood, silver, bronze — each carrying a formation narrative older than civilization.",
};

const materials = materialsData as Material[];

const processStages = [
  {
    title: "Assessment",
    description:
      "Every material passes a five-filter protocol: formation narrative, inherent beauty, working compatibility, temporal evolution, ethical sourcing. Any failure disqualifies.",
  },
  {
    title: "Form",
    description:
      "The material dictates the shape. Grain direction, nacre layers, crystal structure — the artisan follows what the substance reveals. Hours counted, methods named.",
  },
  {
    title: "Surface",
    description:
      "Living finish by design. No permanent coatings. The surface is prepared to evolve through use — patina, luster, color shift. Time is the final artisan.",
  },
];

export default function MaterialsPage() {
  return (
    <PageContainer>
      {/* Intro */}
      <NarrowSection>
        <TextBlock align="center" narrow>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">
            Materials & Time
          </h1>
          <p className="text-muted text-sm leading-relaxed">
            Lục San is material infrastructure, not a label.
            Every substance we work with passed through a formation
            no human hand could replicate — tectonic pressure,
            biological patience, atmospheric fossilization,
            decades of cellular growth.
          </p>
        </TextBlock>
      </NarrowSection>

      {/* Material cards — each slice has .reveal on its article */}
      <ContentSection>
        <RevealSection>
          {materials.map((material, index) => (
            <MaterialStorySlice key={material.id} material={material} index={index} />
          ))}
        </RevealSection>
      </ContentSection>

      <SectionDivider />

      {/* Process triptych */}
      <ContentSection>
        <RevealSection>
          <TextBlock align="center" narrow className="mb-12 reveal">
            <h2 className="font-serif text-3xl font-light">
              Three Stages
            </h2>
          </TextBlock>
        </RevealSection>

        <RevealSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processStages.map((stage, i) => (
              <div key={stage.title} className="text-center reveal">
                <span className="text-meta block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-light mb-4">
                  {stage.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </ContentSection>
    </PageContainer>
  );
}

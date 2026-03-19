import type { Metadata } from "next";
import { PageContainer, ContentSection, PageHero } from "@/components/layout/Layout";
import { MaterialStorySlice } from "@/components/materials/MaterialStorySlice";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RevealSection } from "@/components/ui/RevealSection";
import materialsData from "@/content/materials.json";
import objectsData from "@/content/objects.json";
import type { Material, LucSanObject } from "@/types";

export const metadata: Metadata = {
  title: "Materials & Time",
  description:
    "Material infrastructure. Pearl, jade, amber, wood, silver, bronze — each carrying a formation narrative older than civilization.",
};

const materials = materialsData as Material[];
const objects = objectsData as LucSanObject[];

const materialKeywords: Record<string, string[]> = {
  pearl:  ["pearl", "pearls"],
  jade:   ["jade"],
  amber:  ["amber"],
  wood:   ["walnut", "oak", "wood"],
  silver: ["silver"],
  bronze: ["bronze"],
};

function getRelatedObjects(material: Material): LucSanObject[] {
  const keywords = materialKeywords[material.id] ?? [material.name.toLowerCase()];
  return objects.filter((obj) =>
    obj.materials.some((m) =>
      keywords.some((kw) => m.toLowerCase().includes(kw))
    )
  );
}

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
      <PageHero label="Lục San — Materials">
        <h1 className="page-title mb-5">Materials & Time</h1>
        <p className="text-body" style={{ maxWidth: "36rem", color: "var(--text-secondary)" }}>
          Lục San is material infrastructure, not a label.
          Every substance we work with passed through a formation
          no human hand could replicate — tectonic pressure,
          biological patience, atmospheric fossilization,
          decades of cellular growth.
        </p>
      </PageHero>

      <ContentSection>
        <RevealSection>
          {materials.map((material, index) => (
            <MaterialStorySlice
              key={material.id}
              material={material}
              index={index}
              relatedObjects={getRelatedObjects(material)}
            />
          ))}
        </RevealSection>
      </ContentSection>

      <SectionDivider />

      {/* Process triptych */}
      <ContentSection>
        <RevealSection>
          <div className="mb-12 reveal">
            <p className="text-label mb-4" style={{ color: "var(--text-tertiary)" }}>
              Method
            </p>
            <h2 className="font-serif font-light" style={{ maxWidth: "24rem" }}>
              Three Stages
            </h2>
          </div>
        </RevealSection>

        <RevealSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processStages.map((stage, i) => (
              <div key={stage.title} className="reveal">
                <span className="text-meta block mb-4" style={{ color: "var(--text-tertiary)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-light mb-4">{stage.title}</h3>
                <p className="text-body" style={{ color: "var(--text-secondary)" }}>
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

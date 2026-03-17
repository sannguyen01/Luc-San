import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, ContentSection, NarrowSection } from "@/components/layout/Layout";
import { TextBlock } from "@/components/ui/TextBlock";
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
      {/* Space overview */}
      <NarrowSection>
        <TextBlock align="center" narrow>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">
            Spaces & Encounters
          </h1>
          <p className="text-muted text-sm leading-relaxed mb-4">
            A space of 60–100 square meters.
            Quiet. Ordered. Materials on surfaces, light from above.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            This is not a showroom. It is a calm laboratory
            where materials can be handled, weighed, and examined
            before any decision is made.
          </p>
        </TextBlock>
      </NarrowSection>

      {/* Gallery + encounter types */}
      <ContentSection>
        <RevealSection>
          <SpaceGallery />
        </RevealSection>
      </ContentSection>

      <SectionDivider />

      {/* Soft CTA — text link, no button */}
      <NarrowSection>
        <TextBlock align="center" narrow>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Encounters here move at the pace of the materials themselves —
            unhurried, attentive, designed to reveal rather than persuade.
          </p>
          <Link href="/contact" className="link-pathway">
            Request an encounter
          </Link>
        </TextBlock>
      </NarrowSection>
    </PageContainer>
  );
}

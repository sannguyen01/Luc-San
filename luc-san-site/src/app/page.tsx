import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ContentSection, NarrowSection } from "@/components/layout/Layout";
import { Grid } from "@/components/ui/Grid";
import { TextBlock } from "@/components/ui/TextBlock";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RevealSection } from "@/components/ui/RevealSection";

const pathways = [
  {
    title: "Objects",
    description:
      "Temporal companions shaped by geological gesture and finished by touch intelligence.",
    href: "/objects",
    linkText: "See the objects",
  },
  {
    title: "Materials",
    description:
      "Biographies older than civilization. Pearl, jade, amber, wood — each carrying its formation narrative.",
    href: "/materials",
    linkText: "Read the materials",
  },
  {
    title: "Spaces",
    description:
      "Where materials can be handled and understood. Encounters move at the pace of the substances themselves.",
    href: "/spaces",
    linkText: "Enter the space",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed cinematic */}
      <HomeHero />

      {/* Three Columns — Objects · Materials · Spaces */}
      <ContentSection>
        <RevealSection stagger>
          <Grid cols={3} gap="lg">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="reveal">
                <h2 className="font-serif text-2xl font-light mb-4">
                  {pathway.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {pathway.description}
                </p>
                <Link href={pathway.href} className="link-pathway">
                  {pathway.linkText}
                </Link>
              </div>
            ))}
          </Grid>
        </RevealSection>
      </ContentSection>

      <SectionDivider />

      {/* Single Material Story */}
      <NarrowSection>
        <RevealSection>
          <TextBlock align="center" narrow className="reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Pearl
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Seventeen years of submarine darkness. Layer upon layer of nacre
              deposited at the molecular level, each one an act of biological
              patience no laboratory can replicate.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Sixty hours of hand-winding wire around each pearl. No adhesive.
              No shortcuts. The tension between cold metal and warm nacre creates
              a dialogue that tightens over years of wear.
            </p>
            <p className="text-sm italic text-accent">
              The silver will darken where your skin touches it. The pearl will
              brighten. In three years, this piece will look nothing like it does
              today — and that is the design.
            </p>
          </TextBlock>
        </RevealSection>
      </NarrowSection>

      <SectionDivider />

      {/* Subtle Pathways — minimal inline links */}
      <ContentSection>
        <RevealSection>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 reveal">
            <Link href="/objects" className="link-pathway">
              See the objects
            </Link>
            <Link href="/materials" className="link-pathway">
              Read the materials
            </Link>
            <Link href="/spaces" className="link-pathway">
              Enter the space
            </Link>
          </div>
        </RevealSection>
      </ContentSection>
    </>
  );
}

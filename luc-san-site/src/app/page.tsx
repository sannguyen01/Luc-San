import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HeroStatement } from "@/components/home/HeroStatement";
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
    linkText: "The objects",
  },
  {
    title: "Materials",
    description:
      "Biographies older than civilization. Pearl, jade, amber, wood — each carrying its formation narrative.",
    href: "/materials",
    linkText: "The materials",
  },
  {
    title: "Spaces",
    description:
      "Where materials can be handled and understood. Encounters move at the pace of the substances themselves.",
    href: "/spaces",
    linkText: "The space",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed cinematic, purely visual */}
      <HomeHero />

      {/* Below-hero editorial statement — Dior pattern: text beneath the visual */}
      <RevealSection>
        <HeroStatement />
      </RevealSection>

      {/* Three Columns — Objects · Materials · Spaces (editorial portals) */}
      <ContentSection>
        <RevealSection stagger>
          <Grid cols={3} gap="lg">
            {pathways.map((pathway, i) => (
              <div key={pathway.title} className="reveal">
                {/* Editorial image portal — skeleton until real asset added */}
                <div
                  className="img-skeleton w-full mb-6"
                  style={{ aspectRatio: "3/4" }}
                />
                <p className="text-meta mb-3" style={{ color: "var(--text-tertiary)" }}>
                  0{i + 1}
                </p>
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

      {/* Dark geological band — scroll crossfade moment */}
      <RevealSection>
      <section
        className="dark-band reveal"
        style={{ padding: "var(--space-1600) var(--space-800)" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <p
            className="font-serif text-3xl md:text-4xl font-light leading-relaxed mb-6"
            style={{ color: "var(--text-inverse)" }}
          >
            Geological time.<br />Human hands.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,242,236,0.5)" }}>
            Every material here required more time to form than any civilization
            has existed. We add hours, not epochs — but we count them with the
            same seriousness.
          </p>
        </div>
      </section>
      </RevealSection>

      <SectionDivider />

      {/* Subtle Pathways — minimal inline links */}
      <ContentSection>
        <RevealSection>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 reveal">
            <Link href="/objects" className="link-pathway">
              The objects
            </Link>
            <Link href="/materials" className="link-pathway">
              The materials
            </Link>
            <Link href="/spaces" className="link-pathway">
              The space
            </Link>
          </div>
        </RevealSection>
      </ContentSection>
    </>
  );
}

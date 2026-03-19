import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HeroStatement } from "@/components/home/HeroStatement";
import { ContentSection, NarrowSection } from "@/components/layout/Layout";
import { Grid } from "@/components/ui/Grid";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RevealSection } from "@/components/ui/RevealSection";

const pathways = [
  {
    title: "Objects",
    description: "Temporal companions shaped by geological gesture and finished by touch intelligence.",
    href: "/objects",
    linkText: "The objects",
  },
  {
    title: "Materials",
    description: "Biographies older than civilization. Pearl, jade, amber, wood — each carrying its formation narrative.",
    href: "/materials",
    linkText: "The materials",
  },
  {
    title: "Spaces",
    description: "Where materials can be handled and understood. Encounters move at the pace of the substances themselves.",
    href: "/spaces",
    linkText: "The space",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <RevealSection>
        <HeroStatement />
      </RevealSection>

      {/* Three pathway portals */}
      <ContentSection>
        <RevealSection stagger>
          <Grid cols={3} gap="lg">
            {pathways.map((pathway, i) => (
              <div key={pathway.title} className="reveal">
                <div className="img-skeleton w-full mb-8" style={{ aspectRatio: "3/4" }} />
                <p className="text-label mb-3" style={{ color: "var(--text-tertiary)" }}>0{i + 1}</p>
                <h3
                  className="font-serif font-light mb-4"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", letterSpacing: "0.03em" }}
                >
                  {pathway.title}
                </h3>
                <p className="text-body mb-6" style={{ color: "var(--text-secondary)" }}>
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

      {/* Pearl material story */}
      <NarrowSection>
        <RevealSection>
          <div className="reveal text-center">
            <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>Material biography</p>
            <h2
              className="font-serif font-light mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "0.03em" }}
            >
              Pearl
            </h2>
            <p className="text-body mb-5" style={{ color: "var(--text-secondary)" }}>
              Seventeen years of submarine darkness. Layer upon layer of nacre
              deposited at the molecular level, each one an act of biological
              patience no laboratory can replicate.
            </p>
            <p className="text-body mb-5" style={{ color: "var(--text-secondary)" }}>
              Sixty hours of hand-winding wire around each pearl. No adhesive.
              No shortcuts. The tension between cold metal and warm nacre creates
              a dialogue that tightens over years of wear.
            </p>
            <p className="text-editorial" style={{ color: "var(--ls-graphite-skin)" }}>
              The silver will darken where your skin touches it. The pearl will
              brighten. In three years, this piece will look nothing like it does
              today — and that is the design.
            </p>
          </div>
        </RevealSection>
      </NarrowSection>

      {/* Dark geological band */}
      <RevealSection>
        <section
          className="dark-band reveal"
          style={{ padding: "var(--space-1600) clamp(24px, 4vw, 64px)" }}
        >
          <div style={{ maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <p
              className="font-serif font-light"
              style={{
                fontSize:      "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight:    1.2,
                letterSpacing: "0.02em",
                color:         "var(--ls-void-white)",
                marginBottom:  "var(--space-400)",
              }}
            >
              Geological time.<br />Human hands.
            </p>
            <p className="text-body" style={{ color: "var(--ls-slate-haze)" }}>
              Every material here required more time to form than any civilization
              has existed. We add hours, not epochs — but we count them with the
              same seriousness.
            </p>
          </div>
        </section>
      </RevealSection>

      <SectionDivider />

      {/* Bottom pathway links */}
      <ContentSection>
        <RevealSection>
          <div
            className="reveal flex flex-col md:flex-row items-center justify-center"
            style={{ gap: "clamp(24px, 4vw, 64px)", paddingTop: "var(--space-300)", paddingBottom: "var(--space-300)" }}
          >
            <Link href="/objects" className="link-pathway">The objects</Link>
            <Link href="/materials" className="link-pathway">The materials</Link>
            <Link href="/spaces" className="link-pathway">The space</Link>
          </div>
        </RevealSection>
      </ContentSection>
    </>
  );
}

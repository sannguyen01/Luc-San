import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, PageHero } from "@/components/layout/Layout";
import talismanData from "@/content/talismans.json";
import type { Talisman } from "@/types";

export const metadata: Metadata = {
  title: "Talisman — Necklaces by Lục San",
  description:
    "Necklaces made from baroque pearl, nephrite jade, and Baltic amber. Each Talisman is a geological formation worn at the throat — formed across millennia, finished across weeks.",
};

const talismans = talismanData as Talisman[];

/* Aspect ratios chosen for visual rhythm in the masonry grid */
const ASPECT_RATIOS: Record<string, string> = {
  "jade-disc-pendant":          "3/4",
  "baroque-pearl-suspension-i": "2/3",
  "pearl-constellation-collar": "3/4",
};

const TIER_INDEX: Record<string, string> = {
  Elemental:   "01",
  Composed:    "02",
  Complex:     "03",
  Commissioned:"04",
};

interface CardProps {
  talisman:    Talisman;
  aspectRatio: string;
}

function TalismanCard({ talisman, aspectRatio }: CardProps) {
  return (
    <Link
      href={`/talismans/${talisman.id}`}
      className="group block"
      style={{
        breakInside:  "avoid",
        marginBottom: "var(--layout-gutter)",
        display:      "block",
      }}
    >
      {/* Image */}
      <div
        className="img-skeleton overflow-hidden"
        style={{
          aspectRatio,
          width:        "100%",
          marginBottom: "var(--space-300)",
          transition:   "opacity 350ms cubic-bezier(0,0,0.30,1)",
        }}
        role="img"
        aria-label={talisman.title}
      />

      {/* Tier + hours */}
      <p className="text-label mb-2" style={{ color: "var(--text-tertiary)" }}>
        {TIER_INDEX[talisman.tier]} · {talisman.tier} · {talisman.hours}h
      </p>

      {/* Title */}
      <h3
        className="font-serif font-light"
        style={{
          fontSize:      "clamp(1rem, 1.4vw, 1.25rem)",
          lineHeight:    1.25,
          letterSpacing: "0.02em",
          color:         "var(--text-primary)",
          marginBottom:  "var(--space-200)",
        }}
      >
        {talisman.title}
      </h3>

      {/* Copy */}
      <p
        className="text-caption"
        style={{ color: "var(--text-secondary)", maxWidth: "34ch" }}
      >
        {talisman.copy}
      </p>
    </Link>
  );
}

function IndexPanel({ talismans }: { talismans: Talisman[] }) {
  return (
    <div>
      <p className="text-label mb-8" style={{ color: "var(--text-tertiary)" }}>
        Index
      </p>

      <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
        {talismans.map((t, i) => (
          <li key={t.id}>
            <Link href={`/talismans/${t.id}`} style={{ display: "block" }}>
              <span
                className="text-label"
                style={{ display: "block", color: "var(--text-tertiary)", marginBottom: "var(--space-50)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="font-serif font-light block"
                style={{
                  fontSize:      "clamp(0.9rem, 1.2vw, 1.05rem)",
                  lineHeight:    1.3,
                  color:         "var(--text-primary)",
                  letterSpacing: "0.02em",
                  marginBottom:  "var(--space-50)",
                }}
              >
                {t.title}
              </span>
              <span className="text-label" style={{ color: "var(--text-tertiary)" }}>
                {t.tier}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div
        style={{
          borderTop:   "1px solid var(--border-subtle)",
          marginTop:   "var(--space-800)",
          paddingTop:  "var(--space-600)",
        }}
      >
        <p
          className="text-caption"
          style={{ color: "var(--text-tertiary)", fontStyle: "italic" }}
        >
          {talismans.length} necklaces. Each a geological event worn at the throat.
        </p>
      </div>
    </div>
  );
}

export default function TalismansPage() {
  return (
    <PageContainer>

      <PageHero label="Lục San — Talisman">
        <h1 className="page-title mb-4">Talisman</h1>
        <p
          className="text-body"
          style={{ maxWidth: "38rem", color: "var(--text-secondary)" }}
        >
          A necklace is the object that rests closest to the voice.
          Lục San makes them from materials that took longer to form
          than any language has existed.
        </p>
        <p
          className="text-body"
          style={{ maxWidth: "38rem", color: "var(--text-secondary)", marginTop: "var(--space-400)" }}
        >
          Pearl deposited over nineteen years. Jade compressed over
          forty million. The human interval is measured in hours.
          The geological interval is what gives the object its weight.
          Each necklace made in the Nacre tradition.
        </p>
      </PageHero>

      <div
        style={{
          paddingLeft:   "var(--layout-margin)",
          paddingRight:  "var(--layout-margin)",
          paddingTop:    "var(--space-1200)",
          paddingBottom: "var(--space-1600)",
        }}
      >
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>

          <div
            className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-start"
            style={{ gap: "var(--layout-gutter)" }}
          >

            {/* Masonry zone — CSS columns creates natural waterfall */}
            <div style={{ columns: "2", columnGap: "var(--layout-gutter)" }}>
              {talismans.map((t) => (
                <TalismanCard
                  key={t.id}
                  talisman={t}
                  aspectRatio={ASPECT_RATIOS[t.id] ?? "3/4"}
                />
              ))}
            </div>

            {/* Vertical index — desktop only, sticky */}
            <div
              className="hidden lg:block"
              style={{ position: "sticky", top: "96px" }}
            >
              <IndexPanel talismans={talismans} />
            </div>

          </div>
        </div>
      </div>

    </PageContainer>
  );
}

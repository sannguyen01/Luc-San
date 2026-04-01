import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, PageHero } from "@/components/layout/Layout";
import talismanData from "@/content/talismans.json";
import type { Talisman } from "@/types";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Objects formed from geological time. Pearl, jade, amber, wood — each piece a material biography made wearable.",
};

const talismans = talismanData as Talisman[];

/* Aspect ratios chosen for visual rhythm in the masonry grid */
const ASPECT_RATIOS: Record<string, string> = {
  "jade-disc-pendant":          "3/4",
  "baroque-pearl-suspension-i": "2/3",
  "amber-drop-earrings":        "1/1",
  "pearl-constellation-collar": "3/4",
  "jade-cuff-open":             "2/3",
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
          {talismans.length} objects. Each a geological event made wearable.
        </p>
      </div>
    </div>
  );
}

export default function TalismansPage() {
  return (
    <PageContainer>

      <PageHero label="Lục San — The Collection">
        <h1 className="page-title mb-4">The Collection</h1>
        <p
          className="text-body"
          style={{ maxWidth: "38rem", color: "var(--text-secondary)" }}
        >
          Each object began as a material with its own biography —
          pearl deposited over decades, jade compressed over epochs,
          amber preserving an afternoon that was forty-four million years ago.
          The human intervention is measured in hours, not production runs.
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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/Layout";
import { GeologicalDataPanel } from "@/components/talismans/GeologicalDataPanel";
import { FabricationTimeline } from "@/components/talismans/FabricationTimeline";
import { CulturalFragment } from "@/components/talismans/CulturalFragment";
import { AcquisitionForm } from "@/components/talismans/AcquisitionForm";
import { LifecycleTheology } from "@/components/talismans/LifecycleTheology";
import talismanData from "@/content/talismans.json";
import type { Talisman } from "@/types";

const talismans = talismanData as Talisman[];

export function generateStaticParams() {
  return talismans.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const talisman = talismans.find((t) => t.id === id);
  if (!talisman) return {};
  return {
    title:       talisman.title,
    description: talisman.copy,
  };
}

export default async function TalismanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const talisman = talismans.find((t) => t.id === id);
  if (!talisman) notFound();

  return (
    <PageContainer>

      {/* ── 01 Material Signal — dark threshold band ─────────────────────── */}
      <section
        className="dark-band"
        style={{
          minHeight: "40svh",
          display:   "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "calc(var(--space-2000) + 88px) var(--layout-margin) var(--space-1200)",
        }}
      >
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", width: "100%" }}>
          <p
            className="text-label"
            style={{ color: "var(--ls-slate-haze)", marginBottom: "var(--space-400)" }}
          >
            Nacre discipline · {talisman.discipline ?? "Geological Reading"}
          </p>
          <p
            style={{
              fontFamily:    "var(--font-serif)",
              fontWeight:    300,
              fontStyle:     "italic",
              fontSize:      "clamp(2rem, 4.5vw, 4.5rem)",
              lineHeight:    1.08,
              letterSpacing: "0.02em",
              color:         "var(--ls-void-white)",
              maxWidth:      "16ch",
              marginBottom:  "var(--space-400)",
            }}
          >
            {talisman.era}.
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-serif)",
              fontWeight:    300,
              fontSize:      "clamp(1rem, 1.6vw, 1.4rem)",
              letterSpacing: "0.06em",
              color:         "var(--ls-slate-haze)",
            }}
          >
            {talisman.title}
          </h1>
        </div>
      </section>

      {/* ── Layer 1: Geological Genesis ───────────────────────────────────── */}
      <div
        style={{
          paddingLeft:   "var(--layout-margin)",
          paddingRight:  "var(--layout-margin)",
          paddingTop:    "var(--space-600)",
          paddingBottom: "var(--space-1200)",
          maxWidth:      "var(--layout-max)",
          margin:        "0 auto",
        }}
      >

        {/* Breadcrumb */}
        <div className="flex items-center mb-12" style={{ minHeight: "44px" }}>
          <Link
            href="/talismans"
            className="text-meta"
            style={{ color: "var(--text-tertiary)", letterSpacing: "0.18em", padding: "8px 0" }}
          >
            ← Talisman
          </Link>
        </div>

        {/* Two-column: image + formation (left) | sticky panel (right) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-start"
          style={{ gap: "clamp(32px, 5vw, 80px)" }}
        >

          {/* Left — image + genesis text */}
          <div>
            {/* Hero image */}
            <div
              className="img-skeleton"
              style={{ aspectRatio: "2/3", width: "100%", marginBottom: "var(--space-800)" }}
              role="img"
              aria-label={talisman.title}
            />

            {/* Layer label */}
            <p
              className="text-label mb-5"
              style={{ color: "var(--text-tertiary)" }}
            >
              Geological genesis · {talisman.era}
            </p>

            {/* Formation narrative */}
            <p
              className="text-editorial"
              style={{ marginBottom: "var(--space-400)", maxWidth: "44ch" }}
            >
              {talisman.formation}
            </p>

            {/* Provenance */}
            <p className="text-caption" style={{ color: "var(--text-tertiary)" }}>
              {talisman.provenance}
            </p>
          </div>

          {/* Right — sticky data panel */}
          <GeologicalDataPanel talisman={talisman} />

        </div>
      </div>

      {/* ── Layer 2: Artisan Intervention ────────────────────────────────── */}
      <section
        style={{
          borderTop:     "1px solid var(--border-subtle)",
          paddingTop:    "var(--space-1200)",
          paddingBottom: "var(--space-1200)",
        }}
      >
        <div
          style={{
            paddingLeft:  "var(--layout-margin)",
            paddingRight: "var(--layout-margin)",
            maxWidth:     "var(--layout-max)",
            margin:       "0 auto",
            marginBottom: "var(--space-600)",
          }}
        >
          <p className="text-label" style={{ color: "var(--text-tertiary)" }}>
            Artisan intervention · {talisman.hours} hours
          </p>
        </div>
        <FabricationTimeline images={talisman.processImages} />
      </section>

      {/* ── Layer 3: Cultural Fragment ────────────────────────────────────── */}
      <CulturalFragment
        quote={talisman.culturalQuote}
        attribution={talisman.culturalAttribution}
      />

      {/* ── Layer 4: Keeper Decision ──────────────────────────────────────── */}
      <section
        style={{
          paddingLeft:   "var(--layout-margin)",
          paddingRight:  "var(--layout-margin)",
          paddingTop:    "var(--space-1600)",
          paddingBottom: "var(--space-1600)",
          maxWidth:      "var(--layout-max)",
          margin:        "0 auto",
        }}
      >
        <AcquisitionForm
          talismanId={talisman.id}
          talismanTitle={talisman.title}
        />
      </section>

      {/* ── Layer 5: Lifecycle Theology ───────────────────────────────────── */}
      <LifecycleTheology talisman={talisman} />

      {/* ── Commission CTA ───────────────────────────────────────────────── */}
      <section
        className="dark-band"
        style={{
          padding:   "var(--space-2000) var(--layout-margin)",
          textAlign: "center",
        }}
      >
        <p
          className="text-label"
          style={{ color: "var(--ls-slate-haze)", marginBottom: "var(--space-600)" }}
        >
          Commission
        </p>
        <p
          style={{
            fontFamily:    "var(--font-serif)",
            fontWeight:    300,
            fontStyle:     "italic",
            fontSize:      "clamp(1.4rem, 2.5vw, 2.5rem)",
            lineHeight:    1.15,
            letterSpacing: "0.02em",
            color:         "var(--ls-void-white)",
            marginBottom:  "var(--space-800)",
            maxWidth:      "28ch",
            margin:        "0 auto var(--space-800)",
          }}
        >
          This piece has been made. Your version has not.
        </p>
        <Link href="/commission" className="link-pathway">
          Begin the conversation
        </Link>
      </section>

    </PageContainer>
  );
}

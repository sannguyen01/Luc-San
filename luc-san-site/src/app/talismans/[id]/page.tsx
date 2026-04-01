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
            ← The Collection
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

    </PageContainer>
  );
}

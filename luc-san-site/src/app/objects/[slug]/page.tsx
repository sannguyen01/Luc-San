import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/Layout";
import { DarkBand } from "@/components/layout/DarkBand";
import objectsData from "@/content/objects.json";
import type { LucSanObject } from "@/types";

const objects = objectsData as LucSanObject[];

const tierNumber: Record<string, string> = {
  Elemental: "01",
  Composed: "02",
  Complex: "03",
  Commissioned: "04",
};

export function generateStaticParams() {
  return objects.map((obj) => ({ slug: obj.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const obj = objects.find((o) => o.id === slug);
  if (!obj) return {};
  return {
    title: obj.title,
    description: obj.copy,
  };
}

export default async function ObjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const obj = objects.find((o) => o.id === slug);
  if (!obj) notFound();

  const tierObjects = objects.filter((o) => o.tier === obj.tier && o.id !== obj.id);

  return (
    <PageContainer>
      {/* Content wrapper — mirrors ContentSection padding */}
      <div
        className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto"
        style={{ paddingTop: "var(--space-800)", paddingBottom: "var(--space-1600)" }}
      >
      {/* Breadcrumb — 44px min-height for touch targets */}
      <div className="flex items-center mb-12" style={{ minHeight: "44px" }}>
        <Link
          href="/objects"
          className="text-meta"
          style={{ color: "var(--text-tertiary)", letterSpacing: "0.18em", padding: "8px 0" }}
        >
          ← Objects
        </Link>
      </div>

      {/* Main grid: image 3fr | details 2fr — stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-start mb-24">
        {/* Image — portrait 2:3 */}
        <div
          className="img-skeleton w-full"
          style={{ aspectRatio: "2/3" }}
          role="img"
          aria-label={obj.title}
        />

        {/* Sticky sidebar */}
        <div className="md:sticky md:top-24">
          {/* Tier indicator */}
          <p className="text-meta mb-6" style={{ color: "var(--text-tertiary)" }}>
            {tierNumber[obj.tier]} · {obj.tier}
          </p>

          {/* Title */}
          <h1
            className="font-serif font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            {obj.title}
          </h1>

          {/* Rule */}
          <div
            className="mb-8"
            style={{ width: "2rem", height: "1px", background: "var(--border-medium)" }}
          />

          {/* Copy — extended material biography */}
          <p
            className="text-body leading-relaxed mb-10"
            style={{ fontSize: "15px", color: "var(--text-secondary)" }}
          >
            {obj.longCopy ?? obj.copy}
          </p>

          {/* Metadata table */}
          <dl className="mb-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div
              className="flex justify-between py-4"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <dt className="text-meta" style={{ color: "var(--text-tertiary)" }}>
                Materials
              </dt>
              <dd className="text-right">
                {obj.materials.map((m) => (
                  <span
                    key={m}
                    className="block text-meta"
                    style={{ color: "var(--text-secondary)", textTransform: "none", letterSpacing: "0.04em" }}
                  >
                    {m}
                  </span>
                ))}
              </dd>
            </div>
            <div
              className="flex justify-between py-4"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <dt className="text-meta" style={{ color: "var(--text-tertiary)" }}>
                Handwork
              </dt>
              <dd
                className="text-meta"
                style={{ color: "var(--text-secondary)", textTransform: "none", letterSpacing: "0.04em" }}
              >
                {obj.hours} hours
              </dd>
            </div>
            <div
              className="flex justify-between py-4"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <dt className="text-meta" style={{ color: "var(--text-tertiary)" }}>
                Tier
              </dt>
              <dd
                className="text-meta"
                style={{ color: "var(--text-secondary)", textTransform: "none", letterSpacing: "0.04em" }}
              >
                {obj.tier}
              </dd>
            </div>
          </dl>

          {/* CTA */}
          <Link href="/contact" className="link-pathway">
            {obj.tier === "Commissioned" ? "Begin a conversation" : "Enquire about this object"}
          </Link>
        </div>
      </div>

      </div>{/* end content wrapper */}

      {/* Related objects — dark descent */}
      {tierObjects.length > 0 && (
        <DarkBand size="md">
          <p className="text-label mb-10" style={{ color: "var(--ls-slate-haze)" }}>
            More from {obj.tier}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: "var(--space-400)" }}>
            {tierObjects.slice(0, 3).map((related) => (
              <Link key={related.id} href={`/objects/${related.id}`} className="group block">
                <div className="img-skeleton mb-5 overflow-hidden" style={{ aspectRatio: "2/3" }} />
                <h4
                  className="font-serif font-light"
                  style={{
                    fontSize:      "clamp(0.95rem, 1.4vw, 1.15rem)",
                    lineHeight:    1.25,
                    color:         "var(--ls-void-white)",
                    marginBottom:  "var(--space-100)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {related.title}
                </h4>
                <p className="text-label" style={{ color: "var(--ls-graphite-skin)", textTransform: "none", letterSpacing: "0.04em" }}>
                  {related.hours} hours
                </p>
              </Link>
            ))}
          </div>
        </DarkBand>
      )}
    </PageContainer>
  );
}

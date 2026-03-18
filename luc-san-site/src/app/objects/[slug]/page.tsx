import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/Layout";
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
      {/* Breadcrumb */}
      <div className="mb-16">
        <Link
          href="/objects"
          className="text-meta"
          style={{ color: "var(--text-tertiary)", letterSpacing: "0.18em" }}
        >
          ← Objects
        </Link>
      </div>

      {/* Main grid: image 3fr | details 2fr */}
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

          {/* Copy — brand declarative voice */}
          <p
            className="text-body leading-relaxed mb-10"
            style={{ fontSize: "15px", color: "var(--text-secondary)" }}
          >
            {obj.copy}
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

      {/* Related objects — same tier */}
      {tierObjects.length > 0 && (
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-800)" }}>
          <p className="text-meta mb-8" style={{ color: "var(--text-tertiary)" }}>
            More from {obj.tier}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tierObjects.slice(0, 3).map((related) => (
              <Link key={related.id} href={`/objects/${related.id}`} className="group block">
                <div
                  className="img-skeleton mb-4 overflow-hidden"
                  style={{ aspectRatio: "2/3" }}
                />
                <h4 className="font-serif font-light text-base leading-tight mb-1">
                  {related.title}
                </h4>
                <p className="text-meta" style={{ color: "var(--text-tertiary)", textTransform: "none" }}>
                  {related.hours} hours
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  );
}

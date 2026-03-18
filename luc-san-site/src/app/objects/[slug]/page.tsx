import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer, ContentSection, NarrowSection } from "@/components/layout/Layout";
import { RevealSection } from "@/components/ui/RevealSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import objectsData from "@/content/objects.json";
import materialsData from "@/content/materials.json";
import type { LucSanObject, Material } from "@/types";

const objects = objectsData as LucSanObject[];
const materials = materialsData as Material[];

const tierOrder = ["Elemental", "Composed", "Complex", "Commissioned"] as const;

function findMatchingMaterial(objectMaterial: string): Material | null {
  const lower = objectMaterial.toLowerCase();
  return materials.find((m) => lower.includes(m.name.toLowerCase())) ?? null;
}

function getRelatedObjects(current: LucSanObject): LucSanObject[] {
  const sameTier = objects.filter(
    (o) => o.tier === current.tier && o.id !== current.id
  );
  if (sameTier.length >= 2) return sameTier.slice(0, 3);

  // Fill from adjacent tier if needed
  const currentIndex = tierOrder.indexOf(current.tier);
  const adjacentTiers = [currentIndex - 1, currentIndex + 1]
    .filter((i) => i >= 0 && i < tierOrder.length)
    .map((i) => tierOrder[i]);

  const adjacent = objects.filter(
    (o) => adjacentTiers.includes(o.tier) && o.id !== current.id
  );

  return [...sameTier, ...adjacent].slice(0, 3);
}

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
    openGraph: {
      title: `${obj.title} — Lục San`,
      description: obj.copy,
      images: [{ url: obj.image }],
    },
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

  // Deduplicate matched materials (e.g. two pearl-based materials should show Pearl once)
  const matchedMaterials: Material[] = [];
  const seen = new Set<string>();
  for (const mat of obj.materials) {
    const match = findMatchingMaterial(mat);
    if (match && !seen.has(match.id)) {
      seen.add(match.id);
      matchedMaterials.push(match);
    }
  }

  const related = getRelatedObjects(obj);

  return (
    <PageContainer>
      {/* Hero — object presentation */}
      <NarrowSection>
        <RevealSection>
          <div className="reveal mb-10">
            <Link
              href="/objects"
              className="link-pathway link-back inline-block mb-10"
            >
              Objects
            </Link>
          </div>

          {/* Object image */}
          <div
            className="reveal relative overflow-hidden img-skeleton w-full max-w-md mx-auto mb-10"
            style={{ aspectRatio: "2/3" }}
          >
            <Image
              src={obj.image}
              alt={obj.title}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
              priority
            />
          </div>

          {/* Tier label */}
          <p
            className="reveal text-meta mb-3"
            style={{ color: "var(--text-tertiary)" }}
          >
            {obj.tier} · {obj.hours} hours of handwork
          </p>

          {/* Title */}
          <h1 className="reveal font-serif text-4xl md:text-5xl font-light mb-6">
            {obj.title}
          </h1>

          {/* Materials */}
          <p
            className="reveal text-meta mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {obj.materials.join(" · ")}
          </p>

          {/* Copy narrative */}
          <div className="reveal prose-narrow">
            <p className="text-body leading-relaxed">{obj.copy}</p>
          </div>
        </RevealSection>
      </NarrowSection>

      {/* Material connection */}
      {matchedMaterials.length > 0 && (
        <NarrowSection>
          <RevealSection>
            <SectionDivider />
            <h2 className="reveal font-serif text-2xl md:text-3xl font-light mb-10">
              Materials
            </h2>

            <div className="space-y-10">
              {matchedMaterials.map((mat) => (
                <div key={mat.id} className="reveal">
                  <h3 className="font-serif text-xl font-light mb-2">
                    {mat.name}
                  </h3>
                  <p
                    className="text-meta mb-3"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {mat.formation} · {mat.epoch}
                  </p>
                  <p
                    className="text-body mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {mat.property}
                  </p>
                  <p
                    className="text-body italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {mat.temporal}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </NarrowSection>
      )}

      {/* Inquiry CTA */}
      <NarrowSection>
        <RevealSection>
          <SectionDivider />
          <div className="reveal text-center">
            <p
              className="text-body mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              To learn more about this piece, or to begin a conversation about
              commissioning.
            </p>
            <Link
              href={`/contact?subject=${encodeURIComponent(obj.title)}`}
              className="link-pathway"
            >
              Inquire about this piece
            </Link>
          </div>
        </RevealSection>
      </NarrowSection>

      {/* Related objects */}
      {related.length > 0 && (
        <ContentSection>
          <RevealSection>
            <SectionDivider />
            <h2 className="reveal font-serif text-2xl md:text-3xl font-light mb-10">
              Related Objects
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/objects/${rel.id}`}
                  className="reveal group block"
                >
                  <div
                    className="relative overflow-hidden img-skeleton mb-4"
                    style={{ aspectRatio: "2/3" }}
                  >
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div
                      className="tile-overlay absolute inset-0 flex flex-col justify-end p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.0) 60%)",
                        opacity: 0,
                        transition:
                          "opacity var(--duration-base) var(--ease-out)",
                      }}
                    >
                      <p
                        className="text-meta uppercase tracking-wider"
                        style={{
                          color: "var(--accent-clay)",
                          fontSize: "10px",
                        }}
                      >
                        {rel.materials.join(" · ")}
                      </p>
                      <p
                        className="text-meta"
                        style={{
                          color: "var(--text-inverse)",
                          fontSize: "11px",
                        }}
                      >
                        {rel.hours} hours of handwork
                      </p>
                    </div>
                  </div>

                  {/* Mobile metadata */}
                  <div className="mt-2 mb-1 md:hidden">
                    <p
                      className="text-meta uppercase tracking-wider"
                      style={{
                        color: "var(--accent-earth)",
                        fontSize: "10px",
                      }}
                    >
                      {rel.materials.join(" · ")}
                    </p>
                    <p
                      className="text-meta"
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "11px",
                      }}
                    >
                      {rel.hours} hours of handwork
                    </p>
                  </div>

                  <h4 className="font-serif text-lg font-light leading-tight mb-1">
                    {rel.title}
                  </h4>
                  <p
                    className="text-meta mb-2 hidden md:block"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {rel.hours} hours · {rel.materials.join(", ")}
                  </p>
                </Link>
              ))}
            </div>
          </RevealSection>
        </ContentSection>
      )}
    </PageContainer>
  );
}

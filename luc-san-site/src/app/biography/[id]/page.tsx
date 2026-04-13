import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import biographiesData from "@/content/biographies.json";
import talismansData from "@/content/talismans.json";
import type { Biography, Talisman } from "@/types";
import { AudioPlayer } from "@/components/biography/AudioPlayer";
import { ContributionForm } from "@/components/biography/ContributionForm";

const biographies = biographiesData as Biography[];
const talismans   = talismansData as Talisman[];

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return biographies.map((bio) => ({ id: bio.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const bio = biographies.find((b) => b.id === id);
  if (!bio) return { title: "Biography" };
  return {
    title: bio.name,
    description: bio.statement,
  };
}

export default async function BiographyPage({ params }: Props) {
  const { id } = await params;
  const bio = biographies.find((b) => b.id === id);
  if (!bio) notFound();

  const works = bio.works
    .map((wId) => talismans.find((t) => t.id === wId))
    .filter((t): t is Talisman => t !== undefined);

  return (
    <div>

      {/* ── 01 Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-black)",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding:
            "calc(var(--space-2000) + 88px) var(--layout-margin) var(--space-1600)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative portrait — right side, fades left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "48%",
            height: "100%",
          }}
          aria-hidden="true"
        >
          <Image
            src={bio.portrait}
            alt=""
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              opacity: 0.35,
            }}
            sizes="48vw"
            priority
          />
          {/* Gradient: left to transparent */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, var(--ls-void-black) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Text — left column, z-index above image */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "28rem" }}>
          <p
            className="text-label"
            style={{
              color: "var(--ls-slate-haze)",
              marginBottom: "var(--space-600)",
            }}
          >
            {bio.role}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 5vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              color: "var(--ls-void-white)",
              marginBottom: "var(--space-500)",
            }}
          >
            {bio.name}
          </h1>
          <p className="text-caption" style={{ color: "var(--ls-slate-haze)" }}>
            {bio.location} · est. {bio.established}
          </p>
        </div>
      </section>

      {/* ── 02 Statement ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-white)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div
          style={{
            maxWidth: "52rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p className="text-manifesto" style={{ fontStyle: "italic" }}>
            &ldquo;{bio.statement}&rdquo;
          </p>
        </div>
      </section>

      {/* ── 03 Philosophy ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-pale-linen)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div
          className="layout-editorial"
          style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}
        >
          <div>
            <p
              className="text-label"
              style={{ marginBottom: "var(--space-600)" }}
            >
              On material
            </p>
            <p className="text-editorial">{bio.philosophy}</p>
          </div>

          <div
            style={{
              background: "var(--ls-ash-drift)",
              aspectRatio: "3 / 4",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={bio.portrait}
              alt={`${bio.name} at work`}
              fill
              style={{ objectFit: "cover", opacity: 0.65 }}
              sizes="40vw"
            />
          </div>
        </div>
      </section>

      {/* ── 04 Timeline ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-nacre)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div
          style={{ maxWidth: "var(--layout-mid)", margin: "0 auto" }}
        >
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-1000)" }}
          >
            Living document
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {bio.timeline.map((entry) => (
              <div
                key={entry.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: "var(--space-600)",
                  paddingBottom: "var(--space-600)",
                  marginBottom: "var(--space-600)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "var(--ls-graphite-skin)",
                    letterSpacing: "0.04em",
                    paddingTop: "2px",
                  }}
                >
                  {entry.year}
                </p>
                <p className="text-body" style={{ lineHeight: 1.85 }}>
                  {entry.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Works ─────────────────────────────────────────────────────── */}
      {works.length > 0 && (
        <section
          style={{
            background: "var(--ls-void-white)",
            padding: "var(--space-2000) var(--layout-margin)",
          }}
        >
          <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "var(--space-1000)",
              }}
            >
              <p className="text-label">Necklaces from this atelier</p>
              <Link
                href="/talismans"
                className="link-pathway"
                style={{ fontSize: "0.65rem" }}
              >
                View all
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "var(--layout-gutter)",
              }}
            >
              {works.map((t) => (
                <Link
                  key={t.id}
                  href={`/talismans/${t.id}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div
                    style={{
                      aspectRatio: "4 / 5",
                      background: "var(--ls-ash-drift)",
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: "var(--space-300)",
                    }}
                  >
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      letterSpacing: "0.04em",
                      color: "var(--ls-void-black)",
                      marginBottom: "var(--space-100)",
                    }}
                  >
                    {t.title}
                  </p>
                  <p className="text-caption">{t.tier}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 06 Audio ─────────────────────────────────────────────────────── */}
      {bio.audioSrc && (
        <section
          style={{
            background: "var(--ls-pale-linen)",
            padding: "var(--space-1600) var(--layout-margin)",
          }}
        >
          <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
            <p
              className="text-label"
              style={{ marginBottom: "var(--space-600)" }}
            >
              In the imaginator&rsquo;s own words
            </p>
            <AudioPlayer
              src={bio.audioSrc}
              label={`Statement — ${bio.name}`}
            />
          </div>
        </section>
      )}

      {/* ── 07 Contribution ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-nacre)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-300)" }}
          >
            Leave a reflection
          </p>
          <p
            className="text-body"
            style={{ marginBottom: "var(--space-1000)" }}
          >
            This is a living document. If you have worked with these objects,
            studied these materials, or met the imaginator — your words may
            be added here.
          </p>
          <ContributionForm biographyId={bio.id} />
        </div>
      </section>

      {/* ── Footer nav ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-white)",
          padding: "var(--space-1200) var(--layout-margin)",
          textAlign: "center",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-800)",
          }}
        >
          <Link href="/atelier" className="link-pathway">
            The Atelier
          </Link>
          <Link href="/talismans" className="link-pathway">
            Talisman
          </Link>
          <Link href="/commission" className="link-pathway">
            Commission
          </Link>
        </div>
      </section>
    </div>
  );
}

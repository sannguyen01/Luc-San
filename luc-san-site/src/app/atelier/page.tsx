import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import talismansData from "@/content/talismans.json";
import type { Talisman } from "@/types";

export const metadata: Metadata = {
  title: "The Atelier — Nacre Aesthetic Movement by Lục San",
  description:
    "The Nacre method: a doctrine of layered revelation. The design school of Lục San works geological materials — jade, pearl, amber, bronze — according to a single principle: read first, intervene last.",
};

const DISCIPLINES = [
  {
    num: "01",
    title: "Geological Reading",
    body: "Before carving begins, the material is studied for its formation narrative, fibre direction, and internal structure. For jade: the fibre orientation determines the cutting plane. For amber: the inclusion inventory determines the external form. The first tool is observation. The last tool is patience.",
    example: "Nephrite jade, British Columbia",
  },
  {
    num: "02",
    title: "Material Intervention",
    body: "No adhesive. Tension and gravity only. The object is complete when nothing can be added and nothing can be removed. If a connection requires adhesive to hold, the design is wrong. Every join is structural before it is aesthetic.",
    example: "Baroque pearl in tension cradle",
  },
  {
    num: "03",
    title: "Temporal Design",
    body: "Every object is designed for fifty years of use. The patina schedule is written before fabrication begins. Sterling silver toward warm grey. Bronze toward chestnut. Jade brightening. Pearl unchanging. The piece is designed for what it will become, not for what it is.",
    example: "Jade cuff — bronze and nephrite, opposing patinas",
  },
] as const;

const MATERIALS = [
  {
    name: "Nephrite Jade",
    formation: "40–60 million years",
    properties: "Mohs 6–6.5 · fibrous microstructure · virtually unshatterable",
    notes:
      "Read for fibre direction before marking. Carved against the grain. Tolerance accounts for thermal expansion across −20 to +40°C. Never set in cast metal — forged only.",
  },
  {
    name: "Baroque Pearl",
    formation: "2–19 years nacre deposition",
    properties:
      "Calcium carbonate platelets · AAA luster · no nucleus bead insertion",
    notes:
      "No adhesive. Tension cradle only. The asymmetry is a geological archive. No two formations from the same water are identical. Selected for specific asymmetry, not despite it.",
  },
  {
    name: "Baltic Amber",
    formation: "44 million years",
    properties: "Succinite · FTIR-verified · Eocene forest origin",
    notes:
      "Inclusions inventoried before the first cut. External form follows internal archive. Photosensitive: designed for indirect light. Deepen with years of careful use.",
  },
  {
    name: "Bronze",
    formation: "Fabricated this decade",
    properties: "90% copper · 10% tin · hand-forged",
    notes:
      "Never cast — hammer-worked to match the specific resistance of the stone it accompanies. Designed to age against the material. The contrast, in twenty years, becomes the piece.",
  },
] as const;

const talismans = talismansData as Talisman[];

export default function AtelierPage() {
  return (
    <div>

      {/* ── 01 Signal — dark hero ────────────────────────────────────────── */}
      <section
        className="dark-band"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding:
            "calc(var(--space-2000) + 88px) var(--layout-margin) var(--space-1600)",
        }}
      >
        <div
          style={{ maxWidth: "var(--layout-max)", margin: "0 auto", width: "100%" }}
        >
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-600)" }}
          >
            The Atelier
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 5vw, 5rem)",
              lineHeight: 1.07,
              letterSpacing: "0.02em",
              color: "var(--ls-void-white)",
              maxWidth: "18ch",
              marginBottom: "var(--space-600)",
            }}
          >
            Everything we know about materials, we learned from the materials.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 300,
              letterSpacing: "0.06em",
              lineHeight: 1.85,
              color: "var(--ls-slate-haze)",
              maxWidth: "34rem",
            }}
          >
            The school of Lục San. The Nacre method.
          </p>
        </div>
      </section>

      {/* ── 02 Doctrine ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-white)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div
          className="layout-editorial"
          style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}
        >
          {/* Left: Nacre Method doctrine */}
          <div>
            <p
              style={{
                fontFamily:    "var(--font-sans)",
                fontSize:      "0.65rem",
                fontWeight:    400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:         "var(--ls-void-black)",
                marginBottom:  "var(--space-300)",
              }}
            >
              The Nacre Method
            </p>
            <p
              className="text-editorial"
              style={{ fontStyle: "italic", marginBottom: "var(--space-600)" }}
            >
              A doctrine of layered revelation.
            </p>
            <p
              className="text-editorial"
              style={{ marginBottom: "var(--space-600)" }}
            >
              Nacre is the aesthetic movement and design school of Lục San.
              It takes its name from the biological process by which a pearl forms —
              not through a single decision, but through the patient deposition
              of successive layers, each one responding to the conditions of the
              previous one, each one invisible until the whole is complete.
            </p>
            <p
              className="text-editorial"
              style={{ marginBottom: "var(--space-800)" }}
            >
              The Nacre method operates by the same logic.
              An object is not designed. It is read.
              The material speaks first. The maker listens last.
              The form is the material&rsquo;s original argument,
              made visible through the minimum necessary intervention.
            </p>

            {/* Three refusals */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-600)" }}>
              {[
                {
                  title: "Nacre refuses treated matter.",
                  body:  "Any material altered from its geological or biological origin — dyed jade, irradiated stone, artificially nucleated pearl — cannot enter the Nacre vocabulary. Purity is not a moral claim. It is a material fact, verifiable by specific gravity, refraction, and spectroscopic analysis.",
                },
                {
                  title: "Nacre refuses prestige hierarchy.",
                  body:  "A copper element worth twelve dollars and a gold element worth three hundred are governed by the same criterion: appropriateness to the material conversation they are asked to enter.",
                },
                {
                  title: "Nacre refuses seasonal temporality.",
                  body:  "Objects are not made for a season. They are designed for what they will become in fifty years. The patina schedule is written before fabrication begins.",
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <p
                    style={{
                      fontFamily:    "var(--font-sans)",
                      fontSize:      "0.72rem",
                      fontWeight:    400,
                      letterSpacing: "0.04em",
                      color:         "var(--ls-void-black)",
                      marginBottom:  "var(--space-100)",
                    }}
                  >
                    {title}
                  </p>
                  <p className="text-caption" style={{ lineHeight: 1.8 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 brief principles */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-600)",
              paddingTop: "var(--space-200)",
            }}
          >
            {DISCIPLINES.map((d) => (
              <div
                key={d.num}
                style={{ display: "flex", gap: "var(--space-400)" }}
              >
                <span
                  className="text-label"
                  style={{
                    minWidth: "1.6rem",
                    paddingTop: "2px",
                    color: "var(--ls-graphite-skin)",
                  }}
                >
                  {d.num}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 400,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ls-void-black)",
                      marginBottom: "var(--space-100)",
                    }}
                  >
                    {d.title}
                  </p>
                  <p className="text-caption" style={{ lineHeight: 1.7 }}>
                    {d.body.split(".")[0]}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Three Disciplines ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-pale-linen)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-1000)" }}
          >
            The three disciplines of the Nacre school
          </p>

          <div className="layout-grid-3">
            {DISCIPLINES.map((d) => (
              <div key={d.num}>
                <p
                  className="text-label"
                  style={{
                    color: "var(--ls-graphite-skin)",
                    marginBottom: "var(--space-400)",
                  }}
                >
                  {d.num}
                </p>
                <div
                  className="divider"
                  style={{ marginBottom: "var(--space-500)" }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)",
                    letterSpacing: "0.04em",
                    color: "var(--ls-void-black)",
                    marginBottom: "var(--space-400)",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-body"
                  style={{ marginBottom: "var(--space-400)", lineHeight: 1.85 }}
                >
                  {d.body}
                </p>
                <p className="text-caption">{d.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Material Lexicon ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-nacre)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-600)" }}
          >
            Material lexicon
          </p>

          <p
            className="text-caption"
            style={{
              maxWidth:      "44ch",
              lineHeight:    1.85,
              marginBottom:  "var(--space-1000)",
              color:         "var(--ls-graphite-skin)",
            }}
          >
            The Nacre vocabulary admits four primary materials. Each was chosen
            not for market status but for the quality of its formation narrative
            and the depth of its patina potential.
          </p>

          <div className="layout-grid-4">
            {MATERIALS.map((m) => (
              <div key={m.name}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                    color: "var(--ls-void-black)",
                    marginBottom: "var(--space-200)",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  className="text-label"
                  style={{
                    color: "var(--ls-graphite-skin)",
                    marginBottom: "var(--space-300)",
                  }}
                >
                  {m.formation}
                </p>
                <p
                  className="text-caption"
                  style={{ marginBottom: "var(--space-300)", lineHeight: 1.7 }}
                >
                  {m.properties}
                </p>
                <div
                  className="divider"
                  style={{ marginBottom: "var(--space-300)" }}
                />
                <p
                  className="text-body"
                  style={{ fontSize: "0.72rem", lineHeight: 1.8 }}
                >
                  {m.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Nacre Lifecycle ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-white)",
          padding: "var(--space-2000) var(--layout-margin)",
        }}
      >
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-1000)" }}
          >
            The Nacre lifecycle
          </p>

          <div className="layout-grid-4">
            {[
              {
                state: "01",
                name: "Formation",
                body: "The material's geological or biological origin. We did not make this. We found it.",
              },
              {
                state: "02",
                name: "Resolution",
                body: "The minimum intervention that locates the form the material was moving toward.",
              },
              {
                state: "03",
                name: "Relationship",
                body: "The fifty years during which the object and its keeper age in the same direction.",
              },
              {
                state: "04",
                name: "Dissolution",
                body: "The object's return to material. Bronze to verdigris. Pearl to powder. Wood to ground.",
              },
            ].map(({ state, name, body }) => (
              <div
                key={state}
                style={{
                  borderTop: "1px solid var(--border-medium)",
                  paddingTop: "var(--space-400)",
                }}
              >
                <p
                  className="text-label"
                  style={{
                    color: "var(--ls-graphite-skin)",
                    marginBottom: "var(--space-300)",
                  }}
                >
                  {state}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                    letterSpacing: "0.04em",
                    color: "var(--ls-void-black)",
                    marginBottom: "var(--space-300)",
                  }}
                >
                  {name}
                </p>
                <p className="text-caption" style={{ lineHeight: 1.8 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Voice — imaginator quote ─────────────────────────────────── */}
      <section
        className="dark-band"
        style={{ padding: "var(--space-2000) var(--layout-margin)" }}
      >
        <div
          style={{
            maxWidth: "50rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            className="text-manifesto dark-band"
            style={{ marginBottom: "var(--space-600)" }}
          >
            &ldquo;The object exists before I touch it. The forty million years
            that made the stone — that is the design. I am just the last
            forty-six hours.&rdquo;
          </p>
          <p
            className="text-label"
            style={{
              color: "var(--ls-slate-haze)",
              marginBottom: "var(--space-1000)",
            }}
          >
            Founder, Nacre School · Lục San Atelier
          </p>
          <Link
            href="/biography/luc-san"
            className="link-pathway"
          >
            Biography of the imaginator
          </Link>
        </div>
      </section>

      {/* ── 07 School Archive ────────────────────────────────────────────── */}
      <section
        className="dark-band"
        style={{
          padding: "var(--space-2000) var(--layout-margin)",
          borderTop: "1px solid var(--ls-ink-deep)",
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
            <p className="text-label">Nacre school — necklaces</p>
            <Link href="/talismans" className="link-pathway" style={{ fontSize: "0.65rem" }}>
              View all
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "var(--layout-gutter)",
            }}
          >
            {talismans.map((t) => (
              <Link
                key={t.id}
                href={`/talismans/${t.id}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                {/* Image tile */}
                <div
                  style={{
                    aspectRatio: "4 / 5",
                    background: "var(--ls-ink-deep)",
                    marginBottom: "var(--space-400)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    style={{ objectFit: "cover", opacity: 0.8 }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 22vw"
                  />
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    color: "var(--ls-void-white)",
                    marginBottom: "var(--space-100)",
                    transition: "color var(--duration-base) var(--ease-out)",
                  }}
                >
                  {t.title}
                </p>
                <p
                  className="text-label"
                  style={{ color: "var(--ls-slate-haze)" }}
                >
                  {t.tier} · {t.hours}h
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Study — commission CTA ────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ls-void-white)",
          padding: "var(--space-2000) var(--layout-margin)",
          textAlign: "center",
        }}
      >
        <p
          className="text-label"
          style={{ marginBottom: "var(--space-600)" }}
        >
          Begin a commission
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            lineHeight: 1.12,
            letterSpacing: "0.02em",
            color: "var(--ls-void-black)",
            marginBottom: "var(--space-500)",
          }}
        >
          Your object has not been made yet.
        </h2>
        <p
          className="text-body"
          style={{
            maxWidth: "26rem",
            margin: "0 auto var(--space-800)",
            lineHeight: 1.9,
          }}
        >
          There is no catalogue to browse. There is only what you carry,
          and what can be made from it.
        </p>
        <Link href="/commission" className="link-pathway">
          Begin the conversation
        </Link>
      </section>
    </div>
  );
}

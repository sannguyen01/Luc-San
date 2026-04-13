import type { Metadata } from "next";
import { CommissionForm } from "./CommissionForm";

export const metadata: Metadata = {
  title: "Commission a Necklace — Lục San",
  description:
    "Begin a commission. Every necklace by Lục San starts with a conversation about material and time — not catalogue and timeline. Jade, pearl, amber, bronze.",
};

const TIERS = [
  {
    tier: "Elemental",
    description:
      "Single material, single technique. Pure geological reading — the object was already present inside the stone.",
    range: "From $280",
    hours: "8–20 hours",
  },
  {
    tier: "Composed",
    description:
      "Two materials in dialogue. Patina is planned before fabrication begins. They age in the same direction, or opposite ones.",
    range: "From $620",
    hours: "30–65 hours",
  },
  {
    tier: "Complex",
    description:
      "Three or more materials. Extended fabrication. Full documentation of formation, process, and patina trajectory.",
    range: "From $1,400",
    hours: "65–120 hours",
  },
  {
    tier: "Commissioned",
    description:
      "A complete object built from your material and narrative. The conversation determines everything. Price follows.",
    range: "Upon conversation",
    hours: "120+ hours",
  },
] as const;

interface Props {
  searchParams: Promise<{ name?: string }>;
}

export default async function CommissionPage({ searchParams }: Props) {
  const params = await searchParams;
  const name = params.name?.trim() ?? "";

  return (
    <div style={{ background: "var(--ls-void-white)" }}>

      {/* ── Opening ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:
            "calc(var(--space-2000) + 88px) var(--layout-margin) var(--space-1600)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--layout-narrow)",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            className="text-label"
            style={{ marginBottom: "var(--space-600)" }}
          >
            Commission
          </p>

          <h1
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
            {name
              ? `${name}, your object has not been made yet.`
              : "Your object has not been made yet."}
          </h1>

          <p
            className="text-body"
            style={{
              maxWidth: "28rem",
              margin: "0 auto var(--space-600)",
              lineHeight: 1.9,
            }}
          >
            Every commission begins with a single conversation. Not about
            budget, not about timeline — about what you carry, and what the
            material might do with it. The object emerges from that.
          </p>

          <p
            className="text-body"
            style={{
              maxWidth: "28rem",
              margin: "0 auto var(--space-1200)",
              lineHeight: 1.9,
              color: "var(--ls-graphite-skin)",
            }}
          >
            Most conversations begin with a necklace. Some begin with
            something you carry that has already been waiting.
          </p>

          <CommissionForm initialName={name} />
        </div>
      </section>

      {/* ── Vertical divider ────────────────────────────────────────────── */}
      <div
        style={{
          width: "1px",
          height: "80px",
          background: "var(--ls-shadow-silver)",
          margin: "0 auto",
        }}
      />

      {/* ── Tier reference ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "var(--space-1600) var(--layout-margin) var(--space-2000)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--layout-max)",
            margin: "0 auto",
          }}
        >
          <p
            className="text-label"
            style={{
              textAlign: "center",
              marginBottom: "var(--space-1000)",
            }}
          >
            Object tiers
          </p>

          <div className="layout-grid-4">
            {TIERS.map((t) => (
              <div
                key={t.tier}
                style={{
                  borderTop: "1px solid var(--border-medium)",
                  paddingTop: "var(--space-400)",
                }}
              >
                <p
                  className="text-label"
                  style={{ marginBottom: "var(--space-200)" }}
                >
                  {t.tier}
                </p>
                <p
                  className="text-body"
                  style={{
                    fontSize: "0.75rem",
                    marginBottom: "var(--space-400)",
                    lineHeight: 1.75,
                  }}
                >
                  {t.description}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    color: "var(--ls-void-black)",
                    marginBottom: "var(--space-100)",
                  }}
                >
                  {t.range}
                </p>
                <p className="text-caption">{t.hours}</p>
              </div>
            ))}
          </div>

          <p
            className="text-caption"
            style={{
              textAlign: "center",
              marginTop: "var(--space-1000)",
              color: "var(--ls-slate-haze)",
              maxWidth: "32rem",
              margin: "var(--space-1000) auto var(--space-400)",
            }}
          >
            Pricing is indicative. Final pricing is confirmed in the first
            conversation, after the material is identified and the patina
            schedule is agreed.
          </p>

          <p
            className="text-caption"
            style={{
              textAlign: "center",
              color: "var(--ls-graphite-skin)",
              maxWidth: "32rem",
              margin: "0 auto",
              fontStyle: "italic",
            }}
          >
            All tiers are available as Nacre-school necklaces. The tier refers
            to the complexity of the material conversation, not the object category.
          </p>
        </div>
      </section>
    </div>
  );
}

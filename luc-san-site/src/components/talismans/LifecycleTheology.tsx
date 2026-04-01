import Link from "next/link";
import type { Talisman } from "@/types";

interface Props {
  talisman: Talisman;
}

const SERVICES = [
  { label: "Conservation",      note: "Structural integrity restored to original specification." },
  { label: "Alteration",        note: "Form adapted to a new body, a new life." },
  { label: "Return to maker",   note: "The object reclaimed, its materials given another purpose." },
];

export function LifecycleTheology({ talisman }: Props) {
  return (
    <section
      style={{
        background:    "var(--ls-pale-linen)",
        paddingTop:    "var(--space-1600)",
        paddingBottom: "var(--space-1600)",
        paddingLeft:   "var(--layout-margin)",
        paddingRight:  "var(--layout-margin)",
      }}
    >
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "var(--space-1200)" }}
        >

          {/* Left — How it ages */}
          <div>
            <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>
              How it ages
            </p>
            <p
              className="text-editorial"
              style={{ maxWidth: "38rem", marginBottom: "var(--space-800)" }}
            >
              {talisman.patina}
            </p>

            {/* Materials list */}
            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-500)" }}>
              <p className="text-label mb-4" style={{ color: "var(--text-tertiary)" }}>
                Materials present
              </p>
              <p className="text-body" style={{ color: "var(--text-secondary)" }}>
                {talisman.materials.join(" · ")}
              </p>
            </div>
          </div>

          {/* Right — Object services */}
          <div>
            <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>
              Object services
            </p>

            <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
              {SERVICES.map(({ label, note }) => (
                <Link
                  key={label}
                  href="/commission"
                  style={{
                    display:       "block",
                    padding:       "var(--space-500) 0",
                    borderBottom:  "1px solid var(--border-subtle)",
                  }}
                >
                  <p
                    className="text-meta"
                    style={{
                      color:         "var(--text-primary)",
                      marginBottom:  "var(--space-100)",
                      textTransform: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label} →
                  </p>
                  <p className="text-caption" style={{ color: "var(--text-tertiary)" }}>
                    {note}
                  </p>
                </Link>
              ))}
            </div>

            <p
              className="text-caption"
              style={{
                color:      "var(--text-tertiary)",
                maxWidth:   "30rem",
                marginTop:  "var(--space-600)",
                fontStyle:  "italic",
                lineHeight: 1.9,
              }}
            >
              Every object made in this studio carries a lifetime service commitment.
              The relationship does not end at the point of acquisition.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

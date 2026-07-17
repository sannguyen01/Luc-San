import type { Discipline } from "./AtelierDoctrine";

interface ThreeDisciplinesProps {
  disciplines: readonly Discipline[];
}

export default function ThreeDisciplines({ disciplines }: ThreeDisciplinesProps) {
  return (
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
          {disciplines.map((d) => (
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
  );
}

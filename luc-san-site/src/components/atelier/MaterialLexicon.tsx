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

export default function MaterialLexicon() {
  return (
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
  );
}

export default function NacreLifecycle() {
  return (
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
  );
}

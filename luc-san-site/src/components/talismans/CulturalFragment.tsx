interface Props {
  quote:       string;
  attribution: string;
}

export function CulturalFragment({ quote, attribution }: Props) {
  return (
    <section
      className="dark-band"
      style={{
        paddingTop:    "var(--space-1600)",
        paddingBottom: "var(--space-1600)",
        paddingLeft:   "var(--layout-margin)",
        paddingRight:  "var(--layout-margin)",
      }}
    >
      <div style={{ maxWidth: "var(--layout-mid)", margin: "0 auto" }}>

        <p
          className="text-label"
          style={{ color: "var(--ls-slate-haze)", marginBottom: "var(--space-800)" }}
        >
          Cultural fragment
        </p>

        <blockquote
          className="text-manifesto"
          style={{
            color:         "var(--ls-nacre-glow)",
            marginBottom:  "var(--space-600)",
            fontStyle:     "italic",
          }}
        >
          "{quote}"
        </blockquote>

        <p
          className="text-caption"
          style={{ color: "var(--ls-graphite-skin)", letterSpacing: "0.12em" }}
        >
          — {attribution}
        </p>

      </div>
    </section>
  );
}

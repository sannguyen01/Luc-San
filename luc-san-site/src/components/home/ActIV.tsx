// Act IV — Dark band caesura. No client JS needed.
// The imaginator fragment: a single statement that breaks the scroll rhythm.
// Void Black is warm geological dark — not screen black. The band signals descent
// into material origin before the commission invitation.

export default function ActIV() {
  return (
    <section
      className="dark-band"
      style={{
        padding:
          "var(--space-2000) var(--layout-margin)",
      }}
    >
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Attribution label */}
        <p
          className="text-label"
          style={{
            color: "var(--ls-graphite-skin)",
            marginBottom: "var(--space-600)",
          }}
        >
          Imaginator fragment
        </p>

        {/* Quote — manifesto register */}
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)",
            lineHeight: 1.2,
            letterSpacing: "0.02em",
            color: "var(--ls-void-white)",
            margin: "0 0 var(--space-600)",
          }}
        >
          Nineteen years to form what takes seven seconds
          to place at the throat. The ratio is not irony.
          It is the only honest relationship between
          geological time and human ceremony.
        </blockquote>

        {/* Attribution */}
        <p
          className="text-label"
          style={{ color: "var(--ls-slate-haze)" }}
        >
          on temporal disproportion
        </p>
      </div>
    </section>
  );
}

export default function AtelierHero() {
  return (
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
  );
}

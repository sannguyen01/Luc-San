export function HeroStatement() {
  return (
    <section
      className="reveal"
      style={{
        padding:      "clamp(80px, 12vh, 160px) clamp(24px, 4vw, 64px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">

        {/* Left — large serif statement (Dior editorial register) */}
        <div style={{ maxWidth: "clamp(480px, 55vw, 780px)" }}>
          <h1
            className="font-serif"
            style={{
              fontSize:      "clamp(3.5rem, 7vw, 8rem)",
              fontWeight:    300,
              lineHeight:    1.0,
              letterSpacing: "0.02em",
              color:         "var(--text-primary)",
            }}
          >
            Geological<br />patience<br />made tangible.
          </h1>
        </div>

        {/* Right — Khaite-style intimate descriptor */}
        <div style={{ maxWidth: "320px" }}>
          <p className="text-label mb-6">Material biography</p>
          <p className="text-editorial">
            Pearl · Jade · Amber · Wood — each carrying formation narratives
            older than any civilization. We add hours, not epochs.
          </p>
        </div>

      </div>
    </section>
  );
}

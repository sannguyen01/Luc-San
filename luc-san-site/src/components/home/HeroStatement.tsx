export function HeroStatement() {
  return (
    <section
      className="reveal"
      style={{
        padding:      "clamp(64px, 10vh, 128px) clamp(24px, 4vw, 64px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth:      "1440px",
          marginLeft:    "auto",
          marginRight:   "auto",
          display:       "flex",
          flexDirection: "column",
          gap:           "clamp(40px, 6vw, 80px)",
        }}
        className="md:flex-row md:items-end md:justify-between"
      >
        {/* Left — large serif statement */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <h1
            className="font-serif"
            style={{
              fontSize:      "clamp(2.4rem, 5.5vw, 6rem)",
              fontWeight:    300,
              lineHeight:    1.0,
              letterSpacing: "0.02em",
              color:         "var(--text-primary)",
            }}
          >
            Geological<br />patience<br />made tangible.
          </h1>
        </div>

        {/* Right — intimate editorial descriptor */}
        <div style={{ flex: "0 0 auto", width: "min(320px, 100%)" }}>
          <p className="text-label mb-5" style={{ color: "var(--text-tertiary)" }}>
            Material biography
          </p>
          <p className="text-editorial">
            Pearl · Jade · Amber · Wood — each carrying formation narratives
            older than any civilization. We add hours, not epochs.
          </p>
        </div>
      </div>
    </section>
  );
}

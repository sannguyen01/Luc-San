export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ── Luminous ground — pearl-glow core emanating from within ── */}
      <div
        className="absolute inset-0 z-[0]"
        style={{
          background: `
            radial-gradient(ellipse 55% 65% at 50% 38%, rgba(255, 253, 247, 0.96) 0%, rgba(255, 249, 238, 0.45) 48%, transparent 72%),
            radial-gradient(ellipse 28% 32% at 60% 30%, rgba(255, 255, 252, 0.60) 0%, transparent 58%),
            linear-gradient(165deg, #EDE9E0 0%, #E0D8CC 40%, #C9BBA8 100%)
          `,
        }}
      />

      {/* ── Corner vignette — draws the eye inward toward the luminous center ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 42%, rgba(17,17,17,0.22) 100%)",
        }}
      />

      {/* ── Veil — starts opaque, lifts to reveal the scene ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[10]"
        style={{
          backgroundColor: "var(--bg-dark)",
          animation: "veil-lift 2.6s cubic-bezier(0.00, 0.00, 0.58, 1.00) forwards",
        }}
      />

      {/* ── Cinematic letterbox — top bar ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[20]"
        style={{ height: "clamp(28px, 4vh, 44px)", backgroundColor: "var(--bg-dark)" }}
      />

      {/* ── Cinematic letterbox — bottom bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[20]"
        style={{ height: "clamp(28px, 4vh, 44px)", backgroundColor: "var(--bg-dark)" }}
      />

      {/* ── Manifesto text — bottom-left, above letterbox ── */}
      <div className="absolute inset-0 z-[30] flex flex-col justify-end" style={{ paddingBottom: "clamp(56px, 10vh, 96px)" }}>
        <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto w-full">

          {/* Each line rises from an overflow-hidden clip (luxury editorial pattern) */}
          <div className="overflow-hidden mb-1">
            <p
              className="text-manifesto"
              style={{
                animation: "text-rise 1.4s cubic-bezier(0.00, 0.00, 0.30, 1.00) 2.0s both",
              }}
            >
              Geological patience
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              className="text-manifesto"
              style={{
                animation: "text-rise 1.4s cubic-bezier(0.00, 0.00, 0.30, 1.00) 2.35s both",
              }}
            >
              made tangible.
            </p>
          </div>

          {/* Material taxonomy — fades in last */}
          <p
            className="text-meta mt-6"
            style={{
              color: "var(--text-secondary)",
              animation: "fade-up 0.9s var(--ease-out) 3.1s both",
            }}
          >
            Pearl · Jade · Amber · Wood
          </p>
        </div>
      </div>

      {/* ── Scroll indicator — cleared above bottom letterbox ── */}
      <div
        className="absolute right-8 md:right-16 z-[30] flex flex-col items-center gap-2"
        style={{
          bottom: "clamp(48px, 8vh, 80px)",
          animation: "fade-up 0.9s var(--ease-out) 3.6s both",
        }}
      >
        <span
          className="text-meta"
          style={{ color: "var(--text-tertiary)", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="w-px bg-[var(--border-medium)]"
          style={{ height: "40px" }}
        />
      </div>
    </section>
  );
}

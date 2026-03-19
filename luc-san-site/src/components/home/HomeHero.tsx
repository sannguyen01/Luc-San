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

      {/* ── Corner vignette — draws the eye inward ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 42%, rgba(26,23,20,0.28) 100%)",
        }}
      />

      {/* ── Veil — lifts to reveal the scene ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[10]"
        style={{
          backgroundColor: "var(--ls-void-black)",
          animation: "veil-lift 2.6s cubic-bezier(0.00, 0.00, 0.58, 1.00) forwards",
        }}
      />

      {/* ── Letterbox — top: fixed 72px = exact header height ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[20]"
        style={{ height: "72px", backgroundColor: "var(--ls-void-black)" }}
      />

      {/* ── Letterbox — bottom + 1px platinum rule at inner top edge ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[20]"
        style={{ height: "clamp(28px, 4vh, 44px)", backgroundColor: "var(--ls-void-black)" }}
      >
        <div
          style={{
            position:        "absolute",
            top:             0,
            left:            "clamp(24px, 4vw, 64px)",
            right:           "clamp(24px, 4vw, 64px)",
            height:          "1px",
            backgroundColor: "var(--ls-shadow-silver)",
            opacity:         0.4,
          }}
        />
      </div>

      {/* ── Scroll indicator — vertical right, Toteme-style ── */}
      <div
        className="absolute right-[clamp(24px,4vw,64px)] z-[30] flex flex-col items-center gap-3"
        style={{
          bottom:    "clamp(48px, 8vh, 80px)",
          animation: "fade-up 0.9s var(--ease-out) 3.6s both",
        }}
      >
        <span
          className="text-meta"
          style={{ color: "var(--text-tertiary)", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-px" style={{ height: "40px", backgroundColor: "var(--ls-shadow-silver)" }} />
      </div>
    </section>
  );
}

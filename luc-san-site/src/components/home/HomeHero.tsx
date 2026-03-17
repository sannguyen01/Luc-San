export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--bg-cream)]">
      {/* Background image placeholder — replace with <Image> once assets exist */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            165deg,
            #EDE9E0 0%,
            #E0D8CC 40%,
            #D4C9B8 100%
          )`,
        }}
      />

      {/* 90/10 composition: object-area right, text bottom-left (Toteme editorial) */}
      <div className="absolute inset-0 flex flex-col justify-end pb-[10vh]">
        <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto w-full">
          {/* Manifesto line — single, italic, large */}
          <p
            className="text-manifesto animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            Geological patience<br />made tangible.
          </p>

          {/* Subtle meta line below — fades in after */}
          <p
            className="text-meta mt-6 animate-fade-up"
            style={{
              animationDelay: "600ms",
              animationFillMode: "both",
              color: "var(--text-secondary)",
            }}
          >
            Pearl · Jade · Amber · Wood
          </p>
        </div>
      </div>

      {/* Scroll indicator — minimal vertical line */}
      <div
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "1000ms", animationFillMode: "both" }}
      >
        <span className="text-meta" style={{ color: "var(--text-tertiary)", writingMode: "vertical-rl" }}>
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

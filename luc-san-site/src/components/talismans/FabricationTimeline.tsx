interface Props {
  images: string[];
}

/* Each step grows slightly: the fabrication advances, the object becomes. */
const STEP_SIZES = [
  { width: "260px", height: "200px" },
  { width: "280px", height: "240px" },
  { width: "300px", height: "280px" },
  { width: "280px", height: "260px" },
  { width: "320px", height: "300px" },
];

export function FabricationTimeline({ images }: Props) {
  return (
    <div
      className="timeline-scroll"
      style={{
        overflowX:         "auto",
        paddingLeft:       "var(--layout-margin)",
        paddingRight:      "var(--layout-margin)",
        paddingBottom:     "var(--space-100)",
      }}
    >
      <div
        style={{
          display:    "flex",
          gap:        "var(--space-300)",
          alignItems: "flex-end",
          minWidth:   "max-content",
        }}
      >
        {images.map((_, i) => {
          const size = STEP_SIZES[i] ?? STEP_SIZES[STEP_SIZES.length - 1];
          return (
            <div key={i} style={{ flexShrink: 0, width: size.width }}>
              {/* Step label */}
              <p
                className="text-label"
                style={{
                  color:         "var(--text-tertiary)",
                  marginBottom:  "var(--space-200)",
                  letterSpacing: "0.18em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              {/* Image */}
              <div
                className="img-skeleton"
                style={{ width: "100%", height: size.height }}
                role="img"
                aria-label={`Fabrication step ${i + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

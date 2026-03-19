interface DarkBandProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PADDING: Record<"sm" | "md" | "lg", string> = {
  sm: "var(--space-800)",
  md: "var(--space-1200)",
  lg: "var(--space-1600)",
};

const MARGIN = "clamp(24px, 4vw, 64px)";
const MAX_W  = "1440px";

export function DarkBand({ children, size = "md", className = "" }: DarkBandProps) {
  return (
    <section
      className={`dark-band ${className}`}
      style={{
        paddingTop:    PADDING[size],
        paddingBottom: PADDING[size],
        paddingLeft:   MARGIN,
        paddingRight:  MARGIN,
      }}
    >
      <div style={{ maxWidth: MAX_W, marginLeft: "auto", marginRight: "auto" }}>
        {children}
      </div>
    </section>
  );
}

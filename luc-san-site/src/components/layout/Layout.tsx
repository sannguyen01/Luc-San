interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MARGIN = "clamp(24px, 4vw, 64px)";
const MAX_W  = "1440px";

export function PageContainer({ children, className = "" }: LayoutProps) {
  return (
    <div className={`pt-[72px] min-h-screen ${className}`}>
      {children}
    </div>
  );
}

export function ContentSection({ children, className = "" }: LayoutProps) {
  return (
    <section
      className={`section-spacer ${className}`}
      style={{ paddingLeft: MARGIN, paddingRight: MARGIN }}
    >
      <div style={{ maxWidth: MAX_W, marginLeft: "auto", marginRight: "auto" }}>
        {children}
      </div>
    </section>
  );
}

export function NarrowSection({ children, className = "" }: LayoutProps) {
  return (
    <section
      className={`section-spacer ${className}`}
      style={{ paddingLeft: MARGIN, paddingRight: MARGIN }}
    >
      <div style={{ maxWidth: "40rem", marginLeft: "auto", marginRight: "auto" }}>
        {children}
      </div>
    </section>
  );
}

/* ── PageHero — unified inner page entry point ──────────────────────────────
   Left-aligned. Same horizontal margin as ContentSection. Border-bottom
   creates a clean horizontal rule between header zone and content below.
   ─────────────────────────────────────────────────────────────────────────── */

interface PageHeroProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function PageHero({ label, children, className = "" }: PageHeroProps) {
  return (
    <section
      className={className}
      style={{
        paddingLeft:   MARGIN,
        paddingRight:  MARGIN,
        paddingTop:    "clamp(48px, 7vh, 96px)",
        paddingBottom: "clamp(40px, 5vh, 72px)",
        borderBottom:  "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: MAX_W, marginLeft: "auto", marginRight: "auto" }}>
        {label && (
          <p className="text-label mb-5" style={{ color: "var(--text-tertiary)" }}>
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

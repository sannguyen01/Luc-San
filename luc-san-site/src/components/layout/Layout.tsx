interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: LayoutProps) {
  return (
    <div className={`pt-[72px] min-h-screen ${className}`}>
      {children}
    </div>
  );
}

export function ContentSection({ children, className = "" }: LayoutProps) {
  return (
    <section className={`px-6 md:px-10 lg:px-16 section-spacer ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function NarrowSection({ children, className = "" }: LayoutProps) {
  return (
    <section className={`px-6 md:px-10 section-spacer ${className}`}>
      <div className="max-w-[38rem] mx-auto">{children}</div>
    </section>
  );
}

/* ── PageHero — unified inner page entry point ──────────────────────────────
   Left-aligned, same horizontal margin as ContentSection, border-bottom
   separates cleanly from content below. Eliminates the narrow→wide width
   jump caused by NarrowSection + centered TextBlock on every inner page.
   ─────────────────────────────────────────────────────────────────────────── */

interface PageHeroProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function PageHero({ label, children, className = "" }: PageHeroProps) {
  return (
    <section
      className={`px-6 md:px-10 lg:px-16 ${className}`}
      style={{
        paddingTop:    "clamp(48px, 7vh, 96px)",
        paddingBottom: "clamp(40px, 5vh, 72px)",
        borderBottom:  "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {label && (
          <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

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
    <section
      className={`px-6 md:px-10 lg:px-16 section-spacer ${className}`}
    >
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

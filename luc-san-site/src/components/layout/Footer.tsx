import Link from "next/link";
import { navigation } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border-subtle)]"
      style={{ paddingTop: "var(--space-1000)", paddingBottom: "var(--space-800)" }}
    >
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">

        {/* Top row — wordmark + nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <Link
            href="/"
            className="font-serif text-base tracking-[0.2em] uppercase text-foreground"
          >
            Lục San
          </Link>

          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[...navigation, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-meta hover:text-foreground transition-colors cursor-pointer"
                    style={{
                      color: "var(--text-secondary)",
                      transitionDuration: "var(--duration-base)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-meta" style={{ color: "var(--text-tertiary)" }}>
            © {year} Lục San. Objects formed from geological time.
          </p>
          <p className="text-meta" style={{ color: "var(--text-tertiary)", fontStyle: "italic" }}>
            Hà Nội, Việt Nam
          </p>
        </div>

      </div>
    </footer>
  );
}

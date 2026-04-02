import Link from "next/link";
import { navigation } from "@/config/navigation";

const MARGIN = "clamp(24px, 4vw, 64px)";
const MAX_W  = "1440px";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop:     "1px solid var(--border-subtle)",
        paddingTop:    "var(--space-1000)",
        paddingBottom: "var(--space-800)",
        paddingLeft:   MARGIN,
        paddingRight:  MARGIN,
      }}
    >
      <div style={{ maxWidth: MAX_W, marginLeft: "auto", marginRight: "auto" }}>

        {/* Top row — wordmark + nav */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ gap: "var(--space-600)", marginBottom: "var(--space-800)" }}
        >
          <Link
            href="/"
            className="font-serif uppercase"
            style={{ fontSize: "1.2rem", letterSpacing: "0.22em", color: "var(--text-primary)" }}
          >
            Lục San
          </Link>

          <nav>
            <ul className="flex flex-wrap" style={{ gap: "clamp(20px, 3vw, 40px)" }}>
              {[...navigation, { label: "Biography", href: "/biography/luc-san" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Rule */}
        <div
          style={{
            width:        "100%",
            height:       "1px",
            background:   "var(--border-subtle)",
            marginBottom: "var(--space-500)",
          }}
        />

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ gap: "var(--space-200)" }}
        >
          <p className="text-label" style={{ color: "var(--text-tertiary)" }}>
            © {year} Lục San. Objects formed from geological time.
          </p>
          <p
            className="text-label"
            style={{ color: "var(--text-tertiary)", fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em" }}
          >
            Pearl · Jade · Amber · Wood
          </p>
        </div>

      </div>
    </footer>
  );
}

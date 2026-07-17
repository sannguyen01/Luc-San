import Link from "next/link";
import Image from "next/image";
import talismansData from "@/content/talismans.json";
import type { Talisman } from "@/types";

const talismans = talismansData as Talisman[];

export default function SchoolArchive() {
  return (
    <section
      className="dark-band"
      style={{
        padding: "var(--space-2000) var(--layout-margin)",
        borderTop: "1px solid var(--ls-ink-deep)",
      }}
    >
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "var(--space-1000)",
          }}
        >
          <p className="text-label">Nacre school — necklaces</p>
          <Link href="/talismans" className="link-pathway" style={{ fontSize: "0.65rem" }}>
            View all
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "var(--layout-gutter)",
          }}
        >
          {talismans.map((t) => (
            <Link
              key={t.id}
              href={`/talismans/${t.id}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              {/* Image tile */}
              <div
                style={{
                  aspectRatio: "4 / 5",
                  background: "var(--ls-ink-deep)",
                  marginBottom: "var(--space-400)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  style={{ objectFit: "cover", opacity: 0.8 }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 22vw"
                />
              </div>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  color: "var(--ls-void-white)",
                  marginBottom: "var(--space-100)",
                  transition: "color var(--duration-base) var(--ease-out)",
                }}
              >
                {t.title}
              </p>
              <p
                className="text-label"
                style={{ color: "var(--ls-slate-haze)" }}
              >
                {t.tier} · {t.hours}h
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

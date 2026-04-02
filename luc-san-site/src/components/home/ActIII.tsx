"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.3, 1] as const;

const TRIO = [
  {
    label: "Essence",
    id: "jade-disc-pendant",
    title: "Jade Disc Pendant",
    copy: "Forty million years of tectonic compression. The carver's task was only to locate the disc that had always existed inside.",
    era: "40 million years",
    hours: "12 hours",
    tier: "Elemental",
    aspectRatio: "4 / 5",
    verticalOffset: 0,
  },
  {
    label: "Tension",
    id: "baroque-pearl-suspension-i",
    title: "Baroque Pearl Suspension I",
    copy: "No adhesive anywhere in this piece. The pearl sits in tension — exactly as it did inside the shell for nineteen years.",
    era: "19 years",
    hours: "46 hours",
    tier: "Composed",
    aspectRatio: "3 / 4",
    verticalOffset: 72,
  },
  {
    label: "Sanctum",
    id: "pearl-constellation-collar",
    title: "Pearl Constellation Collar",
    copy: "Thirty-one asymmetries, no two identical. Each pearl chosen for how it catches light at a specific angle of the collar.",
    era: "2–4 years per pearl",
    hours: "58 hours",
    tier: "Composed",
    aspectRatio: "4 / 5",
    verticalOffset: 36,
  },
];

export default function ActIII() {
  return (
    <section
      style={{
        background: "var(--ls-nacre)",
        padding: "var(--space-1600) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--layout-max)",
          margin: "0 auto",
          padding: "0 var(--layout-margin)",
        }}
      >
        {/* Section label */}
        <motion.p
          className="text-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.9, ease }}
          style={{ marginBottom: "var(--space-1200)" }}
        >
          The Collection
        </motion.p>

        {/*
          Grid uses a CSS class — NOT inline style — so media queries can override it.
          verticalOffset is passed as --card-offset CSS custom property;
          the media query below zeroes it at ≤900px without any JavaScript.
        */}
        <div className="act3-grid">
          {TRIO.map((item, i) => (
            <motion.article
              key={item.id}
              className="act3-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.1, delay: i * 0.14, ease }}
              style={{
                ["--card-offset" as string]: `${item.verticalOffset}px`,
              }}
            >
              {/* Image placeholder */}
              <Link
                href={`/talismans/${item.id}`}
                style={{ display: "block", overflow: "hidden" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease }}
                  className="img-skeleton"
                  style={{ width: "100%", aspectRatio: item.aspectRatio }}
                  aria-hidden="true"
                />
              </Link>

              {/* Card metadata */}
              <div style={{ marginTop: "var(--space-300)" }}>
                <p className="text-label" style={{ marginBottom: "var(--space-100)" }}>
                  {item.label}
                </p>

                <h3
                  style={{
                    fontFamily:    "var(--font-serif)",
                    fontWeight:    300,
                    fontSize:      "clamp(1rem, 1.5vw, 1.4rem)",
                    letterSpacing: "0.04em",
                    lineHeight:    1.25,
                    color:         "var(--ls-void-black)",
                    marginBottom:  "var(--space-200)",
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-body" style={{ marginBottom: "var(--space-300)" }}>
                  {item.copy}
                </p>

                <div
                  style={{
                    display:      "flex",
                    gap:          "var(--space-500)",
                    marginBottom: "var(--space-300)",
                    borderTop:    "1px solid var(--border-subtle)",
                    paddingTop:   "var(--space-200)",
                  }}
                >
                  <div>
                    <p className="text-label" style={{ marginBottom: "3px" }}>Formation</p>
                    <p className="text-caption">{item.era}</p>
                  </div>
                  <div>
                    <p className="text-label" style={{ marginBottom: "3px" }}>Handwork</p>
                    <p className="text-caption">{item.hours}</p>
                  </div>
                </div>

                <Link href={`/talismans/${item.id}`} className="link-pathway">
                  Read the record
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Collection link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          style={{
            marginTop:      "var(--space-1600)",
            display:        "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/talismans" className="link-pathway">
            The full collection
          </Link>
        </motion.div>
      </div>

      {/*
        Scoped styles — collocated so grid logic lives with the component.
        act3-grid: 3 columns on desktop, responsive via media queries.
        act3-card: margin-top reads --card-offset (set per-card above).
                   Media queries zero it out so stagger only appears on desktop.
      */}
      <style>{`
        .act3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(20px, 3vw, 48px);
          align-items: start;
        }

        .act3-card {
          margin-top: var(--card-offset, 0px);
        }

        /* Tablet: 2-column, kill all vertical offsets */
        @media (max-width: 900px) {
          .act3-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .act3-card {
            margin-top: 0 !important;
          }
        }

        /* Mobile: single column, generous gap between cards */
        @media (max-width: 600px) {
          .act3-grid {
            grid-template-columns: 1fr;
            gap: clamp(40px, 8vw, 64px);
          }
          .act3-card {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

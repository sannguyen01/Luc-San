"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.3, 1] as const;

export default function ActI() {
  return (
    <section
      aria-label="Hero"
      style={{
        position:   "relative",
        height:     "100svh",
        minHeight:  "600px",
        overflow:   "hidden",
        background: "var(--ls-void-white)",
        display:    "flex",
        alignItems: "center",
      }}
    >
      {/* Pure typographic hero — the statement is the visual event.
          Photography will replace this when final images are ready.
          Chanel doctrine: type alone on the void-white field is the
          most authoritative version of this page. */}
      <div
        style={{
          position:    "relative",
          zIndex:      2,
          paddingLeft: "var(--layout-margin)",
          paddingRight: "var(--layout-margin)",
        }}
      >
        <motion.p
          className="text-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          Talisman No. 02 — Baroque Pearl
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9, ease }}
          style={{
            fontFamily:    "var(--font-serif)",
            fontWeight:    300,
            fontSize:      "clamp(2rem, 5vw, 5.5rem)",
            lineHeight:    1.08,
            letterSpacing: "0.02em",
            fontStyle:     "italic",
            color:         "var(--ls-void-black)",
            margin:        "1.6rem 0 2.8rem",
            maxWidth:      "14ch",
          }}
        >
          This took nineteen<br />years to form.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease }}
        >
          <Link
            href="/talismans/baroque-pearl-suspension-i"
            className="link-pathway"
          >
            See the record
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue — vertical sliding dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2, ease }}
        style={{
          position:      "absolute",
          bottom:        "var(--space-600)",
          left:          "50%",
          transform:     "translateX(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "10px",
          zIndex:        2,
        }}
      >
        <span
          className="text-label"
          style={{ letterSpacing: "0.28em", color: "var(--ls-slate-haze)" }}
        >
          Scroll
        </span>
        <div
          style={{
            position:   "relative",
            width:      "1px",
            height:     "40px",
            background: "var(--ls-ash-drift)",
          }}
        >
          <motion.div
            animate={{ y: [0, 28, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position:     "absolute",
              top:          0,
              left:         "-1px",
              width:        "3px",
              height:       "12px",
              background:   "var(--ls-graphite-skin)",
              borderRadius: "2px",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.3, 1] as const;

export default function ActI() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        background: "var(--ls-void-white)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Necklace image — right 61.8% golden ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease }}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "61.8%",
          height: "100%",
        }}
      >
        <div
          className="img-skeleton"
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Left-fade gradient so text reads over image edge */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "55%",
          height: "100%",
          background:
            "linear-gradient(to right, var(--ls-void-white) 55%, transparent)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Text block */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: "var(--layout-margin)",
          paddingRight: "var(--layout-margin)",
          maxWidth: "36rem",
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
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
            lineHeight: 1.08,
            letterSpacing: "0.02em",
            fontStyle: "italic",
            color: "var(--ls-void-black)",
            margin: "1.6rem 0 2.8rem",
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
          position: "absolute",
          bottom: "var(--space-600)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 2,
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
            position: "relative",
            width: "1px",
            height: "40px",
            background: "var(--ls-ash-drift)",
          }}
        >
          <motion.div
            animate={{ y: [0, 28, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: "-1px",
              width: "3px",
              height: "12px",
              background: "var(--ls-graphite-skin)",
              borderRadius: "2px",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

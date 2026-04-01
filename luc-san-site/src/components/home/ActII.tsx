"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 6 philosophical lines revealed one by one as the user scrolls
const LINES = [
  { text: "Every material here required more time", indent: false },
  { text: "to form than any civilization has existed.", indent: false },
  { text: "The jade: forty million years of pressure.", indent: true },
  { text: "The pearl: nineteen years of silence.", indent: true },
  { text: "We add hours, not epochs —", indent: false },
  { text: "but we count them with the same seriousness.", indent: false },
];

export default function ActII() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each line gets its own opacity + y transform — hooks must be at top level
  const op0 = useTransform(scrollYProgress, [0.00, 0.09], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.16, 0.25], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.32, 0.41], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.48, 0.57], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.64, 0.73], [0, 1]);
  const op5 = useTransform(scrollYProgress, [0.80, 0.89], [0, 1]);

  const y0 = useTransform(scrollYProgress, [0.00, 0.09], [20, 0]);
  const y1 = useTransform(scrollYProgress, [0.16, 0.25], [20, 0]);
  const y2 = useTransform(scrollYProgress, [0.32, 0.41], [20, 0]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.57], [20, 0]);
  const y4 = useTransform(scrollYProgress, [0.64, 0.73], [20, 0]);
  const y5 = useTransform(scrollYProgress, [0.80, 0.89], [20, 0]);

  const opacities = [op0, op1, op2, op3, op4, op5];
  const ys = [y0, y1, y2, y3, y4, y5];

  // Progress bar fills from top to bottom as you scroll
  const barScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      style={{ height: "400vh", background: "var(--ls-pale-linen)" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Vertical progress bar — left edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "var(--layout-margin)",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1px",
            height: "38vh",
            background: "var(--ls-ash-drift)",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1px",
              height: "100%",
              background: "var(--ls-graphite-skin)",
              scaleY: barScaleY,
              transformOrigin: "top",
            }}
          />
        </div>

        {/* Text block — inset from the progress bar */}
        <div
          style={{
            paddingLeft: "calc(var(--layout-margin) + 36px)",
            paddingRight: "var(--layout-margin)",
            maxWidth: "860px",
            width: "100%",
          }}
        >
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              style={{
                opacity: opacities[i],
                y: ys[i],
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
                lineHeight: 1.32,
                letterSpacing: "0.02em",
                color:
                  i < 2
                    ? "var(--ls-void-black)"
                    : i < 4
                    ? "var(--ls-ink-deep)"
                    : "var(--ls-graphite-skin)",
                paddingLeft: line.indent ? "2.5rem" : "0",
                marginBottom:
                  i === 1 ? "2.4rem" : i === 3 ? "2.4rem" : "0.18rem",
                fontStyle: i >= 4 ? "italic" : "normal",
              }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

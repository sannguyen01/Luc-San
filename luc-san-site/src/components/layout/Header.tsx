"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/config/navigation";

/* ── Dior-pattern: overlay descends via clipPath ── */
const OVERLAY_VARIANTS = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: {
      clipPath: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      opacity:  { duration: 0.2 },
    },
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: {
      clipPath: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      opacity:  { duration: 0.01 },
    },
  },
};

/* Staggered nav items rise from overflow-hidden clips */
const ITEM_VARIANTS = {
  hidden: { y: "108%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      y:       { duration: 0.7, ease: [0.00, 0.00, 0.30, 1.00] as [number, number, number, number], delay: 0.18 + i * 0.07 },
      opacity: { duration: 0.01, delay: 0.18 + i * 0.07 },
    },
  }),
  exit: {
    y: "-108%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 1, 1] as [number, number, number, number] },
  },
};

const navItems = [...navigation, { label: "Contact", href: "/contact" }];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  /* Close on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ESC key closes */
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  /*
    Header: always void-white background, always void-black chrome text.
    Uniform across homepage and all inner pages — a constant architectural threshold.
    Darkness belongs inside DarkBand content sections, not on the persistent frame.
  */

  return (
    <>
      {/*
        ── Persistent chrome strip ──────────────────────────────────────────
        Always void-white background, always void-black text.
        Uniform across homepage and all inner pages.
        ─────────────────────────────────────────────────────────────────────
      */}
      <header
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{
          height:       "72px",
          background:   "var(--ls-void-white)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="relative flex items-center justify-between h-full"
          style={{ padding: "0 clamp(24px, 4vw, 64px)" }}
        >
          {/* Menu / Close — left, always void-black */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="nav-overlay"
            className="touch-target text-meta cursor-pointer relative z-[70]"
            style={{
              color:         "var(--ls-void-black)",
              letterSpacing: "0.18em",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>

          {/* Wordmark — absolute center, always void-black */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="absolute left-1/2 -translate-x-1/2 font-serif uppercase z-[70]"
            style={{
              fontSize:      "1.2rem",
              letterSpacing: "0.25em",
              color:         "var(--ls-void-black)",
            }}
          >
            Lục San
          </Link>

          <div aria-hidden="true" style={{ minWidth: "44px" }} />
        </div>
      </header>

      {/* ── Full-viewport overlay — Dior descent technique ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            key="nav-overlay"
            variants={OVERLAY_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[55] flex flex-col"
            style={{ backgroundColor: "var(--ls-void-black)" }}
          >
            {/* Inner layout — vertically centered editorial column */}
            <div
              className="flex flex-col justify-center h-full"
              style={{ padding: "96px clamp(24px, 4vw, 64px) 64px" }}
            >
              {/* Primary nav — large serif, staggered rise */}
              <nav aria-label="Primary navigation">
                <ul className="flex flex-col" style={{ gap: "clamp(8px, 2vh, 18px)" }}>
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href} className="overflow-hidden">
                        <motion.div
                          custom={i}
                          variants={ITEM_VARIANTS}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <Link
                            href={item.href}
                            className="font-serif block"
                            style={{
                              /*
                                Desktop nav size — the critical fix.
                                clamp(1.8rem, 3.5vw, 3.2rem):
                                  mobile 390px   → 1.8rem = ~29px  ✓ clear
                                  tablet 768px   → 2.7rem = ~43px  ✓ editorial
                                  desktop 1280px → 3.2rem = ~51px  ✓ architectural
                                Previous: clamp(2.6rem, 7vw, 6rem) → 96px on desktop ✗
                              */
                              fontSize:      "clamp(1.8rem, 3.5vw, 3.2rem)",
                              fontWeight:    300,
                              letterSpacing: "0.04em",
                              lineHeight:    1.15,
                              color: isActive
                                ? "var(--ls-nacre-glow)"
                                : "var(--ls-void-white)",
                              transition: "color 250ms ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--ls-ash-drift)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = isActive
                                ? "var(--ls-nacre-glow)"
                                : "var(--ls-void-white)")
                            }
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer strip — material taxonomy + city */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.75, duration: 0.6 } }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
                style={{ padding: "0 clamp(24px, 4vw, 64px) 40px" }}
              >
                <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>
                  Pearl · Jade · Amber · Wood
                </p>
                <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>
                  Hà Nội
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

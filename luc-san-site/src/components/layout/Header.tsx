"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/config/navigation";

/* ── Overlay descends via clipPath — Dior technique ── */
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

export function Header() {
  const pathname   = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Close overlay on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Scroll awareness — blur backdrop after 60px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while overlay open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ESC closes */
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const chromeColor  = open ? "var(--ls-void-white)" : "var(--ls-void-black)";
  const headerBg     = open
    ? "var(--ls-void-black)"
    : scrolled
      ? "rgba(247,245,241,0.85)"
      : "transparent";
  const headerBlur   = !open && scrolled ? "blur(12px)" : "none";
  const headerBorder = open
    ? "1px solid transparent"
    : scrolled
      ? "1px solid var(--border-subtle)"
      : "1px solid transparent";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{
          height:           "72px",
          background:       headerBg,
          backdropFilter:   headerBlur,
          WebkitBackdropFilter: headerBlur,
          borderBottom:     headerBorder,
          transition:       "background 400ms cubic-bezier(0,0,0.30,1), border-color 400ms cubic-bezier(0,0,0.30,1)",
        }}
      >
        <div
          className="relative flex items-center h-full"
          style={{ padding: "0 clamp(24px, 4vw, 64px)" }}
        >

          {/* ── LEFT: desktop nav links ── */}
          <nav
            className="hidden md:flex items-center z-[70]"
            aria-label="Primary navigation"
            style={{ gap: "clamp(20px, 2.5vw, 40px)" }}
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-nav text-meta"
                  data-active={isActive ? "true" : undefined}
                  style={{
                    color:      isActive ? "var(--ls-void-black)" : chromeColor,
                    transition: "color 400ms cubic-bezier(0,0,0.30,1)",
                  }}
                >
                  {item.label.toUpperCase()}
                </Link>
              );
            })}
          </nav>

          {/* ── LEFT: mobile menu toggle ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="nav-overlay"
            className="md:hidden touch-target text-meta cursor-pointer z-[70]"
            style={{
              color:         chromeColor,
              letterSpacing: "0.18em",
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>

          {/* ── CENTER: wordmark — absolutely positioned so it's always viewport-centered ── */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif uppercase z-[70]"
            style={{
              position:      "absolute",
              left:          "50%",
              transform:     "translateX(-50%)",
              fontSize:      "1.1rem",
              letterSpacing: "0.25em",
              fontWeight:    300,
              color:         chromeColor,
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
              whiteSpace:    "nowrap",
            }}
          >
            Lục San
          </Link>

        </div>
      </header>

      {/* ── Mobile full-viewport overlay ── */}
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
            className="fixed inset-0 z-[55] flex flex-col md:hidden"
            style={{ backgroundColor: "var(--ls-void-black)" }}
          >
            <div
              className="flex flex-col justify-center h-full"
              style={{ padding: "96px clamp(24px, 4vw, 64px) 64px" }}
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col" style={{ gap: "clamp(8px, 2vh, 18px)" }}>
                  {navigation.map((item, i) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
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
                              fontSize:      "clamp(1.8rem, 3.5vw, 3.2rem)",
                              fontWeight:    300,
                              letterSpacing: "0.04em",
                              lineHeight:    1.15,
                              color: isActive ? "var(--ls-nacre-glow)" : "var(--ls-void-white)",
                              transition:    "color 250ms ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ls-ash-drift)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--ls-nacre-glow)" : "var(--ls-void-white)")}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

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

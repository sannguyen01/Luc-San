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

/* Fix 3: full transition string covering backdrop-filter */
const HEADER_TRANSITION = [
  "background 400ms cubic-bezier(0,0,0.30,1)",
  "border-color 400ms cubic-bezier(0,0,0.30,1)",
  "backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
  "-webkit-backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
].join(", ");

export function Header() {
  const pathname   = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const chromeColor    = open ? "var(--ls-void-white)" : "var(--ls-void-black)";
  /* Fix 1: active link must be legible on dark overlay */
  const activeLinkColor = open ? "var(--ls-nacre-glow)" : "var(--ls-void-black)";

  /* Fix 3: saturate(1.2) enriches the frosted glass — Kalyss standard */
  const headerBg     = open
    ? "var(--ls-void-black)"
    : scrolled ? "rgba(247,245,241,0.85)" : "transparent";
  const headerBlur   = !open && scrolled ? "blur(14px) saturate(1.2)" : "none";
  /* Fix 6: "none" removes the 1px layout gap on OLED when overlay is open */
  const headerBorder = open
    ? "none"
    : scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent";

  return (
    <>
      {/* Fix 5: shell z-50 — surface layer only */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height:               "72px",
          background:           headerBg,
          backdropFilter:       headerBlur,
          WebkitBackdropFilter: headerBlur,
          borderBottom:         headerBorder,
          transition:           HEADER_TRANSITION,
        }}
      >
        {/* Fix 5: chrome z-[60] — floats above overlay */}
        <div
          className="relative flex items-center justify-between h-full z-[60]"
          style={{ padding: "0 clamp(24px, 4vw, 64px)" }}
        >

          {/* ── LEFT: desktop nav links ── */}
          <nav
            className="hidden md:flex items-center"
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
                    /* Fix 1: use activeLinkColor — legible on both light + dark */
                    color:      isActive ? activeLinkColor : chromeColor,
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
            className="md:hidden touch-target text-meta cursor-pointer"
            style={{
              color:         chromeColor,
              letterSpacing: "0.18em",
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>

          {/* ── CENTER: wordmark — Fix 4: fluid clamp() scale ── */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif uppercase"
            style={{
              position:      "absolute",
              left:          "50%",
              transform:     "translateX(-50%)",
              /* Fix 4: ~15px@375 → ~17px@1024 → ~20px@1440 */
              fontSize:      "clamp(0.95rem, 1.1vw + 0.55rem, 1.25rem)",
              letterSpacing: "0.25em",
              fontWeight:    300,
              color:         chromeColor,
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
              whiteSpace:    "nowrap",
            }}
          >
            Lục San
          </Link>

          {/* ── RIGHT: Fix 2 — Kalyss tripartition: single high-value CTA ── */}
          <div className="hidden md:flex items-center">
            <Link
              href="/commission"
              className="link-nav text-meta"
              data-active={pathname === "/commission" ? "true" : undefined}
              style={{
                color:      pathname === "/commission" ? activeLinkColor : chromeColor,
                transition: "color 400ms cubic-bezier(0,0,0.30,1)",
                letterSpacing: "0.15em",
              }}
            >
              ENQUIRE
            </Link>
          </div>

        </div>
      </header>

      {/* ── Mobile full-viewport overlay — Fix 5: z-[45] sits below header chrome ── */}
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
            className="fixed inset-0 z-[45] flex flex-col md:hidden"
            style={{ backgroundColor: "var(--ls-void-black)" }}
          >
            {/* Fix 7: two-column layout — nav left, structural label right */}
            <div
              className="flex h-full"
              style={{ padding: "96px clamp(24px, 4vw, 64px) 64px" }}
            >
              {/* Left column — navigation links */}
              <nav aria-label="Mobile navigation" className="flex-1">
                <ul className="flex flex-col h-full justify-center" style={{ gap: "clamp(8px, 2vh, 18px)" }}>
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

              {/* Fix 7: Right column — vertical structural label (Kalyss convention) */}
              <motion.div
                className="hidden sm:flex items-center justify-end"
                style={{ width: "40px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.6 } }}
                exit={{ opacity: 0 }}
              >
                <span
                  className="text-meta"
                  style={{
                    color:        "var(--ls-graphite-skin)",
                    writingMode:  "vertical-rl",
                    transform:    "rotate(180deg)",
                    letterSpacing: "0.18em",
                    userSelect:   "none",
                  }}
                >
                  NAVIGATION
                </span>
              </motion.div>
            </div>

            {/* Footer metadata */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

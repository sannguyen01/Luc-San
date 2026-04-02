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

/* Includes color so both chrome strips transition text on open/close */
const CHROME_TRANSITION = [
  "background 400ms cubic-bezier(0,0,0.30,1)",
  "border-color 400ms cubic-bezier(0,0,0.30,1)",
  "backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
  "-webkit-backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
  "color 400ms cubic-bezier(0,0,0.30,1)",
].join(", ");

export function Header() {
  const pathname   = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Route change → close overlay */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Scroll awareness */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ESC to close */
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  /* ── Unified chrome — identical values for desktop rail + mobile top bar ──
     open=true  → void-black bg, void-white text
     open=false → transparent/frosted bg, void-black text                    */
  const chromeBg     = open
    ? "var(--ls-void-black)"
    : scrolled ? "rgba(247,245,241,0.92)" : "transparent";
  const chromeBlur   = !open && scrolled ? "blur(14px) saturate(1.2)" : "none";
  const chromeBorder = open ? "transparent" : scrolled ? "var(--border-subtle)" : "transparent";
  const chromeText   = open ? "var(--ls-void-white)" : "var(--ls-void-black)";
  const activeText   = open ? "var(--ls-nacre-glow)" : "var(--ls-void-black)";

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          DESKTOP CHROME — fixed left rail (md+)           z-[60]
          Resting: wordmark top · nav middle · provenance bottom
          Open:    collapses to thin strip — toggle + wordmark only
          ════════════════════════════════════════════════════════════════ */}
      <header
        className="hidden md:flex"
        aria-label="Site header"
        style={{
          position:             "fixed",
          top: 0, left: 0,
          width:                "200px",
          height:               "100dvh",
          zIndex:               60,
          flexDirection:        "column",
          justifyContent:       "space-between",
          background:           chromeBg,
          backdropFilter:       chromeBlur,
          WebkitBackdropFilter: chromeBlur,
          borderRight:          `1px solid ${chromeBorder}`,
          transition:           CHROME_TRANSITION,
          padding:              "clamp(32px,5vh,52px) clamp(20px,2vw,32px) clamp(28px,4vh,44px)",
        }}
      >
        {/* ── TOP: wordmark + toggle — always visible ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vh,40px)" }}>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif uppercase"
            style={{
              fontSize:      "clamp(0.75rem, 0.9vw + 0.45rem, 1rem)",
              letterSpacing: "0.28em",
              fontWeight:    300,
              color:         chromeText,
              whiteSpace:    "nowrap",
              lineHeight:    1,
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            }}
          >
            Lục San
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="nav-overlay"
            className="text-meta cursor-pointer"
            style={{
              color:         chromeText,
              letterSpacing: "0.18em",
              textAlign:     "left",
              transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
              background:    "none",
              border:        "none",
              padding:       0,
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* ── MIDDLE: nav links — visible only when overlay is CLOSED ── */}
        <AnimatePresence>
          {!open && (
            <motion.nav
              key="rail-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              aria-label="Primary navigation"
              style={{
                display:       "flex",
                flexDirection: "column",
                gap:           "clamp(20px, 2.8vh, 32px)",
              }}
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
                      color:      isActive ? activeText : chromeText,
                      transition: "color 400ms cubic-bezier(0,0,0.30,1)",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* ── BOTTOM: provenance — fades out when overlay opens ── */}
        <AnimatePresence>
          {!open && (
            <motion.div
              key="rail-provenance"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolled ? 0.7 : 0.5, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>Pearl · Jade</p>
              <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>Amber · Wood</p>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE CHROME — fixed 64px top bar (below md)    z-[60]
          Identical chrome logic, horizontal orientation
          ════════════════════════════════════════════════════════════════ */}
      <header
        className="flex md:hidden fixed top-0 left-0 right-0 items-center"
        aria-label="Site header mobile"
        style={{
          height:               "64px",
          zIndex:               60,
          background:           chromeBg,
          backdropFilter:       chromeBlur,
          WebkitBackdropFilter: chromeBlur,
          borderBottom:         `1px solid ${chromeBorder}`,
          transition:           CHROME_TRANSITION,
          padding:              "0 clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="nav-overlay"
          className="touch-target text-meta cursor-pointer"
          style={{
            color:         chromeText,
            letterSpacing: "0.18em",
            transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            background:    "none",
            border:        "none",
          }}
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Wordmark — absolute center */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif uppercase"
          style={{
            position:      "absolute",
            left:          "50%",
            transform:     "translateX(-50%)",
            fontSize:      "clamp(0.85rem, 1.5vw + 0.4rem, 1rem)",
            letterSpacing: "0.28em",
            fontWeight:    300,
            color:         chromeText,
            transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            whiteSpace:    "nowrap",
            zIndex:        70,
          }}
        >
          Lục San
        </Link>
      </header>

      {/* ════════════════════════════════════════════════════════════════
          UNIVERSAL OVERLAY — no md:hidden — renders on ALL viewports
          Desktop: descends over rail + content simultaneously
          Mobile:  descends over full screen from top bar
          z-[55]: above page content · below both chrome strips (z-60)
          ════════════════════════════════════════════════════════════════ */}
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
            className="fixed inset-0 z-[55]"
            style={{ backgroundColor: "var(--ls-void-black)" }}
          >
            {/* Two-column layout — nav left, structural label right */}
            <div
              className="flex h-full"
              style={{ padding: "clamp(80px,12vh,120px) clamp(24px,4vw,64px) 64px" }}
            >
              {/* Left — staggered nav links */}
              <nav
                className="flex-1 flex flex-col justify-center"
                aria-label="Site navigation"
              >
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
                              fontSize:      "clamp(1.8rem, 4vw, 3.8rem)",
                              fontWeight:    300,
                              letterSpacing: "0.04em",
                              lineHeight:    1.15,
                              color:         isActive ? "var(--ls-nacre-glow)" : "var(--ls-void-white)",
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

              {/* Right — NAVIGATION vertical structural label (Kalyss convention) */}
              <motion.div
                className="flex items-center"
                style={{ paddingLeft: "clamp(16px, 3vw, 48px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.7 } }}
                exit={{ opacity: 0 }}
              >
                <span
                  className="text-meta"
                  style={{
                    color:         "var(--ls-graphite-skin)",
                    writingMode:   "vertical-rl",
                    transform:     "rotate(180deg)",
                    letterSpacing: "0.22em",
                    userSelect:    "none",
                  }}
                >
                  NAVIGATION
                </span>
              </motion.div>
            </div>

            {/* Overlay footer — provenance + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.75, duration: 0.6 } }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
              style={{ padding: "0 clamp(24px, 4vw, 64px) clamp(28px, 4vh, 44px)" }}
            >
              <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>
                Pearl · Jade · Amber · Wood
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

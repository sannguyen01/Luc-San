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

const RAIL_TRANSITION = [
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

  /* Scroll-aware chrome — same logic, now applied to a vertical rail */
  const railBg     = scrolled ? "rgba(247,245,241,0.92)" : "transparent";
  const railBlur   = scrolled ? "blur(14px) saturate(1.2)" : "none";
  const railBorder = scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent";

  /* Mobile top-bar chrome */
  const mobileBg     = open ? "var(--ls-void-black)" : scrolled ? "rgba(247,245,241,0.92)" : "transparent";
  const mobileBlur   = !open && scrolled ? "blur(14px) saturate(1.2)" : "none";
  const mobileBorder = open ? "none" : scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent";

  const chromeColor     = "var(--ls-void-black)";
  const mobileChrome    = open ? "var(--ls-void-white)" : "var(--ls-void-black)";
  const activeLinkColor = "var(--ls-void-black)";
  const mobileActive    = open ? "var(--ls-nacre-glow)" : "var(--ls-void-black)";

  return (
    <>
      {/* ── DESKTOP: fixed left vertical rail (md+) ── */}
      <header
        className="hidden md:flex"
        aria-label="Site header"
        style={{
          position:             "fixed",
          top:                  0,
          left:                 0,
          width:                "200px",
          height:               "100dvh",
          zIndex:               50,
          flexDirection:        "column",
          justifyContent:       "space-between",
          background:           railBg,
          backdropFilter:       railBlur,
          WebkitBackdropFilter: railBlur,
          borderRight:          railBorder,
          transition:           RAIL_TRANSITION,
          padding:              "clamp(32px,5vh,52px) clamp(20px,2vw,32px) clamp(28px,4vh,44px)",
        }}
      >
        {/* Top — wordmark */}
        <Link
          href="/"
          className="font-serif uppercase"
          style={{
            fontSize:      "clamp(0.75rem, 0.9vw + 0.5rem, 1rem)",
            letterSpacing: "0.28em",
            fontWeight:    300,
            color:         chromeColor,
            whiteSpace:    "nowrap",
            lineHeight:    1,
          }}
        >
          Lục San
        </Link>

        {/* Middle — stacked nav links */}
        <nav
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
                  color:      isActive ? activeLinkColor : chromeColor,
                  transition: "color 400ms cubic-bezier(0,0,0.30,1)",
                }}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* Bottom — material provenance label */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p
            className="text-meta"
            style={{
              color:      "var(--ls-graphite-skin)",
              opacity:    scrolled ? 0.7 : 0.5,
              transition: "opacity 400ms ease",
            }}
          >
            Pearl · Jade
          </p>
          <p
            className="text-meta"
            style={{
              color:      "var(--ls-graphite-skin)",
              opacity:    scrolled ? 0.7 : 0.5,
              transition: "opacity 400ms ease",
            }}
          >
            Amber · Wood
          </p>
          <p
            className="text-meta"
            style={{
              color:      "var(--ls-graphite-skin)",
              opacity:    scrolled ? 0.7 : 0.5,
              marginTop:  "4px",
              transition: "opacity 400ms ease",
            }}
          >
            Hà Nội
          </p>
        </div>
      </header>

      {/* ── MOBILE: 64px top bar (below md) ── */}
      <header
        className="flex md:hidden fixed top-0 left-0 right-0 z-50 items-center"
        aria-label="Site header mobile"
        style={{
          height:               "64px",
          background:           mobileBg,
          backdropFilter:       mobileBlur,
          WebkitBackdropFilter: mobileBlur,
          borderBottom:         mobileBorder,
          transition:           RAIL_TRANSITION,
          padding:              "0 clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="nav-overlay"
          className="touch-target text-meta cursor-pointer"
          style={{
            color:         mobileChrome,
            letterSpacing: "0.18em",
            transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
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
            fontSize:      "clamp(0.85rem, 2vw + 0.5rem, 1rem)",
            letterSpacing: "0.28em",
            fontWeight:    300,
            color:         mobileChrome,
            transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            whiteSpace:    "nowrap",
            zIndex:        60,
          }}
        >
          Lục San
        </Link>
      </header>

      {/* ── Mobile full-viewport overlay — z-[45] sits below header chrome ── */}
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
            {/* Two-column layout — nav left, structural label right */}
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

              {/* Right column — vertical structural label (Kalyss convention) */}
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
                    color:         "var(--ls-graphite-skin)",
                    writingMode:   "vertical-rl",
                    transform:     "rotate(180deg)",
                    letterSpacing: "0.18em",
                    userSelect:    "none",
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

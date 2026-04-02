"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/config/navigation";

const CHROME_TRANSITION = [
  "background 400ms cubic-bezier(0,0,0.30,1)",
  "border-color 400ms cubic-bezier(0,0,0.30,1)",
  "backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
  "-webkit-backdrop-filter 400ms cubic-bezier(0,0,0.30,1)",
  "color 400ms cubic-bezier(0,0,0.30,1)",
].join(", ");

const PANEL_VARIANTS = {
  hidden:  { opacity: 0, y: -6,
    transition: { duration: 0.2, ease: [0.42, 0, 1, 1] as [number, number, number, number] } },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.38, ease: [0.00, 0.00, 0.30, 1.00] as [number, number, number, number] } },
};

export function Header() {
  const pathname            = usePathname();
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Desktop rail — always light, no toggle state */
  const railBg     = scrolled ? "rgba(247,245,241,0.92)" : "transparent";
  const railBlur   = scrolled ? "blur(14px) saturate(1.2)" : "none";
  const railBorder = scrolled ? "var(--border-subtle)" : "transparent";

  /* Mobile bar — darkens when panel is open */
  const barBg     = open ? "var(--ls-void-black)" : scrolled ? "rgba(247,245,241,0.92)" : "transparent";
  const barBlur   = !open && scrolled ? "blur(14px) saturate(1.2)" : "none";
  const barBorder = open ? "transparent" : scrolled ? "var(--border-subtle)" : "transparent";
  const barText   = open ? "var(--ls-void-white)" : "var(--ls-void-black)";

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          DESKTOP — static left rail, no toggle, no overlay  z-[60]
          Wordmark · Nav (always visible) · Provenance
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
          background:           railBg,
          backdropFilter:       railBlur,
          WebkitBackdropFilter: railBlur,
          borderRight:          `1px solid ${railBorder}`,
          transition:           CHROME_TRANSITION,
          padding:              "clamp(32px,5vh,52px) clamp(20px,2vw,32px) clamp(28px,4vh,44px)",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif uppercase"
          style={{
            fontSize:      "clamp(0.75rem, 0.9vw + 0.45rem, 1rem)",
            letterSpacing: "0.28em",
            fontWeight:    300,
            color:         "var(--ls-void-black)",
            whiteSpace:    "nowrap",
            lineHeight:    1,
          }}
        >
          Lục San
        </Link>

        {/* Nav — permanently visible */}
        <nav
          aria-label="Primary navigation"
          style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.8vh, 32px)" }}
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="link-nav text-meta"
                data-active={isActive ? "true" : undefined}
                style={{ color: "var(--ls-void-black)" }}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* Provenance */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: 0.45 }}>
          <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>Pearl · Jade</p>
          <p className="text-meta" style={{ color: "var(--ls-graphite-skin)" }}>Amber · Wood</p>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE — 64px top bar + slide-down panel          z-[60]
          No fullscreen overlay. Panel drops from bar edge.
          ════════════════════════════════════════════════════════════════ */}
      <header
        className="flex md:hidden fixed top-0 left-0 right-0 items-center"
        aria-label="Site header mobile"
        style={{
          height:               "64px",
          zIndex:               60,
          background:           barBg,
          backdropFilter:       barBlur,
          WebkitBackdropFilter: barBlur,
          borderBottom:         `1px solid ${barBorder}`,
          transition:           CHROME_TRANSITION,
          padding:              "0 clamp(20px, 4vw, 40px)",
        }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          className="touch-target text-meta cursor-pointer"
          style={{
            color:         barText,
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
            color:         barText,
            transition:    "color 400ms cubic-bezier(0,0,0.30,1)",
            whiteSpace:    "nowrap",
          }}
        >
          Lục San
        </Link>
      </header>

      {/* Mobile slide-down panel — anchored directly below bar */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            variants={PANEL_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex md:hidden fixed left-0 right-0"
            style={{
              top:        "64px",
              zIndex:     55,
              background: "var(--ls-void-black)",
              padding:    "clamp(28px, 5vh, 48px) clamp(20px, 4vw, 40px) clamp(28px, 5vh, 48px)",
            }}
          >
            <nav aria-label="Site navigation" style={{ width: "100%" }}>
              <ul style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2.5vh, 24px)" }}>
                {navigation.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-serif block"
                        style={{
                          fontSize:      "clamp(1.5rem, 5vw, 2.2rem)",
                          fontWeight:    300,
                          letterSpacing: "0.04em",
                          lineHeight:    1.2,
                          color:         isActive ? "var(--ls-nacre-glow)" : "var(--ls-void-white)",
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Footer provenance inside panel */}
              <p
                className="text-meta"
                style={{ color: "var(--ls-graphite-skin)", marginTop: "clamp(28px, 5vh, 48px)" }}
              >
                Pearl · Jade · Amber · Wood
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

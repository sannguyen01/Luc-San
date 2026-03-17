"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation } from "@/config/navigation";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Elevate header on scroll (subtle bg solidification)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all
        ${scrolled
          ? "bg-[var(--bg-warm)] border-b border-[var(--border-subtle)]"
          : "bg-[var(--bg-warm)]/90 backdrop-blur-sm"
        }`}
      style={{ transitionDuration: "var(--duration-base)", transitionTimingFunction: "var(--ease-out)" }}
    >
      <nav
        className="flex items-center justify-between px-6 md:px-10 lg:px-16"
        style={{ height: "72px" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[1.05rem] tracking-[0.2em] uppercase text-foreground"
          style={{ letterSpacing: "0.2em" }}
        >
          Lục San
        </Link>

        {/* Desktop nav — Loewe-style underline-expand */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-nav text-meta"
                  data-active={isActive ? "true" : "false"}
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop contact — separated */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="link-nav text-meta"
            data-active={pathname === "/contact" ? "true" : "false"}
            style={{ color: "var(--text-secondary)" }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile: toggle */}
        <button
          className="md:hidden text-meta cursor-pointer"
          style={{ color: "var(--text-secondary)", minWidth: "44px", minHeight: "44px",
            display: "flex", alignItems: "center", justifyContent: "flex-end" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu — Khaite-style fade-down */}
      <div
        className={`md:hidden overflow-hidden transition-all`}
        style={{
          maxHeight: menuOpen ? "320px" : "0px",
          opacity: menuOpen ? 1 : 0,
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <ul className="flex flex-col px-6 pb-8 gap-1 border-b border-[var(--border-subtle)]">
          {[...navigation, { label: "Contact", href: "/contact" }].map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-meta cursor-pointer"
                  style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

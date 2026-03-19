"use client";

import { useEffect, useLayoutEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/** Adds .revealed to elements with .reveal class inside a container.
 *  Mirrors Khaite/Loewe-style scroll-triggered opacity+translateY reveals. */
export function useScrollReveal(
  ref: RefObject<Element | null>,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;

  // Add activation class synchronously before first paint (useLayoutEffect).
  // This hides .reveal elements during hydration so they animate in correctly.
  // Without this, SSG ships visible content that flashes hidden then reveals.
  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.classList.add("js-reveal-active");
    return () => container.classList.remove("js-reveal-active");
  }, [ref]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("revealed");
          }
        });
      },
      { threshold, rootMargin }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);
}

"use client";

import { useEffect, useRef } from "react";

/* Tracks mouse position via rAF for smooth sub-pixel movement.
   Applies .is-image on necklace images, .is-link on anchors/buttons. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos    = useRef({ x: -100, y: -100 });
  const raf    = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (dot) {
        dot.style.transform = `translate(calc(${pos.current.x}px - 50%), calc(${pos.current.y}px - 50%))`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!dot) return;
      if (t.closest("[data-cursor='image']")) {
        dot.classList.add("is-image");
        dot.classList.remove("is-link");
      } else if (t.closest("a, button, [role='button']")) {
        dot.classList.add("is-link");
        dot.classList.remove("is-image");
      }
    };

    const onLeave = () => {
      dot?.classList.remove("is-image", "is-link");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover",  onEnter, { passive: true });
    document.addEventListener("mouseout",   onLeave, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onEnter);
      document.removeEventListener("mouseout",   onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}

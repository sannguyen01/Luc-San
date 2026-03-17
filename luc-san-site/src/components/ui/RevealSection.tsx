"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

/** Wraps children and triggers .reveal → .revealed via IntersectionObserver. */
export function RevealSection({ children, className = "", stagger = false }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : ""} ${className}`}>
      {children}
    </div>
  );
}

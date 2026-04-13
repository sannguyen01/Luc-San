import type { Metadata } from "next";
import ActI from "@/components/home/ActI";
import ActII from "@/components/home/ActII";
import ActIII from "@/components/home/ActIII";
import ActIV from "@/components/home/ActIV";
import ActV from "@/components/home/ActV";

export const metadata: Metadata = {
  title: "Lục San — Geological Objects. Nacre Aesthetic Movement.",
  description:
    "Necklaces and objects made from jade, baroque pearl, and amber. Each piece a material biography formed across geological time, finished by hand in the Nacre tradition.",
};

// Phase 3 — 5-act homepage scroll
// Act I:   Single necklace hero — "This took nineteen years to form."
// Act II:  Scroll-driven typographic revelation (6 lines, sticky progress bar)
// Act III: Asymmetric necklace trio (Essence / Tension / Sanctum) + Nacre doctrine bridge
// Act IV:  Dark band caesura — imaginator cultural fragment
// Act V:   Commission invitation

export default function HomePage() {
  return (
    <>
      <ActI />
      <ActII />
      <ActIII />
      <ActIV />
      <ActV />
    </>
  );
}

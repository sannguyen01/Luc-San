import ActI from "@/components/home/ActI";
import ActII from "@/components/home/ActII";
import ActIII from "@/components/home/ActIII";
import ActIV from "@/components/home/ActIV";
import ActV from "@/components/home/ActV";

// Phase 3 — 5-act homepage scroll
// Act I:   Single necklace hero — "This took nineteen years to form."
// Act II:  Scroll-driven typographic revelation (6 lines, sticky progress bar)
// Act III: Asymmetric necklace trio (Essence / Tension / Sanctum)
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

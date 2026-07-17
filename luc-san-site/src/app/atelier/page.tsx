import type { Metadata } from "next";
import AtelierHero from "@/components/atelier/AtelierHero";
import AtelierDoctrine, { type Discipline } from "@/components/atelier/AtelierDoctrine";
import ThreeDisciplines from "@/components/atelier/ThreeDisciplines";
import MaterialLexicon from "@/components/atelier/MaterialLexicon";
import NacreLifecycle from "@/components/atelier/NacreLifecycle";
import AtelierVoice from "@/components/atelier/AtelierVoice";
import SchoolArchive from "@/components/atelier/SchoolArchive";
import CommissionCTA from "@/components/atelier/CommissionCTA";

export const metadata: Metadata = {
  title: "The Atelier — Nacre Aesthetic Movement by Lục San",
  description:
    "The Nacre method: a doctrine of layered revelation. The design school of Lục San works geological materials — jade, pearl, amber, bronze — according to a single principle: read first, intervene last.",
};

const DISCIPLINES: readonly Discipline[] = [
  {
    num: "01",
    title: "Geological Reading",
    body: "Before carving begins, the material is studied for its formation narrative, fibre direction, and internal structure. For jade: the fibre orientation determines the cutting plane. For amber: the inclusion inventory determines the external form. The first tool is observation. The last tool is patience.",
    example: "Nephrite jade, British Columbia",
  },
  {
    num: "02",
    title: "Material Intervention",
    body: "No adhesive. Tension and gravity only. The object is complete when nothing can be added and nothing can be removed. If a connection requires adhesive to hold, the design is wrong. Every join is structural before it is aesthetic.",
    example: "Baroque pearl in tension cradle",
  },
  {
    num: "03",
    title: "Temporal Design",
    body: "Every object is designed for fifty years of use. The patina schedule is written before fabrication begins. Sterling silver toward warm grey. Bronze toward chestnut. Jade brightening. Pearl unchanging. The piece is designed for what it will become, not for what it is.",
    example: "Jade cuff — bronze and nephrite, opposing patinas",
  },
] as const;

export default function AtelierPage() {
  return (
    <div>
      <AtelierHero />
      <AtelierDoctrine disciplines={DISCIPLINES} />
      <ThreeDisciplines disciplines={DISCIPLINES} />
      <MaterialLexicon />
      <NacreLifecycle />
      <AtelierVoice />
      <SchoolArchive />
      <CommissionCTA />
    </div>
  );
}

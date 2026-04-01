export interface BiographyTimelineEntry {
  year: string;
  event: string;
}

export interface Biography {
  id: string;
  name: string;
  role: string;
  location: string;
  born: string;
  statement: string;
  audioSrc?: string;
  portrait: string;
  philosophy: string;
  timeline: BiographyTimelineEntry[];
  works: string[]; // talisman IDs
}

export interface LucSanObject {
  id: string;
  tier: "Elemental" | "Composed" | "Complex" | "Commissioned";
  title: string;
  materials: string[];
  hours: number;
  copy: string;
  longCopy?: string;
  image: string;
}

export interface Material {
  id: string;
  name: string;
  formation: string;
  epoch: string;
  property: string;
  temporal: string;
  image: string;
}

export type TalismanTier = "Elemental" | "Composed" | "Complex" | "Commissioned";

export interface Talisman {
  id: string;
  tier: TalismanTier;
  title: string;
  materials: string[];
  hours: number;
  copy: string;
  longCopy: string;
  image: string;
  // Geological genesis
  formation: string;
  era: string;
  provenance: string;
  authentication: string;
  // Fabrication
  processImages: string[];
  // Cultural fragment
  culturalQuote: string;
  culturalAttribution: string;
  // Lifecycle
  patina: string;
}

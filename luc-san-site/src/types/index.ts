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

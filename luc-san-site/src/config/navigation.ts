export const navigation = [
  { label: "Talismans", href: "/talismans" },
  { label: "Atelier",   href: "/atelier"   },
  { label: "Commission", href: "/commission" },
] as const;

export type NavItem = (typeof navigation)[number];

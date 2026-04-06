export const navigation = [
  { label: "TALISMANS",  href: "/talismans"  },
  { label: "ATELIER",    href: "/atelier"    },
  { label: "COMMISSION", href: "/commission" },
] as const;

export type NavItem = (typeof navigation)[number];

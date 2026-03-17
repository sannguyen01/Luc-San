export const navigation = [
  { label: "World", href: "/" },
  { label: "Objects", href: "/objects" },
  { label: "Materials", href: "/materials" },
  { label: "Spaces", href: "/spaces" },
] as const;

export type NavItem = (typeof navigation)[number];

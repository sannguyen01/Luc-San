import type { MetadataRoute } from "next";
import talismansData from "@/content/talismans.json";
import biographiesData from "@/content/biographies.json";

const BASE_URL = "https://www.luc-san.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                     priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/talismans`,      priority: 0.9, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/atelier`,        priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/commission`,     priority: 0.7, changeFrequency: "yearly"  },
  ];

  const talismanRoutes: MetadataRoute.Sitemap = (talismansData as { id: string }[]).map((t) => ({
    url: `${BASE_URL}/talismans/${t.id}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const biographyRoutes: MetadataRoute.Sitemap = (biographiesData as { id: string }[]).map((b) => ({
    url: `${BASE_URL}/biography/${b.id}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...talismanRoutes, ...biographyRoutes];
}

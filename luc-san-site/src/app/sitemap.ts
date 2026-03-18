import type { MetadataRoute } from "next";
import objectsData from "@/content/objects.json";
import type { LucSanObject } from "@/types";

const objects = objectsData as LucSanObject[];
const BASE_URL = "https://lucsan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  priority: 1.0,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/objects`,     priority: 0.9,  changeFrequency: "weekly"  },
    { url: `${BASE_URL}/materials`,   priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/spaces`,      priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`,     priority: 0.6,  changeFrequency: "yearly"  },
  ];

  const objectRoutes: MetadataRoute.Sitemap = objects.map((obj) => ({
    url: `${BASE_URL}/objects/${obj.id}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...objectRoutes];
}

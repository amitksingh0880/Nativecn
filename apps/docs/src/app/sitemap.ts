import { MetadataRoute } from "next";
import { docsRegistry } from "../data/docs-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nativecn-docs.vercel.app";

  // 1. Static site routes
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/simulations`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // 2. Dynamic component documentation pages
  const registryPages: MetadataRoute.Sitemap = [];

  for (const category of Object.keys(docsRegistry)) {
    const slugMap = docsRegistry[category];
    for (const slug of Object.keys(slugMap)) {
      registryPages.push({
        url: `${baseUrl}/docs/${category}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  return [...staticPages, ...registryPages];
}

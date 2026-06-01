import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

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

  // 2. Dynamic component documentation pages scanned via File System
  const registryPages: MetadataRoute.Sitemap = [];
  const categories = ["core", "premium"];

  try {
    const cwd = process.cwd();
    // Path inside workspace: apps/docs/src/data/registry/
    const registryDir = path.join(cwd, "src", "data", "registry");
    
    for (const category of categories) {
      const categoryPath = path.join(registryDir, category);
      if (fs.existsSync(categoryPath)) {
        const slugs = fs.readdirSync(categoryPath);
        for (const slug of slugs) {
          const slugPath = path.join(categoryPath, slug);
          if (fs.statSync(slugPath).isDirectory()) {
            registryPages.push({
              url: `${baseUrl}/docs/${category}/${slug}`,
              lastModified: new Date(),
              changeFrequency: "weekly" as const,
              priority: 0.8,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error);
  }

  return [...staticPages, ...registryPages];
}

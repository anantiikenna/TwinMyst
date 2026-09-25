import { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://twinkmyst.com";
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, freq: "monthly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/solutions", priority: 0.8, freq: "monthly" as const },
    { path: "/store", priority: 0.8, freq: "weekly" as const },
    { path: "/portfolio", priority: 0.8, freq: "monthly" as const },
    { path: "/about", priority: 0.7, freq: "yearly" as const },
    { path: "/contact", priority: 0.8, freq: "yearly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.9,
    freq: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}

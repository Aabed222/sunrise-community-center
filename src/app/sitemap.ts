import type { MetadataRoute } from "next";

const routes = ["", "/about", "/academics", "/community", "/events", "/donate", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sunrise-community.org";
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}

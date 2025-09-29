import type { MetadataRoute } from "next";

const SITE_URL = "https://korva.gatzz.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [""]; // adicione páginas públicas extras se houver

  return routes.map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.8,
  }));
}

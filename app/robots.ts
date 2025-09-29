import type { MetadataRoute } from "next";

const SITE_URL = "https://korva.gatzz.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/conta/*", "/checkout/*", "/pagamento/*", "/_next/"] }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

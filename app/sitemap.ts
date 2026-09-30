import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatorsaquarium.com";

  const routes = [
    "",
    "/services",
    "/services/maintenance",
    "/services/setup",
    "/services/planted-aquarium",
    "/services/marine-aquarium",
    "/services/relocation",
    "/how-it-works",
    "/maintenance-plans",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}

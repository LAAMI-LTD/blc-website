import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bbtikenya.co.ke";
  const staticRoutes = ["", "/about", "/courses", "/team", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const courseRoutes = courses.map((c) => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...courseRoutes];
}

import type { MetadataRoute } from "next";
import { languageCourses } from "@/data/courses";
import { departments } from "@/data/departments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bbtikenya.co.ke";

  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/team",
    "/testimonials",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  // Only the 9 language courses have individual detail pages
  // (/courses/[slug]) — other departments are covered by
  // /departments/[slug] instead. Using the full `courses` array here
  // would generate ~100 sitemap entries pointing at pages that don't
  // exist (dynamicParams is false on that route).
  const courseRoutes = languageCourses.map((c) => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
  }));

  const departmentRoutes = departments.map((d) => ({
    url: `${base}/departments/${d.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...courseRoutes, ...departmentRoutes];
}

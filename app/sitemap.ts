import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { portfolio } from "@/lib/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kergix.com";

  // 1. Static Routes definitions
  const staticPaths = ["", "/about", "/services", "/portfolio", "/industries", "/pricing", "/testimonials", "/faq", "/contact"];
  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? (1.0 as const) : (0.8 as const),
  }));

  // 2. Dynamic Service detail routes
  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as const,
  }));

  // 3. Dynamic Industry detail routes
  const industryEntries = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as const,
  }));

  // 4. Dynamic Case Study detail routes
  const portfolioEntries = portfolio.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6 as const,
  }));

  return [...staticEntries, ...serviceEntries, ...industryEntries, ...portfolioEntries];
}

import type { MetadataRoute } from "next";
import { pageOrder } from "./treatment/content";

const baseUrl = "https://treatmentsolutions.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...pageOrder.map((page) => page.slug)];

  return pages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

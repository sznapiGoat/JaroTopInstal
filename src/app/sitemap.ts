import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const cesty = [
    ["", 1],
    ["/instalater-plzen", 0.9],
    ["/topenar-plzen", 0.9],
    ["/zakazky", 0.6],
    ["/kontakt", 0.7],
  ] as const;
  return cesty.map(([cesta, priority]) => ({ url: `${SITE_URL}${cesta}`, priority }));
}

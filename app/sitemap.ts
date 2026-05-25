import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataintel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // English home (canonical — no locale prefix)
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${BASE_URL}/`,
          es: `${BASE_URL}/es`,
        },
      },
    },
    // Spanish home
    {
      url: `${BASE_URL}/es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/`,
          es: `${BASE_URL}/es`,
        },
      },
    },
    // English services
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/services`,
          es: `${BASE_URL}/es/services`,
        },
      },
    },
    // Spanish services
    {
      url: `${BASE_URL}/es/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/services`,
          es: `${BASE_URL}/es/services`,
        },
      },
    },
  ];
}

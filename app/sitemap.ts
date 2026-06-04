import type { MetadataRoute } from "next";
import { getAllResources } from "@/content/resources";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataintel.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const resources = getAllResources("en");

  return [
    // English home (canonical — no locale prefix)
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          "x-default": `${BASE_URL}/`,
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
          "x-default": `${BASE_URL}/`,
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
          "x-default": `${BASE_URL}/services`,
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
          "x-default": `${BASE_URL}/services`,
          en: `${BASE_URL}/services`,
          es: `${BASE_URL}/es/services`,
        },
      },
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "x-default": `${BASE_URL}/resources`,
          en: `${BASE_URL}/resources`,
          es: `${BASE_URL}/es/resources`,
        },
      },
    },
    {
      url: `${BASE_URL}/es/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "x-default": `${BASE_URL}/resources`,
          en: `${BASE_URL}/resources`,
          es: `${BASE_URL}/es/resources`,
        },
      },
    },
    ...resources.flatMap((resource) => [
      {
        url: `${BASE_URL}/resources/${resource.slug}`,
        lastModified: new Date(`${resource.publishedAt}T00:00:00Z`),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            "x-default": `${BASE_URL}/resources/${resource.slug}`,
            en: `${BASE_URL}/resources/${resource.slug}`,
            es: `${BASE_URL}/es/resources/${resource.slug}`,
          },
        },
      },
      {
        url: `${BASE_URL}/es/resources/${resource.slug}`,
        lastModified: new Date(`${resource.publishedAt}T00:00:00Z`),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            "x-default": `${BASE_URL}/resources/${resource.slug}`,
            en: `${BASE_URL}/resources/${resource.slug}`,
            es: `${BASE_URL}/es/resources/${resource.slug}`,
          },
        },
      },
    ]),
  ];
}

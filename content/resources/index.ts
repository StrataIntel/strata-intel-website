import type { ComponentType } from "react";
import type { MDXComponents } from "mdx/types";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

type ResourceModule = {
  default: ComponentType<{ components?: MDXComponents }>;
};

type LocalizedField = Record<Locale, string>;

type ResourceEntry = {
  id: string;
  slug: string;
  publishedAt: string;
  readingMinutes: number;
  title: LocalizedField;
  description: LocalizedField;
  excerpt: LocalizedField;
  category: LocalizedField;
  keywords: Record<Locale, string[]>;
};

export type ResourceSummary = ResourceEntry & {
  locale: Locale;
  localizedTitle: string;
  localizedDescription: string;
  localizedExcerpt: string;
  localizedCategory: string;
  localizedKeywords: string[];
};

const resources: ResourceEntry[] = [
  {
    id: "when-to-use-lidar-photogrammetry-and-magnetometry",
    slug: "when-to-use-lidar-photogrammetry-and-magnetometry-in-the-field",
    publishedAt: "2026-06-04",
    readingMinutes: 11,
    title: {
      en: "LiDAR, photogrammetry, and magnetometry: when to use each technology in the field",
      es: "LiDAR, fotogrametría y magnetometría: cuándo usar cada tecnología en campo",
    },
    description: {
      en: "A practical guide to choosing between LiDAR, photogrammetry, and aerial magnetometry based on the operational question teams need to answer before acting in the field.",
      es: "Una guía práctica para escoger entre LiDAR, fotogrametría y magnetometría aérea según la pregunta operativa que el equipo necesita responder antes de actuar en campo.",
    },
    excerpt: {
      en: "These technologies do not compete with each other. They answer different questions about surface visibility, terrain geometry, and buried metallic infrastructure. The right choice starts with the decision, not the drone.",
      es: "Estas tecnologías no compiten entre sí. Responden preguntas distintas sobre visibilidad superficial, geometría del terreno e infraestructura metálica enterrada. La elección correcta empieza por la decisión, no por el drone.",
    },
    category: {
      en: "Technology Selection",
      es: "Selección de Tecnología",
    },
    keywords: {
      en: [
        "LiDAR vs photogrammetry",
        "aerial magnetometry",
        "drone survey planning",
        "field intelligence technology",
      ],
      es: [
        "LiDAR vs fotogrametría",
        "magnetometría aérea",
        "planificación de levantamientos con drones",
        "tecnología de inteligencia de campo",
      ],
    },
  },
  {
    id: "from-drone-survey-to-decision-map",
    slug: "from-drone-survey-to-decision-map-what-field-intelligence-should-deliver",
    publishedAt: "2026-06-04",
    readingMinutes: 10,
    title: {
      en: "From drone survey to decision map: what a field intelligence service should deliver",
      es: "De levantamiento con drone a mapa de decisión: qué debe entregar un servicio de inteligencia de campo",
    },
    description: {
      en: "Why a drone survey should not end as a folder full of files, and which deliverables actually help operations, engineering, maintenance, and contractors act with less uncertainty.",
      es: "Por qué un levantamiento con drone no debería terminar en una carpeta llena de archivos y cuáles son los entregables que realmente ayudan a operaciones, ingeniería, mantenimiento y contratistas a actuar con menos incertidumbre.",
    },
    excerpt: {
      en: "The final product is not the flight. It is a better-informed decision. This article explains the maps, coordinates, anomaly layers, GIS outputs, and technical reporting that turn raw field data into operational intelligence.",
      es: "El producto final no es el vuelo. Es una decisión mejor informada. Este artículo explica los mapas, coordenadas, capas de anomalías, salidas GIS e informes técnicos que convierten la data de campo en inteligencia operativa.",
    },
    category: {
      en: "Deliverables",
      es: "Entregables",
    },
    keywords: {
      en: [
        "field intelligence deliverables",
        "drone survey outputs",
        "anomaly maps",
        "operational intelligence",
      ],
      es: [
        "entregables de inteligencia de campo",
        "salidas de levantamientos con drones",
        "mapas de anomalías",
        "inteligencia operativa",
      ],
    },
  },
  {
    id: "why-incomplete-drawings-increase-operational-risk",
    slug: "why-incomplete-drawings-and-outdated-data-increase-operational-risk",
    publishedAt: "2026-06-04",
    readingMinutes: 10,
    title: {
      en: "Why incomplete drawings and outdated data increase operational risk",
      es: "Por qué los planos incompletos y la data desactualizada aumentan el riesgo operativo",
    },
    description: {
      en: "An explanation of how the gap between documentation and site reality creates risk before excavation, maintenance, construction, inspection, and equipment mobilization.",
      es: "Una explicación de cómo la brecha entre la documentación y la realidad del sitio crea riesgo antes de excavaciones, mantenimiento, construcción, inspección y movilización de equipos.",
    },
    excerpt: {
      en: "The risk often begins before execution starts. When drawings, models, and reports no longer match the field, teams plan with partial reality. This article explains why that gap matters and how field data helps close it.",
      es: "El riesgo muchas veces empieza antes de la ejecución. Cuando planos, modelos y reportes ya no coinciden con el campo, los equipos planifican con una realidad parcial. Este artículo explica por qué esa brecha importa y cómo la data de campo ayuda a cerrarla.",
    },
    category: {
      en: "Operational Risk",
      es: "Riesgo Operativo",
    },
    keywords: {
      en: [
        "outdated drawings",
        "operational risk",
        "field reality vs records",
        "mature oilfields",
      ],
      es: [
        "planos desactualizados",
        "riesgo operativo",
        "realidad de campo vs registros",
        "campos petroleros maduros",
      ],
    },
  },
  {
    id: "what-aerial-magnetometry-can-detect",
    slug: "what-aerial-magnetometry-can-detect-in-oilfield-operations",
    publishedAt: "2026-06-04",
    readingMinutes: 10,
    title: {
      en: "What aerial magnetometry can detect in oilfield operations",
      es: "Qué puede detectar la magnetometría aérea en operaciones petroleras",
    },
    description: {
      en: "A practical explanation of what aerial magnetometry can and cannot reveal in mature oilfields, and why anomaly mapping matters before excavation, intervention, or mobilization.",
      es: "Una explicación práctica de lo que la magnetometría aérea puede y no puede revelar en campos maduros, y por qué el mapeo de anomalías importa antes de excavar, intervenir o movilizar equipos.",
    },
    excerpt: {
      en: "Buried lines, casing remnants, abandoned wellheads, and undocumented metallic infrastructure can create avoidable risk. This article explains the kinds of subsurface signals aerial magnetometry helps teams identify before work starts.",
      es: "Líneas enterradas, restos de casing, cabezales abandonados e infraestructura metálica no documentada pueden generar riesgos evitables. Este artículo explica qué tipos de señales subsuperficiales ayuda a identificar la magnetometría aérea antes de iniciar trabajos.",
    },
    category: {
      en: "Aerial Magnetometry",
      es: "Magnetometría Aérea",
    },
    keywords: {
      en: [
        "aerial magnetometry",
        "buried pipeline detection",
        "oilfield excavation risk",
        "magnetic anomalies",
      ],
      es: [
        "magnetometría aérea",
        "detección de tuberías enterradas",
        "riesgo de excavación petrolera",
        "anomalías magnéticas",
      ],
    },
  },
  {
    id: "reduce-uncertainty-before-excavations",
    slug: "reduce-uncertainty-before-excavations-in-mature-oilfields",
    publishedAt: "2026-06-04",
    readingMinutes: 9,
    title: {
      en: "How to reduce uncertainty before excavations and interventions in mature oilfields",
      es: "Cómo reducir incertidumbre antes de excavaciones e intervenciones en campos petroleros maduros",
    },
    description: {
      en: "A practical look at why mature oilfields drift away from their records and how field intelligence helps teams make safer excavation and intervention decisions.",
      es: "Una mirada práctica a por qué los campos petroleros maduros se desalinean de sus registros y cómo la inteligencia de campo ayuda a tomar decisiones más seguras antes de excavar o intervenir.",
    },
    excerpt: {
      en: "Mature oilfields change faster than their plans. This article explains how drones, sensors, and field intelligence help close the gap between outdated records and on-site reality before work begins.",
      es: "Los campos maduros cambian más rápido que sus planos. Este artículo explica cómo drones, sensores e inteligencia de campo ayudan a cerrar la brecha entre registros desactualizados y la realidad del sitio antes de actuar.",
    },
    category: {
      en: "Field Intelligence",
      es: "Inteligencia de Campo",
    },
    keywords: {
      en: [
        "mature oilfields",
        "excavation risk reduction",
        "field intelligence",
        "aerial magnetometry",
      ],
      es: [
        "campos petroleros maduros",
        "reducción de riesgo en excavación",
        "inteligencia de campo",
        "magnetometría aérea",
      ],
    },
  },
];

const resourceModules: Record<
  string,
  Record<Locale, () => Promise<ResourceModule>>
> = {
  "when-to-use-lidar-photogrammetry-and-magnetometry": {
    en: () =>
      import(
        "@/content/resources/when-to-use-lidar-photogrammetry-and-magnetometry/en.mdx"
      ),
    es: () =>
      import(
        "@/content/resources/when-to-use-lidar-photogrammetry-and-magnetometry/es.mdx"
      ),
  },
  "from-drone-survey-to-decision-map": {
    en: () =>
      import(
        "@/content/resources/from-drone-survey-to-decision-map/en.mdx"
      ),
    es: () =>
      import(
        "@/content/resources/from-drone-survey-to-decision-map/es.mdx"
      ),
  },
  "why-incomplete-drawings-increase-operational-risk": {
    en: () =>
      import(
        "@/content/resources/why-incomplete-drawings-increase-operational-risk/en.mdx"
      ),
    es: () =>
      import(
        "@/content/resources/why-incomplete-drawings-increase-operational-risk/es.mdx"
      ),
  },
  "what-aerial-magnetometry-can-detect": {
    en: () =>
      import(
        "@/content/resources/what-aerial-magnetometry-can-detect/en.mdx"
      ),
    es: () =>
      import(
        "@/content/resources/what-aerial-magnetometry-can-detect/es.mdx"
      ),
  },
  "reduce-uncertainty-before-excavations": {
    en: () =>
      import(
        "@/content/resources/reduce-uncertainty-before-excavations/en.mdx"
      ),
    es: () =>
      import(
        "@/content/resources/reduce-uncertainty-before-excavations/es.mdx"
      ),
  },
};

function sortByDateDescending(left: ResourceEntry, right: ResourceEntry) {
  return right.publishedAt.localeCompare(left.publishedAt);
}

export function getAllResources(locale: Locale): ResourceSummary[] {
  return [...resources].sort(sortByDateDescending).map((resource) => ({
    ...resource,
    locale,
    localizedTitle: resource.title[locale],
    localizedDescription: resource.description[locale],
    localizedExcerpt: resource.excerpt[locale],
    localizedCategory: resource.category[locale],
    localizedKeywords: resource.keywords[locale],
  }));
}

export function getResourceBySlug(slug: string): ResourceEntry | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export async function getResourceContent(slug: string, locale: Locale) {
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return null;
  }

  const loader = resourceModules[resource.id]?.[locale];

  if (!loader) {
    return null;
  }

  const loadedResource = await loader();

  return {
    resource,
    Content: loadedResource.default,
  };
}

export function getResourceAlternates(resource: ResourceEntry) {
  return {
    "x-default": `/resources/${resource.slug}`,
    en: `/resources/${resource.slug}`,
    es: `/es/resources/${resource.slug}`,
  };
}

export function getResourceStaticParams() {
  return routing.locales.flatMap((locale) =>
    resources.map((resource) => ({ locale, slug: resource.slug })),
  );
}

export function formatResourceDate(locale: Locale, publishedAt: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${publishedAt}T00:00:00Z`));
}
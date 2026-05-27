import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import TechnologyPage from "@/app/components/TechnologyPage";
import Footer from "@/app/components/Footer";
import { routing } from "@/i18n/routing";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataintel.net";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "technology" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/technology" : `/${locale}/technology`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/technology",
        en: "/technology",
        es: "/es/technology",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: `${BASE_URL}${canonicalPath}`,
      siteName: "StrataIntel",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: [
        {
          url: "/real-images/Industrial Drone _ Gas hybrid.webp",
          width: 1200,
          height: 900,
          alt: t("metadata.title"),
        },
      ],
    },
  };
}

export default async function Technology({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Nav />
      <TechnologyPage />
      <Footer />
    </main>
  );
}

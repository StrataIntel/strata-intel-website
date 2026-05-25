import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import ServicesPage from "@/app/components/ServicesPage";
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
  const t = await getTranslations({ locale, namespace: "services" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/services" : `/${locale}/services`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/services",
        en: "/services",
        es: "/es/services",
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
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("metadata.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: ["/og-image.png"],
    },
  };
}

export default async function Services({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <ServicesPage />
      <Footer />
    </>
  );
}

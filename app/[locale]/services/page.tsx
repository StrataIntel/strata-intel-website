import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import ServicesPage from "@/app/components/ServicesPage";
import Footer from "@/app/components/Footer";
import { routing } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
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

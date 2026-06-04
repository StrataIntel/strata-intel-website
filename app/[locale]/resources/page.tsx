import type { Metadata } from "next";
import { ArrowRight, Clock3, MoveRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BookACall from "@/app/components/BookACall";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import {
  formatResourceDate,
  getAllResources,
  type Locale,
} from "@/content/resources";
import { Link } from "@/i18n/navigation";
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
  const t = await getTranslations({ locale, namespace: "resources" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/resources" : `/${locale}/resources`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/resources",
        en: "/resources",
        es: "/es/resources",
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
          url: "/carousel/Mission_Carrousel.webp",
          width: 1456,
          height: 816,
          alt: t("metadata.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: ["/carousel/Mission_Carrousel.webp"],
    },
  };
}

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "resources" });
  const resources = getAllResources(activeLocale);
  const featuredResource = resources[0];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Nav />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 inline-block rounded-sm border border-amber-400/20 bg-amber-400/10 px-4 py-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                {t("eyebrow")}
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              {t("description")}
            </p>
          </div>

          <div className="rounded-sm border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              {t("introCardLabel")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              {t("introCardBody")}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
              <Clock3 size={16} className="text-amber-400" />
              <span>{t("articleCountLabel", { count: resources.length })}</span>
            </div>
          </div>
        </div>
      </section>

      {featuredResource ? (
        <section className="border-t border-zinc-800/50 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
                  {t("featuredLabel")}
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
                  {t("featuredTitle")}
                </h2>
              </div>
            </div>

            <Link
              href={`/resources/${featuredResource.slug}`}
              className="group block rounded-sm border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-zinc-900/80"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                <span className="text-amber-400">{featuredResource.localizedCategory}</span>
                <span>{formatResourceDate(activeLocale, featuredResource.publishedAt)}</span>
                <span>{t("readingTimeLabel", { minutes: featuredResource.readingMinutes })}</span>
              </div>
              <h3 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-zinc-100 transition-colors duration-200 group-hover:text-amber-300">
                {featuredResource.localizedTitle}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                {featuredResource.localizedExcerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400">
                {t("readArticleCta")}
                <MoveRight size={15} />
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                {t("libraryLabel")}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
                {t("libraryTitle")}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              {t("libraryDescription")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col rounded-sm border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-zinc-900/70"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                  <span className="text-amber-400">{resource.localizedCategory}</span>
                  <span>{formatResourceDate(activeLocale, resource.publishedAt)}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-100 transition-colors duration-200 group-hover:text-amber-300">
                  {resource.localizedTitle}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                  {resource.localizedDescription}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400">
                  {t("cardCta")}
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-800 bg-zinc-900/20">
        <BookACall />
      </div>
      <Footer />
    </main>
  );
}
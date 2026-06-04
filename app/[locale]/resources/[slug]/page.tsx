import type { Metadata } from "next";
import { ArrowLeft, Clock3, MoveRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BookACall from "@/app/components/BookACall";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import {
  formatResourceDate,
  getResourceAlternates,
  getResourceContent,
  getResourceStaticParams,
  type Locale,
} from "@/content/resources";
import { Link } from "@/i18n/navigation";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataintel.net";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getResourceStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const activeLocale = locale as Locale;
  const resourceContent = await getResourceContent(slug, activeLocale);

  if (!resourceContent) {
    notFound();
  }

  const { resource } = resourceContent;
  const canonicalPath =
    activeLocale === "en"
      ? `/resources/${resource.slug}`
      : `/${activeLocale}/resources/${resource.slug}`;

  return {
    title: resource.title[activeLocale],
    description: resource.description[activeLocale],
    keywords: resource.keywords[activeLocale],
    alternates: {
      canonical: canonicalPath,
      languages: getResourceAlternates(resource),
    },
    openGraph: {
      type: "article",
      locale: activeLocale === "es" ? "es_MX" : "en_US",
      alternateLocale: activeLocale === "es" ? "en_US" : "es_MX",
      url: `${BASE_URL}${canonicalPath}`,
      siteName: "StrataIntel",
      title: resource.title[activeLocale],
      description: resource.description[activeLocale],
      publishedTime: resource.publishedAt,
      images: [
        {
          url: "/carousel/Mission_Carrousel.webp",
          width: 1456,
          height: 816,
          alt: resource.title[activeLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title[activeLocale],
      description: resource.description[activeLocale],
      images: ["/carousel/Mission_Carrousel.webp"],
    },
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const activeLocale = locale as Locale;
  setRequestLocale(locale);

  const resourceContent = await getResourceContent(slug, activeLocale);

  if (!resourceContent) {
    notFound();
  }

  const { resource, Content } = resourceContent;
  const t = await getTranslations({ locale, namespace: "resources" });

  return (
    <main className="min-h-screen bg-zinc-950">
      <Nav />

      <article className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-amber-400"
        >
          <ArrowLeft size={15} />
          {t("backToResources")}
        </Link>

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex flex-wrap items-center gap-3 rounded-sm border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
            <span>{resource.category[activeLocale]}</span>
            <span className="text-amber-200/60">•</span>
            <span>{formatResourceDate(activeLocale, resource.publishedAt)}</span>
            <span className="text-amber-200/60">•</span>
            <span>{t("readingTimeLabel", { minutes: resource.readingMinutes })}</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-zinc-100">
            {resource.title[activeLocale]}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {resource.description[activeLocale]}
          </p>
        </div>

        <div className="mt-12 rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-6 border-b border-zinc-800 pb-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Clock3 size={15} className="text-amber-400" />
              <span>{t("readingTimeLabel", { minutes: resource.readingMinutes })}</span>
            </div>
            <div>{formatResourceDate(activeLocale, resource.publishedAt)}</div>
          </div>

          <div className="mt-10">
            <Content />
          </div>
        </div>

        <div className="mt-12 rounded-sm border border-zinc-800 bg-zinc-900/30 p-8">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
            {t("closingCta.eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-100">
            {t("closingCta.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            {t("closingCta.description")}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-amber-300"
          >
            {t("closingCta.button")}
            <MoveRight size={15} />
          </Link>
        </div>
      </article>

      <div className="border-t border-zinc-800 bg-zinc-900/20">
        <BookACall />
      </div>
      <Footer />
    </main>
  );
}
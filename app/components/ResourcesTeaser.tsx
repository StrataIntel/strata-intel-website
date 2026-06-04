import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  formatResourceDate,
  getAllResources,
  type Locale,
} from "@/content/resources";
import { Link } from "@/i18n/navigation";

type ResourcesTeaserProps = {
  locale: string;
};

export default async function ResourcesTeaser({ locale }: ResourcesTeaserProps) {
  const activeLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: "resources.teaser" });
  const featuredResource = getAllResources(activeLocale)[0];

  if (!featuredResource) {
    return null;
  }

  return (
    <section className="border-t border-zinc-800/50 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {t("description")}
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 self-start rounded-sm bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-amber-300"
          >
            {t("cta")}
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <Link
            href={`/resources/${featuredResource.slug}`}
            className="group rounded-sm border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-zinc-900/80"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              <span className="text-amber-400">{featuredResource.localizedCategory}</span>
              <span>{formatResourceDate(activeLocale, featuredResource.publishedAt)}</span>
            </div>
            <h3 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-200 group-hover:text-amber-300">
              {featuredResource.localizedTitle}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
              {featuredResource.localizedExcerpt}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400">
              {t("featuredCta")}
              <ArrowRight size={15} />
            </div>
          </Link>

          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              {t("sidebarLabel")}
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {t("sidebarDescription")}
            </p>
            <div className="mt-8 border-t border-zinc-800 pt-6">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                {t("firstArticleLabel")}
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-zinc-100">
                {featuredResource.localizedTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {featuredResource.localizedDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
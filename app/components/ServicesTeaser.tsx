"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ServicesTeaser() {
  const t = useTranslations("services.teaser");

  return (
    <section className="border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-4">
          {t("eyebrow")}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200"
            >
              {t("cta")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

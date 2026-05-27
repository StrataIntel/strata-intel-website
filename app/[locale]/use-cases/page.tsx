import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import UseCases from "@/app/components/UseCases";
import Footer from "@/app/components/Footer";
import { routing } from "@/i18n/routing";
import Image from "next/image";

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
  const t = await getTranslations({ locale, namespace: "useCases" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/use-cases" : `/${locale}/use-cases`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/use-cases",
        en: "/use-cases",
        es: "/es/use-cases",
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

export default async function UseCasesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "useCases" });
  const goodFit = t.raw("goodFit") as string[];
  const notIdeal = t.raw("notIdeal") as string[];

  return (
    <main className="bg-zinc-950 min-h-screen flex flex-col">
      <Nav />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-sm bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                {t("hero.eyebrow")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-sm border border-zinc-800 overflow-hidden bg-zinc-900/40">
            <Image
              src="/real-images/software screenshot.webp"
              alt="Field intelligence data analysis software showing subsurface detection results"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Use Cases */}
      <UseCases />

      {/* Detailed Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("deepDiveTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("deepDiveDescription")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Case Study 1 */}
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-amber-400">01</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-zinc-100 text-xl mb-3">Pre-Excavation Risk Assessment</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Before any ground is broken, contractors need to know what lies beneath. Incomplete records and decades of operational history make this one of the most critical use cases for aerial magnetometry.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                    <div className="text-xs font-medium text-amber-400 mb-2 uppercase tracking-wider">The Challenge</div>
                    <ul className="space-y-2 text-xs text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Undocumented buried pipelines from previous operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Outdated as-built drawings that don't match field reality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Risk of pipeline strikes during trenching or excavation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                    <div className="text-xs font-medium text-amber-400 mb-2 uppercase tracking-wider">The Solution</div>
                    <ul className="space-y-2 text-xs text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Magnetic anomaly maps showing buried metallic infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Risk zones identified before contractor mobilization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Reduced probability of accidental contact and downtime</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-500">Impact:</strong> Contractors receive verified subsurface risk maps before ground operations start, reducing unexpected delays and enabling more accurate project bidding.
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-amber-400">02</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-zinc-100 text-xl mb-3">Rehabilitation Planning in Mature Fields</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Heavy-crude operations leave complex infrastructure legacies. Understanding what's buried before rehabilitation begins is critical for project safety and cost control.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                    <div className="text-xs font-medium text-amber-400 mb-2 uppercase tracking-wider">The Challenge</div>
                    <ul className="space-y-2 text-xs text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Multiple operational phases over decades create subsurface complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>As-built records incomplete or lost during ownership changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Remediation budgets uncertain without knowing buried extent</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                    <div className="text-xs font-medium text-amber-400 mb-2 uppercase tracking-wider">The Solution</div>
                    <ul className="space-y-2 text-xs text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Systematic survey of rehabilitation zones before mobilization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Baseline mapping of buried infrastructure extent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5">•</span>
                        <span>Better cost estimates and project scope definition</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-500">Impact:</strong> Rehabilitation projects start with clearer understanding of site complexity, enabling more realistic budgets and timelines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("whenToUseTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("whenToUseDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <h3 className="font-semibold text-zinc-100 text-lg mb-4 flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              Good Fit
            </h3>
            <ul className="space-y-3">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="text-amber-400/60 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <h3 className="font-semibold text-zinc-100 text-lg mb-4 flex items-center gap-2">
              <span className="text-zinc-600">⚠</span>
              Not Ideal
            </h3>
            <ul className="space-y-3">
              {notIdeal.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                  <span className="text-zinc-600 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            {t("ctaDescription")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-amber-400 text-zinc-950 font-semibold text-sm rounded-sm hover:bg-amber-300 transition-colors duration-200"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="/magnetometry"
              className="px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold text-sm rounded-sm hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

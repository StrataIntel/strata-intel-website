import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import FlagshipCapability from "@/app/components/FlagshipCapability";
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
  const t = await getTranslations({ locale, namespace: "flagship" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/magnetometry" : `/${locale}/magnetometry`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/magnetometry",
        en: "/magnetometry",
        es: "/es/magnetometry",
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

export default async function Magnetometry({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "flagship" });
  const howItWorksSteps = t.raw("howItWorksSteps") as Array<{title: string; body: string}>;
  const advantages = t.raw("advantages") as Array<{title: string; body: string; details: string[]}>;

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
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="px-6 py-3 bg-amber-400 text-zinc-950 font-semibold text-sm rounded-sm hover:bg-amber-300 transition-colors duration-200"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#flagship"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold text-sm rounded-sm hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-sm border border-zinc-800 overflow-hidden bg-zinc-900/40">
            <Image
              src="/real-images/Industrial drone hybrid _ mag payload.webp"
              alt="Industrial drone with magnetometer payload for subsurface detection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("howItWorksDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {howItWorksSteps.map((step, i) => (
            <div key={i} className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
              <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-400">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-zinc-100 mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Capability Details */}
      <FlagshipCapability />

      {/* Advantages Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("whyTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("whyDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, i) => (
            <div key={i} className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-amber-400/40 transition-colors duration-200">
              <h3 className="font-semibold text-zinc-100 mb-3 text-lg">{advantage.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                {advantage.body}
              </p>
              <ul className="space-y-2 text-xs text-zinc-600">
                {advantage.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
              href="/#use-cases"
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

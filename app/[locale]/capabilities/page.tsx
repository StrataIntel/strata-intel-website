import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import PackagedCapabilities from "@/app/components/PackagedCapabilities";
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
  const t = await getTranslations({ locale, namespace: "capabilities" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/capabilities" : `/${locale}/capabilities`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/capabilities",
        en: "/capabilities",
        es: "/es/capabilities",
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

export default async function CapabilitiesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "capabilities" });
  const missionBenefits = t.raw("missionBenefits") as string[];

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
              src="/real-images/LIDAR Drone.webp"
              alt="Industrial drone equipped with LIDAR sensor for terrain mapping"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <PackagedCapabilities />

      {/* Integrated Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("integratedTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("integratedDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <h3 className="font-semibold text-zinc-100 mb-4 text-xl">Subsurface + Surface Mapping</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Pair magnetometry with LiDAR to understand both what's beneath the ground and the precise surface topology.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">Buried pipeline detection + terrain elevation</div>
                  <div className="text-xs text-zinc-600">Plan excavation routes considering both subsurface hazards and surface drainage</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">Infrastructure verification + site modeling</div>
                  <div className="text-xs text-zinc-600">Validate buried asset locations while creating accurate 3D field models</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <h3 className="font-semibold text-zinc-100 mb-4 text-xl">Environmental + Asset Detection</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Combine methane sensing with visual and magnetic surveys for comprehensive field assessment.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">Emission detection + buried line mapping</div>
                  <div className="text-xs text-zinc-600">Identify potential leak sources while mapping pipeline routes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">Thermal inspection + photogrammetry</div>
                  <div className="text-xs text-zinc-600">Monitor equipment condition alongside complete visual site documentation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Flexibility */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
              {t("missionFlexibilityTitle")}
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              {t("missionFlexibilityDescription")}
            </p>
            <ul className="space-y-3">
              {missionBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">✓</span>
                  <span className="text-sm text-zinc-400">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 font-bold">M</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-200">Magnetometry</div>
                  <div className="text-xs text-zinc-600">Buried infrastructure</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 font-bold">L</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-200">LiDAR</div>
                  <div className="text-xs text-zinc-600">Surface elevation</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-sm bg-zinc-950/50 border border-zinc-800/50">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 font-bold">P</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-200">Photogrammetry</div>
                  <div className="text-xs text-zinc-600">Visual mapping</div>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/50">
                <div className="text-xs text-zinc-600 text-center">= Comprehensive field intelligence package</div>
              </div>
            </div>
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
              href="/services"
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

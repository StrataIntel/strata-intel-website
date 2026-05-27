import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import DataCustody from "@/app/components/DataCustody";
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
  const t = await getTranslations({ locale, namespace: "dataCustody" });
  const isDefault = locale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/data-custody" : `/${locale}/data-custody`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/data-custody",
        en: "/data-custody",
        es: "/es/data-custody",
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

export default async function DataCustodyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "dataCustody" });

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
              src="/real-images/Magnetometer payload.webp"
              alt="Professional magnetometer payload with secure data collection system"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Data Custody Section */}
      <DataCustody />

      {/* Security & Control Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("securityTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("securityDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-100 mb-3">Access Control</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
              Project data is accessible only to authorized personnel through role-based permissions.
            </p>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Client-specific project isolation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Role-based access for field and office staff</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Audit trails for all data access</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-100 mb-3">Data Integrity</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
              Systematic verification ensures data quality and traceability from field to delivery.
            </p>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Raw data preservation with cryptographic verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Processing logs documenting all transformations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Version control for processed datasets</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-100 mb-3">Delivery Standards</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
              Professional data packages structured for long-term operational use and archival.
            </p>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Standardized folder structure and file naming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Complete metadata and processing documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400/60 mt-0.5">•</span>
                <span>Industry-standard formats for GIS integration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Details */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("workflowTitle")}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {t("workflowDescription")}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-6 p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-amber-400">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-100 mb-2">Field Acquisition</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Raw data collected in the field is cryptographically verified and uploaded to secure project storage with automated metadata tagging.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-amber-400">2</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-100 mb-2">Processing & QC</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Data undergoes systematic processing with all transformations logged. Quality checks validate outputs before client delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-sm border border-zinc-800 bg-zinc-900/40">
            <div className="w-12 h-12 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-amber-400">3</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-100 mb-2">Delivery & Archival</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Final datasets delivered in organized packages with documentation. Long-term archival preserves project data for future reference.
              </p>
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

async function getMessages(locale: string) {
  return (await import(`../../messages/${locale}.json`)).default;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataintel.net";

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const messages = await getMessages(activeLocale);
  const isDefault = activeLocale === routing.defaultLocale;
  const canonicalPath = isDefault ? "/" : `/${activeLocale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: messages.metadata.title,
      template: `%s | StrataIntel`,
    },
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,
    authors: [{ name: "StrataIntel" }],
    creator: "StrataIntel",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: activeLocale === "es" ? "es_MX" : "en_US",
      alternateLocale: activeLocale === "es" ? "en_US" : "es_MX",
      url: `${BASE_URL}${canonicalPath}`,
      siteName: "StrataIntel",
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: messages.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
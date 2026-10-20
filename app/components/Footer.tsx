import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-2 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
            <Image
              src="/strata-intel-icon-v1-final.webp"
              alt="Strata Intel icon"
              width={96}
              height={96}
              className="h-9 w-9 rounded-full border border-amber-400/20 bg-zinc-950/80 p-1.5"
            />
            <div className="leading-none">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400">
                Strata Intel
              </p>
              <p className="mt-1 text-xs text-zinc-400 font-mono">
                {t("copyright")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2">
            <p className="text-xs text-zinc-300 font-mono text-center sm:text-right">
              {t("tagline")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">
                {t("exploreLabel")}
              </span>
              <Link
                href="/resources"
                className="text-xs text-zinc-200 hover:text-amber-400 font-mono transition-colors duration-200"
              >
                {t("resourcesLink")}
              </Link>
              <span className="text-zinc-700">·</span>
              <Link
                href="/services"
                className="text-xs text-zinc-200 hover:text-amber-400 font-mono transition-colors duration-200"
              >
                {t("servicesLink")}
              </Link>
              <span className="text-zinc-700">·</span>
              <Link
                href="/contact"
                className="text-xs text-zinc-200 hover:text-amber-400 font-mono transition-colors duration-200"
              >
                {t("contactLink")}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@strataintel.net"
                className="text-xs text-zinc-200 hover:text-amber-400 font-mono transition-colors duration-200"
              >
                info@strataintel.net
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="https://wa.me/message/KZRZD5FPEAKAB1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-200 hover:text-green-400 font-mono transition-colors duration-200"
                aria-label="Contact via WhatsApp"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.202-1.79-1.447-.31-.247-.7-.03-.93.1-.23.13-.94.78-.94 1.9-.001 1.12.97 2.18 1.11 2.34.14.16 1.94 2.9 4.69 4.04.66.28 1.17.44 1.57.56.66.2 1.27.17 1.75.1.53-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.33-.07-.12-.27-.2-.57-.35Z"/>
                </svg>
                <span>+1 (346) 778-8532</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}

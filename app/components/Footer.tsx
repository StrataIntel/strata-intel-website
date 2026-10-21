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
                <svg width="13" height="13" className="shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.43 0 .05 5.38.05 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.16-1.62a12.02 12.02 0 0 0 5.88 1.5h.01C18.66 23.88 24 18.5 24 11.89c0-3.2-1.24-6.21-3.48-8.41ZM12.05 21.86a9.94 9.94 0 0 1-5.06-1.38l-.36-.21-3.66.96.98-3.57-.24-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.5 4.47-9.97 9.97-9.97a9.9 9.9 0 0 1 7.05 2.93 9.9 9.9 0 0 1 2.91 7.05c0 5.5-4.47 9.96-9.97 9.96Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.57-.35Z"/>
                </svg>
                <span>+1 (346) 778-8532</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}

import Image from "next/image";
import { getTranslations } from "next-intl/server";

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
            <a
              href="mailto:info@strataintel.net"
              className="text-xs text-zinc-200 hover:text-amber-400 font-mono transition-colors duration-200"
            >
              info@strataintel.net
            </a>
          </div>
        </div>
      </footer>
  );
}

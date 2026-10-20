import { getTranslations } from "next-intl/server";
import { CalendarDays } from "lucide-react";
import { CALENDAR_URL } from "./BookCallButton";

export default async function BookACall() {
  const t = await getTranslations("bookCall");

  return (
    <section id="book-a-call" className="w-full">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
            <CalendarDays size={14} />
            <span>{t("eyebrow")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10">
            {t("description")}
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200"
          >
            {t("buttonLabel")}
            <CalendarDays size={15} />
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500">
            <span className="text-xs">{t("orReachUsVia")}</span>
            <a
              href="https://wa.me/message/KZRZD5FPEAKAB1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-green-400 transition-colors duration-200"
              aria-label="Contact via WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.202-1.79-1.447-.31-.247-.7-.03-.93.1-.23.13-.94.78-.94 1.9-.001 1.12.97 2.18 1.11 2.34.14.16 1.94 2.9 4.69 4.04.66.28 1.17.44 1.57.56.66.2 1.27.17 1.75.1.53-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.33-.07-.12-.27-.2-.57-.35Z"/>
              </svg>
              <span className="font-mono">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

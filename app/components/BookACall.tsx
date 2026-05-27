import { getTranslations } from "next-intl/server";
import { CalendarDays, MessageCircle } from "lucide-react";
import { CALENDAR_URL } from "./BookCallButton";

export default async function BookACall() {
  const t = await getTranslations("bookCall");

  return (
    <section id="book-a-call" className="border-t border-zinc-800 bg-zinc-900/20">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
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
            <span className="text-xs">or reach us via</span>
            <a
              href="https://wa.me/584127543948"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-green-400 transition-colors duration-200"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={14} />
              <span className="font-mono">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

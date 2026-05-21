import { getTranslations } from "next-intl/server";
import { ArrowRight, ChevronDown } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-16 sm:pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(63,63,70,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_40%] from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <div className="hero-enter mb-6 flex w-full justify-center">
          <p className="font-mono text-[11px] leading-snug tracking-[0.25em] uppercase text-amber-400 pl-[0.25em] text-center sm:text-xs">
            {t("eyebrow")}
          </p>
        </div>

        <h1 className="hero-enter hero-enter-delay-1 w-full text-balance text-4xl font-bold leading-[1.1] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl mb-6">
          {t("title")}
        </h1>

        <p className="hero-enter hero-enter-delay-2 w-full max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg mb-10">
          {t("description")}
        </p>

        <div className="hero-enter hero-enter-delay-3 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200 sm:w-auto"
          >
            {t("primaryCta")}
            <ArrowRight size={15} className="shrink-0" />
          </a>
          <a
            href="#flagship"
            className="inline-flex w-full items-center justify-center gap-2 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 sm:w-auto"
          >
            {t("secondaryCta")}
          </a>
        </div>
      </div>

      <div className="hero-enter hero-enter-delay-4 absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600">
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}

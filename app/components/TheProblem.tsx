import { getTranslations } from "next-intl/server";
import { AlertTriangle } from "lucide-react";

export default async function TheProblem() {
  const t = await getTranslations("problem");
  const problems = t.raw("items") as string[];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="reveal-on-scroll-left">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-400 mb-4">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {problems.map((item, i) => (
            <div
              key={i}
              className="reveal-on-scroll-right flex items-start gap-4 p-4 rounded-sm border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-200"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <AlertTriangle
                size={16}
                className="text-amber-400 mt-0.5 shrink-0"
              />
              <p className="text-sm text-zinc-300 leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

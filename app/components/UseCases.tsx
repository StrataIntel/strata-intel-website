import { getTranslations } from "next-intl/server";

export default async function UseCases() {
  const t = await getTranslations("useCases");
  const cases = t.raw("cases") as Array<{
    n: string;
    title: string;
    body: string;
  }>;

  return (
    <section id="use-cases" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
      <div className="reveal-on-scroll mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          {t("title")}
        </h2>
        <p className="text-zinc-500 text-sm md:text-base">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((c) => (
          <div
            key={c.n}
            className="reveal-on-scroll group p-6 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-amber-400/40 hover:bg-zinc-900/70 hover:-translate-y-1 transition-all duration-200 cursor-default"
          >
            <span className="font-mono text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300 block mb-4 leading-none">
              {c.n}
            </span>
            <h3 className="font-semibold text-zinc-100 text-sm mb-2 leading-snug">
              {c.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";

export default async function OperatingEnvironment() {
  const t = await getTranslations("environment");
  const cards = t.raw("cards") as Array<{ title: string; body: string }>;

  return (
    <section className="bg-zinc-900/60 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="reveal-on-scroll mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
            {t("title")}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base mb-4">
            {t("subtitle")}
          </p>
          <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="reveal-on-scroll p-6 rounded-sm border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="w-1 h-4 bg-amber-400 mb-4 rounded-full" />
              <h3 className="font-semibold text-zinc-100 text-sm mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

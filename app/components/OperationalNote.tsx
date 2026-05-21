import { getTranslations } from "next-intl/server";
import { AlertTriangle } from "lucide-react";

export default async function OperationalNote() {
  const t = await getTranslations("operational");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-800/50">
      <div className="reveal-on-scroll rounded-sm border border-amber-500/40 bg-amber-500/5 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <AlertTriangle
            size={18}
            className="text-amber-400 shrink-0 mt-0.5"
          />
          <div>
            <h2 className="font-semibold text-zinc-100 text-sm mb-3">
              {t("title")}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              {t("description")}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              <span className="font-semibold text-zinc-200">
                {t("importantLabel")}
              </span>{" "}
              {t("importantBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

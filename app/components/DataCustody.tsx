import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Shield,
  Database,
  Users,
  Activity,
  Tag,
  PackageCheck,
} from "lucide-react";

const features = [
  { Icon: Database },
  { Icon: Shield },
  { Icon: Users },
  { Icon: Activity },
  { Icon: Tag },
  { Icon: PackageCheck },
] as const;

export default async function DataCustody() {
  const t = await getTranslations("dataCustody");
  const steps = t.raw("steps") as string[];
  const featureContent = t.raw("features") as Array<{
    title: string;
    body: string;
  }>;

  return (
    <section
      id="data-custody"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50"
    >
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

      <div className="reveal-on-scroll flex items-center justify-start gap-0 mb-16 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center flex-shrink-0">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`px-4 py-2 rounded-sm border font-mono text-xs font-medium ${
                  i === 0
                    ? "border-amber-400 text-amber-400 bg-amber-400/5"
                    : i === steps.length - 1
                      ? "border-amber-400/50 text-amber-400/70 bg-amber-400/3"
                      : "border-zinc-700 text-zinc-400 bg-zinc-900"
                }`}
              >
                {step}
              </div>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                size={14}
                className={`mx-2 shrink-0 ${
                  i === 0 ? "text-amber-400/60" : "text-zinc-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <div
            key={featureContent[i].title}
            className="reveal-on-scroll flex items-start gap-4 p-5 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors duration-200"
          >
            <feature.Icon
              size={16}
              className="text-amber-400 mt-0.5 shrink-0"
            />
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm mb-1">
                {featureContent[i].title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {featureContent[i].body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

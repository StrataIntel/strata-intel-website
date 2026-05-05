"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Map } from "lucide-react";

const outputIcons = [Map, FileText, Map, FileText, FileText];

export default function FlagshipCapability() {
  const t = useTranslations("flagship");
  const detects = t.raw("detects") as string[];
  const outputs = t.raw("outputs") as string[];

  return (
    <section id="flagship" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight tracking-tight mb-6 max-w-3xl">
          {t("title")}
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-3xl text-sm md:text-base">
          {t("description")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: What it detects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/50"
        >
          <h3 className="font-semibold text-zinc-100 mb-5 text-sm uppercase tracking-wider">
            {t("detectTitle")}
          </h3>
          <ul className="flex flex-col gap-3">
            {detects.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={15}
                  className="text-amber-400 mt-0.5 shrink-0"
                />
                <span className="text-sm text-zinc-300 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 2: Typical outputs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/50"
        >
          <h3 className="font-semibold text-zinc-100 mb-2 text-sm uppercase tracking-wider">
            {t("outputTitle")}
          </h3>
          <p className="text-xs text-zinc-600 italic mb-5 leading-relaxed">
            {t("outputNote")}
          </p>
          <ul className="flex flex-col gap-3">
            {outputs.map((item, i) => {
              const Icon = outputIcons[i];
              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={15} className="text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-300 leading-snug">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

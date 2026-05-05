"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function TheProblem() {
  const t = useTranslations("problem");
  const problems = t.raw("items") as string[];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Sticky */}
        <div className="lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-400 mb-4">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* Right: Problem list */}
        <div className="flex flex-col gap-3">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-start gap-4 p-4 rounded-sm border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-200"
            >
              <AlertTriangle
                size={16}
                className="text-amber-400 mt-0.5 shrink-0"
              />
              <p className="text-sm text-zinc-300 leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

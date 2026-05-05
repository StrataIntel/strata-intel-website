"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function UseCases() {
  const t = useTranslations("useCases");
  const cases = t.raw("cases") as Array<{
    n: string;
    title: string;
    body: string;
  }>;

  return (
    <section id="use-cases" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          {t("title")}
        </h2>
        <p className="text-zinc-500 text-sm md:text-base">
          {t("subtitle")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {cases.map((c) => (
          <motion.div
            key={c.n}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-6 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-amber-400/40 hover:bg-zinc-900/70 transition-colors duration-200 cursor-default"
          >
            <span className="font-mono text-3xl font-bold text-zinc-800 group-hover:text-amber-400/30 transition-colors duration-300 block mb-4 leading-none">
              {c.n}
            </span>
            <h3 className="font-semibold text-zinc-100 text-sm mb-2 leading-snug">
              {c.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

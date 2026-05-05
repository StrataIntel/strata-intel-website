"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Database, Users, Activity, Tag, PackageCheck } from "lucide-react";

const features = [
  {
    Icon: Database,
    title: "Structured Records",
    body: "Project, mission, and data records organized from the start.",
  },
  {
    Icon: Shield,
    title: "Controlled Storage",
    body: "Raw and processed data handled through defined custody workflows.",
  },
  {
    Icon: Users,
    title: "Access Management",
    body: "Role-based access, processing handoffs, and deliverable version control.",
  },
  {
    Icon: Activity,
    title: "Audit Trails",
    body: "Workflow events and data access activity can be tracked for internal control.",
  },
  {
    Icon: Tag,
    title: "Ownership Rules",
    body: "Project-specific data ownership and retention logic can be defined.",
  },
  {
    Icon: PackageCheck,
    title: "Professional Delivery",
    body: "Final outputs organized for planning, review, and contractor coordination.",
  },
];

export default function DataCustody() {
  const t = useTranslations("dataCustody");
  const steps = t.raw("steps") as string[];
  const featureContent = t.raw("features") as Array<{ title: string; body: string }>;

  return (
    <section id="data-custody" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50">
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
        <p className="text-zinc-500 text-sm md:text-base mb-4">
          {t("subtitle")}
        </p>
        <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
          {t("description")}
        </p>
      </motion.div>

      {/* Horizontal step flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-start gap-0 mb-16 overflow-x-auto pb-2"
      >
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
              <div
                className={`h-0.5 w-8 ${
                  i === 0 ? "bg-amber-400" : "bg-zinc-800"
                }`}
                style={{ display: "none" }}
              />
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
      </motion.div>

      {/* 2-column feature list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <motion.div
            key={featureContent[i].title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="flex items-start gap-4 p-5 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors duration-200"
          >
            <feature.Icon size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-zinc-200 text-sm mb-1">
                {featureContent[i].title}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{featureContent[i].body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Map } from "lucide-react";

const detects = [
  "Buried pipelines and metallic line segments",
  "Abandoned or undocumented infrastructure",
  "Ferrous debris and metallic obstructions",
  "Casing remnants and well-related metallic assets",
  "Potential conflict zones before excavation or construction",
];

const outputs = [
  "Magnetic anomaly maps",
  "Risk or priority zones for further review",
  "Field intervention support maps",
  "Technical survey summaries or reports",
  "GIS-compatible data layers, when required",
];

const outputIcons = [Map, FileText, Map, FileText, FileText];

export default function FlagshipCapability() {
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
          Flagship Capability: Aerial Magnetometry for Buried Infrastructure
          Detection
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-3xl text-sm md:text-base">
          Aerial magnetometry uses a high-sensitivity magnetometer mounted on an
          industrial drone platform to measure variations in the Earth&apos;s magnetic
          field. These variations can reveal the presence of buried ferromagnetic
          objects such as pipelines, metallic debris, abandoned infrastructure,
          casing remnants, and other undocumented subsurface assets.
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
            What it helps detect
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
            Typical outputs
          </h3>
          <p className="text-xs text-zinc-600 italic mb-5 leading-relaxed">
            The exact deliverable format depends on project scope, sensor
            configuration, processing requirements, and client needs. Final
            output formats should be defined during the technical scoping phase.
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

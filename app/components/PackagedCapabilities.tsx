"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Radar, Layers, Wind, Thermometer, Camera, FolderKanban } from "lucide-react";

const capabilities = [
  {
    Icon: Radar,
    title: "Aerial Magnetometry",
    body: "Detection of buried metallic infrastructure, abandoned assets, ferrous debris, and magnetic anomaly zones.",
  },
  {
    Icon: Layers,
    title: "LiDAR Surface Modeling",
    body: "High-resolution elevation and surface modeling for infrastructure planning, terrain analysis, drainage context, and digital field representation.",
  },
  {
    Icon: Wind,
    title: "Methane Gas Detection",
    body: "Aerial sensing support for identifying potential methane emission zones and strengthening environmental monitoring programs.",
  },
  {
    Icon: Thermometer,
    title: "Thermal Inspection",
    body: "Thermal imaging for selected industrial inspection use cases, including heat anomalies, equipment monitoring, and asset condition review.",
  },
  {
    Icon: Camera,
    title: "High-Resolution Photogrammetry",
    body: "Visual mapping and orthomosaic generation for site documentation, planning, and field reference.",
  },
  {
    Icon: FolderKanban,
    title: "Field Data Workflow",
    body: "Project-to-deliverable structure for storing, tracking, processing, and delivering technical outputs.",
  },
];

export default function PackagedCapabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="capabilities"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          Packaged Capabilities
        </h2>
        <p className="text-zinc-500 text-sm md:text-base mb-4">
          Packaged field intelligence, built around the mission.
        </p>
        <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
          Aerial magnetometry is the flagship capability, but many field
          decisions require more than one data layer. Depending on project needs,
          StrataIntel may combine magnetometry with additional sensing and
          field-data acquisition methods to support broader operational planning.
        </p>
      </motion.div>

      <div className="flex flex-col gap-2">
        {capabilities.map((cap, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-sm border transition-colors duration-200 ${
                isOpen
                  ? "border-amber-400/40 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-4 px-6 py-4 text-left"
              >
                <cap.Icon
                  size={16}
                  className={`shrink-0 transition-colors duration-200 ${
                    isOpen ? "text-amber-400" : "text-zinc-600"
                  }`}
                />
                <span
                  className={`flex-1 font-semibold text-sm transition-colors duration-200 ${
                    isOpen ? "text-zinc-100" : "text-zinc-300"
                  }`}
                >
                  {cap.title}
                </span>
                <ChevronDown
                  size={15}
                  className={`text-zinc-600 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed pl-14">
                      {cap.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

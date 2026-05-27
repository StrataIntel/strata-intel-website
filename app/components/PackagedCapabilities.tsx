"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  Radar,
  Layers,
  Wind,
  Thermometer,
  Camera,
  FolderKanban,
} from "lucide-react";

const capabilityIcons = [
  Radar,
  Layers,
  Wind,
  Thermometer,
  Camera,
  FolderKanban,
];

export default function PackagedCapabilities() {
  const t = useTranslations("capabilities");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const capabilities = (
    t.raw("items") as Array<{ title: string; body: string }>
  ).map((item, index) => ({
    ...item,
    Icon: capabilityIcons[index],
  }));

  return (
    <section
      id="capabilities"
      className="px-6 py-24 border-t border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="flex flex-col gap-2">
          {capabilities.map((cap, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={cap.title}
                className={`reveal-on-scroll rounded-sm border transition-colors duration-200 ${
                  isOpen
                    ? "border-amber-400/40 bg-zinc-900"
                    : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
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
                <div
                  className="grid transition-[grid-template-rows] duration-250 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed pl-14">
                      {cap.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

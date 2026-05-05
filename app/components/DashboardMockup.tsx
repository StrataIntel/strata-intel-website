"use client";

import { motion } from "framer-motion";

const steps = ["Project", "Mission", "Raw Data", "Processing", "Deliverables"];

export default function DashboardMockup() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-sm border border-zinc-800 bg-zinc-900 overflow-hidden"
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(63,63,70,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 px-6 py-3 bg-zinc-950/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
            <span className="font-mono text-xs text-zinc-500 ml-3">
              Mission Layer{" "}
              <span className="text-zinc-700 mx-1">|</span>{" "}
              <span className="text-zinc-400">Magnetic Anomaly Review</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-zinc-600">LIVE</span>
          </div>
        </div>

        {/* Breadcrumb flow */}
        <div className="relative z-10 flex items-center gap-2 px-6 py-3 border-b border-zinc-800/50 overflow-x-auto">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded-sm border ${
                  i === 1
                    ? "border-amber-400/50 text-amber-400 bg-amber-400/5"
                    : "border-zinc-800 text-zinc-600"
                }`}
              >
                {step}
              </span>
              {i < steps.length - 1 && (
                <span className="text-zinc-700 text-xs">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="relative z-10 flex items-center justify-center py-24 px-6">
          <div className="text-center max-w-md">
            {/* Placeholder map grid */}
            <div className="mx-auto mb-8 w-48 h-32 rounded-sm border border-zinc-800 bg-zinc-950/50 overflow-hidden relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,191,36,0.04) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              {/* Fake anomaly blobs */}
              <div className="absolute top-1/3 left-1/4 w-8 h-6 rounded-full bg-amber-400/10 blur-md" />
              <div className="absolute top-1/2 left-1/2 w-12 h-8 rounded-full bg-amber-400/8 blur-lg" />
              <div className="absolute bottom-1/4 right-1/4 w-6 h-5 rounded-full bg-amber-400/12 blur-md" />
            </div>
            <p className="text-zinc-600 text-xs font-mono leading-relaxed">
              Placeholder for future dashboard, map,<br />
              field data, or anomaly visualization.
            </p>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="relative z-10 flex items-center justify-between border-t border-zinc-800/50 px-6 py-2 bg-zinc-950/40">
          <span className="font-mono text-xs text-zinc-700">StrataIntel · Field Data Platform</span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-zinc-700">Processing: <span className="text-zinc-500">—</span></span>
            <span className="font-mono text-xs text-zinc-700">Anomalies: <span className="text-zinc-500">—</span></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

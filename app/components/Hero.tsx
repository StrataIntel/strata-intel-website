"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(63,63,70,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_40%] from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-amber-400 mb-6"
        >
          Industrial Field Intelligence
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 leading-[1.1] tracking-tight mb-6"
        >
          Field intelligence for safer oilfield operations.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          StrataIntel helps oil &amp; gas operators and service companies reduce
          field uncertainty before excavation, construction, maintenance,
          inspection, or operational intervention.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200"
          >
            Request a Technical Conversation
            <ArrowRight size={15} />
          </a>
          <a
            href="#flagship"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200"
          >
            Explore Aerial Magnetometry
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

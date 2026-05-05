"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Bottom CTA */}
      <section
        id="contact"
        className="border-t border-zinc-800 bg-zinc-900/40"
      >
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight leading-tight mb-6">
              Have a field area with operational uncertainty?
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 text-sm md:text-base">
              If your team is planning excavation, construction, maintenance,
              field rehabilitation, well pad expansion, inspection, or contractor
              mobilization in a complex oilfield environment, StrataIntel can
              help evaluate whether aerial magnetometry or a packaged field
              intelligence solution is the right approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@strataintel.com"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200"
              >
                Request a Technical Conversation
                <ArrowRight size={15} />
              </a>
              <a
                href="mailto:contact@strataintel.com"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200"
              >
                Send a Pilot Area for Review
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-mono">
            © 2026 StrataIntel. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 font-mono text-center sm:text-right">
            Industrial Field Intelligence · Aerial Magnetometry · Data Custody
          </p>
        </div>
      </footer>
    </>
  );
}

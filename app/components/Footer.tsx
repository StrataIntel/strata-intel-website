"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

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
              {t("title")}
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 text-sm md:text-base">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@strataintel.com"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm transition-colors duration-200"
              >
                {t("primaryCta")}
                <ArrowRight size={15} />
              </a>
              <a
                href="mailto:contact@strataintel.com"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200"
              >
                {t("secondaryCta")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-2 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
            <Image
              src="/strata-intel-icon-v1-final.png"
              alt="Strata Intel icon"
              width={96}
              height={96}
              className="h-9 w-9 rounded-full border border-amber-400/20 bg-zinc-950/80 p-1.5"
            />
            <div className="leading-none">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/80">
                Strata Intel
              </p>
              <p className="mt-1 text-xs text-zinc-600 font-mono">
                {t("copyright")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2">
            <p className="text-xs text-zinc-700 font-mono text-center sm:text-right">
              {t("tagline")}
            </p>
            <a 
              href="mailto:info@strataintel.net"
              className="text-xs text-zinc-500 hover:text-amber-400 font-mono transition-colors duration-200"
            >
              info@strataintel.net
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

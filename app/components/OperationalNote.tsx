"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function OperationalNote() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="rounded-sm border border-amber-500/40 bg-amber-500/5 p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle
            size={18}
            className="text-amber-400 shrink-0 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-zinc-100 text-sm mb-3">
              Operational Note: Developed for formal industrial deployment.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              StrataIntel is being structured as a technical-industrial service
              model subject to applicable aviation, importation, operational, and
              data-related requirements.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              <span className="font-semibold text-zinc-200">
                Important distinction:
              </span>{" "}
              The service is not recreational drone operation, audiovisual
              production, public surveillance, or security monitoring. It is
              industrial field-data acquisition for infrastructure and
              operational planning.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

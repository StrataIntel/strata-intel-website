"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FileText, Download, Eye } from "lucide-react";
import PdfModal from "@/app/components/PdfModal";

const PDF_BY_LOCALE: Record<string, { url: string; fileName: string }> = {
  en: {
    url: "/services/INDUSTRIAL%20DRONE%20SERVICES.pdf",
    fileName: "INDUSTRIAL DRONE SERVICES.pdf",
  },
  es: {
    url: "/services/SERVICIOS%20DRONES%20INDUSTRIALES.pdf",
    fileName: "SERVICIOS DRONES INDUSTRIALES.pdf",
  },
};

export default function ServicesPage() {
  const t = useTranslations("services");
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const pdf = PDF_BY_LOCALE[locale] ?? PDF_BY_LOCALE.en;
  const cards = t.raw("cards") as Array<{ title: string; description: string }>;
  const openCard = openIndex !== null ? cards[openIndex] : null;

  return (
    <main className="bg-zinc-950 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-24">
      <div className="w-full max-w-2xl">
        {/* Hero */}
        <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-3 text-center">
          {t("eyebrow")}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4 text-center">
          {t("title")}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-10 text-center">
          {t("description")}
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <article
              key={index}
              className="flex flex-col bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-sm hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-zinc-800 rounded-sm shrink-0">
                  <FileText size={20} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-zinc-100 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-zinc-800/50">
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-semibold text-sm px-5 py-3 sm:py-2.5 rounded-sm transition-colors duration-200"
                >
                  <Eye size={15} />
                  {t("previewButton")}
                </button>

                <a
                  href={pdf.url}
                  download={pdf.fileName}
                  className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-5 py-3 sm:py-2.5 rounded-sm transition-colors duration-200"
                >
                  <Download size={15} />
                  {t("downloadButton")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {openCard && (
        <PdfModal
          isOpen={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          pdfUrl={pdf.url}
          fileName={pdf.fileName}
          title={openCard.title}
          downloadLabel={t("downloadButton")}
          closeLabel={t("closeModal")}
        />
      )}
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { X, Download } from "lucide-react";

type PdfModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  fileName: string;
  title: string;
  downloadLabel: string;
  closeLabel: string;
};

export default function PdfModal({
  isOpen,
  onClose,
  pdfUrl,
  fileName,
  title,
  downloadLabel,
  closeLabel,
}: PdfModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-4 md:p-8 bg-zinc-950/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={panelRef}
        className="w-full sm:max-w-5xl flex flex-col bg-zinc-900 border-t sm:border border-zinc-800 sm:rounded-sm overflow-hidden"
        style={{ maxHeight: "calc(100vh - 4rem)", height: "calc(100vh - 4rem)" }}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-800 shrink-0">
          <span className="text-sm font-semibold text-zinc-100 truncate">{title}</span>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={pdfUrl}
              download={fileName}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs px-3 sm:px-4 py-2 rounded-sm transition-colors duration-200"
              aria-label={downloadLabel}
            >
              <Download size={14} />
              <span className="hidden sm:inline">{downloadLabel}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          src={pdfUrl}
          title={title}
          className="w-full grow"
        />
      </div>
    </div>
  );
}

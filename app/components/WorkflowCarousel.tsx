"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SLIDE_IMAGES = [
  "/carousel/Project_Carrousel.png",
  "/carousel/Mission_Carrousel.png",
  "/carousel/Raw_Data_Carrousel.png",
  "/carousel/Processing_Carrousel.png",
  "/carousel/Deliverables_Carrousel.png",
] as const;

const IMAGE_WIDTH = 1672;
const IMAGE_HEIGHT = 941;
const AUTOPLAY_MS = 6000;

type WorkflowSlide = {
  step: string;
  title: string;
  description: string;
  imageAlt: string;
};

export default function WorkflowCarousel() {
  const t = useTranslations("workflowCarousel");
  const slides = t.raw("slides") as WorkflowSlide[];
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const slideCount = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slideCount);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isPaused, prefersReducedMotion, slideCount]);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  const activeSlide = slides[activeIndex];

  return (
    <section
      ref={regionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24"
      aria-roledescription="carousel"
      aria-label="Field data workflow"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!regionRef.current?.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      tabIndex={0}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* Step pills — centered, wrap on mobile */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6 w-full max-w-3xl"
          role="tablist"
          aria-label="Workflow phases"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.step}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls={`workflow-panel-${i}`}
              id={`workflow-tab-${i}`}
              onClick={() => goTo(i)}
              className={`font-mono text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-sm border transition-colors duration-200 min-h-[32px] sm:min-h-0 ${
                i === activeIndex
                  ? "border-amber-400/50 text-amber-400 bg-amber-400/5"
                  : "border-zinc-800 text-zinc-600 hover:border-zinc-600 hover:text-zinc-400"
              }`}
            >
              {slide.step}
            </button>
          ))}
        </div>

        {/* Title + description — after tabs, before image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="text-center max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-1"
            aria-live="polite"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 tracking-tight mb-2 sm:mb-3">
              {activeSlide.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
              {activeSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Image — slightly smaller, centered */}
        <div
          className="w-full max-w-4xl lg:max-w-5xl mx-auto"
          id={`workflow-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`workflow-tab-${activeIndex}`}
        >
          <div className="relative rounded-sm border border-zinc-800 bg-zinc-900 overflow-hidden shadow-lg shadow-black/20">
            <div className="relative w-full aspect-1672/941">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDE_IMAGES[activeIndex]}
                    alt={activeSlide.imageAlt}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="w-full h-full object-cover object-top"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1024px"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
          {slides.map((slide, i) => (
            <button
              key={slide.step}
              type="button"
              aria-label={t("goToSlide", { step: slide.step })}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`h-2 sm:h-1.5 rounded-full transition-all duration-200 touch-manipulation ${
                i === activeIndex
                  ? "w-7 sm:w-6 bg-amber-400"
                  : "w-2 sm:w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

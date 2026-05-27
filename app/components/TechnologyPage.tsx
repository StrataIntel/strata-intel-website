"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X, ZoomIn } from "lucide-react";

type ImageData = {
  src: string;
  alt: string;
  caption: string;
  description: string;
  category: "platforms" | "payloads" | "software";
};

export default function TechnologyPage() {
  const t = useTranslations("technology");
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const images = t.raw("images") as ImageData[];

  const platformImages = images.filter((img) => img.category === "platforms");
  const payloadImages = images.filter((img) => img.category === "payloads");
  const softwareImages = images.filter((img) => img.category === "software");

  return (
    <main className="bg-zinc-950 min-h-screen px-4 sm:px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-3">
            {t("eyebrow")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Aerial Platforms */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-8 border-l-4 border-amber-400 pl-4">
            {t("platformsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformImages.map((image, index) => (
              <article
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-4/3 bg-zinc-950 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 p-2 bg-zinc-950/80 backdrop-blur-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn size={16} className="text-amber-400" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-100 text-sm mb-2 leading-snug">
                    {image.caption}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sensor Payloads */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-8 border-l-4 border-amber-400 pl-4">
            {t("payloadsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payloadImages.map((image, index) => (
              <article
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-4/3 bg-zinc-950 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 p-2 bg-zinc-950/80 backdrop-blur-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn size={16} className="text-amber-400" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-100 text-sm mb-2 leading-snug">
                    {image.caption}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Software Systems */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-8 border-l-4 border-amber-400 pl-4">
            {t("softwareTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareImages.map((image, index) => (
              <article
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-4/3 bg-zinc-950 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 p-2 bg-zinc-950/80 backdrop-blur-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn size={16} className="text-amber-400" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-100 text-sm mb-2 leading-snug">
                    {image.caption}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-zinc-950/90 backdrop-blur-sm rounded-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-16/10 bg-zinc-950">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 90vw, 1536px"
                priority
              />
            </div>

            <div className="p-6 border-t border-zinc-800">
              <h3 className="font-semibold text-zinc-100 text-lg mb-2">
                {selectedImage.caption}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

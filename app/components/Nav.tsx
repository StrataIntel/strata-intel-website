"use client";

import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CalendarDays, Globe, Menu, X } from "lucide-react";
import { CALENDAR_URL } from "./BookCallButton";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const sectionAnchors = [
  "#flagship",
  "#use-cases",
  "#data-custody",
  "#capabilities",
  "#contact",
];

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const labels = t.raw("links") as string[];
  const links = labels.map((label, index) => ({
    label,
    href: sectionAnchors[index],
  }));

  function switchLocale(nextLocale: (typeof routing.locales)[number]) {
    if (nextLocale === locale) {
      return;
    }

    const hash = typeof window === "undefined" ? "" : window.location.hash;

    startTransition(() => {
      router.replace(`${pathname}${hash}`, {
        locale: nextLocale,
        scroll: false,
      });
    });

    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Strata Intel home"
        >
          <Image
            src="/strata-intel-logo-v2-final.webp"
            alt="Strata Intel"
            width={640}
            height={144}
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              {t("servicesLink")}
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6" aria-label={t("languageSelector")}>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs px-4 py-2 rounded-sm transition-colors duration-200"
          >
            {t("bookCallLabel")}
            <CalendarDays size={13} />
          </a>
          <span className="text-xs text-zinc-500 font-mono tracking-widest">
            <button
              type="button"
              onClick={() => switchLocale("en")}
              disabled={isPending}
              aria-pressed={locale === "en"}
              className={`transition-colors ${
                locale === "en"
                  ? "text-amber-400"
                  : "text-zinc-400 hover:text-amber-400"
              }`}
            >
              EN
            </button>
            <span className="mx-1 text-zinc-700">|</span>
            <button
              type="button"
              onClick={() => switchLocale("es")}
              disabled={isPending}
              aria-pressed={locale === "es"}
              className={`transition-colors ${
                locale === "es"
                  ? "text-amber-400"
                  : "text-zinc-400 hover:text-amber-400"
              }`}
            >
              ES
            </button>
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label={t("toggleMenu")}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {/* Language selector - subtle at top */}
            <div className="pb-3 border-b border-zinc-800/50">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-zinc-500" />
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => switchLocale("en")}
                    disabled={isPending}
                    aria-pressed={locale === "en"}
                    className={`py-1.5 px-3 rounded text-xs font-medium transition-colors ${
                      locale === "en"
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => switchLocale("es")}
                    disabled={isPending}
                    aria-pressed={locale === "es"}
                    className={`py-1.5 px-3 rounded text-xs font-medium transition-colors ${
                      locale === "es"
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                    }`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  {t("servicesLink")}
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm py-2.5 px-4 rounded-sm transition-colors duration-200"
                >
                  {t("bookCallLabel")}
                  <CalendarDays size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

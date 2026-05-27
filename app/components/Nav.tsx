"use client";

import Image from "next/image";
import { useEffect, useState, useTransition, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CalendarDays, Globe, Menu, X, ChevronDown } from "lucide-react";
import { CALENDAR_URL } from "./BookCallButton";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const labels = t.raw("links") as string[];
  
  // Products/Solutions dropdown items
  const productsLinks = [
    { label: labels[0], href: "/magnetometry" }, // Magnetometry
    { label: labels[3], href: "/capabilities" }, // Capabilities
    { label: labels[1], href: "/use-cases" },    // Use Cases
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Strata Intel home"
        >
          <Image
            src="/strata-intel-logo-v2-final.webp"
            alt="Strata Intel"
            width={640}
            height={144}
            className="h-6 w-auto sm:h-7 lg:h-8"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
          {/* Products/Solutions Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
              aria-expanded={dropdownOpen}
            >
              Products/Solutions
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-52 bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl py-2 z-50"
              >
                {productsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
            >
              {t("servicesLink")}
            </Link>
          </li>
          <li>
            <Link
              href="/technology"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
            >
              {t("technologyLink")}
            </Link>
          </li>
          <li>
            <Link
              href="/data-custody"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
            >
              {labels[2]} {/* Data Custody */}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
            >
              {labels[4]} {/* Contact */}
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4" aria-label={t("languageSelector")}>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs px-3 py-2 xl:px-4 rounded-sm transition-colors duration-200 whitespace-nowrap"
          >
            <span className="hidden xl:inline">{t("bookCallLabel")}</span>
            <span className="xl:hidden">Book Call</span>
            <CalendarDays size={13} />
          </a>
          <span className="text-xs text-zinc-500 font-mono tracking-widest shrink-0">
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
          className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label={t("toggleMenu")}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
            {/* Language selector - subtle at top */}
            <div className="pb-3 border-b border-zinc-800/50">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-zinc-500" />
                <div className="flex gap-1.5 flex-wrap">
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
              {/* Products/Solutions Dropdown */}
              <li>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  <span>Products/Solutions</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                    {productsLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className="block text-zinc-400 hover:text-zinc-100 text-sm py-1 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  {t("servicesLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  onClick={() => setOpen(false)}
                  className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  {t("technologyLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/data-custody"
                  onClick={() => setOpen(false)}
                  className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  {labels[2]} {/* Data Custody */}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-zinc-300 hover:text-zinc-100 text-sm py-1 transition-colors"
                >
                  {labels[4]} {/* Contact */}
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

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Magnetometry", href: "#flagship" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Data Custody", href: "#data-custody" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        {/* Logo */}
        <a href="/" className="text-zinc-100 font-bold text-lg tracking-tight">
          StrataIntel
        </a>

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
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs text-zinc-500 font-mono tracking-widest">
            <button className="hover:text-amber-400 transition-colors text-zinc-400">EN</button>
            <span className="mx-1 text-zinc-700">|</span>
            <button className="hover:text-amber-400 transition-colors text-zinc-400">ES</button>
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
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
            <li className="pt-2 border-t border-zinc-800">
              <span className="text-xs text-zinc-500 font-mono tracking-widest">
                <button className="text-zinc-400 hover:text-amber-400 transition-colors">EN</button>
                <span className="mx-1 text-zinc-700">|</span>
                <button className="text-zinc-400 hover:text-amber-400 transition-colors">ES</button>
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

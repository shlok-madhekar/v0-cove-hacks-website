"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#6B9BD2]/95 backdrop-blur-lg shadow-lg shadow-[#6B9BD2]/20"
            : "bg-[#6B9BD2]"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/cove-logo-nobg.png"
              alt="Cove Hacks"
              width={26}
              height={26}
              className="w-[26px] h-[26px]"
            />
            <span className="font-sans text-sm font-bold tracking-tight text-white">
              Cove Hacks
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[13px] text-white/55 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lu.ma/p7fs725f"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] font-semibold bg-white/15 hover:bg-white/25 text-white px-5 py-2 rounded-full transition-colors"
            >
              Apply
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-5 pb-4 pt-2 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-white/60 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lu.ma/p7fs725f"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold bg-white/15 text-white px-5 py-2.5 rounded-full text-center mt-2 hover:bg-white/25 transition-colors"
            >
              Apply
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-[#6B9BD2]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/cove-logo-nobg.png"
            alt="Cove Hacks"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          <span
            className={`font-sans text-sm font-bold tracking-tight transition-colors ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            Cove Hacks
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-[13px] transition-colors ${
                scrolled
                  ? "text-[#1a1a1a]/50 hover:text-[#1a1a1a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className={`font-sans text-[13px] font-semibold px-5 py-2 rounded-full transition-colors ${
              scrolled
                ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-[#1a1a1a]" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 pb-5 pt-3 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="font-sans text-sm font-semibold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-center hover:bg-[#333] transition-colors mt-2"
          >
            Apply now
          </a>
        </div>
      )}
    </nav>
  )
}

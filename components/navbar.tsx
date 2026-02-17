"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
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
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/cove-logo.png"
            alt="Cove Hacks"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span
            className={`font-sans text-sm font-bold tracking-tight transition-colors ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            Cove Hacks
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm transition-colors ${
                scrolled
                  ? "text-[#1a1a1a]/55 hover:text-[#1a1a1a]"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className={`font-sans text-sm font-bold px-5 py-2 rounded-full transition-colors ${
              scrolled
                ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                : "bg-white text-[#7BA4D9] hover:bg-white/90"
            }`}
          >
            Apply
          </a>
        </div>

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

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#1a1a1a]/5 px-6 pb-5 pt-3 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="font-sans text-sm font-bold bg-[#1a1a1a] text-white px-5 py-3 rounded-full text-center hover:bg-[#333] transition-colors mt-1"
          >
            Apply now
          </a>
        </div>
      )}
    </nav>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f5f0e8]/90 border-b border-[#e5e0d5]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Cove Hacks"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-sans text-sm font-bold tracking-tight text-[#1a1a1a]">
            Cove Hacks
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="font-mono text-xs tracking-wide bg-[#1a1a1a] text-[#f5f0e8] px-5 py-2 rounded-full hover:bg-[#333] transition-colors font-bold"
          >
            Apply
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1a1a1a]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f0e8]/98 backdrop-blur-md border-t border-[#e5e0d5] px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-wide bg-[#1a1a1a] text-[#f5f0e8] px-5 py-3 rounded-full text-center hover:bg-[#333] transition-colors font-bold"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  )
}

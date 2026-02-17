"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f5f0e8]/80 border-b border-[#d4c9b5]/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Cove Hacks sun logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-mono text-sm font-bold tracking-wider text-[#2c2c2c]">
            cove hacks
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider text-[#555] hover:text-[#2c2c2c] transition-colors"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
          <a
            href="#register"
            className="font-mono text-xs tracking-wider bg-[#2c2c2c] text-[#f5f0e8] px-5 py-2.5 rounded-full hover:bg-[#444] transition-colors"
          >
            register
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#2c2c2c]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f0e8]/95 backdrop-blur-md border-t border-[#d4c9b5]/50 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-wider text-[#555] hover:text-[#2c2c2c] transition-colors"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-wider bg-[#2c2c2c] text-[#f5f0e8] px-5 py-3 rounded-full text-center hover:bg-[#444] transition-colors"
          >
            register
          </a>
        </div>
      )}
    </nav>
  )
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const links = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#6B9BD2]/80 backdrop-blur-2xl ring-1 ring-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
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
              href="https://discord.gg/9YQWhpdpGd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord"
              className="text-white/60 hover:text-white transition-colors"
            >
              <DiscordIcon className="w-[18px] h-[18px]" />
            </a>
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
              href="https://discord.gg/9YQWhpdpGd"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/60 hover:text-white transition-colors py-2 flex items-center gap-2"
            >
              <DiscordIcon className="w-4 h-4" />
              Discord
            </a>
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

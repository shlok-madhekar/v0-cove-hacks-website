import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#2c2c2c] py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Cove Hacks logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-mono text-sm font-bold tracking-widest uppercase text-white">
                Cove Hacks
              </span>
            </div>
            <p className="font-sans text-sm text-white/40 max-w-sm leading-relaxed">
              A 48-hour hackathon in the Bay Area where nature meets innovation. 400 hackers. Infinite possibilities.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {["About", "Schedule", "Tracks", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@covehacks.org"
                className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                hello@covehacks.org
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">
            Made with sun and soil in the Bay Area
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">
            &copy; 2026 Cove Hacks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

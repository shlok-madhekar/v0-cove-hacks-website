import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#141414] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/cove-logo-nobg.png"
                alt="Cove Hacks"
                width={20}
                height={20}
              />
              <span className="font-sans text-sm font-bold text-white tracking-tight">
                Cove Hacks
              </span>
            </div>
            <p className="font-sans text-xs text-white/20 max-w-xs leading-relaxed">
              The largest high school hackathon ever.
              <br />
              June 19&ndash;21, 2026 &middot; Bay Area, CA
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/12 mb-1">
                Event
              </p>
              {["About", "Schedule", "Sponsors", "FAQ"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/12 mb-1">
                Connect
              </p>
              <a
                href="mailto:hello@covehacks.org"
                className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                Email
              </a>
              <a
                href="#"
                className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-white/10 tracking-wider">
            2026 Cove Hacks
          </p>
          <p className="font-mono text-[10px] text-white/10 tracking-wider">
            Made with sleep deprivation in the Bay
          </p>
        </div>
      </div>
    </footer>
  )
}

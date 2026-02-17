import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/images/cove-logo.png"
                alt="Cove Hacks"
                width={22}
                height={22}
                className="rounded-md"
              />
              <span className="font-sans text-sm font-bold text-white tracking-tight">
                Cove Hacks
              </span>
            </div>
            <p className="font-sans text-sm text-white/25 max-w-xs">
              The largest high school hackathon ever.
              <br />
              June 17&ndash;19, 2026 &middot; Bay Area, CA
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[10px] tracking-wider uppercase text-white/15 mb-1">
                Pages
              </p>
              {["About", "Schedule", "Tracks", "Sponsors", "FAQ"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[10px] tracking-wider uppercase text-white/15 mb-1">
                Contact
              </p>
              <a
                href="mailto:hello@covehacks.org"
                className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Email
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-white/12 tracking-wider">
            2026 Cove Hacks
          </p>
          <p className="font-mono text-[10px] text-white/12 tracking-wider">
            Made with sleep deprivation in the Bay
          </p>
        </div>
      </div>
    </footer>
  )
}

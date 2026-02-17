import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/5 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/logo.png"
                alt="Cove Hacks"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="font-sans text-sm font-bold text-white tracking-tight">
                Cove Hacks
              </span>
            </div>
            <p className="font-sans text-sm text-white/30 max-w-xs leading-relaxed">
              A 48-hour hackathon for 400 builders in the Bay Area. June 17-19, 2026.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-3">
                Navigate
              </p>
              <div className="flex flex-col gap-1.5">
                {["About", "Schedule", "Tracks", "Sponsors", "FAQ"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-3">
                Connect
              </p>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:hello@covehacks.org" className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors">
                  Email
                </a>
                <a href="#" className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors">
                  Twitter
                </a>
                <a href="#" className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors">
                  Instagram
                </a>
                <a href="#" className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-wider text-white/15">
            Made with caffeine in the Bay
          </p>
          <p className="font-mono text-[10px] tracking-wider text-white/15">
            2026 Cove Hacks
          </p>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image";

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
            <p className="font-sans text-xs text-white/45 max-w-xs leading-relaxed">
              The largest in-person high school hackathon ever.
              <br />
              June 26&ndash;28, 2026 &middot; Bay Area, CA
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35 mb-1">
                Event
              </p>
              {["About", "Schedule", "Sponsors", "FAQ"].map((l) => (
                <a
                  key={l}
                  href={`/#${l.toLowerCase()}`}
                  className="font-sans text-xs text-white/50 hover:text-white/65 transition-colors"
                >
                  {l}
                </a>
              ))}
              <a
                href="/team"
                className="font-sans text-xs text-white/50 hover:text-white/65 transition-colors"
              >
                Team
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35 mb-1">
                Connect
              </p>
              <a
                href="mailto:team@covehacks.dev"
                className="font-sans text-xs text-white/50 hover:text-white/65 transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.instagram.com/covehacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-white/50 hover:text-white/65 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://discord.gg/FYyGNr3Ku7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-white/50 hover:text-white/65 transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10">
          <p className="font-mono text-[10px] text-white/30 tracking-wider">
            2026 Cove Hacks
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#2c2c2c] py-14 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/logo.png"
                alt="Cove Hacks logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-mono text-sm font-bold tracking-wider text-white">
                cove hacks
              </span>
            </div>
            <p className="font-sans text-sm text-white/35 max-w-xs leading-relaxed">
              a 48-hour hackathon in the bay area. 400 hackers. one weekend. let&apos;s build.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="font-mono text-[10px] tracking-widest text-white/25 mb-3">
                navigate
              </p>
              <div className="flex flex-col gap-1.5">
                {["about", "schedule", "tracks", "faq"].map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="font-sans text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest text-white/25 mb-3">
                connect
              </p>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:hello@covehacks.org" className="font-sans text-sm text-white/45 hover:text-white transition-colors">
                  email
                </a>
                <a href="#" className="font-sans text-sm text-white/45 hover:text-white transition-colors">
                  twitter
                </a>
                <a href="#" className="font-sans text-sm text-white/45 hover:text-white transition-colors">
                  instagram
                </a>
                <a href="#" className="font-sans text-sm text-white/45 hover:text-white transition-colors">
                  discord
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-wider text-white/20">
            made with caffeine in the bay
          </p>
          <p className="font-mono text-[10px] tracking-wider text-white/20">
            &copy; 2026 cove hacks
          </p>
        </div>
      </div>
    </footer>
  )
}

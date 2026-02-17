export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-36 bg-[#E8C55A]">
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-[#1a1a1a] leading-[0.95] mb-5 text-balance">
          Come build
          <br />
          something.
        </h2>

        <p className="font-sans text-base md:text-lg text-[#1a1a1a]/55 mb-10 max-w-sm mx-auto">
          Apps close June 1. 400 spots. Bring a laptop, curiosity, and maybe a
          soldering iron.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="font-sans text-sm font-bold bg-[#1a1a1a] text-white px-10 py-3.5 rounded-full hover:bg-[#333] transition-colors"
          >
            Apply now
          </a>
          <a
            href="mailto:sponsors@covehacks.org"
            className="font-sans text-sm font-medium text-[#1a1a1a]/60 border border-[#1a1a1a]/20 px-10 py-3.5 rounded-full hover:border-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-all"
          >
            Sponsor us
          </a>
        </div>

        <p className="font-mono text-xs text-[#1a1a1a]/30 mt-10">
          hello@covehacks.org
        </p>
      </div>
    </section>
  )
}

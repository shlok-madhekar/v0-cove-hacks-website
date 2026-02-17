export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] mb-2">
              Sponsors
            </h2>
            <p className="font-sans text-sm text-[#1a1a1a]/35 max-w-md">
              Cove Hacks runs on the support of companies and orgs that want to invest in the next generation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href="#"
              className="font-sans text-[13px] font-semibold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors text-center whitespace-nowrap"
            >
              View Prospectus
            </a>
            <a
              href="mailto:sponsors@covehacks.org"
              className="font-sans text-[13px] text-[#1a1a1a]/40 border border-[#1a1a1a]/10 px-5 py-2.5 rounded-full hover:border-[#1a1a1a]/20 hover:text-[#1a1a1a]/60 transition-all text-center whitespace-nowrap"
            >
              sponsors@covehacks.org
            </a>
          </div>
        </div>

        {/* Title sponsors */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/20 mb-3">
          Title
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={`t1-${i}`}
              className="border-2 border-dashed border-[#1a1a1a]/8 rounded-2xl w-full sm:w-[200px] h-[80px] flex items-center justify-center"
            >
              <span className="font-sans text-xs text-[#1a1a1a]/12">
                Your Logo Here
              </span>
            </div>
          ))}
        </div>

        {/* Gold sponsors */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/20 mb-3">
          Gold
        </p>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={`t2-${i}`}
              className="border border-dashed border-[#1a1a1a]/6 rounded-xl w-full sm:w-[150px] h-[60px] flex items-center justify-center"
            >
              <span className="font-sans text-[11px] text-[#1a1a1a]/10">
                Logo
              </span>
            </div>
          ))}
        </div>

        {/* Community sponsors */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/20 mb-3">
          Community
        </p>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`t3-${i}`}
              className="border border-dashed border-[#1a1a1a]/4 rounded-lg w-[100px] h-[44px] flex items-center justify-center"
            >
              <span className="font-sans text-[10px] text-[#1a1a1a]/8">
                Logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

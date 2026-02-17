export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] mb-2">
              Sponsors
            </h2>
            <p className="font-sans text-sm text-[#1a1a1a]/40 max-w-md">
              Cove Hacks is made possible by companies that care about the next generation of builders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="font-sans text-[13px] font-semibold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors text-center"
            >
              View Prospectus
            </a>
            <a
              href="mailto:sponsors@covehacks.org"
              className="font-sans text-[13px] text-[#1a1a1a]/50 border border-[#1a1a1a]/10 px-5 py-2.5 rounded-full hover:border-[#1a1a1a]/25 hover:text-[#1a1a1a]/70 transition-all text-center"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Tier 1 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={`t1-${i}`}
              className="border-2 border-dashed border-[#1a1a1a]/8 rounded-2xl w-full sm:w-[200px] h-[80px] flex items-center justify-center"
            >
              <span className="font-sans text-sm text-[#1a1a1a]/15">
                Your Logo
              </span>
            </div>
          ))}
        </div>

        {/* Tier 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={`t2-${i}`}
              className="border border-dashed border-[#1a1a1a]/6 rounded-xl w-[140px] h-[55px] flex items-center justify-center"
            >
              <span className="font-sans text-xs text-[#1a1a1a]/12">
                Logo
              </span>
            </div>
          ))}
        </div>

        {/* Tier 3 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`t3-${i}`}
              className="border border-dashed border-[#1a1a1a]/4 rounded-lg w-[100px] h-[40px] flex items-center justify-center"
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

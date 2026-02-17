export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.05] mb-3">
          Sponsors
        </h2>
        <p className="font-sans text-base text-[#1a1a1a]/45 mb-12 max-w-md">
          Want to help make this happen?{" "}
          <a
            href="mailto:sponsors@covehacks.org"
            className="underline underline-offset-4 decoration-[#1a1a1a]/20 hover:decoration-[#1a1a1a]/50 text-[#1a1a1a]/65 transition-colors"
          >
            Reach out
          </a>
          .
        </p>

        {/* Tier 1 */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
          {["Your Company", "Your Company", "Your Company"].map((name, i) => (
            <div
              key={`t1-${i}`}
              className="border-2 border-dashed border-[#1a1a1a]/10 rounded-2xl w-[200px] h-[90px] flex items-center justify-center"
            >
              <span className="font-sans text-sm font-semibold text-[#1a1a1a]/20">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Tier 2 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {["Your Company", "Your Company", "Your Company", "Your Company"].map((name, i) => (
            <div
              key={`t2-${i}`}
              className="border border-dashed border-[#1a1a1a]/8 rounded-xl w-[150px] h-[65px] flex items-center justify-center"
            >
              <span className="font-sans text-xs text-[#1a1a1a]/15">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Tier 3 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`t3-${i}`}
              className="border border-dashed border-[#1a1a1a]/6 rounded-lg w-[110px] h-[45px] flex items-center justify-center"
            >
              <span className="font-sans text-[10px] text-[#1a1a1a]/10">
                Logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

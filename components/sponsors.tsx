export function Sponsors() {
  const tierOne = ["Acme Corp", "TechCo", "BuildLabs"]
  const tierTwo = ["StartupFund", "DevTools Inc", "CloudBase", "Pixel Studio"]
  const tierThree = ["CafeCode", "DataDen", "Nook", "SignalHQ", "Forma", "Helios"]

  return (
    <section id="sponsors" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59] mb-3">
            Sponsors
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.1] mb-4 text-balance">
            Backed by people who care.
          </h2>
          <p className="font-sans text-base text-[#666] max-w-md mx-auto">
            {"Interested in sponsoring? "}
            <a href="mailto:sponsors@covehacks.org" className="underline underline-offset-4 hover:text-[#1a1a1a] transition-colors">
              {"Let's talk."}
            </a>
          </p>
        </div>

        {/* Tier 1 - big */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {tierOne.map((name) => (
            <div
              key={name}
              className="bg-white border border-[#e5e0d5] rounded-2xl px-10 py-7 flex items-center justify-center min-w-[180px]"
            >
              <span className="font-sans text-lg font-bold text-[#1a1a1a]/70 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Tier 2 - medium */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          {tierTwo.map((name) => (
            <div
              key={name}
              className="bg-white border border-[#e5e0d5] rounded-xl px-7 py-5 flex items-center justify-center"
            >
              <span className="font-sans text-sm font-semibold text-[#1a1a1a]/55 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Tier 3 - small */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {tierThree.map((name) => (
            <div
              key={name}
              className="bg-white border border-[#e5e0d5] rounded-lg px-5 py-3 flex items-center justify-center"
            >
              <span className="font-sans text-xs font-medium text-[#1a1a1a]/40 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="font-mono text-[10px] text-center text-[#aaa] mt-8 tracking-wider">
          Placeholder names shown. Real sponsors coming soon.
        </p>
      </div>
    </section>
  )
}

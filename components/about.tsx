export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1a1a1a] leading-snug max-w-3xl text-pretty mb-12">
          400 high schoolers, one venue, 48 hours to build whatever you want.
        </h2>

        {/* Top row -- 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#6B9BD2] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[200px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              When & Where
            </p>
            <div>
              <p className="font-sans text-xl font-bold text-white leading-tight">
                June 19&ndash;21, 2026
              </p>
              <p className="font-sans text-sm text-white/55 mt-1">
                Bay Area, CA
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[200px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/25">
              What you get
            </p>
            <p className="font-sans text-sm text-white/45 leading-relaxed">
              All meals covered, workshops from people who know their stuff, mentors floating around, and prizes. No experience needed -- we got you.
            </p>
          </div>
        </div>

        {/* Full-width bottom card */}
        <div className="mt-3 bg-[#F0EDE6] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4 min-h-[120px]">
          <div className="flex-1">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/25 mb-3">
              Hardware
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/50 leading-relaxed max-w-lg">
              We&apos;re setting up a hardware lab -- soldering stations, microcontrollers, sensors, the works. Still finalizing everything, but if you want to build something physical, you&apos;ll have what you need.
            </p>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/20 whitespace-nowrap">
            Details coming soon
          </p>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: "400", l: "Hackers" },
            { n: "48", l: "Hours" },
            { n: "$15K+", l: "In prizes" },
            { n: "100%", l: "Free" },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-5 border border-black/[0.04]">
              <p className="font-sans text-2xl sm:text-3xl font-black text-[#1a1a1a] tracking-tight">
                {s.n}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/25 mt-1">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

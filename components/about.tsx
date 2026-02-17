export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1a1a1a] leading-snug max-w-3xl text-pretty mb-14">
          400 high schoolers, one venue, 48 hours to build whatever you want.
          Software, hardware, or something in between.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* When & where */}
          <div className="bg-[#6B9BD2] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              When & Where
            </p>
            <div>
              <p className="font-sans text-xl font-bold text-white leading-tight">
                June 17&ndash;19
              </p>
              <p className="font-sans text-sm text-white/60 mt-1">
                Bay Area, CA
              </p>
            </div>
          </div>

          {/* What you get */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/25">
              What you get
            </p>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Free food the whole time, workshops, mentors, and prizes. No experience needed &mdash; we have beginner workshops and people who want to help.
            </p>
          </div>

          {/* Hardware */}
          <div className="bg-[#F0EDE6] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#1a1a1a]/25">
              Hardware
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/55 leading-relaxed">
              We&apos;re putting together a hardware lab with microcontrollers, sensors, and tools. More details coming soon.
            </p>
          </div>
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

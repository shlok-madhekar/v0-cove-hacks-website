export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Big statement */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] leading-[1.05] max-w-4xl text-pretty">
            We&apos;re getting 400 high schoolers together to build stuff that
            actually matters &mdash; hardware, software, whatever you want.
          </h2>
        </div>

        {/* Info grid -- Spotify playlist card vibe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-[#7BA4D9] rounded-2xl p-7 flex flex-col justify-between min-h-[240px]">
            <p className="font-mono text-[11px] tracking-wider uppercase text-white/50">
              When & Where
            </p>
            <div>
              <p className="font-sans text-2xl font-black text-white tracking-tight leading-tight">
                June 17&ndash;19
              </p>
              <p className="font-sans text-sm text-white/70 mt-1">
                Bay Area, California
              </p>
              <p className="font-sans text-sm text-white/50 mt-0.5">
                Venue announced after acceptance
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] rounded-2xl p-7 flex flex-col justify-between min-h-[240px]">
            <p className="font-mono text-[11px] tracking-wider uppercase text-white/30">
              The deal
            </p>
            <div>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                48 hours of building, free food the entire time, workshops
                from industry people, hardware labs, mentors who actually help,
                and prizes. All free. No experience needed.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E8C55A] rounded-2xl p-7 flex flex-col justify-between min-h-[240px]">
            <p className="font-mono text-[11px] tracking-wider uppercase text-[#1a1a1a]/40">
              Hardware
            </p>
            <div>
              <p className="font-sans text-sm text-[#1a1a1a]/70 leading-relaxed">
                Arduinos, Raspberry Pis, sensors, 3D printers, soldering
                stations &mdash; we have a full hardware lab. Build something
                you can hold.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "400", label: "Hackers" },
            { num: "48", label: "Hours" },
            { num: "$15K+", label: "In prizes" },
            { num: "100%", label: "Free" },
          ].map((s) => (
            <div key={s.label} className="bg-[#F0EDE6] rounded-2xl p-5">
              <p className="font-sans text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">
                {s.num}
              </p>
              <p className="font-mono text-[10px] tracking-wider uppercase text-[#1a1a1a]/35 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Schedule() {
  const days = [
    {
      day: "Friday",
      date: "Jun 19",
      vibe: "Doors open, meet your team, start hacking",
      moments: ["Check-in & opening", "Team formation", "Dinner", "Hacking begins"],
    },
    {
      day: "Saturday",
      date: "Jun 20",
      vibe: "Full day of building, workshops, and vibes",
      moments: ["Workshops all day", "Meals covered", "Mentor office hours", "Late-night hacking"],
    },
    {
      day: "Sunday",
      date: "Jun 21",
      vibe: "Ship it, show it off, celebrate",
      moments: ["Final submissions", "Project expo", "Judging & awards", "Closing ceremony"],
    },
  ]

  return (
    <section id="schedule" className="relative py-20 md:py-28 bg-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-white mb-2">
            Schedule
          </h2>
          <p className="font-sans text-sm text-white/25">
            Here&apos;s the rough plan -- we&apos;ll nail down times closer to the event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {days.map((d, i) => (
            <div
              key={d.day}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col gap-6 ${
                i === 0
                  ? "bg-[#6B9BD2]"
                  : i === 1
                  ? "bg-[#2a2a2a]"
                  : "bg-[#F0EDE6]"
              }`}
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-sans text-lg font-bold ${
                      i === 2 ? "text-[#1a1a1a]" : "text-white"
                    }`}
                  >
                    {d.day}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      i === 2 ? "text-[#1a1a1a]/30" : "text-white/30"
                    }`}
                  >
                    {d.date}
                  </span>
                </div>
                <p
                  className={`font-sans text-[13px] mt-1 ${
                    i === 2 ? "text-[#1a1a1a]/40" : "text-white/35"
                  }`}
                >
                  {d.vibe}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mt-auto">
                {d.moments.map((m) => (
                  <div key={m} className="flex items-center gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        i === 2 ? "bg-[#1a1a1a]/15" : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`font-sans text-sm ${
                        i === 2 ? "text-[#1a1a1a]/55" : "text-white/50"
                      }`}
                    >
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Schedule() {
  const days = [
    {
      day: "Day 1",
      date: "Wed, June 17",
      color: "bg-[#6B9BD2]",
      textColor: "text-white",
      subColor: "text-white/40",
      items: [
        "Check-in & opening ceremony",
        "Dinner + team formation",
        "Hacking begins",
        "Evening workshops",
      ],
    },
    {
      day: "Day 2",
      date: "Thu, June 18",
      color: "bg-[#1a1a1a]",
      textColor: "text-white",
      subColor: "text-white/30",
      items: [
        "Workshops & mentorship",
        "All meals covered",
        "Hack all day (and night)",
        "Mini events + vibes",
      ],
    },
    {
      day: "Day 3",
      date: "Fri, June 19",
      color: "bg-[#F0EDE6]",
      textColor: "text-[#1a1a1a]",
      subColor: "text-[#1a1a1a]/30",
      items: [
        "Submit your project",
        "Expo & judging",
        "Closing ceremony",
        "Awards + group photo",
      ],
    },
  ]

  return (
    <section id="schedule" className="relative py-20 md:py-28 bg-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-white mb-2">
          Schedule
        </h2>
        <p className="font-sans text-sm text-white/30 mb-10">
          Rough plan. We&apos;ll fill in the details closer to the event.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {days.map((d) => (
            <div
              key={d.day}
              className={`${d.color} rounded-2xl p-6 min-h-[240px] flex flex-col justify-between`}
            >
              <div>
                <p className={`font-sans text-lg font-bold ${d.textColor} leading-tight`}>
                  {d.day}
                </p>
                <p className={`font-mono text-[10px] tracking-widest uppercase ${d.subColor} mt-0.5`}>
                  {d.date}
                </p>
              </div>
              <ul className="space-y-2 mt-6">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className={`font-sans text-sm ${d.subColor} leading-snug`}
                    style={{ opacity: 0.8 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

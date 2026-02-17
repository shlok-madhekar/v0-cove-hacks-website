"use client"

import { useState } from "react"

const days = [
  {
    label: "Day 1 -- Wed 6/17",
    short: "Wed",
    events: [
      { time: "4 PM", what: "Doors open + check-in" },
      { time: "5 PM", what: "Opening ceremony" },
      { time: "6 PM", what: "Dinner & team formation" },
      { time: "7 PM", what: "Hacking starts" },
      { time: "8:30 PM", what: "Workshop: Intro to hardware" },
      { time: "10 PM", what: "Workshop: APIs & integrations" },
      { time: "12 AM", what: "Midnight snacks" },
    ],
  },
  {
    label: "Day 2 -- Thu 6/18",
    short: "Thu",
    events: [
      { time: "8 AM", what: "Breakfast" },
      { time: "10 AM", what: "Workshop: AI/ML crash course" },
      { time: "12 PM", what: "Lunch" },
      { time: "1 PM", what: "Mentor office hours" },
      { time: "3 PM", what: "Workshop: How to pitch" },
      { time: "6:30 PM", what: "Dinner" },
      { time: "9 PM", what: "Mini games + vibes" },
      { time: "12 AM", what: "Late night snacks" },
    ],
  },
  {
    label: "Day 3 -- Fri 6/19",
    short: "Fri",
    events: [
      { time: "8 AM", what: "Breakfast" },
      { time: "11 AM", what: "Hacking ends -- submit!" },
      { time: "12 PM", what: "Lunch" },
      { time: "1 PM", what: "Expo & judging" },
      { time: "3 PM", what: "Closing ceremony + awards" },
      { time: "4 PM", what: "Group photo & goodbye" },
    ],
  },
]

export function Schedule() {
  const [active, setActive] = useState(0)

  return (
    <section id="schedule" className="relative py-20 md:py-28 bg-[#1a1a1a]">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-3">
          Schedule
        </h2>
        <p className="font-sans text-base text-white/35 mb-10 max-w-md">
          Subject to change, but this is roughly the plan.
        </p>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {days.map((day, i) => (
            <button
              key={day.short}
              onClick={() => setActive(i)}
              className={`font-sans text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-all ${
                active === i
                  ? "bg-[#7BA4D9] text-white"
                  : "bg-white/8 text-white/35 hover:text-white/55 hover:bg-white/12"
              }`}
            >
              <span className="hidden sm:inline">{day.label}</span>
              <span className="sm:hidden">{day.short}</span>
            </button>
          ))}
        </div>

        {/* Events list */}
        <div className="space-y-0">
          {days[active].events.map((e, i) => (
            <div
              key={`${e.time}-${i}`}
              className="flex items-center gap-5 py-3.5 px-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="font-mono text-xs text-white/20 w-16 shrink-0 text-right">
                {e.time}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#E8C55A] transition-colors shrink-0" />
              <span className="font-sans text-sm text-white/55 group-hover:text-white/90 transition-colors">
                {e.what}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

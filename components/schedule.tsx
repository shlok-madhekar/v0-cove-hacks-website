"use client"

import { useState } from "react"

const days = [
  {
    label: "fri 3/14",
    events: [
      { time: "4:00 PM", title: "check-in opens", tag: "logistics" },
      { time: "5:00 PM", title: "opening ceremony", tag: "main" },
      { time: "6:00 PM", title: "dinner + team formation", tag: "food" },
      { time: "7:00 PM", title: "hacking begins", tag: "hacking" },
      { time: "8:30 PM", title: "workshop: intro to AI/ML", tag: "workshop" },
      { time: "10:00 PM", title: "workshop: building with APIs", tag: "workshop" },
      { time: "12:00 AM", title: "midnight snacks", tag: "food" },
    ],
  },
  {
    label: "sat 3/15",
    events: [
      { time: "8:00 AM", title: "breakfast", tag: "food" },
      { time: "10:00 AM", title: "workshop: design thinking", tag: "workshop" },
      { time: "12:00 PM", title: "lunch", tag: "food" },
      { time: "1:00 PM", title: "mentor office hours", tag: "main" },
      { time: "3:00 PM", title: "workshop: pitching 101", tag: "workshop" },
      { time: "5:00 PM", title: "nature break -- group walk", tag: "activity" },
      { time: "6:30 PM", title: "dinner", tag: "food" },
      { time: "9:00 PM", title: "mini games + chill", tag: "activity" },
      { time: "12:00 AM", title: "late night snacks", tag: "food" },
    ],
  },
  {
    label: "sun 3/16",
    events: [
      { time: "8:00 AM", title: "breakfast", tag: "food" },
      { time: "11:00 AM", title: "hacking ends -- submit projects", tag: "hacking" },
      { time: "12:00 PM", title: "lunch", tag: "food" },
      { time: "1:00 PM", title: "project expo + judging", tag: "main" },
      { time: "3:00 PM", title: "closing ceremony + awards", tag: "main" },
      { time: "4:00 PM", title: "goodbye + group photo", tag: "logistics" },
    ],
  },
]

const tagColors: Record<string, string> = {
  main: "bg-[#7BA4D9]/20 text-[#5E8FCC]",
  food: "bg-[#E8C55A]/20 text-[#9a7d1c]",
  workshop: "bg-[#2c2c2c]/10 text-[#555]",
  hacking: "bg-[#E8A88A]/20 text-[#8a5a3e]",
  activity: "bg-[#4A7C59]/15 text-[#3D6B4F]",
  logistics: "bg-[#d4c9b5]/30 text-[#888]",
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-[#2c2c2c]">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-[#7BA4D9] mb-3">
            schedule
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-3 text-balance">
            the plan (roughly)
          </h2>
          <p className="font-sans text-base text-white/40 max-w-md">
            three days of building, eating, learning, and maybe sleeping a little.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8">
          {days.map((day, i) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(i)}
              className={`font-mono text-xs tracking-wider px-5 py-2.5 rounded-full whitespace-nowrap transition-all ${
                activeDay === i
                  ? "bg-[#7BA4D9] text-white"
                  : "bg-white/8 text-white/40 hover:text-white/70 hover:bg-white/12"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Events */}
        <div className="space-y-0.5">
          {days[activeDay].events.map((event) => (
            <div
              key={`${event.time}-${event.title}`}
              className="flex items-center gap-4 py-3.5 px-4 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <span className="font-mono text-xs text-white/25 w-20 shrink-0">
                {event.time}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-[#7BA4D9] transition-colors shrink-0" />
              <span className="font-sans text-sm md:text-base text-white/70 group-hover:text-white transition-colors flex-1">
                {event.title}
              </span>
              <span
                className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full shrink-0 ${tagColors[event.tag]}`}
              >
                {event.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

const days = [
  {
    label: "Wed 6/17",
    events: [
      { time: "4:00 PM", title: "Check-in opens", tag: "logistics" },
      { time: "5:00 PM", title: "Opening ceremony", tag: "main" },
      { time: "6:00 PM", title: "Dinner + team formation", tag: "food" },
      { time: "7:00 PM", title: "Hacking begins", tag: "hacking" },
      { time: "8:30 PM", title: "Workshop: Intro to AI/ML", tag: "workshop" },
      { time: "10:00 PM", title: "Workshop: Building with APIs", tag: "workshop" },
      { time: "12:00 AM", title: "Midnight snacks", tag: "food" },
    ],
  },
  {
    label: "Thu 6/18",
    events: [
      { time: "8:00 AM", title: "Breakfast", tag: "food" },
      { time: "10:00 AM", title: "Workshop: Design thinking", tag: "workshop" },
      { time: "12:00 PM", title: "Lunch", tag: "food" },
      { time: "1:00 PM", title: "Mentor office hours", tag: "main" },
      { time: "3:00 PM", title: "Workshop: Pitching 101", tag: "workshop" },
      { time: "6:30 PM", title: "Dinner", tag: "food" },
      { time: "9:00 PM", title: "Mini games + chill", tag: "activity" },
      { time: "12:00 AM", title: "Late night snacks", tag: "food" },
    ],
  },
  {
    label: "Fri 6/19",
    events: [
      { time: "8:00 AM", title: "Breakfast", tag: "food" },
      { time: "11:00 AM", title: "Hacking ends - submit projects", tag: "hacking" },
      { time: "12:00 PM", title: "Lunch", tag: "food" },
      { time: "1:00 PM", title: "Project expo + judging", tag: "main" },
      { time: "3:00 PM", title: "Closing ceremony + awards", tag: "main" },
      { time: "4:00 PM", title: "Group photo + goodbye", tag: "logistics" },
    ],
  },
]

const tagColors: Record<string, string> = {
  main: "bg-[#4a7c59]/15 text-[#4a7c59]",
  food: "bg-[#e8c06a]/20 text-[#8a6e1e]",
  workshop: "bg-[#1a1a1a]/8 text-[#666]",
  hacking: "bg-[#d4836a]/15 text-[#9a5a42]",
  activity: "bg-[#7ba4d9]/15 text-[#5580b0]",
  logistics: "bg-[#ccc]/20 text-[#888]",
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-[#1a1a1a]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59] mb-3">
            Schedule
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-3 text-balance">
            {"The plan (roughly)."}
          </h2>
          <p className="font-sans text-base text-white/40 max-w-md">
            Three days of building, eating, learning, and maybe sleeping a little.
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
                  ? "bg-[#4a7c59] text-white"
                  : "bg-white/8 text-white/40 hover:text-white/60 hover:bg-white/12"
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
              <div className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-[#4a7c59] transition-colors shrink-0" />
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

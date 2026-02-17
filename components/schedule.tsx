"use client"

import { useState } from "react"

const days = [
  {
    label: "Day 1 - Friday",
    date: "March 14",
    events: [
      { time: "4:00 PM", title: "Check-in Opens", tag: "logistics" },
      { time: "5:00 PM", title: "Opening Ceremony", tag: "main" },
      { time: "6:00 PM", title: "Dinner + Team Formation", tag: "food" },
      { time: "7:00 PM", title: "Hacking Begins", tag: "hacking" },
      { time: "8:30 PM", title: "Workshop: Intro to AI/ML", tag: "workshop" },
      { time: "10:00 PM", title: "Workshop: Building with APIs", tag: "workshop" },
      { time: "12:00 AM", title: "Midnight Snacks", tag: "food" },
    ],
  },
  {
    label: "Day 2 - Saturday",
    date: "March 15",
    events: [
      { time: "8:00 AM", title: "Breakfast", tag: "food" },
      { time: "10:00 AM", title: "Workshop: Design Thinking", tag: "workshop" },
      { time: "12:00 PM", title: "Lunch", tag: "food" },
      { time: "1:00 PM", title: "Mentor Office Hours", tag: "main" },
      { time: "3:00 PM", title: "Workshop: Pitching 101", tag: "workshop" },
      { time: "5:00 PM", title: "Nature Break - Group Hike", tag: "activity" },
      { time: "6:30 PM", title: "Dinner", tag: "food" },
      { time: "9:00 PM", title: "Mini Games + Chill", tag: "activity" },
      { time: "12:00 AM", title: "Late Night Snacks", tag: "food" },
    ],
  },
  {
    label: "Day 3 - Sunday",
    date: "March 16",
    events: [
      { time: "8:00 AM", title: "Breakfast", tag: "food" },
      { time: "11:00 AM", title: "Hacking Ends - Submit Projects", tag: "hacking" },
      { time: "12:00 PM", title: "Lunch", tag: "food" },
      { time: "1:00 PM", title: "Project Expo + Judging", tag: "main" },
      { time: "3:00 PM", title: "Closing Ceremony + Awards", tag: "main" },
      { time: "4:00 PM", title: "Goodbye + Group Photo", tag: "logistics" },
    ],
  },
]

const tagColors: Record<string, string> = {
  main: "bg-[#7BA4D9] text-white",
  food: "bg-[#E8C55A]/20 text-[#9a7d1c]",
  workshop: "bg-[#2c2c2c] text-white",
  hacking: "bg-[#E8A88A]/30 text-[#8a5a3e]",
  activity: "bg-[#6b8f5e]/20 text-[#4a6b3e]",
  logistics: "bg-[#d4c9b5]/40 text-[#666]",
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-[#2c2c2c]">
      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#7BA4D9] mb-4">
            The Plan
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4 text-balance">
            48 hours. Infinite possibilities.
          </h2>
          <p className="font-sans text-lg text-white/50 max-w-xl">
            Three days of building, learning, eating, and maybe a little sleeping.
          </p>
        </div>

        {/* Day tabs - Spotify style */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {days.map((day, i) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(i)}
              className={`font-mono text-xs tracking-widest uppercase px-5 py-3 rounded-full whitespace-nowrap transition-all ${
                activeDay === i
                  ? "bg-[#7BA4D9] text-white"
                  : "bg-white/10 text-white/50 hover:text-white hover:bg-white/15"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-1">
          {days[activeDay].events.map((event, i) => (
            <div
              key={`${event.time}-${event.title}`}
              className="flex items-center gap-4 md:gap-6 py-4 px-4 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <span className="font-mono text-xs tracking-wider text-white/30 w-20 shrink-0">
                {event.time}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#7BA4D9]/50 group-hover:bg-[#7BA4D9] transition-colors shrink-0" />
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="font-sans text-base md:text-lg font-semibold text-white/80 group-hover:text-white transition-colors truncate">
                  {event.title}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0 ${tagColors[event.tag]}`}
                >
                  {event.tag}
                </span>
              </div>
              <span className="font-mono text-xs text-white/20 hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

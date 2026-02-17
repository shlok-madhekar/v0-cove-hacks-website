const tracks = [
  {
    name: "Hardware",
    desc: "Robots, wearables, IoT, anything physical. We have the lab for it.",
    bg: "bg-[#E8A88A]",
    text: "text-[#1a1a1a]",
    muted: "text-[#1a1a1a]/50",
  },
  {
    name: "AI / ML",
    desc: "LLMs, computer vision, generative stuff, or something nobody's thought of yet.",
    bg: "bg-[#7BA4D9]",
    text: "text-white",
    muted: "text-white/60",
  },
  {
    name: "Social Good",
    desc: "Education, accessibility, climate, health -- tech that helps real people.",
    bg: "bg-[#1a1a1a]",
    text: "text-white",
    muted: "text-white/45",
  },
  {
    name: "Open Source",
    desc: "Build something the world can use, fork, and improve on.",
    bg: "bg-[#E8C55A]",
    text: "text-[#1a1a1a]",
    muted: "text-[#1a1a1a]/50",
  },
  {
    name: "Wild Card",
    desc: "Doesn't fit a category? Good. Surprise us.",
    bg: "bg-[#F0EDE6]",
    text: "text-[#1a1a1a]",
    muted: "text-[#1a1a1a]/40",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.05] mb-4">
          Tracks
        </h2>
        <p className="font-sans text-base text-[#1a1a1a]/50 mb-10 max-w-lg">
          Pick one or don&apos;t. Each track has its own mentors and prizes,
          but you can build whatever you want.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tracks.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-2xl p-6 min-h-[180px] flex flex-col justify-between hover:scale-[1.02] transition-transform`}
            >
              <h3 className={`font-sans text-xl font-black tracking-tight ${t.text}`}>
                {t.name}
              </h3>
              <p className={`font-sans text-sm leading-relaxed mt-4 ${t.muted}`}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

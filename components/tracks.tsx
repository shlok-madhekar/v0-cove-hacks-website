import { Globe, Brain, Heart, Leaf, Sparkles } from "lucide-react"

const tracks = [
  {
    icon: Leaf,
    name: "sustainability",
    description: "climate tech, green energy, conservation -- anything that helps the planet.",
    color: "#4A7C59",
  },
  {
    icon: Brain,
    name: "AI for good",
    description: "use AI to actually help people. accessibility, education, health, whatever matters to you.",
    color: "#7BA4D9",
  },
  {
    icon: Heart,
    name: "community",
    description: "social platforms, civic tech, local tools -- stuff that brings people closer.",
    color: "#E8A88A",
  },
  {
    icon: Globe,
    name: "open source",
    description: "build something anyone can use, fork, and improve. tools, libraries, you name it.",
    color: "#E8C55A",
  },
  {
    icon: Sparkles,
    name: "wild card",
    description: "doesn't fit anywhere else? perfect. surprise us.",
    color: "#2c2c2c",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] text-[#7BA4D9] mb-3">
            tracks
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance mb-4">
            pick a lane (or don&apos;t)
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed">
            each track has dedicated mentors, sponsors, and prizes. or just go wild card.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tracks.map((track, i) => (
            <div
              key={track.name}
              className={`group rounded-2xl p-6 border border-[#d4c9b5]/30 bg-white/60 hover:bg-white/90 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${track.color}15` }}
              >
                <track.icon
                  className="w-4 h-4"
                  style={{ color: track.color }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#2c2c2c] tracking-tight mb-2">
                {track.name}
              </h3>
              <p className="font-sans text-sm text-[#666] leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

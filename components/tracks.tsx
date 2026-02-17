import { Globe, Brain, Heart, Leaf, Sparkles } from "lucide-react"

const tracks = [
  {
    icon: Leaf,
    name: "Sustainability",
    description: "Climate tech, green energy, conservation - anything that helps the planet.",
    color: "#4a7c59",
  },
  {
    icon: Brain,
    name: "AI for Good",
    description: "Use AI to actually help people. Accessibility, education, health.",
    color: "#5580b0",
  },
  {
    icon: Heart,
    name: "Community",
    description: "Social platforms, civic tech, local tools - stuff that brings people closer.",
    color: "#d4836a",
  },
  {
    icon: Globe,
    name: "Open Source",
    description: "Build something anyone can use, fork, and improve.",
    color: "#e8c06a",
  },
  {
    icon: Sparkles,
    name: "Wild Card",
    description: "Doesn't fit anywhere else? Perfect. Surprise us.",
    color: "#1a1a1a",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59] mb-3">
            Tracks
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.1] mb-4 text-balance">
            Pick a lane (or don't).
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed">
            Each track has dedicated mentors, sponsors, and prizes. Or just go wild card.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tracks.map((track) => (
            <div
              key={track.name}
              className="group rounded-2xl p-6 border border-[#e5e0d5] bg-white hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${track.color}18` }}
              >
                <track.icon
                  className="w-4 h-4"
                  style={{ color: track.color }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1a1a1a] tracking-tight mb-2">
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

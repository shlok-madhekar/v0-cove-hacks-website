import { Globe, Brain, Heart, Leaf, Sparkles } from "lucide-react"

const tracks = [
  {
    icon: Leaf,
    name: "Sustainability",
    description: "Build tools that help our planet breathe. Climate tech, green energy, conservation - if it makes Earth happier, it belongs here.",
    color: "#6b8f5e",
  },
  {
    icon: Brain,
    name: "AI for Good",
    description: "Push the boundaries of artificial intelligence to solve real human problems. Accessibility, education, health - make AI mean something.",
    color: "#7BA4D9",
  },
  {
    icon: Heart,
    name: "Community",
    description: "Strengthen the bonds between people. Social platforms, civic tech, local solutions - bring humans closer together.",
    color: "#E8A88A",
  },
  {
    icon: Globe,
    name: "Open Source",
    description: "Contribute to the commons. Build tools, libraries, and projects that anyone can use, fork, and improve.",
    color: "#E8C55A",
  },
  {
    icon: Sparkles,
    name: "Wild Card",
    description: "Color outside the lines. If your idea doesn't fit a track, this is your track. Surprise us.",
    color: "#2c2c2c",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#7BA4D9] mb-4">
            Tracks
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance mb-6">
            Five paths. One weekend. Your choice.
          </h2>
          <p className="font-sans text-lg text-[#666] leading-relaxed max-w-2xl">
            Pick a track that resonates or go rogue with Wild Card. Every track has dedicated mentors, sponsors, and prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track, i) => (
            <div
              key={track.name}
              className={`group rounded-2xl p-6 md:p-8 border border-[#d4c9b5]/40 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all hover:shadow-lg hover:-translate-y-1 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${track.color}15` }}
              >
                <track.icon
                  className="w-5 h-5"
                  style={{ color: track.color }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-black text-[#2c2c2c] tracking-tight mb-3">
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

import { Clock, Users, Utensils, Trophy } from "lucide-react"

const stats = [
  { icon: Clock, label: "Hours", value: "48" },
  { icon: Users, label: "Hackers", value: "400" },
  { icon: Utensils, label: "Meals", value: "All free" },
  { icon: Trophy, label: "In prizes", value: "$10K+" },
]

const perks = [
  "Meals + snacks all weekend",
  "Workshops & mentors",
  "Swag you'll actually wear",
  "A weekend you won't forget",
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59] mb-3">
            About
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.1] mb-5 text-balance">
            48 hours of building cool stuff with cool people.
          </h2>
          <p className="font-sans text-base md:text-lg text-[#666] leading-relaxed">
            Cove Hacks is a weekend hackathon in the Bay Area. Show up, find a team,
            build something from scratch, and demo it on Sunday. First-timers, designers,
            and anyone curious are welcome.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 border border-[#e5e0d5]"
            >
              <stat.icon className="w-5 h-5 text-[#4a7c59] mb-3" strokeWidth={1.5} />
              <p className="font-sans text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#999]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* What you get */}
          <div className="bg-[#1a1a1a] rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[260px]">
            <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59]">
              What you get
            </p>
            <div className="space-y-3 my-6">
              {perks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e8c06a] shrink-0" />
                  <span className="font-sans text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-white/30">
              {"And yeah, it's all free."}
            </p>
          </div>

          {/* Location */}
          <div className="bg-[#4a7c59] rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[260px]">
            <p className="font-mono text-xs tracking-widest uppercase text-white/60">
              Location
            </p>
            <div className="my-6">
              <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                Bay Area, CA
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                June 17-19, 2026. Exact venue announced after acceptance.
                Good weather, great food nearby.
              </p>
            </div>
            <p className="font-mono text-xs text-white/30">
              More details in your acceptance email
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

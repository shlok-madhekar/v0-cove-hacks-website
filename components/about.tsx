import Image from "next/image"
import { Clock, Users, Utensils, Trophy } from "lucide-react"

const stats = [
  { icon: Clock, label: "Hours", value: "48" },
  { icon: Users, label: "Hackers", value: "400" },
  { icon: Utensils, label: "Meals", value: "All free" },
  { icon: Trophy, label: "In prizes", value: "$10K+" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#f5f0e8]">
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
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#7BA4D9] mb-3">
            what is this
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance mb-5">
            48 hours of building cool stuff with cool people
          </h2>
          <p className="font-sans text-base md:text-lg text-[#666] leading-relaxed">
            cove hacks is a weekend hackathon in the bay area. show up, form a team,
            build something from scratch, and demo it on sunday. first-timers, designers,
            and non-cs people are all very welcome.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/70 rounded-2xl p-5 border border-[#d4c9b5]/30 hover:border-[#7BA4D9]/40 transition-colors"
            >
              <stat.icon className="w-5 h-5 text-[#7BA4D9] mb-3" strokeWidth={1.5} />
              <p className="font-sans text-2xl md:text-3xl font-black text-[#2c2c2c] tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#888]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Two column feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image card */}
          <div className="relative rounded-2xl overflow-hidden h-72 group">
            <Image
              src="/images/hills.jpg"
              alt="Golden hills of the Bay Area"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tight">
                bay area, california
              </h3>
              <p className="font-sans text-sm text-white/70 mt-1">
                rolling hills, good weather, great burritos nearby
              </p>
            </div>
          </div>

          {/* What you get card */}
          <div className="bg-[#2c2c2c] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-72">
            <p className="font-mono text-xs tracking-widest uppercase text-[#7BA4D9]">
              what you get
            </p>
            <div className="space-y-3">
              {["meals + snacks the entire weekend", "workshops & mentors", "swag that you'll actually wear", "a weekend you won't forget"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8C55A] shrink-0" />
                  <span className="font-sans text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-white/30">
              and yeah, it&apos;s all free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { TreePine, Sun, Users, Clock } from "lucide-react"

const stats = [
  { icon: Clock, label: "Hours", value: "48" },
  { icon: Users, label: "Hackers", value: "400" },
  { icon: Sun, label: "Tracks", value: "5" },
  { icon: TreePine, label: "Prizes", value: "$10K+" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#f5f0e8]">
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
        {/* Section header - Spotify-style bold */}
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#7BA4D9] mb-4">
            What is Cove Hacks?
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance mb-6">
            Where nature meets innovation in the heart of the Bay
          </h2>
          <p className="font-sans text-lg text-[#666] leading-relaxed max-w-2xl">
            Cove Hacks brings together 400 builders, dreamers, and creators for 48 hours of hacking surrounded by the beauty of California&apos;s natural landscape. Build something wild. Build something real.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card with hills image */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-72 md:h-80 group">
            <Image
              src="/images/hills.jpg"
              alt="Golden hills of the Bay Area at sunset with torn paper edges"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/80 via-[#2c2c2c]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="font-mono text-xs tracking-widest uppercase text-white/70 mb-2">
                Location
              </p>
              <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight">
                Bay Area, California
              </h3>
              <p className="font-sans text-sm text-white/70 mt-2 max-w-md">
                Nestled in the natural beauty of Northern California, surrounded by rolling hills and towering redwoods.
              </p>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 flex flex-col justify-between border border-[#d4c9b5]/40 hover:border-[#7BA4D9]/40 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-[#7BA4D9] mb-4" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-3xl font-black text-[#2c2c2c] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#888]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trees card */}
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <Image
              src="/images/trees.jpg"
              alt="Redwood and pine trees in paper-craft style"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-mono text-xs tracking-widest uppercase text-white/70 mb-1">
                Vibes
              </p>
              <h3 className="font-sans text-xl font-black text-white tracking-tight">
                Touch grass while you code
              </h3>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-[#2c2c2c] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-64">
            <p className="font-mono text-xs tracking-widest uppercase text-[#7BA4D9] mb-4">
              Our Philosophy
            </p>
            <div>
              <p className="font-sans text-xl md:text-2xl font-bold text-white leading-snug text-balance">
                &ldquo;The best ideas grow like trees - rooted in reality, reaching for the sky.&rdquo;
              </p>
              <p className="font-mono text-xs tracking-widest uppercase text-white/50 mt-4">
                - The Cove Hacks Team
              </p>
            </div>
          </div>

          {/* Cloud vibes card */}
          <div className="relative rounded-2xl overflow-hidden h-64 bg-[#7BA4D9]/10 border border-[#7BA4D9]/20 flex items-center justify-center">
            <Image
              src="/images/cloud1.jpg"
              alt=""
              width={300}
              height={200}
              className="absolute top-4 left-1/2 -translate-x-1/2 w-48 opacity-40 mix-blend-multiply"
            />
            <div className="relative z-10 text-center px-6">
              <p className="font-sans text-5xl font-black text-[#7BA4D9] tracking-tight">
                Free
              </p>
              <p className="font-mono text-xs tracking-widest uppercase text-[#888] mt-2">
                For all participants
              </p>
              <p className="font-sans text-sm text-[#666] mt-3">
                Food, swag, workshops, and vibes included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

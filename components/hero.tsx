"use client"

import { useEffect, useState } from "react"

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target.getTime() - now.getTime())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const mins = Math.floor((diff % 3600000) / 60000)
  const secs = Math.floor((diff % 60000) / 1000)
  return { days, hours, mins, secs }
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const { days, hours, mins, secs } = useCountdown(new Date("2026-06-17T16:00:00-07:00"))

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#6B9BD2] overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-sans text-[clamp(3.5rem,15vw,12rem)] font-black tracking-tighter text-white leading-[0.85] select-none">
            COVE
            <br />
            HACKS
          </h1>

          <p className="font-sans text-base sm:text-lg text-white/50 mt-4 max-w-sm mx-auto">
            the largest high school hackathon. ever.
          </p>
        </div>

        {/* Countdown */}
        <div
          className={`mt-10 sm:mt-14 transition-all duration-700 delay-200 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-5">
            {[
              { val: days, label: "days" },
              { val: hours, label: "hrs" },
              { val: mins, label: "min" },
              { val: secs, label: "sec" },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <span className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold text-white tabular-nums leading-none">
                    {String(unit.val).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-white/30 mt-1.5 uppercase tracking-widest">
                    {unit.label}
                  </span>
                </div>
                {i < 3 && (
                  <span className="font-mono text-2xl sm:text-4xl text-white/20 -mt-4 select-none">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className={`px-6 pb-7 pt-6 transition-all duration-700 delay-400 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
          <div>
            <p className="font-mono text-[11px] tracking-wider text-white/35 uppercase">
              June 17 &ndash; 19, 2026 &middot; Bay Area, CA
            </p>
            <p className="font-sans text-sm text-white/50 mt-1">
              400 hackers &middot; 48 hours &middot; hardware + software
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#register"
              className="font-sans text-sm font-semibold bg-white text-[#5a8abf] px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Apply
            </a>
            <a
              href="#about"
              className="font-sans text-sm text-white/60 border border-white/20 px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

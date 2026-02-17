"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#7BA4D9] overflow-hidden">
      {/* The sun -- the actual logo, big and proud */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/cove-logo.png"
            alt="Cove Hacks"
            width={520}
            height={520}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
            priority
          />
        </div>

        {/* Title layered on top */}
        <div
          className={`text-center mt-2 transition-all duration-700 delay-300 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] text-balance">
            COVE
            <br />
            HACKS
          </h1>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className={`relative z-10 px-6 pb-8 pt-6 transition-all duration-700 delay-500 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs tracking-wider text-white/60">
              June 17 &ndash; 19, 2026
            </p>
            <p className="font-sans text-lg sm:text-xl font-bold text-white leading-snug max-w-md">
              The largest high school hackathon ever.
              <br />
              <span className="text-white/70 font-normal text-base">
                400 hackers. 48 hours. Bay Area, CA.
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#register"
              className="font-sans text-sm font-bold bg-white text-[#7BA4D9] px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Apply now
            </a>
            <a
              href="#about"
              className="font-sans text-sm font-medium text-white border border-white/30 px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

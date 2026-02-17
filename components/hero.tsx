"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#f5f0e8] px-6 overflow-hidden">
      {/* Warm sun glow in the background - just subtle warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-b from-[#f0d68a]/30 via-[#e8c06a]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Cove Hacks sun logo"
            width={160}
            height={160}
            className="w-28 h-28 md:w-40 md:h-40 rounded-3xl shadow-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#1a1a1a] leading-[0.95] mb-5">
          Cove Hacks
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-[#555] mb-2 max-w-lg leading-relaxed">
          A 48-hour hackathon for 400 builders in the Bay Area.
        </p>

        {/* Date line */}
        <p className="font-mono text-sm text-[#999] tracking-wide mb-10">
          June 17 - 19, 2026
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#register"
            className="font-mono text-sm tracking-wide bg-[#1a1a1a] text-[#f5f0e8] px-8 py-3.5 rounded-full hover:bg-[#333] transition-colors font-bold"
          >
            Apply Now
          </a>
          <a
            href="#about"
            className="font-mono text-sm tracking-wide text-[#555] border border-[#ccc] px-8 py-3.5 rounded-full hover:border-[#999] hover:text-[#1a1a1a] transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Simple bottom edge -- little hills silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V80C120 45 240 60 360 55C480 50 540 70 660 40C780 10 900 50 1020 35C1140 20 1260 55 1380 45L1440 40V120H0Z"
            fill="#3d6b4f"
          />
          <path
            d="M0 120V90C100 65 200 75 350 65C500 55 600 80 750 55C900 30 1050 65 1200 50C1300 40 1380 60 1440 55V120H0Z"
            fill="#4a7c59"
          />
        </svg>
      </div>
    </section>
  )
}

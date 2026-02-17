"use client"

import Image from "next/image"

function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="white" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="60" rx="50" ry="30" />
      <ellipse cx="110" cy="55" rx="45" ry="35" />
      <ellipse cx="140" cy="62" rx="38" ry="25" />
      <ellipse cx="90" cy="45" rx="35" ry="28" />
    </svg>
  )
}

function TreeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="70" width="8" height="50" fill="#8B6F47" rx="2" />
      <polygon points="30,5 5,45 55,45" fill="#4A7C59" />
      <polygon points="30,20 10,55 50,55" fill="#5A8F6A" />
      <polygon points="30,35 12,70 48,70" fill="#4A7C59" />
    </svg>
  )
}

function PineTree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="17" y="60" width="6" height="40" fill="#6B5B3E" rx="1" />
      <polygon points="20,0 4,35 36,35" fill="#3D6B4F" />
      <polygon points="20,12 6,45 34,45" fill="#4A7C59" />
      <polygon points="20,25 8,60 32,60" fill="#3D6B4F" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#7BA4D9]">
      {/* Simple sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E8FCC] via-[#7BA4D9] to-[#9BBDE8]" />

      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Cartoon clouds */}
      <Cloud className="absolute top-16 -left-10 w-48 md:w-64 opacity-90 drop-shadow-sm animate-[float_8s_ease-in-out_infinite]" />
      <Cloud className="absolute top-28 right-4 w-36 md:w-52 opacity-80 drop-shadow-sm animate-[float_10s_ease-in-out_infinite_1s]" />
      <Cloud className="absolute top-52 left-1/4 w-28 md:w-40 opacity-60 drop-shadow-sm animate-[float_12s_ease-in-out_infinite_2s]" />
      <Cloud className="absolute bottom-64 right-1/4 w-32 md:w-44 opacity-70 drop-shadow-sm animate-[float_9s_ease-in-out_infinite_0.5s]" />

      {/* Sun glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#E8C55A]/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#E8A88A]/25 blur-2xl" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Cove Hacks sun logo"
            width={140}
            height={140}
            className="w-24 h-24 md:w-36 md:h-36 rounded-full drop-shadow-xl"
            priority
          />
        </div>

        <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-4 text-balance drop-shadow-md">
          cove hacks
        </h1>

        <p className="font-mono text-sm md:text-base text-white/90 mb-2">
          a 48-hour hackathon in the bay area
        </p>
        <p className="font-mono text-xs text-white/60 mb-8">
          march 14-16, 2026 // 400 hackers // free to attend
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#register"
            className="font-mono text-sm tracking-wider bg-white text-[#2c2c2c] px-8 py-3.5 rounded-full hover:bg-[#f0ebe3] transition-all hover:scale-105 shadow-lg font-bold"
          >
            apply now
          </a>
          <a
            href="#about"
            className="font-mono text-sm tracking-wider text-white border-2 border-white/50 px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
          >
            tell me more
          </a>
        </div>
      </div>

      {/* Trees at the bottom -- cartoon SVG forest */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none">
        <div className="relative w-full max-w-[1600px] h-32 md:h-44">
          {/* Tree row */}
          <TreeSVG className="absolute bottom-0 left-[2%] w-10 md:w-14 opacity-70" />
          <PineTree className="absolute bottom-0 left-[7%] w-7 md:w-10 opacity-80" />
          <TreeSVG className="absolute bottom-0 left-[12%] w-12 md:w-16 opacity-60" />
          <PineTree className="absolute bottom-0 left-[18%] w-8 md:w-12 opacity-75" />
          <TreeSVG className="absolute bottom-0 left-[24%] w-10 md:w-14 opacity-65" />
          <PineTree className="absolute bottom-0 left-[30%] w-9 md:w-13 opacity-80" />
          <TreeSVG className="absolute bottom-0 left-[36%] w-11 md:w-15 opacity-70" />
          <PineTree className="absolute bottom-0 left-[42%] w-7 md:w-11 opacity-85" />
          <TreeSVG className="absolute bottom-0 left-[48%] w-12 md:w-16 opacity-60" />
          <PineTree className="absolute bottom-0 left-[53%] w-8 md:w-12 opacity-75" />
          <TreeSVG className="absolute bottom-0 left-[58%] w-10 md:w-14 opacity-70" />
          <PineTree className="absolute bottom-0 left-[64%] w-9 md:w-13 opacity-80" />
          <TreeSVG className="absolute bottom-0 left-[70%] w-11 md:w-15 opacity-65" />
          <PineTree className="absolute bottom-0 left-[76%] w-7 md:w-10 opacity-75" />
          <TreeSVG className="absolute bottom-0 left-[82%] w-12 md:w-16 opacity-70" />
          <PineTree className="absolute bottom-0 left-[88%] w-8 md:w-12 opacity-80" />
          <TreeSVG className="absolute bottom-0 left-[94%] w-10 md:w-14 opacity-65" />
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-[#4A7C59]" />

      {/* Wavy grass edge into next section */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0 50V20Q60 10 120 18T240 22Q300 14 360 20T480 18Q540 24 600 16T720 22Q780 12 840 20T960 18Q1020 24 1080 16T1200 22Q1260 14 1320 20T1440 18V50H0Z"
            fill="#f5f0e8"
          />
        </svg>
      </div>
    </section>
  )
}

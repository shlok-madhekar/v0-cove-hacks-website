"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#7BA4D9]">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6a9ad4] via-[#7BA4D9] to-[#a8c8e8]" />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      {/* Floating clouds */}
      <div
        className="absolute top-12 -left-16 w-72 md:w-96 opacity-80"
        style={{ transform: `translateX(${scrollY * 0.02}px)` }}
      >
        <Image
          src="/images/cloud1.jpg"
          alt=""
          width={400}
          height={300}
          className="w-full h-auto mix-blend-screen"
        />
      </div>
      <div
        className="absolute top-32 -right-8 w-56 md:w-80 opacity-70"
        style={{ transform: `translateX(${-scrollY * 0.015}px)` }}
      >
        <Image
          src="/images/cloud2.jpg"
          alt=""
          width={320}
          height={240}
          className="w-full h-auto mix-blend-screen"
        />
      </div>
      <div
        className="absolute bottom-48 left-1/4 w-40 md:w-64 opacity-50"
        style={{ transform: `translateX(${scrollY * 0.01}px)` }}
      >
        <Image
          src="/images/cloud1.jpg"
          alt=""
          width={260}
          height={195}
          className="w-full h-auto mix-blend-screen scale-x-[-1]"
        />
      </div>

      {/* Sun glow (the logo feel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(232,168,138,0.6)_0%,_rgba(232,197,90,0.4)_35%,_rgba(123,164,217,0)_70%)] blur-xl" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Cove Hacks sun logo"
            width={160}
            height={160}
            className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-2xl"
            priority
          />
        </div>

        <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-6 text-balance drop-shadow-lg">
          Cove Hacks
        </h1>

        <p className="font-mono text-sm md:text-base tracking-widest uppercase text-white/80 mb-2">
          Bay Area&apos;s Nature-Powered Hackathon
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 mb-10">
          <span className="font-mono text-xs tracking-wider uppercase bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
            48 Hours
          </span>
          <span className="font-mono text-xs tracking-wider uppercase bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
            400 Hackers
          </span>
          <span className="font-mono text-xs tracking-wider uppercase bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
            Bay Area, CA
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="font-mono text-sm tracking-widest uppercase bg-white text-[#2c2c2c] px-8 py-4 rounded-full hover:bg-[#f5f0e8] transition-all hover:scale-105 shadow-lg font-bold"
          >
            Apply Now
          </a>
          <a
            href="#about"
            className="font-mono text-sm tracking-widest uppercase text-white border-2 border-white/50 px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Trees at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64">
        <Image
          src="/images/trees.jpg"
          alt="Redwood forest silhouette"
          fill
          className="object-cover object-top mix-blend-multiply opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e8] via-transparent to-transparent" />
      </div>

      {/* Torn paper edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 80V40C48 35 96 48 144 42C192 36 240 22 288 28C336 34 384 50 432 46C480 42 528 30 576 35C624 40 672 52 720 48C768 44 816 26 864 32C912 38 960 50 1008 45C1056 40 1104 28 1152 33C1200 38 1248 50 1296 46C1344 42 1392 28 1440 35V80H0Z"
            fill="#f5f0e8"
          />
        </svg>
      </div>
    </section>
  )
}

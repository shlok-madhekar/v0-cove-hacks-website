"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col bg-[#6B9BD2] overflow-hidden"
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-8">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60 mb-5">
            The world{"'"}s largest IRL high school hackathon
          </p>

          <h1 className="font-sans text-[clamp(3rem,13vw,11rem)] font-black tracking-[-0.06em] text-white leading-[0.85] select-none">
            COVE
            <br />
            HACKS
          </h1>

          <p className="font-mono text-xs sm:text-sm text-white/60 mt-5 tracking-wide">
            October&ndash;November 2026 &middot; Bay Area, CA
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`px-6 pb-6 transition-all duration-700 delay-200 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-white/55 uppercase">
              In-person &middot; hardware + software &middot; 400 hackers
            </p>
            <p className="font-mono text-[10px] sm:text-xs text-white/45 mt-1">
              48 hours &middot; $65K in prizes &middot; all skill levels
            </p>
          </div>

          <div className="flex gap-2.5 w-full sm:w-auto">
            <a
              href="https://lu.ma/p7fs725f"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold bg-white text-[#5a8abf] px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors flex-1 sm:flex-initial text-center"
            >
              Apply
            </a>
            <a
              href="#about"
              className="font-mono text-xs text-white/65 border border-white/25 px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors flex-1 sm:flex-initial text-center"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

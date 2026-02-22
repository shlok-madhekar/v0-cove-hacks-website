"use client";

import { useEffect, useState } from "react";

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const tick = () => setDiff(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { days, hours, mins, secs } = useCountdown(
    new Date("2026-06-19T09:00:00-07:00"),
  );

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
            The world{"'"}s largest high school hackathon
          </p>

          <h1 className="font-sans text-[clamp(3rem,13vw,11rem)] font-black tracking-[-0.06em] text-white leading-[0.85] select-none">
            COVE
            <br />
            HACKS
          </h1>

          <p className="font-mono text-xs sm:text-sm text-white/60 mt-5 tracking-wide">
            June 19&ndash;21, 2026 &middot; Bay Area, CA
          </p>
        </div>

        {/* Countdown */}
        <div
          className={`mt-10 sm:mt-14 transition-all duration-700 delay-200 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-baseline gap-2 sm:gap-4">
            {[
              { val: days, label: "d" },
              { val: hours, label: "h" },
              { val: mins, label: "m" },
              { val: secs, label: "s" },
            ].map((unit, i) => (
              <div
                key={unit.label}
                className="flex items-baseline gap-2 sm:gap-4"
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold text-white tabular-nums leading-none">
                    {String(unit.val).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-white/50">
                    {unit.label}
                  </span>
                </div>
                {i < 3 && (
                  <span className="font-mono text-xl sm:text-3xl text-white/30 select-none">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`px-6 pb-6 transition-all duration-700 delay-400 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-white/55 uppercase">
              400 hackers &middot; 48 hours &middot; $30K+ in prizes
            </p>
            <p className="font-mono text-[10px] sm:text-xs text-white/45 mt-1">
              hardware + software &middot; all skill levels
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

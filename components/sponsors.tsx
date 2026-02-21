"use client";

import { useState } from "react";
import { ProspectusModal } from "./prospectus-modal";

export function Sponsors() {
  const [prospectusOpen, setProspectusOpen] = useState(false);

  return (
    <section id="sponsors" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/25 mb-3">
              Sponsors
            </p>
            <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] mb-2">
              Our backers
            </h2>
            <p className="font-sans text-sm text-[#1a1a1a]/35 max-w-md">
              Cove Hacks runs on the support of companies and orgs that want to
              invest in the next generation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <button
              onClick={() => setProspectusOpen(true)}
              className="font-sans text-[13px] font-semibold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors text-center whitespace-nowrap cursor-pointer"
            >
              View Prospectus
            </button>
            <a
              href="mailto:covehacks@gmail.com"
              className="font-mono text-[11px] text-[#1a1a1a]/35 border border-[#1a1a1a]/10 px-5 py-2.5 rounded-full hover:border-[#1a1a1a]/20 hover:text-[#1a1a1a]/55 transition-all text-center whitespace-nowrap"
            >
              covehacks@gmail.com
            </a>
          </div>
        </div>

        {/* Title sponsors */}
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/20 mb-3">
          Title
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {[1, 2, 3].map((i) => (
            <div
              key={`t-${i}`}
              className="border-2 border-dashed border-[#1a1a1a]/8 rounded-2xl h-[80px] flex items-center justify-center"
            >
              <span className="font-mono text-[10px] tracking-wider text-[#1a1a1a]/12">
                Your Logo Here
              </span>
            </div>
          ))}
        </div>

        {/* Gold sponsors */}
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/20 mb-3">
          Gold
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 mb-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={`g-${i}`}
              className="border border-dashed border-[#1a1a1a]/6 rounded-xl h-[60px] flex items-center justify-center"
            >
              <span className="font-mono text-[10px] tracking-wider text-[#1a1a1a]/10">
                Logo
              </span>
            </div>
          ))}
        </div>

        {/* Community sponsors */}
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/20 mb-3">
          Community
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`c-${i}`}
              className="border border-dashed border-[#1a1a1a]/4 rounded-lg h-[44px] flex items-center justify-center"
            >
              <span className="font-mono text-[9px] tracking-wider text-[#1a1a1a]/8">
                Logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

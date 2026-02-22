"use client";

import { useState } from "react";
import Image from "next/image";
import { ProspectusModal } from "./prospectus-modal";

interface RealSponsor {
  name: string;
  logo: string;
  url: string;
  tier: "platinum" | "gold" | "silver" | "bronze" | "inkind";
}

const REAL_SPONSORS: RealSponsor[] = [
  {
    name: "Crackd",
    logo: "/sponsor-logos/gold/crackd-color.webp",
    url: "https://crackd.it/cove",
    tier: "gold",
  },
];

const GOLD_SPONSORS = REAL_SPONSORS.filter((s) => s.tier === "gold");
const SILVER_SPONSORS = REAL_SPONSORS.filter((s) => s.tier === "silver");
const BRONZE_SPONSORS = REAL_SPONSORS.filter((s) => s.tier === "bronze");
const PLATINUM_SPONSORS = REAL_SPONSORS.filter((s) => s.tier === "platinum");
const INKIND_SPONSORS = REAL_SPONSORS.filter((s) => s.tier === "inkind");

const PLATINUM_SKELETON_COUNT = 3;
const GOLD_TOTAL_SLOTS = 4;
const SILVER_TOTAL_SLOTS = 4;
const BRONZE_TOTAL_SLOTS = 6;
const INKIND_TOTAL_SLOTS = 6;

const goldSkeletons = Math.max(0, GOLD_TOTAL_SLOTS - GOLD_SPONSORS.length);
const silverSkeletons = Math.max(
  0,
  SILVER_TOTAL_SLOTS - SILVER_SPONSORS.length,
);
const bronzeSkeletons = Math.max(
  0,
  BRONZE_TOTAL_SLOTS - BRONZE_SPONSORS.length,
);
const platinumSkeletons = Math.max(
  0,
  PLATINUM_SKELETON_COUNT - PLATINUM_SPONSORS.length,
);
const inkindSkeletons = Math.max(
  0,
  INKIND_TOTAL_SLOTS - INKIND_SPONSORS.length,
);

function SponsorCard({
  sponsor,
  height,
}: {
  sponsor: RealSponsor;
  height: string;
}) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={`group relative ${height} flex items-center justify-center rounded-2xl border border-[#1a1a1a]/10 bg-white overflow-hidden transition-all duration-300 hover:border-[#c9a227]/40 hover:shadow-[0_0_0_2px_rgba(201,162,39,0.15)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]/50`}
    >
      {/* subtle gold shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#fff9e6]/60 to-transparent pointer-events-none" />
      <div className="relative w-[70%] h-[60%]">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain drop-shadow-sm"
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
        />
      </div>
    </a>
  );
}

const SKELETON_COPY = {
  partners: ["Become a partner", "Your company here", "Let's talk"],
  gold: ["Sponsor us", "Open spot", "You?"],
  silver: ["+", "+", "+", "+"],
  bronze: ["+", "+", "+", "+", "+", "+"],
  inkind: ["+", "+", "+", "+", "+", "+"],
};

function SkeletonCard({
  height,
  rounded,
  tier,
  index,
}: {
  height: string;
  rounded: string;
  tier: keyof typeof SKELETON_COPY;
  index: number;
}) {
  const copy = SKELETON_COPY[tier][index % SKELETON_COPY[tier].length];
  const isSmall = tier === "bronze" || tier === "inkind" || tier === "silver";

  return (
    <a
      href="mailto:team@covehacks.dev?subject=Sponsoring%20Cove%20Hacks"
      className={`group border border-dashed border-[#1a1a1a]/15 bg-[#1a1a1a]/[0.02] ${rounded} ${height} flex items-center justify-center transition-all duration-300 hover:border-[#6B9BD2]/30 hover:bg-[#6B9BD2]/[0.04] cursor-pointer`}
    >
      <span
        className={`${isSmall ? "font-sans text-lg text-[#1a1a1a]/20" : "font-sans text-[12px] text-[#1a1a1a]/30"} group-hover:text-[#6B9BD2]/60 transition-colors`}
      >
        {copy}
      </span>
    </a>
  );
}

export function Sponsors() {
  const [prospectusOpen, setProspectusOpen] = useState(false);

  return (
    <section id="sponsors" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-3">
              Sponsors
            </p>
            <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] mb-2">
              Our backers
            </h2>
            <p className="font-sans text-sm text-[#1a1a1a]/55 max-w-md">
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
              href="mailto:team@covehacks.dev"
              className="font-mono text-[11px] text-[#1a1a1a]/55 border border-[#1a1a1a]/15 px-5 py-2.5 rounded-full hover:border-[#1a1a1a]/25 hover:text-[#1a1a1a]/70 transition-all text-center whitespace-nowrap"
            >
              team@covehacks.dev
            </a>
          </div>
        </div>

        {/* ── Partners ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/50">
              Partners
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a]/10 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {PLATINUM_SPONSORS.map((s) => (
              <SponsorCard key={s.name} sponsor={s} height="h-[160px]" />
            ))}
            {Array.from({ length: platinumSkeletons }).map((_, i) => (
              <SkeletonCard
                key={`pt-${i}`}
                height="h-[160px]"
                rounded="rounded-2xl"
                tier="partners"
                index={i}
              />
            ))}
          </div>
        </div>

        {/* ── Gold ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#c9a227]/70">
              Gold
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#c9a227]/15 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {GOLD_SPONSORS.map((s) => (
              <SponsorCard key={s.name} sponsor={s} height="h-[110px]" />
            ))}
            {Array.from({ length: goldSkeletons }).map((_, i) => (
              <SkeletonCard
                key={`g-${i}`}
                height="h-[110px]"
                rounded="rounded-xl"
                tier="gold"
                index={i}
              />
            ))}
          </div>
        </div>

        {/* ── Silver ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/50">
              Silver
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a]/10 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {SILVER_SPONSORS.map((s) => (
              <SponsorCard key={s.name} sponsor={s} height="h-[76px]" />
            ))}
            {Array.from({ length: silverSkeletons }).map((_, i) => (
              <SkeletonCard
                key={`s-${i}`}
                height="h-[76px]"
                rounded="rounded-xl"
                tier="silver"
                index={i}
              />
            ))}
          </div>
        </div>

        {/* ── Bronze ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/50">
              Bronze
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a]/10 to-transparent" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {BRONZE_SPONSORS.map((s) => (
              <SponsorCard key={s.name} sponsor={s} height="h-[52px]" />
            ))}
            {Array.from({ length: bronzeSkeletons }).map((_, i) => (
              <SkeletonCard
                key={`b-${i}`}
                height="h-[52px]"
                rounded="rounded-lg"
                tier="bronze"
                index={i}
              />
            ))}
          </div>
        </div>

        {/* ── In-Kind ── */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/50">
              In-Kind
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a]/10 to-transparent" />
          </div>
          <p className="font-sans text-[11px] text-[#1a1a1a]/55 mb-3">
            Products, credits, and services that make Cove Hacks possible.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {INKIND_SPONSORS.map((s) => (
              <SponsorCard key={s.name} sponsor={s} height="h-[44px]" />
            ))}
            {Array.from({ length: inkindSkeletons }).map((_, i) => (
              <SkeletonCard
                key={`ik-${i}`}
                height="h-[44px]"
                rounded="rounded-lg"
                tier="inkind"
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

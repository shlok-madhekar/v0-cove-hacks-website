"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  link: string;
}

interface Team {
  name: string;
  description: string;
  members: TeamMember[];
}

const LEAD: TeamMember = {
  name: "Shlok Madhekar",
  role: "Lead Organizer",
  link: "https://www.instagram.com/shlok.madhekar/",
};

const EXEC_TEAM: Team = {
  name: "Executive",
  description: "The core leadership team steering Cove Hacks.",
  members: [
    {
      name: "Apply Now",
      role: "Head of Design",
      link: "https://forms.gle/J6DzSdhLEGn8G1up8",
    },
    {
      name: "Neel Patil",
      role: "Head of Sponsorship",
      link: "https://www.linkedin.com/in/neel-patil-a04652354",
    },
    {
      name: "Apply Now",
      role: "Head of Marketing",
      link: "https://forms.gle/J6DzSdhLEGn8G1up8",
    },
    {
      name: "Dhiaan Dave",
      role: "Head of Logistics & Ops",
      link: "https://www.linkedin.com/in/dhiaan",
    },
  ],
};

const SUB_TEAMS: Team[] = [
  {
    name: "Sponsorship",
    description:
      "Connecting with companies who want to invest in the next generation.",
    members: [
      {
        name: "Neel Patil",
        role: "Lead",
        link: "https://www.linkedin.com/in/neel-patil-a04652354",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
    ],
  },
  {
    name: "Design",
    description: "Brand, visual identity, and everything you see on screen.",
    members: [
      {
        name: "Apply Now",
        role: "Lead",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Designer",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Designer",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
    ],
  },
  {
    name: "Marketing",
    description: "Getting the word out and making sure people show up.",
    members: [
      {
        name: "Apply Now",
        role: "Lead",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Content",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Social Media",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Content",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Social Media",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Outreach",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
    ],
  },
  {
    name: "Logistics & Operations",
    description:
      "Venue, food, volunteers, AV, and making sure nothing falls apart.",
    members: [
      {
        name: "Dhiaan Dave",
        role: "Lead",
        link: "https://www.linkedin.com/in/dhiaan",
      },
      {
        name: "Shreyan Mitra",
        role: "Coordinator",
        link: "https://www.linkedin.com/in/shreyan-m-8910172b7",
      },
      {
        name: "Apply Now",
        role: "Coordinator",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Volunteer Coord.",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "AV & Tech",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
    ],
  },
  {
    name: "Volunteers",
    description:
      "Day-of crew making sure everything runs smoothly on the ground.",
    members: [
      {
        name: "Devin Liu",
        role: "Volunteer",
        link: "https://www.linkedin.com/in/devin-liu-6aa1b9325",
      },
      {
        name: "Apply Now",
        role: "Volunteer",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
      {
        name: "Apply Now",
        role: "Volunteer",
        link: "https://forms.gle/J6DzSdhLEGn8G1up8",
      },
    ],
  },
];

function MemberRow({
  member,
  variant = "dark",
}: {
  member: TeamMember;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <a
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between py-3.5 -mx-3 px-3 rounded-lg transition-colors ${
        isDark
          ? "border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.04]"
          : "hover:bg-[#1a1a1a]/[0.03]"
      }`}
    >
      <div className="flex items-baseline gap-3 min-w-0">
        <span
          className={`font-sans text-[13px] font-semibold truncate transition-colors ${
            isDark
              ? "text-white"
              : "text-[#1a1a1a]/80 group-hover:text-[#1a1a1a]"
          }`}
        >
          {member.name}
        </span>
        <span
          className={`font-mono text-[10px] tracking-wider uppercase shrink-0 ${
            isDark ? "text-white/35" : "text-[#1a1a1a]/30"
          }`}
        >
          {member.role}
        </span>
      </div>
      <ArrowUpRight
        className={`w-3.5 h-3.5 shrink-0 ml-3 transition-colors ${
          isDark
            ? "text-white/0 group-hover:text-white/50"
            : "text-[#1a1a1a]/0 group-hover:text-[#1a1a1a]/35"
        }`}
      />
    </a>
  );
}

export function TeamPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#6B9BD2]/[0.06] rounded-full blur-[120px] -z-0 pointer-events-none" />

        <div
          className={`relative z-10 max-w-5xl mx-auto transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40 mb-4">
            The people behind Cove Hacks
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.9]">
            Our Team
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-5 max-w-md leading-relaxed">
            Students building something big.
          </p>
        </div>
      </section>

      {/* Bento Grid — all teams */}
      <section className="px-6 pb-20 sm:pb-28">
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 delay-100 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Row 1 — 3 / 4 / 5 split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-4">
            {/* Lead organizer — blue accent */}
            <a
              href={LEAD.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:col-span-3 bg-[#6B9BD2] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(107,155,210,0.2)]"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                  Lead
                </p>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white/70 transition-colors" />
              </div>
              <div>
                <p className="font-sans text-xl font-black text-white tracking-tight leading-tight">
                  {LEAD.name}
                </p>
                <p className="font-mono text-[10px] text-white/45 mt-1.5">
                  {LEAD.role}
                </p>
              </div>
            </a>

            {/* Exec — dark */}
            <div className="lg:col-span-4 bg-[#222] rounded-2xl p-6 sm:p-7 flex flex-col">
              <div className="mb-4">
                <h3 className="font-sans text-base font-bold text-white tracking-tight">
                  {EXEC_TEAM.name}
                </h3>
                <p className="font-mono text-[10px] text-white/35 mt-1 leading-relaxed">
                  {EXEC_TEAM.description}
                </p>
              </div>
              <div className="flex flex-col border-t border-white/[0.08] pt-3 mt-auto">
                {EXEC_TEAM.members.map((member, i) => (
                  <MemberRow key={`exec-${i}`} member={member} variant="dark" />
                ))}
              </div>
            </div>

            {/* Sponsorship — cream, wider (biggest team) */}
            <div className="lg:col-span-5 bg-[#F0EDE6] rounded-2xl p-6 sm:p-7 flex flex-col">
              <div className="mb-5">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[0].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[0].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[0].members.map((member, i) => (
                  <MemberRow
                    key={`${SUB_TEAMS[0].name}-${i}`}
                    member={member}
                    variant="light"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — 3 / 4 / 4 / 3 split on 14-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_4fr_4fr_3fr] gap-4">
            {/* Design — cream */}
            <div className="bg-[#FAFAF7] rounded-2xl p-6 sm:p-7 flex flex-col">
              <div className="mb-5">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[1].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[1].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[1].members.map((member, i) => (
                  <MemberRow
                    key={`${SUB_TEAMS[1].name}-${i}`}
                    member={member}
                    variant="light"
                  />
                ))}
              </div>
            </div>

            {/* Marketing — dark */}
            <div className="bg-[#222] rounded-2xl p-6 sm:p-7 flex flex-col">
              <div className="mb-4">
                <h3 className="font-sans text-base font-bold text-white tracking-tight">
                  {SUB_TEAMS[2].name}
                </h3>
                <p className="font-mono text-[10px] text-white/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[2].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-white/[0.08] pt-3 mt-auto">
                {SUB_TEAMS[2].members.map((member, i) => (
                  <MemberRow
                    key={`${SUB_TEAMS[2].name}-${i}`}
                    member={member}
                    variant="dark"
                  />
                ))}
              </div>
            </div>

            {/* Logistics & Ops — cream */}
            <div className="bg-[#F0EDE6] rounded-2xl p-6 sm:p-7 flex flex-col">
              <div className="mb-5">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[3].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[3].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[3].members.map((member, i) => (
                  <MemberRow
                    key={`${SUB_TEAMS[3].name}-${i}`}
                    member={member}
                    variant="light"
                  />
                ))}
              </div>
            </div>

            {/* Volunteers — blue tint */}
            <div className="bg-[#6B9BD2]/10 rounded-2xl p-6 sm:p-7 flex flex-col border border-[#6B9BD2]/10">
              <div className="mb-5">
                <h3 className="font-sans text-base font-bold text-white tracking-tight">
                  {SUB_TEAMS[4].name}
                </h3>
                <p className="font-mono text-[10px] text-white/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[4].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-white/[0.08] pt-3 mt-auto">
                {SUB_TEAMS[4].members.map((member, i) => (
                  <MemberRow
                    key={`${SUB_TEAMS[4].name}-${i}`}
                    member={member}
                    variant="dark"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

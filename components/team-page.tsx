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
  link: "https://shlok.vercel.app/",
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
];

function ExecRow({ member }: { member: TeamMember }) {
  return (
    <a
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-3 border-b border-white/[0.08] last:border-b-0 transition-colors hover:bg-white/[0.04] -mx-3 px-3 rounded-lg"
    >
      <div className="flex items-baseline gap-3 min-w-0">
        <span className="font-sans text-[14px] font-semibold text-white truncate">
          {member.name}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-white/35 uppercase shrink-0">
          {member.role}
        </span>
      </div>
      <ArrowUpRight className="w-3.5 h-3.5 text-white/0 group-hover:text-white/50 transition-colors shrink-0 ml-3" />
    </a>
  );
}

function RosterRow({ member }: { member: TeamMember }) {
  return (
    <a
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-2.5 transition-colors hover:bg-[#1a1a1a]/[0.03] -mx-2 px-2 rounded-md"
    >
      <div className="flex items-baseline gap-2.5 min-w-0">
        <span className="font-sans text-[13px] font-medium text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] truncate transition-colors">
          {member.name}
        </span>
        <span className="font-mono text-[9px] tracking-wider text-[#1a1a1a]/30 uppercase shrink-0">
          {member.role}
        </span>
      </div>
      <ArrowUpRight className="w-3 h-3 text-[#1a1a1a]/0 group-hover:text-[#1a1a1a]/35 transition-colors shrink-0 ml-2" />
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
      <section className="px-6 pb-16 sm:pb-24">
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 delay-100 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Row 1 — 3 / 4 / 5 split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mb-3">
            {/* Lead organizer — blue accent */}
            <a
              href={LEAD.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:col-span-3 bg-[#6B9BD2] rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[180px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(107,155,210,0.2)]"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                  Lead
                </p>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white/70 transition-colors" />
              </div>
              <div>
                <p className="font-sans text-lg font-bold text-white tracking-tight leading-tight">
                  {LEAD.name}
                </p>
                <p className="font-mono text-[10px] text-white/45 mt-1.5">
                  {LEAD.role}
                </p>
              </div>
            </a>

            {/* Exec — dark */}
            <div className="lg:col-span-4 bg-[#222] rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="mb-2">
                <h3 className="font-sans text-base font-bold text-white tracking-tight">
                  {EXEC_TEAM.name}
                </h3>
                <p className="font-mono text-[10px] text-white/35 mt-1 leading-relaxed">
                  {EXEC_TEAM.description}
                </p>
              </div>
              <div className="flex flex-col border-t border-white/[0.08] pt-2 mt-auto">
                {EXEC_TEAM.members.map((member, i) => (
                  <ExecRow key={`exec-${i}`} member={member} />
                ))}
              </div>
            </div>

            {/* Sponsorship — cream, wider (biggest team) */}
            <div className="lg:col-span-5 bg-[#F0EDE6] rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[0].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[0].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[0].members.map((member, i) => (
                  <RosterRow
                    key={`${SUB_TEAMS[0].name}-${i}`}
                    member={member}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — 3 / 5 / 4 split (mirrored asymmetry) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            {/* Design — cream, compact */}
            <div className="lg:col-span-3 bg-[#FAFAF7] rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[1].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[1].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[1].members.map((member, i) => (
                  <RosterRow
                    key={`${SUB_TEAMS[1].name}-${i}`}
                    member={member}
                  />
                ))}
              </div>
            </div>

            {/* Marketing — dark, wide (big team) */}
            <div className="lg:col-span-5 bg-[#222] rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="mb-2">
                <h3 className="font-sans text-base font-bold text-white tracking-tight">
                  {SUB_TEAMS[2].name}
                </h3>
                <p className="font-mono text-[10px] text-white/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[2].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-white/[0.08] pt-2 mt-auto">
                {SUB_TEAMS[2].members.map((member, i) => (
                  <ExecRow key={`${SUB_TEAMS[2].name}-${i}`} member={member} />
                ))}
              </div>
            </div>

            {/* Logistics & Ops — cream */}
            <div className="lg:col-span-4 bg-[#F0EDE6] rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="font-sans text-base font-bold text-[#1a1a1a] tracking-tight">
                  {SUB_TEAMS[3].name}
                </h3>
                <p className="font-mono text-[10px] text-[#1a1a1a]/35 mt-1 leading-relaxed">
                  {SUB_TEAMS[3].description}
                </p>
              </div>
              <div className="flex flex-col border-t border-[#1a1a1a]/[0.06] pt-3 mt-auto">
                {SUB_TEAMS[3].members.map((member, i) => (
                  <RosterRow
                    key={`${SUB_TEAMS[3].name}-${i}`}
                    member={member}
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

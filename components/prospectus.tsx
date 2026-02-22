"use client";

import { Mail, Globe, Check, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { PROSPECTUS_DATA } from "@/lib/prospectus-data";

// Dynamically import the PDF button to avoid SSR issues with react-pdf
const ProspectusDownloadButton = dynamic(
  () =>
    import("./prospectus-download-button").then(
      (mod) => mod.ProspectusDownloadButton,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="bg-[#6B9BD2] text-white rounded-full p-4 opacity-50 shadow-2xl flex items-center gap-2 font-sans font-bold cursor-wait">
        <span className="hidden sm:inline">Preparing PDF...</span>
      </div>
    ),
  },
);

export function Prospectus() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#6B9BD2]/30 pb-20 overflow-x-hidden">
      {/* PDF Download Button (Floating) */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <ProspectusDownloadButton />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 print:pt-0 print:px-8 print:max-w-none">
        {/* Header / Hero */}
        <header className="text-center mb-24 print:mb-12 print:break-inside-avoid relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B9BD2]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-[#6B9BD2]/10 rounded-3xl p-4 border border-[#6B9BD2]/20 shadow-2xl shadow-[#6B9BD2]/10">
              <Image
                src="/images/cove-logo-nobg.png"
                alt="Cove Hacks Logo"
                fill
                className="object-contain p-4 drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <h1 className="font-sans text-5xl sm:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            COVE HACKS
          </h1>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#6B9BD2]/50"></div>
            <p className="font-mono text-sm sm:text-base text-[#6B9BD2] tracking-[0.2em] uppercase font-bold">
              Sponsorship Prospectus
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#6B9BD2]/50"></div>
          </div>

          <p className="font-sans text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Empower the next generation of builders at the Bay Area's premier
            high school hackathon.
            <br />
            <span className="text-white font-medium mt-4 block">
              June 19-21, 2026 &middot; San Francisco, CA
            </span>
          </p>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 print:mb-12 print:break-inside-avoid">
          {PROSPECTUS_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-white/[0.02] border border-white/5 hover:border-[#6B9BD2]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              <span className="font-sans text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#6B9BD2] transition-colors">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-[#6B9BD2] uppercase tracking-widest font-bold mb-1">
                {stat.label}
              </span>
              <span className="font-sans text-sm text-white/40">
                {stat.detail}
              </span>
            </div>
          ))}
        </section>

        {/* Why Sponsor */}
        <section className="mb-32 print:break-inside-avoid">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Why Sponsor?
              </h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                We're not just another hackathon. We're a launchpad for the most
                talented young engineers in the region.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROSPECTUS_DATA.whySponsor.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-[#6B9BD2]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#6B9BD2]/10 rounded-2xl flex items-center justify-center mb-6 text-[#6B9BD2] group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Demographics */}
        <section className="mb-32 print:break-inside-avoid grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              Who attends Cove Hacks?
            </h2>
            <p className="font-sans text-lg text-white/60 leading-relaxed mb-8">
              Our attendees are the top 1% of high school builders. They aren't
              just learning to code—they are shipping products, contributing to
              open source, and founding companies.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#6B9BD2] uppercase tracking-widest font-bold mb-4">
                  Top Interests
                </h4>
                <div className="space-y-3">
                  {PROSPECTUS_DATA.demographics.interests.map((interest) => (
                    <div key={interest.name} className="relative">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80 font-medium">
                          {interest.name}
                        </span>
                        <span className="text-white/40">
                          {interest.percent}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#6B9BD2]"
                          style={{ width: `${interest.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12">
            {PROSPECTUS_DATA.pastSponsors.length > 0 && (
              <>
                <h4 className="font-mono text-xs text-[#6B9BD2] uppercase tracking-widest font-bold mb-6 text-center">
                  Past Sponsors
                </h4>
                <div className="flex flex-wrap justify-center gap-4 mb-12 pb-12 border-b border-white/10">
                  {PROSPECTUS_DATA.pastSponsors.map((sponsor) => (
                    <div
                      key={sponsor}
                      className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-white/70 font-sans text-sm font-medium"
                    >
                      {sponsor}
                    </div>
                  ))}
                </div>
              </>
            )}

            <div>
              <h4 className="font-mono text-xs text-[#6B9BD2] uppercase tracking-widest font-bold mb-6 text-center">
                Experience Level
              </h4>
              <div className="flex gap-2 h-4 rounded-full overflow-hidden w-full">
                {PROSPECTUS_DATA.demographics.experience.map((exp, i) => (
                  <div
                    key={exp.name}
                    className={`h-full ${i === 0 ? "bg-[#6B9BD2]" : i === 1 ? "bg-[#6B9BD2]/60" : "bg-[#6B9BD2]/30"}`}
                    style={{ width: `${exp.percent}%` }}
                    title={`${exp.name}: ${exp.percent}%`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs text-white/40 font-mono">
                {PROSPECTUS_DATA.demographics.experience.map((exp) => (
                  <div key={exp.name} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#6B9BD2]" />
                    {exp.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tiers Table */}
        <section className="mb-32 print:mb-16 print:break-inside-avoid">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
            Sponsorship Tiers
          </h2>

          <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[800px] bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 text-left border-b border-white/10 w-1/3 bg-white/[0.02]">
                      <span className="font-mono text-xs text-white/40 uppercase tracking-widest font-bold">
                        Feature
                      </span>
                    </th>
                    {PROSPECTUS_DATA.tiers.map((tier) => (
                      <th
                        key={tier.name}
                        className="p-6 text-center border-b border-white/10 border-l border-white/5 w-1/6 bg-white/[0.02]"
                      >
                        <div
                          className="font-sans text-xl font-bold mb-2"
                          style={{ color: tier.color }}
                        >
                          {tier.name}
                        </div>
                        <div className="font-mono text-sm text-white/90 bg-white/5 py-1 px-4 rounded-full inline-block border border-white/5">
                          {tier.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROSPECTUS_DATA.features.map((feature, i) => (
                    <tr
                      key={feature.name}
                      className={`transition-colors hover:bg-white/[0.04] ${
                        i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
                      }`}
                    >
                      <td className="p-5 px-8 text-sm font-sans text-white/80 border-r border-white/5 font-medium">
                        {feature.name}
                      </td>
                      {feature.tiers.map((has, idx) => (
                        <td
                          key={idx}
                          className="p-5 text-center border-r border-white/5 last:border-r-0"
                        >
                          {has === true ? (
                            <div className="flex justify-center">
                              <div className="bg-[#6B9BD2]/20 rounded-full p-1.5 shadow-[0_0_10px_rgba(107,155,210,0.3)]">
                                <Check
                                  className="w-4 h-4 text-[#6B9BD2]"
                                  strokeWidth={3}
                                />
                              </div>
                            </div>
                          ) : has === false ? (
                            <div className="flex justify-center opacity-10">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                          ) : (
                            <span className="font-mono text-[10px] font-bold text-white/90 uppercase bg-white/10 px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                              {String(has)}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="relative overflow-hidden text-center bg-gradient-to-br from-[#6B9BD2] to-[#4A7BB2] rounded-[3rem] p-12 sm:p-24 print:break-inside-avoid text-white print:bg-[#6B9BD2] print:text-white shadow-2xl shadow-[#6B9BD2]/20 border border-white/10">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-sans text-4xl sm:text-5xl font-black mb-6 drop-shadow-md tracking-tight">
              Ready to Partner?
            </h2>
            <p className="font-sans text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm font-medium leading-relaxed">
              Join us in shaping the future of technology. We're happy to
              discuss custom packages to meet your recruiting or marketing
              goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:team@covehacks.dev"
                className="group flex items-center gap-3 font-mono text-sm bg-black/20 hover:bg-black/30 px-8 py-5 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm border border-white/10 hover:border-white/30 font-bold"
              >
                <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span>team@covehacks.dev</span>
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a
                href="https://covehacks.dev"
                className="group flex items-center gap-3 font-mono text-sm bg-white/20 hover:bg-white/30 px-8 py-5 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm border border-white/10 hover:border-white/30 font-bold"
              >
                <Globe className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span>covehacks.dev</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-white/20 font-mono text-xs uppercase tracking-widest print:hidden flex flex-col items-center gap-4">
          <div className="w-8 h-1 bg-white/10 rounded-full" />
          &copy; 2026 Cove Hacks. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

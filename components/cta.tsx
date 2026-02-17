import Image from "next/image"

export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-36 bg-[#1a1a1a] overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#4a7c59]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="Cove Hacks sun logo"
          width={72}
          height={72}
          className="w-14 h-14 mx-auto rounded-xl shadow-lg mb-8"
        />

        <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-4 text-balance">
          Come build with us.
        </h2>

        <p className="font-sans text-base md:text-lg text-white/50 mb-10 max-w-md mx-auto">
          Applications close June 1st. 400 spots. Bring your laptop and your weird ideas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="font-mono text-sm tracking-wide bg-[#4a7c59] text-white px-10 py-3.5 rounded-full hover:bg-[#5a8f6a] transition-colors font-bold"
          >
            Apply Now
          </a>
          <a
            href="mailto:sponsors@covehacks.org"
            className="font-mono text-sm tracking-wide text-white/50 border border-white/15 px-10 py-3.5 rounded-full hover:border-white/30 hover:text-white/70 transition-all"
          >
            Sponsor Us
          </a>
        </div>

        <p className="font-mono text-xs text-white/25 mt-8">
          {"Questions? hello@covehacks.org"}
        </p>
      </div>
    </section>
  )
}

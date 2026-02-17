import Image from "next/image"

export function CTA() {
  return (
    <section id="register" className="relative py-28 md:py-40 bg-[#1a1a1a] overflow-hidden">
      {/* Sun logo as subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <Image
          src="/images/cove-logo-nobg.png"
          alt=""
          width={800}
          height={800}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.95] mb-4 text-balance">
          Applications are open.
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/35 mb-8 max-w-sm mx-auto">
          June 17&ndash;19 &middot; Bay Area &middot; Free
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="font-sans text-sm font-semibold bg-white text-[#1a1a1a] px-8 py-3 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
          >
            Apply now
          </a>
          <a
            href="mailto:hello@covehacks.org"
            className="font-sans text-sm text-white/40 border border-white/10 px-8 py-3 rounded-full hover:border-white/25 hover:text-white/60 transition-all w-full sm:w-auto text-center"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-32 bg-[#6B9BD2] overflow-hidden">
      {/* Sun glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/cove-logo-nobg.png"
          alt=""
          width={600}
          height={600}
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] opacity-30"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-4">
          Applications open
        </p>

        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.95] mb-3 text-balance">
          Come build something.
        </h2>

        <p className="font-sans text-sm sm:text-base text-white/40 mb-10 max-w-sm mx-auto leading-relaxed">
          June 19&ndash;21 &middot; Bay Area &middot; Completely free
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="font-sans text-sm font-semibold bg-white text-[#5a8abf] px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
          >
            Apply now
          </a>
          <a
            href="mailto:hello@covehacks.org"
            className="font-sans text-sm text-white/50 border border-white/15 px-8 py-3.5 rounded-full hover:border-white/30 hover:text-white/70 transition-all w-full sm:w-auto text-center"
          >
            Questions? Hit us up
          </a>
        </div>
      </div>
    </section>
  )
}

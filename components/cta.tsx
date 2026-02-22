export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-32 bg-[#6B9BD2]">
      <div className="text-center px-6 max-w-xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 mb-6">
          Applications open
        </p>

        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.95] mb-4 text-balance">
          Come build something.
        </h2>

        <p className="font-mono text-xs sm:text-sm text-white/60 mb-10">
          June 19&ndash;21 &middot; Bay Area &middot; 100% free
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://lu.ma/p7fs725f"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold bg-white text-[#5a8abf] px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
          >
            Apply now
          </a>
          <a
            href="mailto:team@covehacks.dev"
            className="font-mono text-xs text-white/60 border border-white/25 px-8 py-3.5 rounded-full hover:border-white/40 hover:text-white/80 transition-all w-full sm:w-auto text-center"
          >
            team@covehacks.dev
          </a>
        </div>
      </div>
    </section>
  );
}

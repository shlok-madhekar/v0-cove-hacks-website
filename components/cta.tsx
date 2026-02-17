import Image from "next/image"

function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="white" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="60" rx="50" ry="30" />
      <ellipse cx="110" cy="55" rx="45" ry="35" />
      <ellipse cx="140" cy="62" rx="38" ry="25" />
      <ellipse cx="90" cy="45" rx="35" ry="28" />
    </svg>
  )
}

export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-36 bg-[#7BA4D9] overflow-hidden">
      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#E8C55A]/15 blur-3xl" />

      {/* Clouds */}
      <Cloud className="absolute top-6 left-6 w-36 opacity-50" />
      <Cloud className="absolute bottom-8 right-8 w-44 opacity-40" />
      <Cloud className="absolute top-1/3 right-1/4 w-24 opacity-30" />

      {/* Wavy top edge from paper section */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0 50V20Q60 10 120 18T240 22Q300 14 360 20T480 18Q540 24 600 16T720 22Q780 12 840 20T960 18Q1020 24 1080 16T1200 22Q1260 14 1320 20T1440 18V50H0Z"
            fill="#f5f0e8"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="Cove Hacks sun logo"
          width={80}
          height={80}
          className="w-16 h-16 mx-auto rounded-full drop-shadow-lg mb-6"
        />

        <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-4 text-balance drop-shadow-sm">
          come build with us
        </h2>

        <p className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-md mx-auto">
          apps close march 1st. 400 spots. bring your laptop and your weird ideas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="font-mono text-sm tracking-wider bg-white text-[#2c2c2c] px-10 py-3.5 rounded-full hover:bg-[#f0ebe3] transition-all hover:scale-105 shadow-lg font-bold inline-block"
          >
            apply now
          </a>
          <a
            href="#"
            className="font-mono text-sm tracking-wider text-white border-2 border-white/40 px-10 py-3.5 rounded-full hover:bg-white/10 transition-all inline-block"
          >
            sponsor us
          </a>
        </div>

        <p className="font-mono text-xs text-white/40 mt-6">
          questions? hit us up at hello@covehacks.org
        </p>
      </div>
    </section>
  )
}

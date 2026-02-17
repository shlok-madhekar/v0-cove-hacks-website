import Image from "next/image"

export function CTA() {
  return (
    <section id="register" className="relative py-24 md:py-40 bg-[#7BA4D9] overflow-hidden">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Sun glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(232,168,138,0.5)_0%,_rgba(232,197,90,0.3)_35%,_rgba(123,164,217,0)_65%)]" />

      {/* Clouds */}
      <div className="absolute top-8 left-8 w-48 opacity-40">
        <Image
          src="/images/cloud1.jpg"
          alt=""
          width={200}
          height={150}
          className="w-full h-auto mix-blend-screen"
        />
      </div>
      <div className="absolute bottom-12 right-12 w-56 opacity-30">
        <Image
          src="/images/cloud2.jpg"
          alt=""
          width={230}
          height={170}
          className="w-full h-auto mix-blend-screen"
        />
      </div>

      {/* Torn paper top edge */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60V30C60 25 120 38 180 32C240 26 300 14 360 20C420 26 480 42 540 38C600 34 660 22 720 28C780 34 840 45 900 40C960 35 1020 20 1080 25C1140 30 1200 42 1260 38C1320 34 1380 22 1440 28V60H0Z"
            fill="#f5f0e8"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="Cove Hacks sun logo"
          width={100}
          height={100}
          className="w-20 h-20 mx-auto rounded-full shadow-xl mb-8"
        />

        <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95] mb-6 text-balance drop-shadow-sm">
          Your spot in the cove is waiting
        </h2>

        <p className="font-sans text-lg text-white/70 mb-10 max-w-lg mx-auto">
          Applications are open. Space is limited to 400 hackers. Don&apos;t miss your chance to build something incredible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="font-mono text-sm tracking-widest uppercase bg-white text-[#2c2c2c] px-10 py-4 rounded-full hover:bg-[#f5f0e8] transition-all hover:scale-105 shadow-lg font-bold inline-block"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="font-mono text-sm tracking-widest uppercase text-white border-2 border-white/40 px-10 py-4 rounded-full hover:bg-white/10 transition-all inline-block"
          >
            Sponsor Us
          </a>
        </div>

        <p className="font-mono text-xs tracking-widest uppercase text-white/40 mt-8">
          Applications close March 1, 2026
        </p>
      </div>

      {/* Bottom trees */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
        <Image
          src="/images/trees.jpg"
          alt=""
          fill
          className="object-cover object-top mix-blend-multiply opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c] via-transparent to-transparent" />
      </div>
    </section>
  )
}

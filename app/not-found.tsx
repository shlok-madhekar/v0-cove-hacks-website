"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center bg-[#6B9BD2] py-24 md:py-32">
        <div
          className={`text-center px-6 max-w-xl mx-auto transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 mb-6">
            Page not found
          </p>

          <h1 className="font-sans text-7xl sm:text-8xl md:text-9xl font-black tracking-tight text-white leading-[0.95] mb-4">
            404
          </h1>

          <p className="font-mono text-xs sm:text-sm text-white/60 mb-10">
            This page doesn{"'"}t exist.
          </p>

          <a
            href="/"
            className="font-sans text-sm font-semibold bg-white text-[#5a8abf] px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-block"
          >
            Back to home
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

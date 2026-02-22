import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Schedule } from "@/components/schedule";
import { Sponsors } from "@/components/sponsors";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Sponsors />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

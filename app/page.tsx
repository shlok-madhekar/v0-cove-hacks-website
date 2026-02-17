import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Tracks } from "@/components/tracks"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Tracks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

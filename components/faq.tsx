"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Who can participate?",
    a: "Anyone! Whether you're a seasoned developer, a designer, a first-time hacker, or just curious - Cove Hacks welcomes you. High school students, college students, and recent grads are all encouraged to apply.",
  },
  {
    q: "Do I need a team?",
    a: "Nope! You can come solo and form a team at the event during our Team Formation session on Friday evening. Teams can be 1-4 people. We'll have icebreakers and matchmaking to help you find your crew.",
  },
  {
    q: "Is it really free?",
    a: "100% free. That includes meals, snacks, swag, workshops, mentorship, and good vibes. We believe hackathons should be accessible to everyone.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop, charger, a water bottle, toiletries, a sleeping bag if you plan to nap, and an open mind. We'll provide everything else - food, WiFi, power strips, and inspiration.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. We have workshops for beginners, mentors who love helping newcomers, and plenty of roles on a team that don't require coding - design, research, project management, pitching.",
  },
  {
    q: "Will there be sleeping arrangements?",
    a: "We'll have designated quiet rooms with mats. But let's be real - with 48 hours of hacking, the energy usually keeps people going. Coffee will be available 24/7.",
  },
  {
    q: "What about dietary restrictions?",
    a: "We've got you covered. We'll accommodate vegetarian, vegan, gluten-free, halal, kosher, and other dietary needs. Just let us know in your application.",
  },
  {
    q: "Can I start working on my project before the event?",
    a: "You can brainstorm ideas, but all code, designs, and assets must be created during the hackathon. Using open-source libraries and APIs is totally fine.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative cloud */}
      <div className="absolute top-16 right-0 w-64 opacity-20">
        <img
          src="/images/cloud2.jpg"
          alt=""
          className="w-full h-auto mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#7BA4D9] mb-4">
            FAQ
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="bg-white/50 backdrop-blur-sm rounded-xl border border-[#d4c9b5]/40 px-6 overflow-hidden data-[state=open]:bg-white/70"
            >
              <AccordionTrigger className="font-sans text-base font-bold text-[#2c2c2c] hover:no-underline py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-[#666] leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

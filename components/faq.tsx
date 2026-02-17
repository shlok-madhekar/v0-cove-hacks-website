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
    a: "Any high school student! Doesn't matter if you've never coded before or if you've been building since middle school. Designers, builders, tinkerers, curious people -- all welcome.",
  },
  {
    q: "Do I need a team?",
    a: "Nope. Come solo and find people at team formation Wednesday evening. Teams are 1-4 people. Some of the best projects are from people who just met.",
  },
  {
    q: "Is it really free?",
    a: "Yep. Food, snacks, hardware, swag, workshops, everything. We want money to never be the reason you don't come.",
  },
  {
    q: "What about hardware?",
    a: "We have a full hardware lab -- Arduinos, Raspberry Pis, sensors, breadboards, soldering stations, and 3D printers. You can also bring your own stuff.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, water bottle, sleeping bag if you want to nap, and whatever hardware you're working with. We handle everything else.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. We run beginner workshops, we have mentors, and there are tons of roles beyond coding -- design, hardware, project management, pitching.",
  },
  {
    q: "Can I start early?",
    a: "You can brainstorm, but all code, designs, and hardware work has to happen during the event. Open-source libraries and public APIs are fair game.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.05] mb-10">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-1.5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-[#1a1a1a]/6 px-5 overflow-hidden data-[state=open]:border-[#1a1a1a]/12 transition-all"
            >
              <AccordionTrigger className="font-sans text-sm md:text-base font-semibold text-[#1a1a1a] hover:no-underline py-4 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-[#1a1a1a]/55 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

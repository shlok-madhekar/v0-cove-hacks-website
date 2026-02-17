"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Who can come?",
    a: "Any high school student. Doesn't matter if you've never written a line of code. Designers, tinkerers, people who are just curious -- all good.",
  },
  {
    q: "Do I need a team?",
    a: "Nah. You can come solo and find people at team formation on Friday. Teams are 1-4 people.",
  },
  {
    q: "Is it actually free?",
    a: "Yeah. Food, hardware, swag, everything. We don't want money to be the reason someone doesn't show up.",
  },
  {
    q: "What about hardware stuff?",
    a: "We're working on a hardware lab with microcontrollers, sensors, and tools. You can also bring your own. More details coming soon.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, water bottle. Sleeping bag if you want to nap. We handle the rest.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Nope. We'll have beginner workshops and mentors. There's also plenty of non-coding roles -- design, hardware, pitching.",
  },
  {
    q: "Can I start building before the event?",
    a: "You can brainstorm and plan, but all building happens during the 48 hours. Open-source stuff and public APIs are fair game.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#FAFAF7]">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-sans text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] mb-8">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-1.5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-black/[0.04] px-5 overflow-hidden data-[state=open]:border-black/[0.08] transition-colors"
            >
              <AccordionTrigger className="font-sans text-[13px] sm:text-sm font-semibold text-[#1a1a1a] hover:no-underline py-4 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[13px] text-[#1a1a1a]/45 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

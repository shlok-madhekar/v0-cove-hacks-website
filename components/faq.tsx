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
    a: "Anyone! Whether you're a seasoned dev, a designer, a first-timer, or just curious. High school students, college students, and recent grads are all welcome.",
  },
  {
    q: "Do I need a team?",
    a: "Nope. You can come solo and find people at team formation on Wednesday evening. Teams can be 1-4 people.",
  },
  {
    q: "Is it actually free?",
    a: "Yes, 100%. Meals, snacks, swag, workshops, mentorship - all included.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, water bottle, toiletries, a sleeping bag if you want to nap, and an open mind. We'll handle everything else.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. We have beginner workshops, mentors who love helping newcomers, and plenty of roles that don't require coding - design, research, project management, pitching.",
  },
  {
    q: "Can I start my project early?",
    a: "You can brainstorm ideas, but all code, designs, and assets have to be created during the hackathon. Open-source libraries and APIs are totally fine.",
  },
  {
    q: "Dietary restrictions?",
    a: "We got you. Vegetarian, vegan, gluten-free, halal, kosher, and more. Just let us know in your application.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-[#4a7c59] mb-3">
            FAQ
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[1.1] text-balance">
            Questions? Yeah, we get those.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-[#e5e0d5] px-6 overflow-hidden data-[state=open]:shadow-sm transition-all"
            >
              <AccordionTrigger className="font-sans text-sm md:text-base font-semibold text-[#1a1a1a] hover:no-underline py-4 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-[#666] leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

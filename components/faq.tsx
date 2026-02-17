"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "who can come?",
    a: "anyone! whether you're a seasoned dev, a designer, a first-timer, or just curious. high school students, college students, and recent grads are all encouraged to apply.",
  },
  {
    q: "do i need a team?",
    a: "nope. you can come solo and find people at the event during team formation on friday night. teams can be 1-4 people. we'll have icebreakers to help you find your crew.",
  },
  {
    q: "is it actually free?",
    a: "yes, 100%. meals, snacks, swag, workshops, mentorship -- all included. we think hackathons should be accessible to everyone.",
  },
  {
    q: "what should i bring?",
    a: "laptop, charger, water bottle, toiletries, a sleeping bag if you want to nap, and an open mind. we'll provide everything else.",
  },
  {
    q: "do i need to know how to code?",
    a: "not at all. we have beginner workshops, mentors who love helping newcomers, and plenty of roles that don't need coding -- design, research, project management, pitching.",
  },
  {
    q: "is there sleeping?",
    a: "we'll have quiet rooms with mats. but honestly, with 48 hours of hacking, most people just power through. coffee is available 24/7.",
  },
  {
    q: "dietary restrictions?",
    a: "we got you. vegetarian, vegan, gluten-free, halal, kosher, and more. just let us know in your application.",
  },
  {
    q: "can i start my project early?",
    a: "you can brainstorm ideas, but all code, designs, and assets have to be created during the hackathon. open-source libraries and APIs are totally fine.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#f5f0e8]">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url(/images/paper-texture.jpg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-[#7BA4D9] mb-3">
            faq
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-[#2c2c2c] leading-[1.05] text-balance">
            you probably have questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="bg-white/50 rounded-xl border border-[#d4c9b5]/30 px-6 overflow-hidden data-[state=open]:bg-white/80 transition-colors"
            >
              <AccordionTrigger className="font-sans text-sm md:text-base font-bold text-[#2c2c2c] hover:no-underline py-4 text-left">
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

import { ApplyForm } from "@/components/apply-form"

export const metadata = {
  title: "Apply | Cove Hacks",
  description: "Apply to the largest high school hackathon ever. June 19-21, 2026.",
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e]">
      <div className="max-w-lg mx-auto px-5 py-12 sm:py-20">
        <a href="/" className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white/40 transition-colors">
          &larr; covehacks.org
        </a>

        <div className="mt-8 mb-10">
          <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white">
            Apply to Cove Hacks
          </h1>
          <p className="font-mono text-xs text-white/30 mt-2">
            June 19&ndash;21, 2026 &middot; Bay Area &middot; 48 hours
          </p>
        </div>

        <ApplyForm />
      </div>
    </main>
  )
}

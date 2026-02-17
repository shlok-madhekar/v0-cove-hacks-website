"use client"

import { useState } from "react"

const HEARD_OPTIONS = [
  "Robotics/CS Club",
  "Teacher",
  "School Website",
  "Poster",
  "Word of Mouth",
  "hackathons.hackclub.com",
  "Other",
]

const HACKATHON_OPTIONS = ["0 -- this is my first!", "1-2", "3-5", "6+"]

const GRADE_OPTIONS = ["6th", "7th", "8th", "9th", "10th", "11th", "12th"]

// Discord bot/server link -- replace with your actual link
const DISCORD_LINK = "https://discord.gg/covehacks"
const DISCORD_BOT_LINK = "https://discord.gg/covehacks"

type Step = "email" | "otp" | "info" | "discord" | "done"

export function ApplyForm() {
  const [step, setStep] = useState<Step>("email")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Form data
  const [email, setEmail] = useState("")
  const [otpCode, setOtpCode] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [grade, setGrade] = useState("")
  const [school, setSchool] = useState("")
  const [foodAllergies, setFoodAllergies] = useState("")
  const [heardFrom, setHeardFrom] = useState("")
  const [hackathonsAttended, setHackathonsAttended] = useState("")
  const [confirmsStudent, setConfirmsStudent] = useState(false)

  // Discord step
  const [discordCode, setDiscordCode] = useState("")

  async function handleSendOtp() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/apply/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStep("otp")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  async function handleVerifyOtp() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/apply/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: otpCode }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStep("info")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid or expired code")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit() {
    if (!confirmsStudent) {
      setError("You must confirm you are a current middle/high school student")
      return
    }
    if (!grade || !school || !heardFrom || !hackathonsAttended || !fullName) {
      setError("Please fill out all required fields")
      return
    }

    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/apply/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          full_name: fullName,
          phone,
          grade,
          school,
          food_allergies: foodAllergies,
          heard_from: heardFrom,
          hackathons_attended: hackathonsAttended,
          confirms_student: confirmsStudent,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setDiscordCode(data.discord_code)
      setStep("discord")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 font-sans focus:outline-none focus:border-[#6B9BD2]/50 focus:ring-1 focus:ring-[#6B9BD2]/30 transition-colors"

  const labelClass = "block font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2"

  const buttonClass =
    "w-full font-sans text-sm font-semibold bg-[#6B9BD2] text-white px-6 py-3.5 rounded-lg hover:bg-[#5a8abf] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"

  const secondaryButtonClass =
    "w-full font-mono text-xs text-white/30 border border-white/10 px-6 py-3 rounded-lg hover:border-white/20 hover:text-white/50 transition-all"

  // Step indicators
  const steps = ["Email", "Verify", "Details", "Discord"]
  const stepIndex = { email: 0, otp: 1, info: 2, discord: 3, done: 4 }

  return (
    <div>
      {/* Progress */}
      {step !== "done" && (
        <div className="flex items-center gap-1 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-1 flex-1">
              <div className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`h-1 w-full rounded-full transition-colors ${
                    i <= stepIndex[step]
                      ? "bg-[#6B9BD2]"
                      : "bg-white/8"
                  }`}
                />
                <span
                  className={`font-mono text-[9px] tracking-wider uppercase transition-colors ${
                    i <= stepIndex[step] ? "text-white/50" : "text-white/15"
                  }`}
                >
                  {s}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="font-mono text-xs text-red-400">{error}</p>
        </div>
      )}

      {/* Step 1: Email */}
      {step === "email" && (
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Email address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className={inputClass}
              autoFocus
            />
            <p className="font-mono text-[10px] text-white/15 mt-2">
              {"We'll send you a verification code"}
            </p>
          </div>
          <button
            onClick={handleSendOtp}
            disabled={loading || !email.includes("@")}
            className={buttonClass}
          >
            {loading ? "Sending..." : "Send verification code"}
          </button>
        </div>
      )}

      {/* Step 2: OTP Verification */}
      {step === "otp" && (
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Verification code *</label>
            <input
              type="text"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="000000"
              className={`${inputClass} font-mono text-lg tracking-[0.3em] text-center`}
              maxLength={6}
              autoFocus
            />
            <p className="font-mono text-[10px] text-white/15 mt-2">
              Check your inbox for a 6-digit code
            </p>
          </div>
          <button
            onClick={handleVerifyOtp}
            disabled={loading || otpCode.length !== 6}
            className={buttonClass}
          >
            {loading ? "Verifying..." : "Verify email"}
          </button>
          <button
            onClick={() => { setStep("email"); setOtpCode(""); setError(""); }}
            className={secondaryButtonClass}
          >
            Use a different email
          </button>
        </div>
      )}

      {/* Step 3: Application Details */}
      {step === "info" && (
        <div className="space-y-5">
          <div className="px-4 py-3 bg-[#6B9BD2]/10 border border-[#6B9BD2]/20 rounded-lg mb-2">
            <p className="font-mono text-[10px] text-[#6B9BD2]">
              Verified as {email}
            </p>
          </div>

          <div>
            <label className={labelClass}>Full name *</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jane Doe"
              className={inputClass}
              autoFocus
            />
          </div>

          <div>
            <label className={labelClass}>Phone number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Grade *</label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {GRADE_OPTIONS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`font-mono text-xs px-3 py-2.5 rounded-lg border transition-all ${
                    grade === g
                      ? "bg-[#6B9BD2]/20 border-[#6B9BD2]/40 text-[#6B9BD2]"
                      : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>School *</label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Your school name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Hackathons attended *</label>
            <div className="grid grid-cols-2 gap-2">
              {HACKATHON_OPTIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHackathonsAttended(h)}
                  className={`font-mono text-xs px-3 py-2.5 rounded-lg border transition-all text-left ${
                    hackathonsAttended === h
                      ? "bg-[#6B9BD2]/20 border-[#6B9BD2]/40 text-[#6B9BD2]"
                      : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Food allergies / restrictions</label>
            <input
              type="text"
              value={foodAllergies}
              onChange={(e) => setFoodAllergies(e.target.value)}
              placeholder="Vegetarian, dairy-free, etc."
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Where did you hear about us? *</label>
            <div className="grid grid-cols-2 gap-2">
              {HEARD_OPTIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHeardFrom(h)}
                  className={`font-mono text-[10px] sm:text-xs px-3 py-2.5 rounded-lg border transition-all text-left ${
                    heardFrom === h
                      ? "bg-[#6B9BD2]/20 border-[#6B9BD2]/40 text-[#6B9BD2]"
                      : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setConfirmsStudent(!confirmsStudent)}
              className={`flex items-start gap-3 w-full text-left p-4 rounded-lg border transition-all ${
                confirmsStudent
                  ? "bg-[#6B9BD2]/10 border-[#6B9BD2]/30"
                  : "bg-white/[0.02] border-white/10 hover:border-white/15"
              }`}
            >
              <div
                className={`w-4 h-4 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                  confirmsStudent
                    ? "bg-[#6B9BD2] border-[#6B9BD2]"
                    : "border-white/20"
                }`}
              >
                {confirmsStudent && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-sans text-sm text-white/70">
                  I confirm that I am a current middle or high school student *
                </p>
              </div>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={buttonClass}
            >
              {loading ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Discord Linking */}
      {step === "discord" && (
        <div className="space-y-6">
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-[#5865F2]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="22" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3## 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#5865F2"/>
              </svg>
            </div>
            <h3 className="font-sans text-xl font-bold text-white mb-2">
              One last thing
            </h3>
            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-sm mx-auto">
              Join our Discord server and DM the Cove Bot your verification code to finish linking your application.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">
              Your verification code
            </p>
            <p className="font-mono text-3xl sm:text-4xl tracking-[0.3em] text-white font-bold">
              {discordCode}
            </p>
            <p className="font-mono text-[10px] text-white/15 mt-3">
              Send this code to the Cove Bot via DM
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-sans text-sm font-semibold bg-[#5865F2] text-white px-6 py-3.5 rounded-lg hover:bg-[#4752C4] transition-colors"
            >
              Join Discord Server
            </a>
            <button
              onClick={() => setStep("done")}
              className={secondaryButtonClass}
            >
              {"I'll do this later"}
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Done */}
      {step === "done" && (
        <div className="text-center py-10">
          <div className="w-14 h-14 bg-green-500/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="font-sans text-xl font-bold text-white mb-2">
            {"You're in the queue"}
          </h3>
          <p className="font-sans text-sm text-white/35 leading-relaxed max-w-sm mx-auto mb-8">
            {"We'll review your application and get back to you at"}{" "}
            <span className="text-white/50">{email}</span>.
            {!discordCode ? "" : " Don't forget to link your Discord!"}
          </p>
          <a
            href="/"
            className="font-mono text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            &larr; Back to covehacks.org
          </a>
        </div>
      )}
    </div>
  )
}

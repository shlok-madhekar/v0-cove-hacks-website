"use client"

import { useState, useEffect, useCallback } from "react"

type Application = {
  id: string
  email: string
  full_name: string
  phone: string | null
  grade: string
  school: string
  food_allergies: string
  heard_from: string
  hackathons_attended: string
  discord_linked: boolean
  discord_code: string | null
  status: "pending" | "accepted" | "rejected"
  created_at: string
}

type View = "login" | "otp" | "dashboard"

export function AdminDashboard() {
  const [view, setView] = useState<View>("login")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [applications, setApplications] = useState<Application[]>([])
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all")
  const [search, setSearch] = useState("")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const fetchApps = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/applications")
      if (res.ok) {
        const data = await res.json()
        setApplications(data.applications || [])
        setView("dashboard")
      } else if (res.status === 401) {
        setView("login")
      }
    } catch {
      // not logged in
    }
  }, [])

  // Try to load applications on mount (checks existing session)
  useEffect(() => {
    fetchApps()
  }, [fetchApps])

  async function handleSendCode() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setView("otp")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Not authorized")
    } finally {
      setLoading(false)
    }
  }

  async function handleVerify() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      await fetchApps()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid code")
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    setView("login")
    setApplications([])
    setEmail("")
    setCode("")
  }

  async function updateStatus(id: string, status: "accepted" | "rejected" | "pending") {
    try {
      const res = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        setApplications((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status } : a))
        )
      }
    } catch {
      // silently fail
    }
  }

  const filtered = applications.filter((a) => {
    if (filter !== "all" && a.status !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return (
        a.full_name.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.school.toLowerCase().includes(q)
      )
    }
    return true
  })

  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    accepted: applications.filter((a) => a.status === "accepted").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 font-sans focus:outline-none focus:border-[#6B9BD2]/50 focus:ring-1 focus:ring-[#6B9BD2]/30 transition-colors"
  const labelClass = "block font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2"
  const buttonClass =
    "w-full font-sans text-sm font-semibold bg-[#6B9BD2] text-white px-6 py-3.5 rounded-lg hover:bg-[#5a8abf] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"

  // Login / OTP views
  if (view === "login" || view === "otp") {
    return (
      <main className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
        <div className="w-full max-w-sm px-5">
          <div className="text-center mb-8">
            <h1 className="font-sans text-xl font-bold text-white">Cove Hacks Admin</h1>
            <p className="font-mono text-[10px] text-white/25 mt-1 tracking-wider uppercase">
              Organizer Dashboard
            </p>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="font-mono text-xs text-red-400">{error}</p>
            </div>
          )}

          {view === "login" ? (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Organizer email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@covehacks.org"
                  className={inputClass}
                />
              </div>
              <button onClick={handleSendCode} disabled={loading || !email} className={buttonClass}>
                {loading ? "Sending..." : "Send login code"}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Verification code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  className={`${inputClass} font-mono text-lg tracking-[0.3em] text-center`}
                  maxLength={6}
                />
              </div>
              <button onClick={handleVerify} disabled={loading || code.length !== 6} className={buttonClass}>
                {loading ? "Verifying..." : "Log in"}
              </button>
            </div>
          )}
        </div>
      </main>
    )
  }

  // Dashboard view
  return (
    <main className="min-h-screen bg-[#0e0e0e]">
      <div className="max-w-5xl mx-auto px-5 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-sans text-lg font-bold text-white">Applications</h1>
            <p className="font-mono text-[10px] text-white/25 tracking-wider uppercase mt-0.5">
              {counts.all} total &middot; {counts.pending} pending
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="font-mono text-[10px] text-white/20 hover:text-white/50 transition-colors tracking-wider uppercase"
          >
            Log out
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <div className="flex gap-1">
            {(["all", "pending", "accepted", "rejected"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-md transition-all ${
                  filter === f
                    ? "bg-white/10 text-white"
                    : "text-white/25 hover:text-white/50"
                }`}
              >
                {f} ({counts[f]})
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, school..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/15 font-mono focus:outline-none focus:border-white/20 transition-colors w-full sm:w-auto"
          />
        </div>

        {/* Applications list */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-mono text-xs text-white/20">No applications found</p>
            </div>
          )}

          {filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              {/* Row summary */}
              <button
                onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    app.status === "accepted"
                      ? "bg-green-400"
                      : app.status === "rejected"
                      ? "bg-red-400"
                      : "bg-yellow-400"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm text-white truncate">
                    {app.full_name}
                  </p>
                  <p className="font-mono text-[10px] text-white/20 truncate">
                    {app.email} &middot; {app.school} &middot; {app.grade}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {app.discord_linked && (
                    <span className="font-mono text-[9px] text-[#5865F2]/60 bg-[#5865F2]/10 px-2 py-1 rounded">
                      Discord
                    </span>
                  )}
                  <span className="font-mono text-[9px] text-white/15">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
              </button>

              {/* Expanded details */}
              {expandedId === app.id && (
                <div className="border-t border-white/[0.06] px-5 py-4 bg-white/[0.01]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Phone</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{app.phone || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Hackathons</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{app.hackathons_attended}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Heard from</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{app.heard_from}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Food</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{app.food_allergies || "None"}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Discord</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">
                        {app.discord_linked ? "Linked" : `Code: ${app.discord_code || "N/A"}`}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">Status</p>
                      <p className={`font-mono text-xs mt-0.5 ${
                        app.status === "accepted" ? "text-green-400" : app.status === "rejected" ? "text-red-400" : "text-yellow-400"
                      }`}>
                        {app.status}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/[0.04]">
                    {app.status !== "accepted" && (
                      <button
                        onClick={() => updateStatus(app.id, "accepted")}
                        className="font-mono text-[10px] tracking-wider uppercase bg-green-500/15 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500/25 transition-colors"
                      >
                        Accept
                      </button>
                    )}
                    {app.status !== "rejected" && (
                      <button
                        onClick={() => updateStatus(app.id, "rejected")}
                        className="font-mono text-[10px] tracking-wider uppercase bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors"
                      >
                        Reject
                      </button>
                    )}
                    {app.status !== "pending" && (
                      <button
                        onClick={() => updateStatus(app.id, "pending")}
                        className="font-mono text-[10px] tracking-wider uppercase bg-white/5 text-white/30 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

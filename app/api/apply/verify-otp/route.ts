import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, code } = await req.json()

  if (!email || !code) {
    return NextResponse.json({ error: "Email and code required" }, { status: 400 })
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from("email_otps")
    .select("*")
    .eq("email", email.toLowerCase())
    .eq("code", code)
    .eq("used", false)
    .gte("expires_at", new Date().toISOString())
    .order("created_at", { ascending: false })
    .limit(1)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 })
  }

  // Mark as used
  await supabase
    .from("email_otps")
    .update({ used: true })
    .eq("id", data.id)

  return NextResponse.json({ verified: true })
}

import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, code } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  const supabase = await createClient()

  // Check if email is in the admin allowlist
  const { data: adminEmail } = await supabase
    .from("admin_emails")
    .select("email")
    .eq("email", email.toLowerCase())
    .single()

  if (!adminEmail) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 })
  }

  // If no code provided, send OTP
  if (!code) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expires_at = new Date(Date.now() + 10 * 60 * 1000).toISOString()

    await supabase
      .from("email_otps")
      .update({ used: true })
      .eq("email", email.toLowerCase())
      .eq("used", false)

    await supabase.from("email_otps").insert({
      email: email.toLowerCase(),
      code: otp,
      expires_at,
    })

    console.log(`[ADMIN OTP] Code for ${email}: ${otp}`)

    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Cove Hacks <noreply@covehacks.org>",
            to: [email],
            subject: "Cove Hacks admin login code",
            html: `<p>Your admin login code is: <strong>${otp}</strong></p>`,
          }),
        })
      } catch (e) {
        console.error("Email send error:", e)
      }
    }

    return NextResponse.json({ sent: true })
  }

  // Verify the code
  const { data: otpRecord } = await supabase
    .from("email_otps")
    .select("*")
    .eq("email", email.toLowerCase())
    .eq("code", code)
    .eq("used", false)
    .gte("expires_at", new Date().toISOString())
    .order("created_at", { ascending: false })
    .limit(1)
    .single()

  if (!otpRecord) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 })
  }

  await supabase
    .from("email_otps")
    .update({ used: true })
    .eq("id", otpRecord.id)

  // Create a simple session token (stored in cookie via response)
  const token = crypto.randomUUID()
  const response = NextResponse.json({ authenticated: true })
  response.cookies.set("admin_session", `${email.toLowerCase()}:${token}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  })

  return response
}

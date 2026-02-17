import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 })
  }

  const supabase = await createClient()

  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString()
  const expires_at = new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 min

  // Invalidate old codes for this email
  await supabase
    .from("email_otps")
    .update({ used: true })
    .eq("email", email.toLowerCase())
    .eq("used", false)

  // Insert new code
  const { error } = await supabase.from("email_otps").insert({
    email: email.toLowerCase(),
    code,
    expires_at,
  })

  if (error) {
    console.error("OTP insert error:", error)
    return NextResponse.json({ error: "Failed to generate code" }, { status: 500 })
  }

  // In production, you'd send this via Resend/SendGrid/etc.
  // For now we'll use Supabase's built-in email (or log it)
  // TODO: Replace with actual email sending
  console.log(`[OTP] Code for ${email}: ${code}`)

  // Try to send via a simple fetch to a mail API
  // For development, the code is logged above
  try {
    // If you have RESEND_API_KEY set, send a real email
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Cove Hacks <noreply@covehacks.org>",
          to: [email],
          subject: "Your Cove Hacks verification code",
          html: `<p>Your verification code is: <strong>${code}</strong></p><p>This code expires in 10 minutes.</p>`,
        }),
      })
    }
  } catch (e) {
    console.error("Email send error:", e)
    // Don't fail the request, code is still in DB
  }

  return NextResponse.json({ success: true })
}

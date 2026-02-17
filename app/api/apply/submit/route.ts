import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const {
    email,
    full_name,
    phone,
    grade,
    school,
    food_allergies,
    heard_from,
    hackathons_attended,
    confirms_student,
  } = body

  // Validate required fields
  if (!email || !full_name || !grade || !school || !heard_from || !hackathons_attended || !confirms_student) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const supabase = await createClient()

  // Generate a 6-digit discord verification code
  const discord_code = Math.floor(100000 + Math.random() * 900000).toString()

  const { data, error } = await supabase
    .from("applications")
    .insert({
      email: email.toLowerCase(),
      email_verified: true,
      full_name,
      phone: phone || null,
      grade,
      school,
      food_allergies: food_allergies || "",
      heard_from,
      hackathons_attended,
      confirms_student: true,
      discord_code,
      discord_linked: false,
      status: "pending",
    })
    .select()
    .single()

  if (error) {
    console.error("Application submit error:", error)
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "An application with this email already exists" },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }

  return NextResponse.json({ success: true, discord_code, id: data.id })
}

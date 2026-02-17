import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

async function verifyAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")?.value
  if (!session) return false

  const email = session.split(":")[0]
  const supabase = await createClient()

  const { data } = await supabase
    .from("admin_emails")
    .select("email")
    .eq("email", email)
    .single()

  return !!data
}

export async function GET() {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }

  return NextResponse.json({ applications: data })
}

export async function PATCH(req: Request) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id, status } = await req.json()

  if (!id || !["accepted", "rejected", "pending"].includes(status)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("applications")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

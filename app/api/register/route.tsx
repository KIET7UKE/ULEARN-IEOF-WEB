import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // 1) Forward to Google Apps Script to store in Google Sheets (optional if URL provided)
    const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL
    if (GAS_URL) {
      // Best-effort forward; do not block on failure
      fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch((e) => console.log("[v0] GAS forward error:", e))
    }

    // 2) Email notification to admin (optional if ENV configured)
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (ADMIN_EMAIL && RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "IEOF <no-reply@resend.dev>",
          to: [ADMIN_EMAIL],
          subject: `New ${data.type || "registration"} from ${data.name}`,
          html: `
            <h2>New ${data.type || "registration"} Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Parent:</strong> ${data.parentName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Grade:</strong> ${data.grade}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>School:</strong> ${data.schoolName}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Timestamp:</strong> ${data.timestamp}</p>
            <p><strong>Source:</strong> ${data.source}</p>
          `,
        }),
      })
      if (!res.ok) {
        console.log("[v0] Email send error:", await res.text())
      }
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.log("[v0] /api/register error:", e)
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}

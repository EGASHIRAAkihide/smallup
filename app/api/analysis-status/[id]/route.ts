import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const callId = params.id

    // In a real application, you would check the status in your database
    // or call your AI backend to get the current status

    // For this example, we'll simulate different statuses
    const AI_API_URL = process.env.AI_API_URL || "http://localhost:8000"
    const AI_API_KEY = process.env.AI_API_KEY || ""

    const response = await fetch(`${AI_API_URL}/api/analysis-status/${callId}`, {
      headers: {
        Authorization: `Bearer ${AI_API_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch analysis status from AI backend")
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching analysis status:", error)
    return NextResponse.json(
      {
        status: "failed",
        progress: 0,
        message: "Failed to check analysis status",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}


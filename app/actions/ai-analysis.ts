"use server"

import { revalidatePath } from "next/cache"

// Types for AI analysis requests and responses
type CallAnalysisRequest = {
  callId: string
  audioUrl: string
  metadata: {
    rep: string
    customer: string
    date: string
    duration: string
  }
}

type CallAnalysisResponse = {
  transcript: Array<{
    speaker: string
    text: string
    timestamp: string
    sentiment: string
    insights: Array<{
      type: string
      text: string
      importance: string
    }>
  }>
  score: number
  scoreBreakdown: {
    discovery: number
    presentation: number
    objectionHandling: number
    closing: number
  }
  insights: {
    keyPhrases: string[]
    competitors: Array<{ name: string; mentions: number }>
    painPoints: Array<{ issue: string; importance: string }>
    improvements: string[]
  }
}

// Environment variables for API configuration
const AI_API_URL = process.env.AI_API_URL || "http://localhost:8000"
const AI_API_KEY = process.env.AI_API_KEY || ""

/**
 * Analyzes a sales call using the AI backend
 */
export async function analyzeCall(request: CallAnalysisRequest): Promise<CallAnalysisResponse> {
  try {
    const response = await fetch(`${AI_API_URL}/api/analyze-call`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`AI API Error: ${errorData.message || response.statusText}`)
    }

    const data = await response.json()

    // Revalidate the call details page to reflect new analysis
    revalidatePath(`/calls/${request.callId}`)

    return data
  } catch (error) {
    console.error("Error analyzing call:", error)
    throw new Error("Failed to analyze call. Please try again later.")
  }
}

/**
 * Generates coaching insights for a sales rep
 */
export async function generateCoachingInsights(repId: string): Promise<any> {
  try {
    const response = await fetch(`${AI_API_URL}/api/coaching-insights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({ repId }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`AI API Error: ${errorData.message || response.statusText}`)
    }

    const data = await response.json()

    // Revalidate the coaching page to reflect new insights
    revalidatePath(`/coaching/${repId}`)

    return data
  } catch (error) {
    console.error("Error generating coaching insights:", error)
    throw new Error("Failed to generate coaching insights. Please try again later.")
  }
}

/**
 * Generates team-level insights based on all calls
 */
export async function generateTeamInsights(): Promise<any> {
  try {
    const response = await fetch(`${AI_API_URL}/api/team-insights`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AI_API_KEY}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`AI API Error: ${errorData.message || response.statusText}`)
    }

    const data = await response.json()

    // Revalidate the insights page
    revalidatePath("/insights")

    return data
  } catch (error) {
    console.error("Error generating team insights:", error)
    throw new Error("Failed to generate team insights. Please try again later.")
  }
}


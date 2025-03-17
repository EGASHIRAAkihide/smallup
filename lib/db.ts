import { createPool } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { pgTable, serial, text, timestamp, integer, json } from "drizzle-orm/pg-core"
import { eq } from "drizzle-orm"

// Database schema
export const calls = pgTable("calls", {
  id: text("id").primaryKey(),
  repId: text("rep_id").notNull(),
  customer: text("customer").notNull(),
  date: timestamp("date").notNull(),
  duration: text("duration").notNull(),
  audioUrl: text("audio_url").notNull(),
  status: text("status").notNull().default("pending"),
  score: integer("score"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const transcripts = pgTable("transcripts", {
  id: serial("id").primaryKey(),
  callId: text("call_id")
    .notNull()
    .references(() => calls.id),
  transcript: json("transcript").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  callId: text("call_id")
    .notNull()
    .references(() => calls.id),
  insights: json("insights").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const reps = pgTable("reps", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  team: text("team").notNull(),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const coachingInsights = pgTable("coaching_insights", {
  id: serial("id").primaryKey(),
  repId: text("rep_id")
    .notNull()
    .references(() => reps.id),
  insights: json("insights").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  repId: text("rep_id")
    .notNull()
    .references(() => reps.id),
  managerId: text("manager_id").notNull(),
  feedback: text("feedback").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

// Database connection using Vercel Postgres SDK
const pool = createPool({
  connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(pool)

// Helper functions for database operations
export async function saveCallAnalysis(callId: string, transcript: any, insights: any, score: number) {
  try {
    await db.transaction(async (tx) => {
      // Update call status and score
      await tx
        .update(calls)
        .set({
          status: "completed",
          score,
          updatedAt: new Date(),
        })
        .where(eq(calls.id, callId))

      // Save transcript
      await tx.insert(transcripts).values({
        callId,
        transcript,
      })

      // Save insights
      await tx.insert(insights).values({
        callId,
        insights,
      })
    })

    return true
  } catch (error) {
    console.error("Error saving call analysis:", error)
    throw error
  }
}

export async function saveCoachingInsights(repId: string, insightsData: any) {
  try {
    await db.insert(coachingInsights).values({
      repId,
      insights: insightsData,
    })

    return true
  } catch (error) {
    console.error("Error saving coaching insights:", error)
    throw error
  }
}

export async function saveFeedback(repId: string, managerId: string, feedbackText: string) {
  try {
    await db.insert(feedback).values({
      repId,
      managerId,
      feedback: feedbackText,
    })

    return true
  } catch (error) {
    console.error("Error saving feedback:", error)
    throw error
  }
}


import type { Metadata } from "next"
import { CoachingHeader } from "@/components/coaching/coaching-header"
import { TeamOverview } from "@/components/coaching/team-overview"
import { SkillsMatrix } from "@/components/coaching/skills-matrix"
import { CoachingInsights } from "@/components/coaching/coaching-insights"
import { TrainingResources } from "@/components/coaching/training-resources"
import { GoalTracking } from "@/components/coaching/goal-tracking"

export const metadata: Metadata = {
  title: "AI Coaching | Naoma Sales Analysis Tool",
  description: "AI-powered sales coaching and skill development",
}

export default function CoachingPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <CoachingHeader />
      <TeamOverview />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkillsMatrix />
        </div>
        <div>
          <CoachingInsights />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrainingResources />
        </div>
        <div>
          <GoalTracking />
        </div>
      </div>
    </div>
  )
}


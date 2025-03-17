import type { Metadata } from "next"
import { TeamHeader } from "@/components/team/team-header"
import { TeamOverview } from "@/components/team/team-overview"
import { TeamPerformanceMetrics } from "@/components/team/team-performance-metrics"
import { TeamStructure } from "@/components/team/team-structure"
import { TeamActivity } from "@/components/team/team-activity"
import { TeamGoals } from "@/components/team/team-goals"

export const metadata: Metadata = {
  title: "Team Management | Naoma Sales Analysis Tool",
  description: "Manage and analyze your sales team performance",
}

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <TeamHeader />
      <TeamOverview />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TeamPerformanceMetrics />
        </div>
        <div>
          <TeamStructure />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TeamActivity />
        </div>
        <div>
          <TeamGoals />
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from "next"
import { TeamMemberHeader } from "@/components/team/team-member-header"
import { TeamMemberPerformance } from "@/components/team/team-member-performance"
import { TeamMemberCalls } from "@/components/team/team-member-calls"
import { TeamMemberSkills } from "@/components/team/team-member-skills"
import { TeamMemberGoals } from "@/components/team/team-member-goals"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Team Member | Naoma Sales Analysis Tool",
  description: "Individual team member performance and management",
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/team">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Team Member</h1>
      </div>

      <TeamMemberHeader id={params.id} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TeamMemberPerformance id={params.id} />
        </div>
        <div>
          <TeamMemberSkills id={params.id} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TeamMemberCalls id={params.id} />
        </div>
        <div>
          <TeamMemberGoals id={params.id} />
        </div>
      </div>
    </div>
  )
}


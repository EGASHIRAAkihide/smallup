import type { Metadata } from "next"
import { RepHeader } from "@/components/coaching/rep-header"
import { RepPerformance } from "@/components/coaching/rep-performance"
import { RepSkills } from "@/components/coaching/rep-skills"
import { RepFeedback } from "@/components/coaching/rep-feedback"
import { RepGoals } from "@/components/coaching/rep-goals"
import { RepTraining } from "@/components/coaching/rep-training"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rep Coaching | Naoma Sales Analysis Tool",
  description: "Personalized AI coaching for sales representatives",
}

export default function RepCoachingPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/coaching">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Rep Coaching</h1>
      </div>

      <RepHeader id={params.id} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RepPerformance id={params.id} />
        </div>
        <div>
          <RepSkills id={params.id} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RepFeedback id={params.id} />
        </div>
        <div>
          <RepGoals id={params.id} />
        </div>
      </div>

      <RepTraining id={params.id} />
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight } from "lucide-react"

// Mock data
const coachingInsights = [
  {
    insight: "Discovery question quality directly correlates with conversion rates",
    recommendation: "Implement the SPIN questioning framework across the team",
    priority: "high",
  },
  {
    insight: "Reps who customize demos convert 35% more often",
    recommendation: "Create industry-specific demo templates for common use cases",
    priority: "high",
  },
  {
    insight: "Follow-up timing varies widely across the team",
    recommendation: "Standardize follow-up sequences with automated reminders",
    priority: "medium",
  },
  {
    insight: "Product knowledge scores are inconsistent for newer features",
    recommendation: "Schedule bi-weekly product update training sessions",
    priority: "medium",
  },
  {
    insight: "Top performers spend 60% more time on pre-call research",
    recommendation: "Develop a pre-call research checklist and allocate time",
    priority: "high",
  },
]

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-500 hover:bg-red-600">High Priority</Badge>
    case "medium":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Medium Priority</Badge>
    case "low":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Low Priority</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export function CoachingInsights() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Coaching Insights</CardTitle>
        <CardDescription>AI-generated coaching recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {coachingInsights.map((item, index) => (
            <div key={index} className="rounded-lg border p-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 h-4 w-4 text-amber-500 shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm font-medium">{item.insight}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3" />
                    <p>{item.recommendation}</p>
                  </div>
                  <div className="pt-1">{getPriorityBadge(item.priority)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


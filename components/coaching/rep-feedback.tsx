import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"

interface RepFeedbackProps {
  id: string
}

// Mock data
const strengths = [
  {
    strength: "Exceptional rapport building with technical stakeholders",
    evidence:
      "Consistently establishes credibility with IT decision makers by speaking their language and addressing specific technical concerns.",
    impact: "Reduces technical objections by 45% compared to team average.",
  },
  {
    strength: "Effective use of discovery questions",
    evidence: "Asks an average of 8 targeted discovery questions per call, compared to team average of 5.",
    impact: "Uncovers deeper pain points that lead to 30% higher deal values.",
  },
  {
    strength: "Strong product knowledge application",
    evidence: "Accurately matches product features to specific customer needs with concrete examples.",
    impact: "Reduces 'need to research' responses by 60%, accelerating sales cycle.",
  },
  {
    strength: "Persuasive ROI articulation",
    evidence: "Consistently quantifies value proposition with customer-specific metrics and timeframes.",
    impact: "35% higher conversion rate on enterprise deals compared to team average.",
  },
]

const improvements = [
  {
    area: "Objection handling consistency",
    observation: "Effectiveness varies based on objection type, with pricing objections handled less confidently.",
    recommendation: "Practice the 'feel, felt, found' framework specifically for pricing discussions.",
    priority: "high",
  },
  {
    area: "Follow-up cadence optimization",
    observation: "Follow-up timing varies widely, with some prospects waiting 3+ days for responses.",
    recommendation: "Implement the standardized follow-up sequence with 24-hour first response.",
    priority: "medium",
  },
  {
    area: "Closing technique variety",
    observation: "Relies primarily on summary close technique, missing opportunities for alternative approaches.",
    recommendation: "Expand closing toolkit with assumptive and choice closes for different scenarios.",
    priority: "medium",
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

export function RepFeedback({ id }: RepFeedbackProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Feedback</CardTitle>
        <CardDescription>AI-generated coaching insights based on call analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="strengths">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="improvements">Areas for Improvement</TabsTrigger>
          </TabsList>

          <TabsContent value="strengths" className="space-y-4 pt-4">
            {strengths.map((item, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-medium">{item.strength}</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Evidence: </span>
                        {item.evidence}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Impact: </span>
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="improvements" className="space-y-4 pt-4">
            {improvements.map((item, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.area}</h3>
                      {getPriorityBadge(item.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.observation}</p>
                    <div className="flex items-start gap-2 rounded-md bg-primary/10 p-3">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm">{item.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CallInsightsProps {
  id: string
}

export function CallInsights({ id }: CallInsightsProps) {
  // Mock data - in a real app, this would come from an API
  const insights = {
    score: 85,
    scoreBreakdown: [
      { category: "Discovery", score: 92 },
      { category: "Presentation", score: 88 },
      { category: "Objection Handling", score: 75 },
      { category: "Closing", score: 82 },
    ],
    keyPhrases: [
      "analytics dashboard",
      "customizable reports",
      "tiered pricing model",
      "cost-effective",
      "annual commitment",
    ],
    competitors: [{ name: "Competitor X", mentions: 2 }],
    painPoints: [
      { issue: "Reporting Capabilities", importance: "high" },
      { issue: "Pricing Structure", importance: "high" },
    ],
    improvements: [
      "Spend more time addressing objections",
      "Provide more specific examples of ROI",
      "Ask more follow-up questions about reporting needs",
      "Discuss implementation timeline earlier",
    ],
  }

  function getScoreColor(score: number) {
    if (score >= 90) return "text-emerald-500"
    if (score >= 80) return "text-blue-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }

  function getProgressColor(score: number) {
    if (score >= 90) return "bg-emerald-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scores">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scores">Scores</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="scores" className="space-y-4 pt-4">
            <div className="text-center">
              <span className={`text-4xl font-bold ${getScoreColor(insights.score)}`}>{insights.score}</span>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </div>

            <div className="space-y-3">
              {insights.scoreBreakdown.map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className={`text-sm font-medium ${getScoreColor(item.score)}`}>{item.score}</span>
                  </div>
                  <Progress value={item.score} className={getProgressColor(item.score)} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4 pt-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Key Phrases</h3>
              <div className="flex flex-wrap gap-1">
                {insights.keyPhrases.map((phrase) => (
                  <Badge key={phrase} variant="secondary">
                    {phrase}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Competitors Mentioned</h3>
              {insights.competitors.map((competitor) => (
                <div key={competitor.name} className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-500">
                    {competitor.name}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {competitor.mentions} {competitor.mentions === 1 ? "mention" : "mentions"}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Customer Pain Points</h3>
              <div className="space-y-1">
                {insights.painPoints.map((point) => (
                  <div key={point.issue} className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-red-500/10 text-red-500">
                      {point.issue}
                    </Badge>
                    <Badge variant="outline">{point.importance === "high" ? "High Priority" : "Medium Priority"}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-4 pt-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Suggested Improvements</h3>
              <ul className="space-y-2">
                {insights.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


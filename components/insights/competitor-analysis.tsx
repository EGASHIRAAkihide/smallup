"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
const competitorData = [
  { name: "Competitor X", value: 42, color: "#3b82f6" },
  { name: "Competitor Y", value: 28, color: "#10b981" },
  { name: "Competitor Z", value: 16, color: "#f59e0b" },
  { name: "Others", value: 14, color: "#6b7280" },
]

const competitorMentions = [
  {
    competitor: "Competitor X",
    mentions: [
      { feature: "Pricing", count: 18, sentiment: "negative" },
      { feature: "User Interface", count: 12, sentiment: "positive" },
      { feature: "Customer Support", count: 8, sentiment: "negative" },
      { feature: "Integration", count: 4, sentiment: "neutral" },
    ],
  },
  {
    competitor: "Competitor Y",
    mentions: [
      { feature: "Reporting", count: 14, sentiment: "negative" },
      { feature: "Mobile App", count: 8, sentiment: "positive" },
      { feature: "API", count: 6, sentiment: "neutral" },
    ],
  },
  {
    competitor: "Competitor Z",
    mentions: [
      { feature: "Security", count: 7, sentiment: "negative" },
      { feature: "Ease of Use", count: 5, sentiment: "positive" },
      { feature: "Pricing", count: 4, sentiment: "negative" },
    ],
  },
]

const competitorStrengths = [
  { competitor: "Competitor X", strength: "Lower pricing for small teams" },
  { competitor: "Competitor X", strength: "Simpler user interface" },
  { competitor: "Competitor Y", strength: "Better mobile application" },
  { competitor: "Competitor Y", strength: "More integration options" },
  { competitor: "Competitor Z", strength: "Faster onboarding process" },
]

const competitorWeaknesses = [
  { competitor: "Competitor X", weakness: "Poor customer support response times" },
  { competitor: "Competitor X", weakness: "Limited reporting capabilities" },
  { competitor: "Competitor Y", weakness: "Higher pricing for enterprise" },
  { competitor: "Competitor Y", weakness: "Complex setup process" },
  { competitor: "Competitor Z", weakness: "Lacks advanced security features" },
  { competitor: "Competitor Z", weakness: "Limited customization options" },
]

function getSentimentColor(sentiment: string) {
  switch (sentiment) {
    case "positive":
      return "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
    case "negative":
      return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    default:
      return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
  }
}

export function CompetitorAnalysis() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Competitor Analysis</CardTitle>
        <CardDescription>Mentions and comparisons from customer calls</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="weaknesses">Weaknesses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="h-[240px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={competitorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {competitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Top Feature Mentions</h3>
              {competitorMentions.slice(0, 1).map((competitor) => (
                <div key={competitor.competitor} className="space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground">{competitor.competitor}</h4>
                  <div className="flex flex-wrap gap-1">
                    {competitor.mentions.map((mention) => (
                      <Badge key={mention.feature} variant="secondary" className={getSentimentColor(mention.sentiment)}>
                        {mention.feature} ({mention.count})
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="strengths" className="pt-4">
            <div className="space-y-4">
              {competitorStrengths
                .reduce(
                  (acc, item) => {
                    const existingCompetitor = acc.find((c) => c.competitor === item.competitor)
                    if (existingCompetitor) {
                      existingCompetitor.strengths.push(item.strength)
                    } else {
                      acc.push({
                        competitor: item.competitor,
                        strengths: [item.strength],
                      })
                    }
                    return acc
                  },
                  [] as { competitor: string; strengths: string[] }[],
                )
                .map((group) => (
                  <div key={group.competitor} className="space-y-2">
                    <h3 className="text-sm font-medium">{group.competitor}</h3>
                    <ul className="space-y-1">
                      {group.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-500">
                            +
                          </span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="weaknesses" className="pt-4">
            <div className="space-y-4">
              {competitorWeaknesses
                .reduce(
                  (acc, item) => {
                    const existingCompetitor = acc.find((c) => c.competitor === item.competitor)
                    if (existingCompetitor) {
                      existingCompetitor.weaknesses.push(item.weakness)
                    } else {
                      acc.push({
                        competitor: item.competitor,
                        weaknesses: [item.weakness],
                      })
                    }
                    return acc
                  },
                  [] as { competitor: string; weaknesses: string[] }[],
                )
                .map((group) => (
                  <div key={group.competitor} className="space-y-2">
                    <h3 className="text-sm font-medium">{group.competitor}</h3>
                    <ul className="space-y-1">
                      {group.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs text-red-500">
                            -
                          </span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


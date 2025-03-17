"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
const objectionData = [
  { category: "Pricing", count: 42, percentage: 28 },
  { category: "Features", count: 36, percentage: 24 },
  { category: "Implementation", count: 24, percentage: 16 },
  { category: "Timeline", count: 18, percentage: 12 },
  { category: "Integration", count: 15, percentage: 10 },
  { category: "Other", count: 15, percentage: 10 },
]

const objectionResponses = [
  {
    objection: "Your solution is too expensive",
    responses: [
      {
        response: "Focus on ROI and long-term value rather than upfront cost",
        effectiveness: 92,
      },
      {
        response: "Highlight the included features that competitors charge extra for",
        effectiveness: 85,
      },
      {
        response: "Offer flexible payment terms or annual discount",
        effectiveness: 78,
      },
    ],
  },
  {
    objection: "Missing critical feature",
    responses: [
      {
        response: "Emphasize upcoming roadmap and feature release timeline",
        effectiveness: 88,
      },
      {
        response: "Suggest workarounds or alternative approaches",
        effectiveness: 76,
      },
      {
        response: "Offer custom development for enterprise clients",
        effectiveness: 70,
      },
    ],
  },
  {
    objection: "Implementation seems complex",
    responses: [
      {
        response: "Outline dedicated onboarding support and training",
        effectiveness: 94,
      },
      {
        response: "Share case studies of similar companies with smooth implementation",
        effectiveness: 89,
      },
      {
        response: "Offer phased rollout approach to minimize disruption",
        effectiveness: 82,
      },
    ],
  },
]

function getEffectivenessColor(score: number) {
  if (score >= 90) return "bg-emerald-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

export function ObjectionHandling() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Objection Handling</CardTitle>
        <CardDescription>Common objections and effective responses</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="common">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="common">Common Objections</TabsTrigger>
            <TabsTrigger value="responses">Effective Responses</TabsTrigger>
          </TabsList>

          <TabsContent value="common" className="space-y-4 pt-4">
            <div className="space-y-3">
              {objectionData.map((objection) => (
                <div key={objection.category} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{objection.category}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{objection.count}</Badge>
                      <span className="text-sm text-muted-foreground">{objection.percentage}%</span>
                    </div>
                  </div>
                  <Progress value={objection.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <div className="rounded-md bg-muted p-3">
              <h3 className="mb-2 text-sm font-medium">Insight</h3>
              <p className="text-sm text-muted-foreground">
                Pricing objections have increased by 8% compared to the previous period. Consider reviewing pricing
                strategy or improving value communication.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="responses" className="space-y-4 pt-4">
            <div className="space-y-4">
              {objectionResponses.map((item) => (
                <div key={item.objection} className="space-y-2">
                  <h3 className="text-sm font-medium">"{item.objection}"</h3>
                  <div className="space-y-3">
                    {item.responses.map((response, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{response.response}</span>
                          <Badge
                            variant="outline"
                            className={`${getEffectivenessColor(response.effectiveness)} text-white`}
                          >
                            {response.effectiveness}%
                          </Badge>
                        </div>
                        <Progress
                          value={response.effectiveness}
                          className={`h-1 ${getEffectivenessColor(response.effectiveness)}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


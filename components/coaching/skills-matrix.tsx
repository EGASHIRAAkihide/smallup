"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

// Mock data
const teamSkills = [
  {
    skill: "Discovery",
    teamAvg: 82,
    topPerformer: 95,
    bottomPerformer: 68,
  },
  {
    skill: "Presentation",
    teamAvg: 85,
    topPerformer: 97,
    bottomPerformer: 72,
  },
  {
    skill: "Objection Handling",
    teamAvg: 76,
    topPerformer: 92,
    bottomPerformer: 62,
  },
  {
    skill: "Closing",
    teamAvg: 79,
    topPerformer: 94,
    bottomPerformer: 65,
  },
  {
    skill: "Rapport Building",
    teamAvg: 88,
    topPerformer: 98,
    bottomPerformer: 75,
  },
  {
    skill: "Product Knowledge",
    teamAvg: 84,
    topPerformer: 96,
    bottomPerformer: 70,
  },
  {
    skill: "Follow-up",
    teamAvg: 77,
    topPerformer: 93,
    bottomPerformer: 64,
  },
  {
    skill: "Negotiation",
    teamAvg: 80,
    topPerformer: 95,
    bottomPerformer: 68,
  },
]

const radarData = teamSkills.map((item) => ({
  subject: item.skill,
  "Team Average": item.teamAvg,
  "Top Performer": item.topPerformer,
  "Bottom Performer": item.bottomPerformer,
  fullMark: 100,
}))

const skillGaps = [
  {
    skill: "Objection Handling",
    gap: 30,
    description: "Significant variation between top and bottom performers in addressing customer concerns.",
    recommendation: "Focus team training on objection handling techniques and role-playing exercises.",
  },
  {
    skill: "Follow-up",
    gap: 29,
    description: "Inconsistent follow-up processes and timing across the team.",
    recommendation: "Implement standardized follow-up templates and timing guidelines.",
  },
  {
    skill: "Closing",
    gap: 29,
    description: "Wide range in ability to guide prospects to commitment.",
    recommendation: "Share successful closing techniques from top performers with the team.",
  },
  {
    skill: "Negotiation",
    gap: 27,
    description: "Varied approaches to handling pricing discussions and concessions.",
    recommendation: "Develop clear negotiation frameworks and authority guidelines.",
  },
]

export function SkillsMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills Matrix</CardTitle>
        <CardDescription>Analysis of team skills and development opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="radar">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="radar">Skill Radar</TabsTrigger>
            <TabsTrigger value="gaps">Skill Gaps</TabsTrigger>
          </TabsList>

          <TabsContent value="radar" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Team Average" dataKey="Team Average" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar
                    name="Top Performer"
                    dataKey="Top Performer"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Bottom Performer"
                    dataKey="Bottom Performer"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="gaps" className="space-y-4 pt-4">
            {skillGaps.map((gap, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{gap.skill}</h3>
                  <span className="text-sm text-muted-foreground">{gap.gap}% gap</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{gap.description}</p>
                <div className="mt-3 rounded-md bg-primary/10 p-3">
                  <p className="text-sm font-medium text-primary">Recommendation</p>
                  <p className="text-sm">{gap.recommendation}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

interface RepPerformanceProps {
  id: string
}

// Mock data
const performanceData = [
  { month: "Jan", score: 82, teamAvg: 78 },
  { month: "Feb", score: 84, teamAvg: 79 },
  { month: "Mar", score: 83, teamAvg: 80 },
  { month: "Apr", score: 85, teamAvg: 80 },
  { month: "May", score: 87, teamAvg: 81 },
  { month: "Jun", score: 86, teamAvg: 82 },
  { month: "Jul", score: 88, teamAvg: 82 },
  { month: "Aug", score: 90, teamAvg: 83 },
  { month: "Sep", score: 89, teamAvg: 83 },
  { month: "Oct", score: 91, teamAvg: 84 },
  { month: "Nov", score: 92, teamAvg: 84 },
  { month: "Dec", score: 92, teamAvg: 85 },
]

const callData = [
  { month: "Jan", calls: 28, conversions: 8 },
  { month: "Feb", calls: 32, conversions: 9 },
  { month: "Mar", calls: 30, conversions: 9 },
  { month: "Apr", calls: 34, conversions: 10 },
  { month: "May", calls: 36, conversions: 11 },
  { month: "Jun", calls: 35, conversions: 11 },
  { month: "Jul", calls: 38, conversions: 12 },
  { month: "Aug", calls: 40, conversions: 13 },
  { month: "Sep", calls: 38, conversions: 12 },
  { month: "Oct", calls: 42, conversions: 14 },
  { month: "Nov", calls: 45, conversions: 15 },
  { month: "Dec", calls: 48, conversions: 16 },
]

const skillsData = [
  { skill: "Discovery", score: 94, teamAvg: 82 },
  { skill: "Presentation", score: 90, teamAvg: 85 },
  { skill: "Objection Handling", score: 88, teamAvg: 76 },
  { skill: "Closing", score: 92, teamAvg: 79 },
  { skill: "Rapport Building", score: 95, teamAvg: 88 },
  { skill: "Product Knowledge", score: 93, teamAvg: 84 },
  { skill: "Follow-up", score: 89, teamAvg: 77 },
  { skill: "Negotiation", score: 91, teamAvg: 80 },
]

export function RepPerformance({ id }: RepPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Historical performance data and skill assessment</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trends">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trends">Performance Trends</TabsTrigger>
            <TabsTrigger value="calls">Call Activity</TabsTrigger>
            <TabsTrigger value="skills">Skill Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#3b82f6" name="Rep Score" strokeWidth={2} />
                  <Line type="monotone" dataKey="teamAvg" stroke="#9ca3af" name="Team Average" strokeDasharray="3 3" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Performance has shown consistent improvement over the past year, with scores consistently above team
                average. The most significant improvements occurred in August and November, following coaching sessions.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="calls" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={callData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="calls" fill="#3b82f6" name="Total Calls" />
                  <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Call volume has increased by 71% over the past year, with a corresponding increase in conversions. The
                conversion rate has improved from 28.6% to 33.3%, indicating enhanced effectiveness in addition to
                increased activity.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={skillsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="skill" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#3b82f6" name="Rep Score" />
                  <Bar dataKey="teamAvg" fill="#9ca3af" name="Team Average" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Strongest skills are in Rapport Building and Discovery, with scores significantly above team average.
                The smallest gap is in Objection Handling, which represents an opportunity for focused improvement.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


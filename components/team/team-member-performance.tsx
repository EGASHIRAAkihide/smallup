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

interface TeamMemberPerformanceProps {
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

const activityData = [
  { month: "Jan", calls: 28, emails: 45, meetings: 12 },
  { month: "Feb", calls: 32, emails: 50, meetings: 14 },
  { month: "Mar", calls: 30, emails: 48, meetings: 13 },
  { month: "Apr", calls: 34, emails: 52, meetings: 15 },
  { month: "May", calls: 36, emails: 55, meetings: 16 },
  { month: "Jun", calls: 35, emails: 53, meetings: 15 },
  { month: "Jul", calls: 38, emails: 58, meetings: 17 },
  { month: "Aug", calls: 40, emails: 60, meetings: 18 },
  { month: "Sep", calls: 38, emails: 57, meetings: 16 },
  { month: "Oct", calls: 42, emails: 63, meetings: 19 },
  { month: "Nov", calls: 45, emails: 68, meetings: 20 },
  { month: "Dec", calls: 48, emails: 72, meetings: 22 },
]

const quotaData = [
  { quarter: "Q1", achieved: 85, target: 100 },
  { quarter: "Q2", achieved: 92, target: 100 },
  { quarter: "Q3", achieved: 98, target: 100 },
  { quarter: "Q4", achieved: 105, target: 100 },
]

export function TeamMemberPerformance({ id }: TeamMemberPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Historical performance data and activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance Score</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="quota">Quota Attainment</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="pt-4">
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
                average. The most significant improvements occurred in August and November.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activityData}
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
                  <Line type="monotone" dataKey="calls" stroke="#3b82f6" name="Calls" />
                  <Line type="monotone" dataKey="emails" stroke="#10b981" name="Emails" />
                  <Line type="monotone" dataKey="meetings" stroke="#f59e0b" name="Meetings" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Activity levels have increased steadily throughout the year, with a notable increase in all metrics
                during Q4. Email activity has shown the most significant growth at 60% year-over-year.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="quota" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={quotaData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="achieved" fill="#3b82f6" name="Achieved (%)" />
                  <Bar dataKey="target" fill="#9ca3af" name="Target (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Quota attainment has improved each quarter, exceeding target in Q4. This represents a 23.5% improvement
                from Q1 to Q4, demonstrating consistent growth in sales effectiveness.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


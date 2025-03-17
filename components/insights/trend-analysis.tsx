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

// Mock data
const scoreData = [
  { month: "Jan", avgScore: 78, topScore: 92, bottomScore: 65 },
  { month: "Feb", avgScore: 80, topScore: 94, bottomScore: 68 },
  { month: "Mar", avgScore: 82, topScore: 95, bottomScore: 70 },
  { month: "Apr", avgScore: 79, topScore: 93, bottomScore: 67 },
  { month: "May", avgScore: 83, topScore: 96, bottomScore: 72 },
  { month: "Jun", avgScore: 85, topScore: 97, bottomScore: 74 },
  { month: "Jul", avgScore: 84, topScore: 96, bottomScore: 73 },
  { month: "Aug", avgScore: 86, topScore: 98, bottomScore: 75 },
  { month: "Sep", avgScore: 88, topScore: 99, bottomScore: 78 },
  { month: "Oct", avgScore: 87, topScore: 98, bottomScore: 77 },
  { month: "Nov", avgScore: 89, topScore: 99, bottomScore: 79 },
  { month: "Dec", avgScore: 90, topScore: 100, bottomScore: 81 },
]

const conversionData = [
  { month: "Jan", rate: 18 },
  { month: "Feb", rate: 19 },
  { month: "Mar", rate: 20 },
  { month: "Apr", rate: 19 },
  { month: "May", rate: 21 },
  { month: "Jun", rate: 22 },
  { month: "Jul", rate: 23 },
  { month: "Aug", rate: 24 },
  { month: "Sep", rate: 25 },
  { month: "Oct", rate: 24 },
  { month: "Nov", rate: 26 },
  { month: "Dec", rate: 28 },
]

const objectionData = [
  { month: "Jan", pricing: 35, features: 28, implementation: 22, timeline: 15 },
  { month: "Feb", pricing: 36, features: 27, implementation: 23, timeline: 14 },
  { month: "Mar", pricing: 38, features: 26, implementation: 22, timeline: 14 },
  { month: "Apr", pricing: 37, features: 28, implementation: 21, timeline: 14 },
  { month: "May", pricing: 39, features: 27, implementation: 20, timeline: 14 },
  { month: "Jun", pricing: 40, features: 26, implementation: 20, timeline: 14 },
  { month: "Jul", pricing: 41, features: 25, implementation: 20, timeline: 14 },
  { month: "Aug", pricing: 42, features: 24, implementation: 20, timeline: 14 },
  { month: "Sep", pricing: 43, features: 23, implementation: 20, timeline: 14 },
  { month: "Oct", pricing: 42, features: 24, implementation: 20, timeline: 14 },
  { month: "Nov", pricing: 44, features: 22, implementation: 20, timeline: 14 },
  { month: "Dec", pricing: 45, features: 21, implementation: 20, timeline: 14 },
]

export function TrendAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Analysis</CardTitle>
        <CardDescription>Performance metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scores">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scores">Call Scores</TabsTrigger>
            <TabsTrigger value="conversion">Conversion Rates</TabsTrigger>
            <TabsTrigger value="objections">Objection Types</TabsTrigger>
          </TabsList>

          <TabsContent value="scores" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={scoreData}
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
                  <Line type="monotone" dataKey="topScore" stroke="#10b981" name="Top Score" />
                  <Line type="monotone" dataKey="avgScore" stroke="#3b82f6" name="Average Score" strokeWidth={2} />
                  <Line type="monotone" dataKey="bottomScore" stroke="#f59e0b" name="Bottom Score" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Average call scores have shown a consistent upward trend, improving by 15% over the year. The gap
                between top and bottom performers has narrowed, indicating successful coaching efforts.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="conversion" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={conversionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[15, 30]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rate" stroke="#3b82f6" name="Conversion Rate %" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Conversion rates have increased by 55% over the past year, with the most significant improvements
                occurring in Q3 and Q4. This correlates with the implementation of new sales scripts and objection
                handling techniques.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="objections" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={objectionData}
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
                  <Bar dataKey="pricing" fill="#ef4444" name="Pricing" />
                  <Bar dataKey="features" fill="#3b82f6" name="Features" />
                  <Bar dataKey="implementation" fill="#10b981" name="Implementation" />
                  <Bar dataKey="timeline" fill="#f59e0b" name="Timeline" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                Pricing objections have increased over time, while feature-related objections have decreased. This
                suggests that our product improvements are addressing feature gaps, but our pricing strategy may need
                review to remain competitive.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


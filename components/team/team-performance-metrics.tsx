"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

// Sample data
const performanceData = [
  { name: "Tanaka H.", calls: 42, conversion: 32, score: 92 },
  { name: "Suzuki Y.", calls: 38, conversion: 28, score: 85 },
  { name: "Watanabe K.", calls: 35, conversion: 22, score: 78 },
  { name: "Sato A.", calls: 28, conversion: 18, score: 72 },
  { name: "Yamamoto T.", calls: 45, conversion: 30, score: 88 },
  { name: "Nakamura S.", calls: 32, conversion: 24, score: 82 },
  { name: "Kobayashi M.", calls: 36, conversion: 26, score: 84 },
  { name: "Kato Y.", calls: 30, conversion: 20, score: 76 },
]

const trendData = [
  { month: "Jan", enterprise: 82, midMarket: 78, smb: 74 },
  { month: "Feb", enterprise: 84, midMarket: 80, smb: 75 },
  { month: "Mar", enterprise: 86, midMarket: 81, smb: 76 },
  { month: "Apr", enterprise: 85, midMarket: 82, smb: 77 },
  { month: "May", enterprise: 88, midMarket: 83, smb: 78 },
  { month: "Jun", enterprise: 90, midMarket: 85, smb: 80 },
  { month: "Jul", enterprise: 92, midMarket: 86, smb: 82 },
  { month: "Aug", enterprise: 94, midMarket: 88, smb: 84 },
  { month: "Sep", enterprise: 93, midMarket: 87, smb: 83 },
  { month: "Oct", enterprise: 95, midMarket: 89, smb: 85 },
  { month: "Nov", enterprise: 96, midMarket: 90, smb: 86 },
  { month: "Dec", enterprise: 98, midMarket: 92, smb: 88 },
]

export function TeamPerformanceMetrics() {
  const [sortBy, setSortBy] = useState<"calls" | "conversion" | "score">("score")

  const sortedData = [...performanceData].sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance Metrics</CardTitle>
        <CardDescription>Compare performance across team members and segments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="individual">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="individual">Individual Performance</TabsTrigger>
            <TabsTrigger value="trends">Team Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className="pt-4">
            <div className="mb-4 flex items-center justify-end">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Tabs value={sortBy} onValueChange={(value) => setSortBy(value as "calls" | "conversion" | "score")}>
                  <TabsList>
                    <TabsTrigger value="calls">Calls</TabsTrigger>
                    <TabsTrigger value="conversion">Conversion</TabsTrigger>
                    <TabsTrigger value="score">Score</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sortedData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="calls" fill="#3b82f6" name="Total Calls" />
                  <Bar dataKey="conversion" fill="#10b981" name="Conversions" />
                  <Bar dataKey="score" fill="#f59e0b" name="Performance Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trendData}
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
                  <Line type="monotone" dataKey="enterprise" stroke="#3b82f6" name="Enterprise Team" strokeWidth={2} />
                  <Line type="monotone" dataKey="midMarket" stroke="#10b981" name="Mid-Market Team" strokeWidth={2} />
                  <Line type="monotone" dataKey="smb" stroke="#f59e0b" name="SMB Team" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


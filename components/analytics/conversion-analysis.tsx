"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data
const stageData = [
  { name: "Initial Contact", value: 100, percentage: 100 },
  { name: "Qualification", value: 82, percentage: 82 },
  { name: "Proposal", value: 56, percentage: 56 },
  { name: "Negotiation", value: 38, percentage: 38 },
  { name: "Closed Won", value: 25, percentage: 25 },
]

const sourceData = [
  { name: "Direct", value: 35, color: "#3b82f6" },
  { name: "Referral", value: 25, color: "#10b981" },
  { name: "Website", value: 20, color: "#f59e0b" },
  { name: "Social", value: 12, color: "#8b5cf6" },
  { name: "Other", value: 8, color: "#6b7280" },
]

const teamData = [
  { name: "Enterprise", conversion: 32 },
  { name: "Mid-Market", conversion: 28 },
  { name: "SMB", conversion: 22 },
]

export function ConversionAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Analysis</CardTitle>
        <CardDescription>Sales funnel and conversion metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="funnel">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="funnel">Sales Funnel</TabsTrigger>
            <TabsTrigger value="source">Lead Source</TabsTrigger>
            <TabsTrigger value="team">Team Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="funnel" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stageData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill="#3b82f6" name="Conversion Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="source" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="team" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={teamData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 40]} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="conversion" fill="#3b82f6" name="Conversion Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


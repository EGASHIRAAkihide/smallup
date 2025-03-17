"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const monthlyData = [
  { name: "Jan", revenue: 4000, target: 4400 },
  { name: "Feb", revenue: 5000, target: 5200 },
  { name: "Mar", revenue: 6000, target: 6000 },
  { name: "Apr", revenue: 7000, target: 6800 },
  { name: "May", revenue: 8000, target: 7600 },
  { name: "Jun", revenue: 9000, target: 8400 },
  { name: "Jul", revenue: 10000, target: 9200 },
  { name: "Aug", revenue: 11000, target: 10000 },
  { name: "Sep", revenue: 12000, target: 10800 },
  { name: "Oct", revenue: 13000, target: 11600 },
  { name: "Nov", revenue: 14000, target: 12400 },
  { name: "Dec", revenue: 15000, target: 13200 },
]

const weeklyData = [
  { name: "Week 1", revenue: 2500, target: 2700 },
  { name: "Week 2", revenue: 3200, target: 3000 },
  { name: "Week 3", revenue: 2800, target: 3000 },
  { name: "Week 4", revenue: 3800, target: 3500 },
]

const quarterlyData = [
  { name: "Q1", revenue: 15000, target: 15600 },
  { name: "Q2", revenue: 24000, target: 22800 },
  { name: "Q3", revenue: 33000, target: 30000 },
  { name: "Q4", revenue: 42000, target: 37200 },
]

export default function RevenueChart() {
  const [period, setPeriod] = useState("monthly")

  const data = {
    weekly: weeklyData,
    monthly: monthlyData,
    quarterly: quarterlyData,
  }[period]

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Compare actual revenue against targets</CardDescription>
        </div>
        <Tabs defaultValue="monthly" value={period} onValueChange={setPeriod} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
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
            <Bar dataKey="revenue" fill="#0ea5e9" name="Actual Revenue" />
            <Bar dataKey="target" fill="#94a3b8" name="Target Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}


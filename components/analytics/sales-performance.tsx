"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
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
const data = {
  monthly: [
    { label: "Jan", revenue: 8.2, target: 8.0, lastYear: 6.8 },
    { label: "Feb", revenue: 9.1, target: 8.5, lastYear: 7.2 },
    { label: "Mar", revenue: 10.3, target: 9.0, lastYear: 7.9 },
    { label: "Apr", revenue: 9.8, target: 9.5, lastYear: 8.1 },
    { label: "May", revenue: 11.2, target: 10.0, lastYear: 8.5 },
    { label: "Jun", revenue: 12.5, target: 10.5, lastYear: 9.0 },
    { label: "Jul", revenue: 11.8, target: 11.0, lastYear: 9.4 },
    { label: "Aug", revenue: 12.9, target: 11.5, lastYear: 9.8 },
    { label: "Sep", revenue: 13.5, target: 12.0, lastYear: 10.2 },
    { label: "Oct", revenue: 14.2, target: 12.5, lastYear: 10.8 },
    { label: "Nov", revenue: 15.0, target: 13.0, lastYear: 11.5 },
    { label: "Dec", revenue: 16.8, target: 13.5, lastYear: 12.2 },
  ],
  quarterly: [
    { label: "Q1", revenue: 27.6, target: 25.5, lastYear: 21.9 },
    { label: "Q2", revenue: 33.5, target: 30.0, lastYear: 25.6 },
    { label: "Q3", revenue: 38.2, target: 34.5, lastYear: 29.4 },
    { label: "Q4", revenue: 46.0, target: 39.0, lastYear: 34.5 },
  ],
  products: [
    { label: "Product A", revenue: 42.5 },
    { label: "Product B", revenue: 38.2 },
    { label: "Product C", revenue: 25.8 },
    { label: "Product D", revenue: 18.9 },
  ],
}

const ChartContainer = ({ children }) => (
  <div className="h-[300px]">
    <ResponsiveContainer width="100%" height="100%">{children}</ResponsiveContainer>
  </div>
)

const TabsComponent = ({ value, onChange, labels }) => (
  <Tabs value={value} onValueChange={onChange}>
    <TabsList className="grid w-full grid-cols-2">
      {labels.map((label) => (
        <TabsTrigger key={label.value} value={label.value}>
          {label.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
)

export function SalesPerformance() {
  const [period, setPeriod] = useState("monthly")
  const [view, setView] = useState("trend")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Performance</CardTitle>
        <CardDescription>Revenue analysis and comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <TabsComponent
          value={view}
          onChange={setView}
          labels={[{ label: "Trend Analysis", value: "trend" }, { label: "Product Breakdown", value: "product" }]}
        />
        <Tabs>
          <TabsContent value="trend" className="space-y-4">
            <TabsComponent
              value={period}
              onChange={setPeriod}
              labels={[{ label: "Monthly", value: "monthly" }, { label: "Quarterly", value: "quarterly" }]}
            />
            <ChartContainer>
              <LineChart data={data[period]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip formatter={(value) => `¥${value}M`} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" name="Revenue" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="target" stroke="#9ca3af" name="Target" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="lastYear" stroke="#10b981" name="Last Year" strokeDasharray="3 3" />
              </LineChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="product">
            <ChartContainer>
              <BarChart data={data.products} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip formatter={(value) => `¥${value}M`} />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" name="Revenue (¥M)" />
              </BarChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


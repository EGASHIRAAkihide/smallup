"use client"

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
const regionData = [
  { region: "Tokyo", revenue: 42.5, customers: 285, growth: 12 },
  { region: "Osaka", revenue: 28.3, customers: 192, growth: 8 },
  { region: "Nagoya", revenue: 18.9, customers: 145, growth: 15 },
  { region: "Fukuoka", revenue: 15.2, customers: 98, growth: 18 },
  { region: "Sapporo", revenue: 12.8, customers: 82, growth: 10 },
  { region: "Other", revenue: 7.7, customers: 40, growth: 5 },
]

const trendData = [
  { month: "Jan", tokyo: 3.2, osaka: 2.1, nagoya: 1.4 },
  { month: "Feb", tokyo: 3.5, osaka: 2.3, nagoya: 1.5 },
  { month: "Mar", tokyo: 3.8, osaka: 2.4, nagoya: 1.6 },
  { month: "Apr", tokyo: 3.6, osaka: 2.3, nagoya: 1.5 },
  { month: "May", tokyo: 3.9, osaka: 2.5, nagoya: 1.7 },
  { month: "Jun", tokyo: 4.2, osaka: 2.7, nagoya: 1.8 },
  { month: "Jul", tokyo: 4.0, osaka: 2.6, nagoya: 1.7 },
  { month: "Aug", tokyo: 4.3, osaka: 2.8, nagoya: 1.9 },
  { month: "Sep", tokyo: 4.5, osaka: 2.9, nagoya: 2.0 },
  { month: "Oct", tokyo: 4.7, osaka: 3.0, nagoya: 2.1 },
  { month: "Nov", tokyo: 4.9, osaka: 3.1, nagoya: 2.2 },
  { month: "Dec", tokyo: 5.2, osaka: 3.3, nagoya: 2.3 },
]

export function RegionalBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Breakdown</CardTitle>
        <CardDescription>Performance analysis by geographic region</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="trends">Regional Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip formatter={(value) => `¥${value}M`} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3b82f6" name="Revenue (¥M)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="customers" fill="#10b981" name="Customers" />
                  <Bar dataKey="growth" fill="#f59e0b" name="Growth (%)" />
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
                  <YAxis />
                  <Tooltip formatter={(value) => `¥${value}M`} />
                  <Legend />
                  <Line type="monotone" dataKey="tokyo" stroke="#3b82f6" name="Tokyo" strokeWidth={2} />
                  <Line type="monotone" dataKey="osaka" stroke="#10b981" name="Osaka" strokeWidth={2} />
                  <Line type="monotone" dataKey="nagoya" stroke="#f59e0b" name="Nagoya" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


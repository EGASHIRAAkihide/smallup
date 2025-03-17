import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Target, TrendingUp } from "lucide-react"

export function AnalyticsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">¥125.4M</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              12%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">842</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              8%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24.8%</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              2.5%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18.2%</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-red-500">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              1.1%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


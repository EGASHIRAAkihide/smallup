import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, AlertTriangle, CheckCircle2 } from "lucide-react"

export function InsightsSummary() {
  // Mock data
  const insights = {
    totalCalls: 248,
    callsChange: 12,
    avgScore: 84,
    scoreChange: -2,
    conversionRate: 24.3,
    conversionChange: 3.5,
    topStrengths: ["Product knowledge", "Building rapport", "Closing techniques"],
    topWeaknesses: ["Objection handling", "Discovery questions", "Follow-up consistency"],
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Calls Analyzed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{insights.totalCalls}</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {insights.callsChange}%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Call Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{insights.avgScore}</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-red-500">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              {Math.abs(insights.scoreChange)}%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{insights.conversionRate}%</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {insights.conversionChange}%
            </span>
            <span className="ml-1">from last period</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 row-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Team Insights</CardTitle>
          <CardDescription>Strengths & areas for improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 flex items-center">
              <CheckCircle2 className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium">Top Strengths</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {insights.topStrengths.map((strength) => (
                <Badge
                  key={strength}
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                >
                  {strength}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center">
              <AlertTriangle className="mr-1 h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Areas for Improvement</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {insights.topWeaknesses.map((weakness) => (
                <Badge
                  key={weakness}
                  variant="secondary"
                  className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                >
                  {weakness}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


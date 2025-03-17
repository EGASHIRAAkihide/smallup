import { ArrowUpRight, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadAnalytics() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">New Leads</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">245</div>
        <div className="flex items-center pt-1 text-xs text-muted-foreground">
          <span className="flex items-center text-emerald-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            8%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}


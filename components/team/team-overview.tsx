import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Users, Target, Award } from "lucide-react"

export function TeamOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Team Size</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />2
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Avg. Performance Score</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">84</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              3%
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Team Quota Attainment</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">92%</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              5%
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 row-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Team Insights</CardTitle>
          <CardDescription>Key observations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium">Top Performers</span>
            </div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                Tanaka Hiroshi
              </Badge>
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                Suzuki Yuki
              </Badge>
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center">
              <ArrowDownRight className="mr-1 h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Needs Coaching</span>
            </div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                Watanabe Kenji
              </Badge>
              <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                Sato Akira
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


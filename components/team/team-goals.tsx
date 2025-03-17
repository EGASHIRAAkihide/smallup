import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Target, Calendar } from "lucide-react"

// Sample data
const teamGoals = [
  {
    title: "Q2 Revenue Target",
    target: "¥25M",
    progress: 68,
    dueDate: "Jun 30, 2024",
    status: "in-progress",
  },
  {
    title: "New Customer Acquisition",
    target: "15 new accounts",
    progress: 80,
    dueDate: "Jun 30, 2024",
    status: "in-progress",
  },
  {
    title: "Reduce Sales Cycle",
    target: "15% reduction",
    progress: 45,
    dueDate: "Jun 30, 2024",
    status: "in-progress",
  },
  {
    title: "Q1 Revenue Target",
    target: "¥20M",
    progress: 100,
    dueDate: "Mar 31, 2024",
    status: "completed",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "in-progress":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
          In Progress
        </Badge>
      )
    case "completed":
      return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500">
          Completed
        </Badge>
      )
    case "overdue":
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-500">
          Overdue
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function TeamGoals() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Team Goals</CardTitle>
            <CardDescription>Track progress on team objectives</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-3 w-3" />
            New Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamGoals.map((goal, index) => (
            <div key={index} className="rounded-lg border p-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h3 className="font-medium">{goal.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Due: {goal.dueDate}</span>
                    <span>•</span>
                    {getStatusBadge(goal.status)}
                  </div>
                </div>
                <div className="text-right text-sm font-medium">{goal.progress}%</div>
              </div>

              <div className="mt-2">
                <Progress value={goal.progress} className="h-2" />
              </div>

              <div className="mt-3 text-sm">
                <span className="font-medium">Target:</span> {goal.target}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


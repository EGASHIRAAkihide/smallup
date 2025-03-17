"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Clock, Target } from "lucide-react"

interface TeamMemberGoalsProps {
  id: string
}

// Mock data
const memberGoals = [
  {
    id: 1,
    title: "Improve objection handling score",
    target: "Increase from 88 to 92",
    progress: 75,
    dueDate: "Apr 15, 2024",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Expand closing technique repertoire",
    target: "Master 3 new closing techniques",
    progress: 33,
    dueDate: "May 1, 2024",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Optimize follow-up process",
    target: "Implement standardized sequence",
    progress: 100,
    dueDate: "Mar 10, 2024",
    status: "completed",
  },
  {
    id: 4,
    title: "Q2 Revenue Target",
    target: "¥5M in new business",
    progress: 45,
    dueDate: "Jun 30, 2024",
    status: "in-progress",
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

export function TeamMemberGoals({ id }: TeamMemberGoalsProps) {
  const [expandedGoal, setExpandedGoal] = useState<number | null>(null)

  const toggleGoal = (id: number) => {
    if (expandedGoal === id) {
      setExpandedGoal(null)
    } else {
      setExpandedGoal(id)
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Personal Goals</CardTitle>
            <CardDescription>Individual development objectives</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-3 w-3" />
            New Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {memberGoals.map((goal) => (
            <div key={goal.id} className="rounded-lg border p-3">
              <div className="flex cursor-pointer items-start justify-between" onClick={() => toggleGoal(goal.id)}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {goal.status === "completed" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Target className="h-4 w-4 text-blue-500" />
                    )}
                    <h3 className="font-medium">{goal.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
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

              {expandedGoal === goal.id && (
                <div className="mt-3 rounded-md bg-muted p-2 text-sm">
                  <p className="font-medium">Target:</p>
                  <p className="text-muted-foreground">{goal.target}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


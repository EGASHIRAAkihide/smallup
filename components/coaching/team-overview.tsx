"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

// Mock data
const teamMembers = [
  {
    id: "rep-1",
    name: "Tanaka Hiroshi",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "TH",
    role: "Senior Sales Rep",
    score: 92,
    trend: "up",
    change: 4,
    calls: 38,
    conversion: 32,
  },
  {
    id: "rep-2",
    name: "Suzuki Yuki",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SY",
    role: "Sales Rep",
    score: 85,
    trend: "up",
    change: 2,
    calls: 42,
    conversion: 28,
  },
  {
    id: "rep-3",
    name: "Watanabe Kenji",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "WK",
    role: "Sales Rep",
    score: 78,
    trend: "down",
    change: 3,
    calls: 35,
    conversion: 22,
  },
  {
    id: "rep-4",
    name: "Sato Akira",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SA",
    role: "Junior Sales Rep",
    score: 72,
    trend: "up",
    change: 5,
    calls: 28,
    conversion: 18,
  },
]

function getScoreColor(score: number) {
  if (score >= 90) return "text-emerald-500"
  if (score >= 80) return "text-blue-500"
  if (score >= 70) return "text-yellow-500"
  return "text-red-500"
}

function getProgressColor(score: number) {
  if (score >= 90) return "bg-emerald-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

export function TeamOverview() {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription>Overview of individual rep performance and coaching needs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{member.name}</h3>
                    {member.trend === "up" ? (
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {member.change}%
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-500/10 text-red-500">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        {member.change}%
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:w-[400px]">
                <div className="flex flex-col">
                  <span className={`text-lg font-bold ${getScoreColor(member.score)}`}>{member.score}</span>
                  <span className="text-xs text-muted-foreground">Performance Score</span>
                  <Progress value={member.score} className={`mt-1 h-1 ${getProgressColor(member.score)}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{member.calls}</span>
                  <span className="text-xs text-muted-foreground">Calls This Period</span>
                  <Progress value={(member.calls / 50) * 100} className="mt-1 h-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{member.conversion}%</span>
                  <span className="text-xs text-muted-foreground">Conversion Rate</span>
                  <Progress value={member.conversion} className="mt-1 h-1" />
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={() => router.push(`/coaching/${member.id}`)}>
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface RepSkillsProps {
  id: string
}

// Mock data
const skillsData = [
  {
    skill: "Discovery",
    score: 94,
    trend: "up",
    change: 3,
    status: "strength",
  },
  {
    skill: "Presentation",
    score: 90,
    trend: "up",
    change: 2,
    status: "strength",
  },
  {
    skill: "Objection Handling",
    score: 88,
    trend: "up",
    change: 5,
    status: "improving",
  },
  {
    skill: "Closing",
    score: 92,
    trend: "up",
    change: 4,
    status: "strength",
  },
  {
    skill: "Rapport Building",
    score: 95,
    trend: "neutral",
    change: 0,
    status: "strength",
  },
  {
    skill: "Product Knowledge",
    score: 93,
    trend: "up",
    change: 2,
    status: "strength",
  },
  {
    skill: "Follow-up",
    score: 89,
    trend: "up",
    change: 6,
    status: "improving",
  },
  {
    skill: "Negotiation",
    score: 91,
    trend: "up",
    change: 3,
    status: "strength",
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

function getStatusBadge(status: string) {
  switch (status) {
    case "strength":
      return <Badge className="bg-emerald-500 hover:bg-emerald-600">Strength</Badge>
    case "improving":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Improving</Badge>
    case "needs-work":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Needs Work</Badge>
    case "critical":
      return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

function getTrendIcon(trend: string, change: number) {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-emerald-500" />
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-500" />
    default:
      return <Minus className="h-4 w-4 text-gray-500" />
  }
}

export function RepSkills({ id }: RepSkillsProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Skill Assessment</CardTitle>
        <CardDescription>Detailed breakdown of sales competencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skillsData.map((skill) => (
            <div key={skill.skill} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{skill.skill}</span>
                  {getStatusBadge(skill.status)}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${getScoreColor(skill.score)}`}>{skill.score}</span>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(skill.trend, skill.change)}
                    {skill.change > 0 && <span className="text-xs text-emerald-500">+{skill.change}</span>}
                  </div>
                </div>
              </div>
              <Progress value={skill.score} className={`h-2 ${getProgressColor(skill.score)}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


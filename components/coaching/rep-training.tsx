import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Video, Presentation, BookOpen, Clock, Calendar, ExternalLink, CheckCircle2 } from "lucide-react"

interface RepTrainingProps {
  id: string
}

// Mock data
const recommendedTraining = [
  {
    title: "Advanced Objection Handling",
    type: "video",
    duration: "45 min",
    priority: "high",
    description: "Learn techniques to address the most common customer objections with confidence.",
    skills: ["Objection Handling", "Negotiation"],
    completed: false,
  },
  {
    title: "Closing Techniques Masterclass",
    type: "workshop",
    duration: "90 min",
    priority: "high",
    description: "Expand your closing toolkit with techniques for different customer types and scenarios.",
    skills: ["Closing", "Negotiation"],
    completed: false,
  },
  {
    title: "Follow-up Sequence Optimization",
    type: "guide",
    duration: "30 min",
    priority: "medium",
    description: "Learn the standardized follow-up sequence for maximum engagement.",
    skills: ["Follow-up", "Process"],
    completed: true,
  },
]

const completedTraining = [
  {
    title: "Product Deep Dive: New Features",
    type: "webinar",
    completedDate: "Mar 5, 2024",
    skills: ["Product Knowledge"],
  },
  {
    title: "SPIN Questioning Framework",
    type: "workshop",
    completedDate: "Feb 22, 2024",
    skills: ["Discovery", "Rapport Building"],
  },
  {
    title: "Enterprise Sales Strategies",
    type: "course",
    completedDate: "Jan 15, 2024",
    skills: ["Strategy", "Enterprise"],
  },
]

function getTypeIcon(type: string) {
  switch (type) {
    case "video":
      return <Video className="h-4 w-4" />
    case "workshop":
      return <Presentation className="h-4 w-4" />
    case "guide":
      return <FileText className="h-4 w-4" />
    case "webinar":
      return <Video className="h-4 w-4" />
    case "course":
      return <BookOpen className="h-4 w-4" />
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-500 hover:bg-red-600">High Priority</Badge>
    case "medium":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Medium Priority</Badge>
    case "low":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Low Priority</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export function RepTraining({ id }: RepTrainingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Training</CardTitle>
        <CardDescription>Recommended and completed training resources</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Recommended Training</h3>
            <div className="space-y-4">
              {recommendedTraining.map((training, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(training.type)}
                        <h3 className="font-medium">{training.title}</h3>
                        {training.completed && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{training.duration}</span>
                        <span>•</span>
                        {getPriorityBadge(training.priority)}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled={training.completed}>
                      <ExternalLink className="mr-2 h-3 w-3" />
                      {training.completed ? "Completed" : "Start"}
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{training.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {training.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Completed Training</h3>
            <div className="space-y-3">
              {completedTraining.map((training, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(training.type)}
                    <div>
                      <h4 className="font-medium">{training.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Completed: {training.completedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {training.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


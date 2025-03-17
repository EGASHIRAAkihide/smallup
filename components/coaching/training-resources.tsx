import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Video, Presentation, BookOpen, Clock, Calendar, ExternalLink } from "lucide-react"

// Mock data
const trainingModules = [
  {
    title: "Advanced Objection Handling",
    type: "video",
    duration: "45 min",
    level: "intermediate",
    description: "Learn techniques to address the most common customer objections with confidence.",
    skills: ["Objection Handling", "Negotiation"],
  },
  {
    title: "SPIN Questioning Framework",
    type: "workshop",
    duration: "90 min",
    level: "all-levels",
    description: "Master the SPIN framework to uncover customer needs more effectively.",
    skills: ["Discovery", "Rapport Building"],
  },
  {
    title: "Closing Techniques for Enterprise Sales",
    type: "guide",
    duration: "30 min",
    level: "advanced",
    description: "Strategies for closing complex, high-value enterprise deals.",
    skills: ["Closing", "Negotiation"],
  },
  {
    title: "Product Deep Dive: New Features",
    type: "webinar",
    duration: "60 min",
    level: "all-levels",
    description: "Comprehensive overview of the latest product features and their benefits.",
    skills: ["Product Knowledge", "Presentation"],
  },
]

const upcomingTraining = [
  {
    title: "Team Role-Playing Workshop",
    date: "Mar 22, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    skills: ["Objection Handling", "Negotiation"],
  },
  {
    title: "Product Roadmap Briefing",
    date: "Mar 25, 2024",
    time: "2:00 PM - 3:00 PM",
    location: "Virtual Meeting",
    skills: ["Product Knowledge"],
  },
  {
    title: "Sales Process Optimization",
    date: "Mar 29, 2024",
    time: "11:00 AM - 12:30 PM",
    location: "Training Room B",
    skills: ["Process", "Efficiency"],
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
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

function getLevelBadge(level: string) {
  switch (level) {
    case "beginner":
      return (
        <Badge variant="outline" className="bg-green-500/10 text-green-500">
          Beginner
        </Badge>
      )
    case "intermediate":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
          Intermediate
        </Badge>
      )
    case "advanced":
      return (
        <Badge variant="outline" className="bg-purple-500/10 text-purple-500">
          Advanced
        </Badge>
      )
    case "all-levels":
      return (
        <Badge variant="outline" className="bg-gray-500/10">
          All Levels
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function TrainingResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Training Resources</CardTitle>
        <CardDescription>Recommended training based on team skill gaps</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-4 pt-4">
            {trainingModules.map((module, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(module.type)}
                      <h3 className="font-medium">{module.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{module.duration}</span>
                      <span>•</span>
                      {getLevelBadge(module.level)}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Access
                  </Button>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {module.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4 pt-4">
            {upcomingTraining.map((training, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{training.title}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{training.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{training.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Presentation className="h-3 w-3" />
                    <span>{training.location}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {training.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                  <Button size="sm">Register</Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


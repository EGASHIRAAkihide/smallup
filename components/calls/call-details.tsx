import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Calendar, Building } from "lucide-react"

interface CallDetailsProps {
  id: string
}

export function CallDetails({ id }: CallDetailsProps) {
  // Mock data - in a real app, this would come from an API
  const callDetails = {
    id: "CALL-1234",
    customer: "Acme Corp",
    rep: "Tanaka Hiroshi",
    repAvatar: "/placeholder.svg?height=40&width=40",
    repInitials: "TH",
    date: "March 15, 2024",
    time: "10:30 AM",
    duration: "24:15",
    score: 85,
    topics: ["Product Demo", "Pricing", "Competitor Comparison"],
    tags: ["Follow-up Required", "Decision Maker", "High Priority"],
  }

  function getScoreColor(score: number) {
    if (score >= 90) return "bg-emerald-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Call Details</span>
          <Badge
            variant="outline"
            className={`${getScoreColor(callDetails.score)} text-white hover:${getScoreColor(callDetails.score)}`}
          >
            Score: {callDetails.score}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={callDetails.repAvatar} alt={callDetails.rep} />
              <AvatarFallback>{callDetails.repInitials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{callDetails.rep}</p>
              <p className="text-sm text-muted-foreground">Sales Representative</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Customer</p>
                <p className="text-sm text-muted-foreground">{callDetails.customer}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">{callDetails.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">{callDetails.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Duration</p>
                <p className="text-sm text-muted-foreground">{callDetails.duration}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Topics Discussed</p>
            <div className="flex flex-wrap gap-1">
              {callDetails.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Tags</p>
            <div className="flex flex-wrap gap-1">
              {callDetails.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


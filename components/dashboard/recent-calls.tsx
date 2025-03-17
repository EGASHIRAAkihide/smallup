import { PhoneCall } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data
const recentCalls = [
  {
    id: 1,
    customer: "Acme Corp",
    rep: "Tanaka Hiroshi",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    time: "10:30 AM",
    date: "Today",
    score: 85,
  },
  {
    id: 2,
    customer: "Globex Inc",
    rep: "Suzuki Yuki",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SY",
    time: "2:15 PM",
    date: "Yesterday",
    score: 92,
  },
  {
    id: 3,
    customer: "Initech",
    rep: "Watanabe Kenji",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "WK",
    time: "11:45 AM",
    date: "Yesterday",
    score: 78,
  },
  {
    id: 4,
    customer: "Umbrella Corp",
    rep: "Sato Akira",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SA",
    time: "9:00 AM",
    date: "Mar 15",
    score: 88,
  },
]

function getScoreColor(score: number) {
  if (score >= 90) return "bg-emerald-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

export default function RecentCalls() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <PhoneCall className="h-4 w-4" />
          Recent Calls
        </CardTitle>
        <CardDescription>Latest evaluated sales calls</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4 px-6">
          {recentCalls.map((call) => (
            <div key={call.id} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={call.avatar} alt={call.rep} />
                <AvatarFallback>{call.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{call.customer}</p>
                <p className="text-xs text-muted-foreground">
                  {call.rep} · {call.time}, {call.date}
                </p>
              </div>
              <Badge
                variant="outline"
                className={`${getScoreColor(call.score)} text-white hover:${getScoreColor(call.score)}`}
              >
                {call.score}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button variant="outline" className="w-full">
          View All Calls
        </Button>
      </CardFooter>
    </Card>
  )
}


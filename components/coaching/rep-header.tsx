import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare } from "lucide-react"

interface RepHeaderProps {
  id: string
}

export function RepHeader({ id }: RepHeaderProps) {
  // Mock data - in a real app, this would come from an API based on the ID
  const rep = {
    id: "rep-1",
    name: "Tanaka Hiroshi",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "TH",
    role: "Senior Sales Representative",
    team: "Enterprise",
    email: "h.tanaka@naoma.ai",
    phone: "+81 3-1234-5678",
    tenure: "3 years, 2 months",
    status: "Top Performer",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={rep.avatar} alt={rep.name} />
              <AvatarFallback className="text-xl">{rep.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{rep.name}</h2>
                <Badge className="bg-emerald-500 hover:bg-emerald-600">{rep.status}</Badge>
              </div>
              <p className="text-muted-foreground">
                {rep.role} • {rep.team} Team
              </p>
              <p className="text-sm text-muted-foreground">Tenure: {rep.tenure}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


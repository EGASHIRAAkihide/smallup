"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal, Eye } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample data
const teamActivity = [
  {
    id: "rep-1",
    name: "Tanaka Hiroshi",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    role: "Senior Sales Rep",
    lastActive: "10 minutes ago",
    status: "online",
    calls: 5,
    emails: 12,
    meetings: 2,
  },
  {
    id: "rep-2",
    name: "Suzuki Yuki",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SY",
    role: "Sales Rep",
    lastActive: "2 hours ago",
    status: "away",
    calls: 3,
    emails: 8,
    meetings: 1,
  },
  {
    id: "rep-3",
    name: "Watanabe Kenji",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "WK",
    role: "Sales Rep",
    lastActive: "1 day ago",
    status: "offline",
    calls: 0,
    emails: 5,
    meetings: 0,
  },
  {
    id: "rep-4",
    name: "Sato Akira",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SA",
    role: "Junior Sales Rep",
    lastActive: "3 hours ago",
    status: "online",
    calls: 2,
    emails: 7,
    meetings: 1,
  },
  {
    id: "rep-5",
    name: "Yamamoto Takeshi",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "YT",
    role: "Senior Sales Rep",
    lastActive: "30 minutes ago",
    status: "online",
    calls: 4,
    emails: 10,
    meetings: 2,
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "online":
      return <Badge className="bg-emerald-500 hover:bg-emerald-600">Online</Badge>
    case "away":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Away</Badge>
    case "offline":
      return <Badge variant="outline">Offline</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function TeamActivity() {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Activity</CardTitle>
        <CardDescription>Recent activity and current status</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Calls Today</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Emails</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Meetings</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamActivity.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {getStatusBadge(member.status)}
                    <span className="text-xs text-muted-foreground">{member.lastActive}</span>
                  </div>
                </TableCell>
                <TableCell>{member.calls}</TableCell>
                <TableCell>{member.emails}</TableCell>
                <TableCell>{member.meetings}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => router.push(`/team/${member.id}`)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


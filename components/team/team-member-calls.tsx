"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TeamMemberCallsProps {
  id: string
}

// Sample data
const recentCalls = [
  {
    id: "CALL-1234",
    customer: "Acme Corp",
    date: "2024-03-15T10:30:00",
    duration: "24:15",
    score: 85,
    status: "analyzed",
    topics: ["Product Demo", "Pricing", "Competitor Comparison"],
  },
  {
    id: "CALL-1235",
    customer: "Globex Inc",
    date: "2024-03-14T14:15:00",
    duration: "18:42",
    score: 92,
    status: "analyzed",
    topics: ["Contract Renewal", "Upsell", "Technical Support"],
  },
  {
    id: "CALL-1236",
    customer: "Initech",
    date: "2024-03-14T11:45:00",
    duration: "31:08",
    score: 78,
    status: "analyzed",
    topics: ["Initial Contact", "Product Overview", "Next Steps"],
  },
  {
    id: "CALL-1237",
    customer: "Umbrella Corp",
    date: "2024-03-13T09:00:00",
    duration: "15:22",
    score: 88,
    status: "analyzed",
    topics: ["Feature Request", "Pricing", "Implementation"],
  },
  {
    id: "CALL-1238",
    customer: "Stark Industries",
    date: "2024-03-12T16:20:00",
    duration: "42:37",
    score: 94,
    status: "analyzed",
    topics: ["Enterprise Solution", "Integration", "Security"],
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date)
}

function getScoreColor(score: number) {
  if (score >= 90) return "bg-emerald-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

function getStatusBadge(status: string) {
  switch (status) {
    case "analyzed":
      return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10">
          Analyzed
        </Badge>
      )
    case "processing":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/10">
          Processing
        </Badge>
      )
    case "failed":
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-500 hover:bg-red-500/10">
          Failed
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function TeamMemberCalls({ id }: TeamMemberCallsProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCalls = searchQuery
    ? recentCalls.filter((call) => call.customer.toLowerCase().includes(searchQuery.toLowerCase()))
    : recentCalls

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Calls</CardTitle>
        <CardDescription>Call history and performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          <Input
            placeholder="Search by customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-[300px]"
          />
          <div className="flex items-center gap-2 ml-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="analyzed">Analyzed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Call ID</TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Customer</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Date & Time</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <span>Score</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCalls.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium">{call.id}</TableCell>
                <TableCell>{call.customer}</TableCell>
                <TableCell>{formatDate(call.date)}</TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${getScoreColor(call.score)} text-white hover:${getScoreColor(call.score)}`}
                  >
                    {call.score}
                  </Badge>
                </TableCell>
                <TableCell>{getStatusBadge(call.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => router.push(`/calls/${call.id}`)}>
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Recording</DropdownMenuItem>
                        <DropdownMenuItem>Download Transcript</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Share</DropdownMenuItem>
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


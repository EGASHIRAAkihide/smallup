"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Loader2, Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample data
const teamMembers = [
  {
    id: "1",
    name: "Tanaka Hiroshi",
    email: "h.tanaka@naoma.ai",
    role: "Sales Rep",
    team: "Enterprise",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    status: "active",
  },
  {
    id: "2",
    name: "Suzuki Yuki",
    email: "y.suzuki@naoma.ai",
    role: "Sales Rep",
    team: "Mid-Market",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SY",
    status: "active",
  },
  {
    id: "3",
    name: "Watanabe Kenji",
    email: "k.watanabe@naoma.ai",
    role: "Sales Rep",
    team: "SMB",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "WK",
    status: "active",
  },
  {
    id: "4",
    name: "Sato Akira",
    email: "a.sato@naoma.ai",
    role: "Sales Rep",
    team: "SMB",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SA",
    status: "active",
  },
  {
    id: "5",
    name: "Takahashi Keiko",
    email: "k.takahashi@naoma.ai",
    role: "Sales Director",
    team: "Management",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TK",
    status: "active",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "active":
      return <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>
    case "inactive":
      return <Badge variant="outline">Inactive</Badge>
    case "pending":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Pending</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function TeamSettings() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Settings</CardTitle>
          <CardDescription>Configure your team structure and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="team-name">Team Name</Label>
              <Input id="team-name" defaultValue="Naoma Sales Team" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" defaultValue="Sales" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Team Permissions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="cross-team-visibility">Cross-Team Visibility</Label>
                  <p className="text-sm text-muted-foreground">Allow team members to view other teams' data</p>
                </div>
                <Switch id="cross-team-visibility" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="manager-only-reports">Manager-Only Reports</Label>
                  <p className="text-sm text-muted-foreground">Restrict certain reports to managers only</p>
                </div>
                <Switch id="manager-only-reports" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="call-sharing">Call Sharing</Label>
                  <p className="text-sm text-muted-foreground">Allow team members to share call recordings</p>
                </div>
                <Switch id="call-sharing" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their roles</CardDescription>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.team}</TableCell>
                  <TableCell>{getStatusBadge(member.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


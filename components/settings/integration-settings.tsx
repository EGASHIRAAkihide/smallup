"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Loader2, Link } from "lucide-react"

// Sample data
const integrations = [
  {
    id: "crm",
    name: "CRM Integration",
    description: "Connect to your CRM system to sync customer data",
    status: "connected",
    provider: "Salesforce",
    lastSync: "2 hours ago",
  },
  {
    id: "calendar",
    name: "Calendar Integration",
    description: "Connect to your calendar to sync meetings and events",
    status: "connected",
    provider: "Google Calendar",
    lastSync: "1 hour ago",
  },
  {
    id: "email",
    name: "Email Integration",
    description: "Connect to your email to track communication",
    status: "disconnected",
    provider: null,
    lastSync: null,
  },
  {
    id: "video",
    name: "Video Conferencing",
    description: "Connect to your video conferencing platform",
    status: "connected",
    provider: "Zoom",
    lastSync: "3 hours ago",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "connected":
      return <Badge className="bg-emerald-500 hover:bg-emerald-600">Connected</Badge>
    case "disconnected":
      return <Badge variant="outline">Disconnected</Badge>
    case "pending":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Pending</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export function IntegrationSettings() {
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
          <CardTitle>API Settings</CardTitle>
          <CardDescription>Configure API access and credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex">
                <Input
                  id="api-key"
                  type="password"
                  value="••••••••••••••••••••••••••••••"
                  readOnly
                  className="rounded-r-none"
                />
                <Button variant="outline" className="rounded-l-none">
                  Copy
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Your API key is sensitive. Do not share it with others.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">Webhook URL</Label>
              <Input id="webhook-url" defaultValue="https://api.naoma.ai/webhooks/incoming" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">API Access</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enable-api">Enable API Access</Label>
                  <p className="text-sm text-muted-foreground">Allow external applications to access your data</p>
                </div>
                <Switch id="enable-api" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="webhook-notifications">Webhook Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to your webhook URL when events occur
                  </p>
                </div>
                <Switch id="webhook-notifications" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Reset API Key</Button>
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
          <CardTitle>Integrations</CardTitle>
          <CardDescription>Connect with other services and platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {integrations.map((integration) => (
              <div key={integration.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                  {integration.status === "connected" && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Provider: {integration.provider}</span>
                      <span>•</span>
                      <span>Last sync: {integration.lastSync}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(integration.status)}
                  <Button variant="outline" size="sm">
                    {integration.status === "connected" ? "Configure" : "Connect"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Link className="mr-2 h-4 w-4" />
            Browse More Integrations
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


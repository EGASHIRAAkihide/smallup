"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"

export function NotificationSettings() {
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
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how and when you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Email Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="new-call">New Call Recordings</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when new calls are recorded</p>
                </div>
                <Switch id="new-call" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="call-analysis">Call Analysis Complete</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when call analysis is completed</p>
                </div>
                <Switch id="call-analysis" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="team-updates">Team Performance Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly updates on your team's performance</p>
                </div>
                <Switch id="team-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="coaching-insights">Coaching Insights</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about new coaching insights</p>
                </div>
                <Switch id="coaching-insights" defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">In-App Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="app-new-call">New Call Recordings</Label>
                  <p className="text-sm text-muted-foreground">Show notifications when new calls are recorded</p>
                </div>
                <Switch id="app-new-call" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="app-call-analysis">Call Analysis Complete</Label>
                  <p className="text-sm text-muted-foreground">Show notifications when call analysis is completed</p>
                </div>
                <Switch id="app-call-analysis" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="app-mentions">Mentions and Comments</Label>
                  <p className="text-sm text-muted-foreground">Show notifications when you are mentioned in comments</p>
                </div>
                <Switch id="app-mentions" defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Notification Frequency</h3>
            <RadioGroup defaultValue="realtime">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="realtime" id="realtime" />
                <div className="grid gap-1.5">
                  <Label htmlFor="realtime">Real-time</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications as events happen</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <div className="grid gap-1.5">
                  <Label htmlFor="daily">Daily Digest</Label>
                  <p className="text-sm text-muted-foreground">Receive a daily summary of all notifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <div className="grid gap-1.5">
                  <Label htmlFor="weekly">Weekly Digest</Label>
                  <p className="text-sm text-muted-foreground">Receive a weekly summary of all notifications</p>
                </div>
              </div>
            </RadioGroup>
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
    </div>
  )
}


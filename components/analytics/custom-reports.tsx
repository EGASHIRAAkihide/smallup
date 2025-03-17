import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Plus, Clock, Calendar } from "lucide-react"

// Sample data
const savedReports = [
  {
    name: "Quarterly Sales Summary",
    type: "Sales",
    lastRun: "2 days ago",
    scheduled: true,
    frequency: "Weekly",
  },
  {
    name: "Team Performance",
    type: "Performance",
    lastRun: "1 week ago",
    scheduled: true,
    frequency: "Monthly",
  },
  {
    name: "Conversion by Region",
    type: "Conversion",
    lastRun: "3 days ago",
    scheduled: false,
    frequency: null,
  },
  {
    name: "Product Revenue Analysis",
    type: "Revenue",
    lastRun: "Yesterday",
    scheduled: true,
    frequency: "Daily",
  },
]

export function CustomReports() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Custom Reports</CardTitle>
            <CardDescription>Saved and scheduled reports</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-3 w-3" />
            New Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedReports.map((report, index) => (
            <div key={index} className="flex flex-col gap-2 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">{report.name}</h3>
                </div>
                <Badge variant="outline">{report.type}</Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Last run: {report.lastRun}</span>
                </div>
                {report.scheduled && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{report.frequency}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-3 w-3" />
                  Download
                </Button>
                <Button size="sm">Run Now</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


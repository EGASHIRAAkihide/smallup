import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export function RepFeedbackFallback() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Feedback</CardTitle>
        <CardDescription>Loading AI-generated coaching insights...</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="strengths">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="improvements">Areas for Improvement</TabsTrigger>
          </TabsList>

          <TabsContent value="strengths" className="space-y-4 pt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-5 w-3/4" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


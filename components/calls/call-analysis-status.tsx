"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, AlertTriangle, RefreshCw } from "lucide-react"

interface CallAnalysisStatusProps {
  callId: string
}

type AnalysisStatus = "queued" | "processing" | "completed" | "failed"

interface StatusResponse {
  status: AnalysisStatus
  progress: number
  message: string
  error?: string
}

export function CallAnalysisStatus({ callId }: CallAnalysisStatusProps) {
  const router = useRouter()
  const [status, setStatus] = useState<StatusResponse>({
    status: "queued",
    progress: 0,
    message: "Waiting in queue...",
  })
  const [polling, setPolling] = useState(true)

  useEffect(() => {
    if (!polling) return

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/analysis-status/${callId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch analysis status")
        }

        const data: StatusResponse = await response.json()
        setStatus(data)

        // Stop polling when analysis is complete or failed
        if (data.status === "completed" || data.status === "failed") {
          setPolling(false)

          // Refresh the page to show results if completed
          if (data.status === "completed") {
            router.refresh()
          }
        }
      } catch (error) {
        console.error("Error checking analysis status:", error)
        // Don't stop polling on error, just try again
      }
    }

    // Check immediately
    checkStatus()

    // Then poll every 3 seconds
    const interval = setInterval(checkStatus, 3000)

    return () => clearInterval(interval)
  }, [callId, polling, router])

  const handleRetry = async () => {
    try {
      await fetch(`/api/retry-analysis/${callId}`, { method: "POST" })
      setStatus({
        status: "queued",
        progress: 0,
        message: "Retrying analysis...",
      })
      setPolling(true)
    } catch (error) {
      console.error("Error retrying analysis:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Analysis</CardTitle>
        <CardDescription>
          {status.status === "queued" && "Your call is queued for analysis"}
          {status.status === "processing" && "AI is analyzing your call recording"}
          {status.status === "completed" && "Analysis completed successfully"}
          {status.status === "failed" && "Analysis failed"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          {status.status === "queued" && <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />}
          {status.status === "processing" && <Loader2 className="h-8 w-8 animate-spin text-blue-500" />}
          {status.status === "completed" && <CheckCircle className="h-8 w-8 text-emerald-500" />}
          {status.status === "failed" && <AlertTriangle className="h-8 w-8 text-red-500" />}

          <div className="flex-1">
            <p className="font-medium">{status.message}</p>
            {status.error && <p className="text-sm text-red-500">{status.error}</p>}
          </div>
        </div>

        {(status.status === "queued" || status.status === "processing") && (
          <Progress value={status.progress} className="h-2" />
        )}

        {status.status === "failed" && (
          <Button onClick={handleRetry} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry Analysis
          </Button>
        )}
      </CardContent>
    </Card>
  )
}


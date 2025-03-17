"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
  context?: string
}

export default function ErrorBoundary({ error, reset, context = "operation" }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(`Error in ${context}:`, error)
  }, [error, context])

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <CardTitle>Something went wrong</CardTitle>
        </div>
        <CardDescription>There was an error while performing this {context}.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            {error.message || `An unexpected error occurred during ${context}.`}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={reset} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try again
        </Button>
      </CardFooter>
    </Card>
  )
}


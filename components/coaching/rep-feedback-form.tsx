"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, MessageSquare } from "lucide-react"
import { generateCoachingInsights } from "@/app/actions/ai-analysis"
import { useToast } from "@/hooks/use-toast"

interface RepFeedbackFormProps {
  id: string
  name: string
}

export function RepFeedbackForm({ id, name }: RepFeedbackFormProps) {
  const { toast } = useToast()
  const [feedback, setFeedback] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!feedback.trim()) {
      toast({
        title: "Feedback required",
        description: "Please enter your feedback before submitting",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      // First, save the manual feedback
      await fetch("/api/save-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repId: id,
          feedback,
        }),
      })

      // Then, generate new AI coaching insights that incorporate this feedback
      await generateCoachingInsights(id)

      toast({
        title: "Feedback submitted",
        description: "Your feedback has been saved and AI coaching insights updated",
        variant: "default",
      })

      // Clear the form
      setFeedback("")
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error submitting feedback",
        description: "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Provide Feedback</CardTitle>
        <CardDescription>
          Add your coaching feedback for {name}. This will be incorporated into AI-generated insights.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Enter your coaching feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            disabled={loading}
            className="resize-none"
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <MessageSquare className="mr-2 h-4 w-4" />
                Submit Feedback
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}


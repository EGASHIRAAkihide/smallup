"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Loader2 } from "lucide-react"
import { analyzeCall } from "@/app/actions/ai-analysis"

export function CallUpload() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [metadata, setMetadata] = useState({
    rep: "",
    customer: "",
    date: new Date().toISOString().split("T")[0],
  })
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleMetadataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please select a call recording file")
      return
    }

    if (!metadata.rep || !metadata.customer) {
      setError("Please fill in all required fields")
      return
    }

    setUploading(true)
    setError(null)

    try {
      // First, upload the file to storage
      const formData = new FormData()
      formData.append("file", file)
      formData.append("rep", metadata.rep)
      formData.append("customer", metadata.customer)
      formData.append("date", metadata.date)

      const uploadResponse = await fetch("/api/upload-call", {
        method: "POST",
        body: formData,
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload call recording")
      }

      const { callId, audioUrl, duration } = await uploadResponse.json()

      // Then, trigger AI analysis
      await analyzeCall({
        callId,
        audioUrl,
        metadata: {
          rep: metadata.rep,
          customer: metadata.customer,
          date: metadata.date,
          duration,
        },
      })

      // Navigate to the call details page
      router.push(`/calls/${callId}`)
    } catch (err) {
      console.error("Error uploading call:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Upload Call Recording</CardTitle>
        <CardDescription>Upload a call recording for AI analysis</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file">Call Recording</Label>
            <Input id="file" type="file" accept="audio/*,video/*" onChange={handleFileChange} disabled={uploading} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rep">Sales Representative</Label>
            <Input
              id="rep"
              name="rep"
              value={metadata.rep}
              onChange={handleMetadataChange}
              disabled={uploading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer">Customer</Label>
            <Input
              id="customer"
              name="customer"
              value={metadata.customer}
              onChange={handleMetadataChange}
              disabled={uploading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Call Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={metadata.date}
              onChange={handleMetadataChange}
              disabled={uploading}
              required
            />
          </div>

          {error && <div className="text-sm font-medium text-red-500">{error}</div>}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={uploading}>
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload & Analyze
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}


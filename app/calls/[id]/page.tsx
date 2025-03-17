import type { Metadata } from "next"
import { CallDetails } from "@/components/calls/call-details"
import { CallTranscript } from "@/components/calls/call-transcript"
import { CallInsights } from "@/components/calls/call-insights"
import { CallPlayer } from "@/components/calls/call-player"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Call Details | Naoma Sales Analysis Tool",
  description: "Detailed analysis of sales call with AI-powered insights",
}

export default function CallDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/calls">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Call Details</h1>
          <span className="text-muted-foreground">{params.id}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CallPlayer id={params.id} />
        </div>
        <div>
          <CallDetails id={params.id} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CallTranscript id={params.id} />
        </div>
        <div>
          <CallInsights id={params.id} />
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface CallTranscriptProps {
  id: string
}

// Mock transcript data
const transcriptData = [
  {
    speaker: "Tanaka Hiroshi",
    role: "Sales Rep",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    text: "Good morning, and thank you for taking the time to meet with me today. I'm excited to show you how our solution can help address the challenges we discussed in our previous conversation.",
    timestamp: "00:00:15",
    sentiment: "positive",
    insights: [],
  },
  {
    speaker: "John Smith",
    role: "Customer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    text: "Good morning. Yes, I'm particularly interested in seeing how your product compares to what we're currently using with Competitor X.",
    timestamp: "00:00:32",
    sentiment: "neutral",
    insights: [{ type: "competitor", text: "Competitor X", importance: "high" }],
  },
  {
    speaker: "Tanaka Hiroshi",
    role: "Sales Rep",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    text: "Absolutely. I'll make sure to highlight those differences. Before we dive into the demo, could you tell me a bit more about your current workflow and the specific pain points you're experiencing?",
    timestamp: "00:00:48",
    sentiment: "positive",
    insights: [{ type: "technique", text: "Discovery Question", importance: "medium" }],
  },
  {
    speaker: "John Smith",
    role: "Customer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    text: "Sure. Our main issue is the reporting capabilities. We need more detailed analytics on customer interactions, and the current solution doesn't provide that level of granularity. Also, the pricing structure doesn't work well for our team size.",
    timestamp: "00:01:10",
    sentiment: "negative",
    insights: [
      { type: "pain_point", text: "Reporting Capabilities", importance: "high" },
      { type: "pain_point", text: "Pricing Structure", importance: "high" },
    ],
  },
  {
    speaker: "Tanaka Hiroshi",
    role: "Sales Rep",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    text: "Thank you for sharing that. Those are exactly the areas where our solution excels. Let me show you our analytics dashboard first, which provides real-time insights with customizable reports that you can tailor to your specific needs.",
    timestamp: "00:01:42",
    sentiment: "positive",
    insights: [{ type: "technique", text: "Value Proposition", importance: "high" }],
  },
  {
    speaker: "John Smith",
    role: "Customer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    text: "That sounds promising. And what about the pricing? We have about 50 team members who would need access.",
    timestamp: "00:02:15",
    sentiment: "neutral",
    insights: [{ type: "buying_signal", text: "Pricing Inquiry", importance: "high" }],
  },
  {
    speaker: "Tanaka Hiroshi",
    role: "Sales Rep",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    text: "For a team of your size, we offer a tiered pricing model that actually becomes more cost-effective as you add users. I can prepare a detailed quote after our call, but based on 50 users, you'd be looking at approximately 20% savings compared to your current solution.",
    timestamp: "00:02:38",
    sentiment: "positive",
    insights: [{ type: "technique", text: "ROI Discussion", importance: "high" }],
  },
  {
    speaker: "John Smith",
    role: "Customer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    text: "That's significant. Do you offer any discounts for annual payment?",
    timestamp: "00:03:10",
    sentiment: "positive",
    insights: [{ type: "buying_signal", text: "Discount Inquiry", importance: "high" }],
  },
  {
    speaker: "Tanaka Hiroshi",
    role: "Sales Rep",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "TH",
    text: "Yes, we offer an additional 15% discount for annual commitments. Now, let me walk you through the analytics dashboard to show you the level of detail you can access.",
    timestamp: "00:03:25",
    sentiment: "positive",
    insights: [],
  },
]

function getSentimentColor(sentiment: string) {
  switch (sentiment) {
    case "positive":
      return "text-emerald-500"
    case "negative":
      return "text-red-500"
    default:
      return "text-blue-500"
  }
}

function getInsightBadge(type: string) {
  switch (type) {
    case "competitor":
      return (
        <Badge variant="outline" className="bg-purple-500/10 text-purple-500">
          Competitor
        </Badge>
      )
    case "pain_point":
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-500">
          Pain Point
        </Badge>
      )
    case "buying_signal":
      return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500">
          Buying Signal
        </Badge>
      )
    case "technique":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
          Technique
        </Badge>
      )
    default:
      return <Badge variant="outline">Insight</Badge>
  }
}

export function CallTranscript({ id }: CallTranscriptProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTranscript = searchQuery
    ? transcriptData.filter(
        (item) =>
          item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.speaker.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : transcriptData

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Transcript</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transcript..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="transcript">
          <TabsList className="mb-4">
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="insights">With Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="transcript" className="space-y-4">
            {filteredTranscript.map((item, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarImage src={item.avatar} alt={item.speaker} />
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.speaker}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                  </div>
                  <p className={`mt-1 ${getSentimentColor(item.sentiment)}`}>{item.text}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            {filteredTranscript.map((item, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarImage src={item.avatar} alt={item.speaker} />
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.speaker}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                  </div>
                  <p className={`mt-1 ${getSentimentColor(item.sentiment)}`}>{item.text}</p>

                  {item.insights.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.insights.map((insight, i) => (
                        <div key={i} className="flex items-center gap-1">
                          {getInsightBadge(insight.type)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


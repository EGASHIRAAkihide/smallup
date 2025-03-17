import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle } from "lucide-react"

// Mock data
const openingPhrases = [
  {
    phrase: "I noticed your company recently expanded into [industry]. How is that affecting your [relevant process]?",
    effectiveness: "high",
    callsUsed: 28,
    conversionRate: 32,
  },
  {
    phrase:
      "Based on our research, companies like yours typically struggle with [pain point]. Is that something you're experiencing?",
    effectiveness: "high",
    callsUsed: 35,
    conversionRate: 29,
  },
  {
    phrase:
      "I was looking at your website and noticed you're using [competitor product]. What aspects of it are working well for you?",
    effectiveness: "medium",
    callsUsed: 42,
    conversionRate: 22,
  },
]

const valuePropositions = [
  {
    phrase:
      "Our solution has helped similar companies reduce [metric] by an average of 35% within the first three months.",
    effectiveness: "high",
    callsUsed: 56,
    conversionRate: 38,
  },
  {
    phrase:
      "What sets us apart is our dedicated implementation team that ensures you're fully operational within two weeks.",
    effectiveness: "high",
    callsUsed: 48,
    conversionRate: 34,
  },
  {
    phrase:
      "Our platform integrates with all your existing tools, creating a seamless workflow without disrupting your team.",
    effectiveness: "medium",
    callsUsed: 62,
    conversionRate: 26,
  },
]

const closingTechniques = [
  {
    phrase:
      "Based on what we've discussed, I'd recommend starting with our [specific plan]. Would you like me to put together a proposal?",
    effectiveness: "high",
    callsUsed: 45,
    conversionRate: 42,
  },
  {
    phrase:
      "We could set up a pilot with a small team to demonstrate the value before rolling out company-wide. How does that sound?",
    effectiveness: "high",
    callsUsed: 38,
    conversionRate: 36,
  },
  {
    phrase: "What would be your timeline for making a decision on this? I can tailor our next steps accordingly.",
    effectiveness: "medium",
    callsUsed: 52,
    conversionRate: 28,
  },
]

const avoidPhrases = [
  {
    phrase: "To be honest with you...",
    reason: "Implies you might not always be honest",
    alternative: "What I can tell you is...",
  },
  {
    phrase: "I'm not sure if this is relevant, but...",
    reason: "Undermines your expertise and confidence",
    alternative: "You might find this valuable...",
  },
  {
    phrase: "Our product is the best in the market",
    reason: "Generic claim without evidence",
    alternative: "Our product has [specific feature] that [specific benefit]",
  },
  {
    phrase: "Does that make sense?",
    reason: "Can make the customer feel inadequate",
    alternative: "How does that align with your needs?",
  },
]

function getEffectivenessBadge(effectiveness: string) {
  switch (effectiveness) {
    case "high":
      return <Badge className="bg-emerald-500 hover:bg-emerald-600">High Impact</Badge>
    case "medium":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Medium Impact</Badge>
    case "low":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Low Impact</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export function ScriptOptimization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Script Optimization</CardTitle>
        <CardDescription>High-performing phrases and language to avoid</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommended">Recommended Phrases</TabsTrigger>
            <TabsTrigger value="avoid">Phrases to Avoid</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="pt-4">
            <Tabs defaultValue="opening">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="opening">Opening</TabsTrigger>
                <TabsTrigger value="value">Value Proposition</TabsTrigger>
                <TabsTrigger value="closing">Closing</TabsTrigger>
              </TabsList>

              <TabsContent value="opening" className="space-y-4 pt-4">
                {openingPhrases.map((item, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium">"{item.phrase}"</p>
                      {getEffectivenessBadge(item.effectiveness)}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Used in {item.callsUsed} calls</span>
                      <span>{item.conversionRate}% conversion rate</span>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="value" className="space-y-4 pt-4">
                {valuePropositions.map((item, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium">"{item.phrase}"</p>
                      {getEffectivenessBadge(item.effectiveness)}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Used in {item.callsUsed} calls</span>
                      <span>{item.conversionRate}% conversion rate</span>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="closing" className="space-y-4 pt-4">
                {closingTechniques.map((item, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium">"{item.phrase}"</p>
                      {getEffectivenessBadge(item.effectiveness)}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Used in {item.callsUsed} calls</span>
                      <span>{item.conversionRate}% conversion rate</span>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="avoid" className="space-y-4 pt-4">
            {avoidPhrases.map((item, index) => (
              <div key={index} className="rounded-lg border p-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">"{item.phrase}"</p>
                    <p className="text-xs text-muted-foreground">{item.reason}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <p className="text-xs font-medium">Try instead: "{item.alternative}"</p>
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


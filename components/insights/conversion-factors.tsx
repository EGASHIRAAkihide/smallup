"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// Mock data
const conversionFactors = [
  {
    factor: "Discovery questions",
    impact: 32,
    trend: "up",
    description: "Asking 5+ targeted questions about customer needs",
  },
  {
    factor: "Demo customization",
    impact: 28,
    trend: "up",
    description: "Tailoring product demos to specific use cases",
  },
  {
    factor: "Social proof",
    impact: 24,
    trend: "up",
    description: "Sharing relevant customer success stories",
  },
  {
    factor: "Feature comparison",
    impact: 18,
    trend: "neutral",
    description: "Directly comparing features with competitors",
  },
  {
    factor: "Technical jargon",
    impact: -15,
    trend: "down",
    description: "Using complex terminology without explanation",
  },
  {
    factor: "Pricing discussion delay",
    impact: -22,
    trend: "down",
    description: "Postponing pricing details until late in the call",
  },
]

export function ConversionFactors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Factors</CardTitle>
        <CardDescription>Elements that impact conversion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversionFactors.map((factor) => (
            <div key={factor.factor} className="flex items-start justify-between gap-2 rounded-lg border p-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">{factor.factor}</h3>
                  {factor.impact > 0 ? (
                    <Badge className="bg-emerald-500 hover:bg-emerald-600">+{factor.impact}%</Badge>
                  ) : (
                    <Badge className="bg-red-500 hover:bg-red-600">{factor.impact}%</Badge>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{factor.description}</p>
              </div>
              {factor.trend === "up" ? (
                <ArrowUpRight className="h-5 w-5 text-emerald-500" />
              ) : factor.trend === "down" ? (
                <ArrowDownRight className="h-5 w-5 text-red-500" />
              ) : null}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


import type { Metadata } from "next"
import { InsightsHeader } from "@/components/insights/insights-header"
import { InsightsSummary } from "@/components/insights/insights-summary"
import { CompetitorAnalysis } from "@/components/insights/competitor-analysis"
import { ObjectionHandling } from "@/components/insights/objection-handling"
import { ScriptOptimization } from "@/components/insights/script-optimization"
import { ConversionFactors } from "@/components/insights/conversion-factors"
import { TrendAnalysis } from "@/components/insights/trend-analysis"

export const metadata: Metadata = {
  title: "Intelligent Insights | Naoma Sales Analysis Tool",
  description: "AI-powered sales insights and recommendations",
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <InsightsHeader />
      <InsightsSummary />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CompetitorAnalysis />
        <ObjectionHandling />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrendAnalysis />
        </div>
        <div>
          <ConversionFactors />
        </div>
      </div>

      <ScriptOptimization />
    </div>
  )
}


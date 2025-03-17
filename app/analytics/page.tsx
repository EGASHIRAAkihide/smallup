import type { Metadata } from "next"
import { AnalyticsHeader } from "@/components/analytics/analytics-header"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"
import { SalesPerformance } from "@/components/analytics/sales-performance"
import { ConversionAnalysis } from "@/components/analytics/conversion-analysis"
import { RegionalBreakdown } from "@/components/analytics/regional-breakdown"
import { CustomReports } from "@/components/analytics/custom-reports"

export const metadata: Metadata = {
  title: "Analytics | Naoma Sales Analysis Tool",
  description: "Advanced analytics and reporting for sales performance",
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <AnalyticsHeader />
      <AnalyticsDashboard />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesPerformance />
        <ConversionAnalysis />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RegionalBreakdown />
        </div>
        <div>
          <CustomReports />
        </div>
      </div>
    </div>
  )
}


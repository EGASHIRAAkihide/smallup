import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import RevenueChart from "@/components/dashboard/revenue-chart"
import SalesMetrics from "@/components/dashboard/sales-metrics"
import LeadAnalytics from "@/components/dashboard/lead-analytics"
import TeamPerformance from "@/components/dashboard/team-performance"
import RecentCalls from "@/components/dashboard/recent-calls"

export const metadata: Metadata = {
  title: "Dashboard | Naoma Sales Analysis Tool",
  description: "AI-powered sales performance analytics dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SalesMetrics />
        <LeadAnalytics />
        <TeamPerformance />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
        <div className="col-span-3">
          <RevenueChart />
        </div>
        <div className="col-span-1">
          <RecentCalls />
        </div>
      </div>
    </div>
  )
}


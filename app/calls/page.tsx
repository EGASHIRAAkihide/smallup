import type { Metadata } from "next"
import { CallsHeader } from "@/components/calls/calls-header"
import { CallsTable } from "@/components/calls/calls-table"
import { CallsFilters } from "@/components/calls/calls-filters"

export const metadata: Metadata = {
  title: "Call Evaluation | Naoma Sales Analysis Tool",
  description: "AI-powered sales call evaluation and analysis",
}

export default function CallsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <CallsHeader />
      <CallsFilters />
      <CallsTable />
    </div>
  )
}


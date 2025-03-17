import { Button } from "@/components/ui/button"
import { Headphones, Plus } from "lucide-react"

export function CallsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <Headphones className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Call Evaluation</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Record New Call
        </Button>
        <Button variant="outline">Import Call</Button>
      </div>
    </div>
  )
}


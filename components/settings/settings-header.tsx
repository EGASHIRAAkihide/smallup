import { Settings } from "lucide-react"

export function SettingsHeader() {
  return (
    <div className="flex items-center gap-2">
      <Settings className="h-5 w-5 text-primary" />
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
    </div>
  )
}


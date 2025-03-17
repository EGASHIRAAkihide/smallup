import type { Metadata } from "next"
import { SettingsHeader } from "@/components/settings/settings-header"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export const metadata: Metadata = {
  title: "Settings | Naoma Sales Analysis Tool",
  description: "Configure application settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <SettingsHeader />
      <SettingsTabs />
    </div>
  )
}


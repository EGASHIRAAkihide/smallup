import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const teamStructure = {
  enterprise: [
    { name: "Tanaka Hiroshi", role: "Senior Sales Rep", tenure: "3 years" },
    { name: "Suzuki Yuki", role: "Sales Rep", tenure: "2 years" },
    { name: "Yamamoto Takeshi", role: "Senior Sales Rep", tenure: "4 years" },
  ],
  midMarket: [
    { name: "Watanabe Kenji", role: "Sales Rep", tenure: "1.5 years" },
    { name: "Nakamura Satoshi", role: "Sales Rep", tenure: "2 years" },
    { name: "Kobayashi Mio", role: "Senior Sales Rep", tenure: "3 years" },
  ],
  smb: [
    { name: "Sato Akira", role: "Junior Sales Rep", tenure: "8 months" },
    { name: "Kato Yuki", role: "Sales Rep", tenure: "1 year" },
    { name: "Ito Haruka", role: "Junior Sales Rep", tenure: "6 months" },
  ],
  management: [
    { name: "Takahashi Keiko", role: "Sales Director", tenure: "5 years" },
    { name: "Ito Masaru", role: "Enterprise Team Lead", tenure: "4 years" },
    { name: "Saito Yumiko", role: "Mid-Market Team Lead", tenure: "3.5 years" },
  ],
}

export function TeamStructure() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Team Structure</CardTitle>
        <CardDescription>Organization and hierarchy</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="enterprise">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            <TabsTrigger value="midMarket">Mid-Market</TabsTrigger>
            <TabsTrigger value="smb">SMB</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>

          {Object.entries(teamStructure).map(([key, members]) => (
            <TabsContent key={key} value={key} className="space-y-4 pt-4">
              {members.map((member, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge variant="outline">{member.tenure}</Badge>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}


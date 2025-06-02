"use client"

import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from the API
const ENGINEERS = [
  { id: "1", name: "John Doe", allocated: 60, available: 40 },
  { id: "2", name: "Jane Smith", allocated: 40, available: 60 },
  { id: "3", name: "Bob Johnson", allocated: 80, available: 20 },
  { id: "4", name: "Alice Williams", allocated: 0, available: 100 },
]

export function CapacityOverview() {
  return (
    <div className="space-y-4">
      {ENGINEERS.map((engineer) => (
        <div key={engineer.id} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>{engineer.name}</span>
            <span className="text-muted-foreground">{engineer.allocated}% allocated</span>
          </div>
          <Progress value={engineer.allocated} className="h-2" />
        </div>
      ))}
    </div>
  )
}

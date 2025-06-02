"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data - in a real app, this would come from the API
const TEAM_ALLOCATION = [
  { name: "Allocated", value: 65, color: "#0ea5e9" },
  { name: "Available", value: 35, color: "#22c55e" },
]

const SKILL_GAPS = ["DevOps", "AWS", "Machine Learning"]

const OVERALLOCATED_ENGINEERS = [
  { id: "1", name: "Bob Johnson", allocation: 120 },
  { id: "2", name: "Sarah Parker", allocation: 110 },
]

export function ManagerDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Team Allocation</CardTitle>
          <CardDescription>Overall team capacity utilization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TEAM_ALLOCATION}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {TEAM_ALLOCATION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Capacity"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Skill Gaps</CardTitle>
          <CardDescription>Missing skills in your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {SKILL_GAPS.length > 0 ? (
              <ul className="space-y-2">
                {SKILL_GAPS.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-destructive"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No skill gaps detected</p>
            )}
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/engineers/new">
                <Users className="mr-2 h-4 w-4" />
                Hire New Engineer
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Overallocated Engineers</CardTitle>
          <CardDescription>Engineers with &gt;100% allocation</CardDescription>
        </CardHeader>
        <CardContent>
          {OVERALLOCATED_ENGINEERS.length > 0 ? (
            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Attention Required</AlertTitle>
                <AlertDescription>{OVERALLOCATED_ENGINEERS.length} engineers are overallocated</AlertDescription>
              </Alert>
              <ul className="space-y-2">
                {OVERALLOCATED_ENGINEERS.map((engineer) => (
                  <li key={engineer.id} className="flex items-center justify-between">
                    <span>{engineer.name}</span>
                    <span className="font-medium text-destructive">{engineer.allocation}%</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-muted-foreground">No overallocated engineers</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

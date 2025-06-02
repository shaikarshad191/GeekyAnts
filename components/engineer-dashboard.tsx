"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

// Mock data - in a real app, this would come from the API
const CURRENT_PROJECTS = [
  {
    id: "1",
    name: "Website Redesign",
    allocation: 60,
    role: "Developer",
    endDate: "2023-07-15",
  },
  {
    id: "2",
    name: "API Integration",
    allocation: 40,
    role: "Tech Lead",
    endDate: "2023-08-22",
  },
]

const UPCOMING_PROJECTS = [
  {
    id: "3",
    name: "Mobile App Development",
    startDate: "2023-08-01",
    estimatedAllocation: 80,
    role: "Senior Developer",
  },
]

export function EngineerDashboard() {
  // Calculate total allocation
  const totalAllocation = CURRENT_PROJECTS.reduce((sum, project) => sum + project.allocation, 0)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Capacity</CardTitle>
          <CardDescription>Current allocation across projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Allocation</p>
                <p className="text-2xl font-bold">{totalAllocation}%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-right">Available</p>
                <p className="text-2xl font-bold text-right">{100 - totalAllocation}%</p>
              </div>
            </div>
            <Progress value={totalAllocation} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Projects</CardTitle>
          <CardDescription>Your active project assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {CURRENT_PROJECTS.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{project.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Role: {project.role}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Ends {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline">{project.allocation}%</Badge>
              </div>
            ))}
            {CURRENT_PROJECTS.length === 0 && (
              <p className="text-muted-foreground text-center py-4">No current projects assigned</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Assignments</CardTitle>
          <CardDescription>Projects you're scheduled to work on</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {UPCOMING_PROJECTS.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{project.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Role: {project.role}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Starts {new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">{project.estimatedAllocation}%</Badge>
              </div>
            ))}
            {UPCOMING_PROJECTS.length === 0 && (
              <p className="text-muted-foreground text-center py-4">No upcoming assignments</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

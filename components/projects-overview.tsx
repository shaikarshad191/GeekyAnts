"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from the API
const PROJECTS = [
  {
    id: "1",
    name: "Website Redesign",
    status: "active",
    progress: 65,
    engineers: 3,
    endDate: "2023-08-15",
  },
  {
    id: "2",
    name: "Mobile App Development",
    status: "planning",
    progress: 10,
    engineers: 0,
    endDate: "2023-10-30",
  },
  {
    id: "3",
    name: "API Integration",
    status: "active",
    progress: 40,
    engineers: 2,
    endDate: "2023-07-22",
  },
]

export function ProjectsOverview() {
  return (
    <div className="space-y-4">
      {PROJECTS.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{project.name}</span>
              <Badge variant={project.status === "active" ? "default" : "outline"}>
                {project.status === "active" ? "Active" : "Planning"}
              </Badge>
            </div>
            <div className="space-y-2">
              <Progress value={project.progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{project.engineers} engineers assigned</span>
                <span>Due {new Date(project.endDate).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

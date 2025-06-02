"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Edit, MoreHorizontal, Trash, Users } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock data - in a real app, this would come from the API
const PROJECTS = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Redesign the company website with a modern look and improved UX",
    status: "active",
    startDate: "2023-06-01",
    endDate: "2023-08-15",
    requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
    teamSize: 3,
    assignedEngineers: 3,
    progress: 65,
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "Develop a cross-platform mobile app for our customers",
    status: "planning",
    startDate: "2023-07-15",
    endDate: "2023-10-30",
    requiredSkills: ["React Native", "TypeScript", "Firebase"],
    teamSize: 4,
    assignedEngineers: 0,
    progress: 10,
  },
  {
    id: "3",
    name: "API Integration",
    description: "Integrate our system with third-party APIs for enhanced functionality",
    status: "active",
    startDate: "2023-05-10",
    endDate: "2023-07-22",
    requiredSkills: ["Node.js", "Express", "MongoDB"],
    teamSize: 2,
    assignedEngineers: 2,
    progress: 40,
  },
  {
    id: "4",
    name: "Database Migration",
    description: "Migrate from SQL to NoSQL database for better scalability",
    status: "completed",
    startDate: "2023-04-01",
    endDate: "2023-06-15",
    requiredSkills: ["MongoDB", "PostgreSQL", "Node.js"],
    teamSize: 3,
    assignedEngineers: 3,
    progress: 100,
  },
]

export function ProjectsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PROJECTS.map((project) => (
        <Card key={project.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge
                    variant={
                      project.status === "active" ? "default" : project.status === "planning" ? "outline" : "secondary"
                    }
                  >
                    {project.status === "active" ? "Active" : project.status === "planning" ? "Planning" : "Completed"}
                  </Badge>
                </div>
                <CardDescription className="mt-1">{project.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <p className="text-sm font-medium">Start Date</p>
                <p className="text-sm text-muted-foreground">{new Date(project.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium">End Date</p>
                <p className="text-sm text-muted-foreground">{new Date(project.endDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Team Size</p>
                <p className="text-sm text-muted-foreground">
                  {project.assignedEngineers}/{project.teamSize} engineers
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Progress</p>
                <p className="text-sm text-muted-foreground">{project.progress}% complete</p>
              </div>
            </div>
            <Progress value={project.progress} className="h-2" />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-1">
              {project.requiredSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            {project.status !== "completed" && (
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link href={`/assignments/new?project=${project.id}`}>
                  <Users className="mr-2 h-4 w-4" />
                  Assign Engineers
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

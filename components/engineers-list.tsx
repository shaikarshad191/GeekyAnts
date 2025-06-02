"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data - in a real app, this would come from the API
const ENGINEERS = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Frontend",
    seniority: "senior",
    skills: ["React", "TypeScript", "JavaScript"],
    maxCapacity: 100,
    allocated: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Backend",
    seniority: "mid",
    skills: ["Node.js", "Python", "MongoDB"],
    maxCapacity: 100,
    allocated: 40,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    department: "Full Stack",
    seniority: "senior",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    maxCapacity: 100,
    allocated: 80,
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    department: "Mobile",
    seniority: "junior",
    skills: ["React Native", "JavaScript", "Firebase"],
    maxCapacity: 50,
    allocated: 0,
  },
]

export function EngineersList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ENGINEERS.map((engineer) => (
        <Card key={engineer.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {engineer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{engineer.name}</CardTitle>
                  <CardDescription>{engineer.email}</CardDescription>
                </div>
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
                <p className="text-sm font-medium">Department</p>
                <p className="text-sm text-muted-foreground">{engineer.department}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Seniority</p>
                <p className="text-sm text-muted-foreground capitalize">{engineer.seniority}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Capacity</p>
                <p className="text-sm text-muted-foreground">{engineer.maxCapacity}%</p>
              </div>
              <div>
                <p className="text-sm font-medium">Available</p>
                <p className="text-sm text-muted-foreground">{engineer.maxCapacity - engineer.allocated}%</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Allocation</span>
                <span className="text-muted-foreground">{engineer.allocated}%</span>
              </div>
              <Progress value={engineer.allocated} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-1">
              {engineer.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

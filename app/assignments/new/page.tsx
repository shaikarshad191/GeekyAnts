"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DatePicker } from "@/components/date-picker"
import { Slider } from "@/components/ui/slider"

// Mock data - in a real app, this would come from the API
const ENGINEERS = [
  { id: "1", name: "John Doe", availableCapacity: 40 },
  { id: "2", name: "Jane Smith", availableCapacity: 60 },
  { id: "3", name: "Bob Johnson", availableCapacity: 20 },
  { id: "4", name: "Alice Williams", availableCapacity: 100 },
]

const PROJECTS = [
  { id: "1", name: "Website Redesign" },
  { id: "2", name: "Mobile App Development" },
  { id: "3", name: "API Integration" },
  { id: "4", name: "Database Migration" },
]

export default function NewAssignmentPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [selectedEngineer, setSelectedEngineer] = useState<string>("")
  const [allocation, setAllocation] = useState<number[]>([50])
  const { toast } = useToast()
  const router = useRouter()

  // Get the selected engineer's available capacity
  const selectedEngineerData = ENGINEERS.find((eng) => eng.id === selectedEngineer)
  const availableCapacity = selectedEngineerData?.availableCapacity || 100

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const assignmentData = {
      engineerId: formData.get("engineer") as string,
      projectId: formData.get("project") as string,
      role: formData.get("role") as string,
      allocationPercentage: allocation[0],
      startDate,
      endDate,
    }

    try {
      // In a real app, we would make an API call to create the assignment
      // await createAssignment(assignmentData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Assignment created",
        description: "The assignment has been created successfully.",
      })
      router.push("/assignments")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create assignment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/assignments">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create New Assignment</h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
            <CardDescription>Assign an engineer to a project with specific allocation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="engineer">Engineer</Label>
                <Select name="engineer" required onValueChange={setSelectedEngineer}>
                  <SelectTrigger id="engineer">
                    <SelectValue placeholder="Select engineer" />
                  </SelectTrigger>
                  <SelectContent>
                    {ENGINEERS.map((engineer) => (
                      <SelectItem key={engineer.id} value={engineer.id}>
                        {engineer.name} ({engineer.availableCapacity}% available)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Project</Label>
                <Select name="project" required>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECTS.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select name="role" required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="tech_lead">Tech Lead</SelectItem>
                    <SelectItem value="architect">Architect</SelectItem>
                    <SelectItem value="qa">QA Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Allocation Percentage</Label>
                <div className="pt-6">
                  <Slider
                    defaultValue={[50]}
                    max={Math.min(availableCapacity, 100)}
                    step={5}
                    value={allocation}
                    onValueChange={setAllocation}
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span className="font-medium text-foreground">{allocation[0]}%</span>
                    <span>{Math.min(availableCapacity, 100)}%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <DatePicker date={startDate} setDate={setStartDate} className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <DatePicker date={endDate} setDate={setEndDate} className="w-full" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" asChild>
              <Link href="/assignments">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Assignment"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

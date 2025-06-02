import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for engineer's assignments
const MY_ASSIGNMENTS = [
  {
    id: "1",
    project: {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website with a modern look and improved UX",
      status: "active",
    },
    role: "Frontend Developer",
    allocation: 60,
    startDate: "2023-06-01",
    endDate: "2023-07-15",
    manager: "John Manager",
    progress: 65,
  },
  {
    id: "2",
    project: {
      id: "3",
      name: "API Integration",
      description: "Integrate our system with third-party APIs for enhanced functionality",
      status: "active",
    },
    role: "Backend Developer",
    allocation: 40,
    startDate: "2023-05-10",
    endDate: "2023-07-22",
    manager: "Sarah Director",
    progress: 40,
  },
]

export default function MyAssignmentsPage() {
  const totalAllocation = MY_ASSIGNMENTS.reduce((sum, assignment) => sum + assignment.allocation, 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Assignments</h1>
          <p className="text-muted-foreground">View your current and upcoming project assignments</p>
        </div>
      </div>

      {/* Capacity Overview */}
      <Card>
        <CardHeader>
          <CardTitle>My Capacity Overview</CardTitle>
          <CardDescription>Your current workload across all projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Allocation</p>
                <p className="text-2xl font-bold">{totalAllocation}%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-right">Available Capacity</p>
                <p className="text-2xl font-bold text-right text-green-600">{100 - totalAllocation}%</p>
              </div>
            </div>
            <Progress value={totalAllocation} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Underutilized</span>
              <span>Optimal</span>
              <span>Overallocated</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Assignments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Current Assignments</h2>
        {MY_ASSIGNMENTS.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {MY_ASSIGNMENTS.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{assignment.project.name}</CardTitle>
                      <CardDescription className="mt-1">{assignment.project.description}</CardDescription>
                    </div>
                    <Badge variant={assignment.project.status === "active" ? "default" : "outline"} className="ml-2">
                      {assignment.project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="font-medium flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Role
                      </p>
                      <p className="text-muted-foreground">{assignment.role}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Allocation</p>
                      <Badge variant="outline">{assignment.allocation}%</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Duration
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {new Date(assignment.startDate).toLocaleDateString()} -{" "}
                        {new Date(assignment.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Manager</p>
                      <p className="text-muted-foreground">{assignment.manager}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Progress</span>
                      <span className="text-muted-foreground">{assignment.progress}%</span>
                    </div>
                    <Progress value={assignment.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {Math.ceil(
                          (new Date(assignment.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
                        )}{" "}
                        days remaining
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Current Assignments</h3>
              <p className="text-muted-foreground text-center">
                You don't have any active project assignments at the moment.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

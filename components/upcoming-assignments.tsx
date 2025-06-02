"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from the API
const UPCOMING_ASSIGNMENTS = [
  {
    id: "1",
    engineer: "John Doe",
    project: "Website Redesign",
    endDate: "2023-07-15",
    availableFrom: "2023-07-16",
    capacity: 60,
  },
  {
    id: "2",
    engineer: "Jane Smith",
    project: "API Integration",
    endDate: "2023-07-22",
    availableFrom: "2023-07-23",
    capacity: 40,
  },
  {
    id: "3",
    engineer: "Bob Johnson",
    project: "Database Migration",
    endDate: "2023-08-05",
    availableFrom: "2023-08-06",
    capacity: 80,
  },
]

export function UpcomingAssignments() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Engineer</TableHead>
            <TableHead>Current Project</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Available From</TableHead>
            <TableHead>Capacity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UPCOMING_ASSIGNMENTS.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.engineer}</TableCell>
              <TableCell>{assignment.project}</TableCell>
              <TableCell>{new Date(assignment.endDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(assignment.availableFrom).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                >
                  {assignment.capacity}%
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

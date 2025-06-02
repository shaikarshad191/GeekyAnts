"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

// Mock data - in a real app, this would come from the API
const ASSIGNMENTS = [
  {
    id: "1",
    engineer: {
      id: "1",
      name: "John Doe",
    },
    project: {
      id: "1",
      name: "Website Redesign",
    },
    role: "Developer",
    allocationPercentage: 60,
    startDate: "2023-06-01",
    endDate: "2023-07-15",
  },
  {
    id: "2",
    engineer: {
      id: "2",
      name: "Jane Smith",
    },
    project: {
      id: "3",
      name: "API Integration",
    },
    role: "Tech Lead",
    allocationPercentage: 40,
    startDate: "2023-05-10",
    endDate: "2023-07-22",
  },
  {
    id: "3",
    engineer: {
      id: "3",
      name: "Bob Johnson",
    },
    project: {
      id: "1",
      name: "Website Redesign",
    },
    role: "Designer",
    allocationPercentage: 30,
    startDate: "2023-06-01",
    endDate: "2023-07-15",
  },
  {
    id: "4",
    engineer: {
      id: "3",
      name: "Bob Johnson",
    },
    project: {
      id: "4",
      name: "Database Migration",
    },
    role: "Architect",
    allocationPercentage: 50,
    startDate: "2023-04-01",
    endDate: "2023-06-15",
  },
  {
    id: "5",
    engineer: {
      id: "1",
      name: "John Doe",
    },
    project: {
      id: "3",
      name: "API Integration",
    },
    role: "Developer",
    allocationPercentage: 40,
    startDate: "2023-05-10",
    endDate: "2023-07-22",
  },
]

export function AssignmentsList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Engineer</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Allocation</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ASSIGNMENTS.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.engineer.name}</TableCell>
              <TableCell>{assignment.project.name}</TableCell>
              <TableCell>{assignment.role}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    assignment.allocationPercentage > 50
                      ? "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                      : "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  }
                >
                  {assignment.allocationPercentage}%
                </Badge>
              </TableCell>
              <TableCell>{new Date(assignment.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(assignment.endDate).toLocaleDateString()}</TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

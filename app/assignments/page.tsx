import { Button } from "@/components/ui/button"
import { AssignmentsList } from "@/components/assignments-list"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { AssignmentFilters } from "@/components/assignment-filters"

export default function AssignmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">Manage engineer assignments to projects</p>
        </div>
        <Button asChild>
          <Link href="/assignments/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Assignment
          </Link>
        </Button>
      </div>

      <AssignmentFilters />
      <AssignmentsList />
    </div>
  )
}

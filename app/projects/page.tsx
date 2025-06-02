import { Button } from "@/components/ui/button"
import { ProjectsList } from "@/components/projects-list"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { ProjectFilters } from "@/components/project-filters"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your projects and their requirements</p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Project
          </Link>
        </Button>
      </div>

      <ProjectFilters />
      <ProjectsList />
    </div>
  )
}

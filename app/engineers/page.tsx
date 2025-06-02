import { Button } from "@/components/ui/button"
import { EngineersList } from "@/components/engineers-list"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { EngineerFilters } from "@/components/engineer-filters"

export default function EngineersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Engineers</h1>
          <p className="text-muted-foreground">Manage your engineering team members and their skills</p>
        </div>
        <Button asChild>
          <Link href="/engineers/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Engineer
          </Link>
        </Button>
      </div>

      <EngineerFilters />
      <EngineersList />
    </div>
  )
}

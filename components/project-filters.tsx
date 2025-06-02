"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MultiSelect } from "@/components/multi-select"

const SKILLS_OPTIONS = [
  { label: "React", value: "react" },
  { label: "Node.js", value: "nodejs" },
  { label: "Python", value: "python" },
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "Go", value: "go" },
  { label: "Ruby", value: "ruby" },
  { label: "PHP", value: "php" },
]

export function ProjectFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">More filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Filter projects by various criteria</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Required Skills</h3>
                <MultiSelect
                  options={SKILLS_OPTIONS}
                  selected={selectedSkills}
                  onChange={setSelectedSkills}
                  placeholder="Select skills"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Team Size</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any size</SelectItem>
                    <SelectItem value="small">Small (1-2)</SelectItem>
                    <SelectItem value="medium">Medium (3-5)</SelectItem>
                    <SelectItem value="large">Large (6+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Timeline</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any timeline</SelectItem>
                    <SelectItem value="current">Current</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Staffing Status</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any staffing status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any staffing status</SelectItem>
                    <SelectItem value="fully">Fully Staffed</SelectItem>
                    <SelectItem value="partially">Partially Staffed</SelectItem>
                    <SelectItem value="unstaffed">Unstaffed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Reset</Button>
              <Button>Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

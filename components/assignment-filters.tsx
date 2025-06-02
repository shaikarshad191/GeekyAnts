"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DatePicker } from "@/components/date-picker"

export function AssignmentFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search assignments..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="1">Website Redesign</SelectItem>
            <SelectItem value="2">Mobile App Development</SelectItem>
            <SelectItem value="3">API Integration</SelectItem>
            <SelectItem value="4">Database Migration</SelectItem>
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
              <SheetDescription>Filter assignments by various criteria</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Engineer</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any engineer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any engineer</SelectItem>
                    <SelectItem value="1">John Doe</SelectItem>
                    <SelectItem value="2">Jane Smith</SelectItem>
                    <SelectItem value="3">Bob Johnson</SelectItem>
                    <SelectItem value="4">Alice Williams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Role</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any role</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="tech_lead">Tech Lead</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="architect">Architect</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Allocation</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any allocation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any allocation</SelectItem>
                    <SelectItem value="low">Low (≤25%)</SelectItem>
                    <SelectItem value="medium">Medium (26-50%)</SelectItem>
                    <SelectItem value="high">High (51-75%)</SelectItem>
                    <SelectItem value="very_high">Very High (&gt;75%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Start Date</h3>
                <DatePicker date={startDate} setDate={setStartDate} className="w-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">End Date</h3>
                <DatePicker date={endDate} setDate={setEndDate} className="w-full" />
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

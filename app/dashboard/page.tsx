import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CapacityOverview } from "@/components/capacity-overview"
import { ProjectsOverview } from "@/components/projects-overview"
import { UpcomingAssignments } from "@/components/upcoming-assignments"
import { SkillsDistribution } from "@/components/skills-distribution"
import { ManagerDashboard } from "@/components/manager-dashboard"
import { EngineerDashboard } from "@/components/engineer-dashboard"
import { Suspense } from "react"
import { DashboardSkeleton } from "@/components/dashboard-skeleton"
import { RoleBasedView } from "@/components/role-based-view"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your engineering resources.</p>
      </div>

      <RoleBasedView
        managerView={
          <Suspense fallback={<DashboardSkeleton />}>
            <ManagerDashboard />
          </Suspense>
        }
        engineerView={
          <Suspense fallback={<DashboardSkeleton />}>
            <EngineerDashboard />
          </Suspense>
        }
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Team Capacity</CardTitle>
            <CardDescription>Current allocation across engineers</CardDescription>
          </CardHeader>
          <CardContent>
            <CapacityOverview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Overview of active projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectsOverview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Skills Distribution</CardTitle>
            <CardDescription>Team skills breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <SkillsDistribution />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Assignments</CardTitle>
          <CardDescription>Engineers becoming available in the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <UpcomingAssignments />
        </CardContent>
      </Card>
    </div>
  )
}

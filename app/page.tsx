import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Engineering Resource Management System</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Track who's working on what, their capacity allocation, and when they'll be available for new projects.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/login">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Engineer Management</CardTitle>
              <CardDescription>Track skills, capacity, and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Manage engineer profiles with skills, seniority levels, and employment types. Monitor current status and
                available capacity.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link href="/engineers">
                  View Engineers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Project Management</CardTitle>
              <CardDescription>Organize and track projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Create and manage projects with detailed information, required skills, and status tracking from planning
                to completion.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Assignment System</CardTitle>
              <CardDescription>Allocate resources efficiently</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Assign engineers to projects with specific allocation percentages. Track workloads and plan for future
                availability.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link href="/assignments">
                  View Assignments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

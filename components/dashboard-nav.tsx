"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, LayoutDashboard, Settings, Users, UserCheck } from "lucide-react"
import { useAuth } from "@/lib/auth-provider"

export function DashboardNav() {
  const pathname = usePathname()
  const { isManager, isEngineer } = useAuth()

  // Manager navigation items
  const managerNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Engineers",
      href: "/engineers",
      icon: Users,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: Calendar,
    },
    {
      title: "Assignments",
      href: "/assignments",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  // Engineer navigation items
  const engineerNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Assignments",
      href: "/my-assignments",
      icon: UserCheck,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: Calendar,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  const navItems = isManager() ? managerNavItems : engineerNavItems

  return (
    <nav className="grid items-start gap-2 px-2 py-4 text-sm">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn(
            "flex w-full items-center justify-start gap-2",
            pathname === item.href ? "bg-secondary font-medium text-secondary-foreground" : "font-normal",
          )}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

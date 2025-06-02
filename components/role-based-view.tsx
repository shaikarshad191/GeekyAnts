"use client"

import { useAuth } from "@/lib/auth-provider"
import type React from "react"

interface RoleBasedViewProps {
  managerView: React.ReactNode
  engineerView: React.ReactNode
}

export function RoleBasedView({ managerView, engineerView }: RoleBasedViewProps) {
  const { isManager } = useAuth()

  return <>{isManager() ? managerView : engineerView}</>
}

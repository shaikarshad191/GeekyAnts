import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calculate available capacity for an engineer
export function getAvailableCapacity(engineerId: string, engineers: any[], assignments: any[]) {
  const engineer = engineers.find((e) => e.id === engineerId)
  if (!engineer) return 0

  const activeAssignments = assignments.filter((a) => a.engineerId === engineerId && new Date(a.endDate) >= new Date())

  const totalAllocated = activeAssignments.reduce((sum, a) => sum + a.allocationPercentage, 0)
  return engineer.maxCapacity - totalAllocated
}

// Find engineers with required skills for a project
export function findSuitableEngineers(project: any, engineers: any[]) {
  return engineers.filter((engineer) => project.requiredSkills.some((skill: string) => engineer.skills.includes(skill)))
}

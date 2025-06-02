/**
 * Mock API functions using the seed data
 * In a real application, these would be actual API calls to your backend
 */

import {
  SEED_DATA,
  calculateEngineerCapacity,
  getProjectProgress,
  getSkillsDistribution,
  type Engineer,
  type Project,
  type Assignment,
  type Manager,
} from "./seed-data"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Engineers API
export const engineersApi = {
  async getAll(): Promise<Engineer[]> {
    await delay(500)
    return SEED_DATA.engineers
  },

  async getById(id: string): Promise<Engineer | null> {
    await delay(300)
    return SEED_DATA.engineers.find((e) => e.id === id) || null
  },

  async getByDepartment(department: string): Promise<Engineer[]> {
    await delay(400)
    return SEED_DATA.engineers.filter((e) => e.department === department)
  },

  async getAvailable(minCapacity = 1): Promise<Engineer[]> {
    await delay(600)
    return SEED_DATA.engineers.filter((engineer) => {
      const capacity = calculateEngineerCapacity(engineer.id)
      return capacity.available >= minCapacity
    })
  },

  async create(engineer: Omit<Engineer, "id">): Promise<Engineer> {
    await delay(800)
    const newEngineer: Engineer = {
      ...engineer,
      id: `eng_${Date.now()}`,
    }
    // In real app: save to database
    return newEngineer
  },

  async update(id: string, updates: Partial<Engineer>): Promise<Engineer | null> {
    await delay(600)
    const engineer = SEED_DATA.engineers.find((e) => e.id === id)
    if (!engineer) return null

    const updatedEngineer = { ...engineer, ...updates }
    // In real app: update in database
    return updatedEngineer
  },

  async delete(id: string): Promise<boolean> {
    await delay(500)
    // In real app: delete from database
    return true
  },
}

// Projects API
export const projectsApi = {
  async getAll(): Promise<Project[]> {
    await delay(500)
    return SEED_DATA.projects
  },

  async getById(id: string): Promise<Project | null> {
    await delay(300)
    return SEED_DATA.projects.find((p) => p.id === id) || null
  },

  async getByStatus(status: Project["status"]): Promise<Project[]> {
    await delay(400)
    return SEED_DATA.projects.filter((p) => p.status === status)
  },

  async getByManager(managerId: string): Promise<Project[]> {
    await delay(400)
    return SEED_DATA.projects.filter((p) => p.managerId === managerId)
  },

  async create(project: Omit<Project, "id">): Promise<Project> {
    await delay(800)
    const newProject: Project = {
      ...project,
      id: `proj_${Date.now()}`,
    }
    // In real app: save to database
    return newProject
  },

  async update(id: string, updates: Partial<Project>): Promise<Project | null> {
    await delay(600)
    const project = SEED_DATA.projects.find((p) => p.id === id)
    if (!project) return null

    const updatedProject = { ...project, ...updates }
    // In real app: update in database
    return updatedProject
  },

  async delete(id: string): Promise<boolean> {
    await delay(500)
    // In real app: delete from database
    return true
  },
}

// Assignments API
export const assignmentsApi = {
  async getAll(): Promise<Assignment[]> {
    await delay(500)
    return SEED_DATA.assignments
  },

  async getById(id: string): Promise<Assignment | null> {
    await delay(300)
    return SEED_DATA.assignments.find((a) => a.id === id) || null
  },

  async getByEngineer(engineerId: string): Promise<Assignment[]> {
    await delay(400)
    return SEED_DATA.assignments.filter((a) => a.engineerId === engineerId)
  },

  async getByProject(projectId: string): Promise<Assignment[]> {
    await delay(400)
    return SEED_DATA.assignments.filter((a) => a.projectId === projectId)
  },

  async getActive(): Promise<Assignment[]> {
    await delay(500)
    return SEED_DATA.assignments.filter((a) => a.status === "active")
  },

  async create(assignment: Omit<Assignment, "id">): Promise<Assignment> {
    await delay(800)
    const newAssignment: Assignment = {
      ...assignment,
      id: `assign_${Date.now()}`,
    }
    // In real app: save to database
    return newAssignment
  },

  async update(id: string, updates: Partial<Assignment>): Promise<Assignment | null> {
    await delay(600)
    const assignment = SEED_DATA.assignments.find((a) => a.id === id)
    if (!assignment) return null

    const updatedAssignment = { ...assignment, ...updates }
    // In real app: update in database
    return updatedAssignment
  },

  async delete(id: string): Promise<boolean> {
    await delay(500)
    // In real app: delete from database
    return true
  },
}

// Analytics API
export const analyticsApi = {
  async getTeamCapacity(): Promise<{ allocated: number; available: number }> {
    await delay(600)

    const totalCapacity = SEED_DATA.engineers.reduce((sum, eng) => sum + eng.maxCapacity, 0)
    const totalAllocated = SEED_DATA.engineers.reduce((sum, eng) => {
      const capacity = calculateEngineerCapacity(eng.id)
      return sum + capacity.allocated
    }, 0)

    return {
      allocated: Math.round((totalAllocated / totalCapacity) * 100),
      available: Math.round(((totalCapacity - totalAllocated) / totalCapacity) * 100),
    }
  },

  async getSkillsDistribution() {
    await delay(500)
    return getSkillsDistribution()
  },

  async getProjectProgress(projectId: string): Promise<number> {
    await delay(300)
    return getProjectProgress(projectId)
  },

  async getOverallocatedEngineers(): Promise<Array<{ engineer: Engineer; allocation: number }>> {
    await delay(700)

    return SEED_DATA.engineers
      .map((engineer) => {
        const capacity = calculateEngineerCapacity(engineer.id)
        return {
          engineer,
          allocation: capacity.allocated,
        }
      })
      .filter((item) => item.allocation > item.engineer.maxCapacity)
  },

  async getUpcomingAvailability(): Promise<Array<{ engineer: Engineer; availableDate: string; capacity: number }>> {
    await delay(800)

    // Find engineers with assignments ending soon
    const upcomingAvailability = SEED_DATA.engineers.map((engineer) => {
      const activeAssignments = SEED_DATA.assignments.filter(
        (a) => a.engineerId === engineer.id && a.status === "active",
      )

      if (activeAssignments.length === 0) {
        return {
          engineer,
          availableDate: new Date().toISOString(),
          capacity: engineer.maxCapacity,
        }
      }

      // Find the earliest end date
      const earliestEndDate = activeAssignments
        .map((a) => new Date(a.endDate))
        .sort((a, b) => a.getTime() - b.getTime())[0]

      return {
        engineer,
        availableDate: earliestEndDate.toISOString(),
        capacity: engineer.maxCapacity,
      }
    })

    return upcomingAvailability
      .filter((item) => new Date(item.availableDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)) // Next 30 days
      .sort((a, b) => new Date(a.availableDate).getTime() - new Date(b.availableDate).getTime())
  },
}

// Managers API
export const managersApi = {
  async getAll(): Promise<Manager[]> {
    await delay(400)
    return SEED_DATA.managers
  },

  async getById(id: string): Promise<Manager | null> {
    await delay(300)
    return SEED_DATA.managers.find((m) => m.id === id) || null
  },
}

// Combined dashboard data
export const dashboardApi = {
  async getManagerDashboard() {
    await delay(1000)

    const [teamCapacity, skillsDistribution, overallocatedEngineers] = await Promise.all([
      analyticsApi.getTeamCapacity(),
      analyticsApi.getSkillsDistribution(),
      analyticsApi.getOverallocatedEngineers(),
    ])

    return {
      teamCapacity,
      skillsDistribution,
      overallocatedEngineers,
      totalEngineers: SEED_DATA.engineers.length,
      activeProjects: SEED_DATA.projects.filter((p) => p.status === "active").length,
      totalProjects: SEED_DATA.projects.length,
    }
  },

  async getEngineerDashboard(engineerId: string) {
    await delay(800)

    const engineer = await engineersApi.getById(engineerId)
    if (!engineer) throw new Error("Engineer not found")

    const assignments = await assignmentsApi.getByEngineer(engineerId)
    const capacity = calculateEngineerCapacity(engineerId)

    return {
      engineer,
      assignments,
      capacity,
      currentProjects: assignments.filter((a) => a.status === "active"),
      upcomingProjects: assignments.filter((a) => a.status === "upcoming"),
    }
  },
}

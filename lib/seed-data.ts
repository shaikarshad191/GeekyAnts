// Database seed script for Engineering Resource Management System

export interface Engineer {
  id: string
  name: string
  email: string
  role: "engineer"
  department: string
  seniority: "junior" | "mid" | "senior"
  skills: string[]
  maxCapacity: number // 100 for full-time, 50 for part-time
  employmentType: "fullTime" | "partTime"
  joinDate: string
  avatar?: string
}

export interface Project {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  requiredSkills: string[]
  teamSize: number
  status: "planning" | "active" | "completed"
  managerId: string
  priority: "low" | "medium" | "high"
  budget?: number
}

export interface Assignment {
  id: string
  engineerId: string
  projectId: string
  allocationPercentage: number // 0-100
  startDate: string
  endDate: string
  role: string // 'Developer', 'Tech Lead', etc.
  status: "active" | "completed" | "upcoming"
}

export interface Manager {
  id: string
  name: string
  email: string
  role: "manager"
  department: string
  teamSize: number
}

// Seed Data
export const SEED_MANAGERS: Manager[] = [
  {
    id: "mgr_1",
    name: "John Manager",
    email: "john.manager@company.com",
    role: "manager",
    department: "Engineering",
    teamSize: 12,
  },
  {
    id: "mgr_2",
    name: "Sarah Director",
    email: "sarah.director@company.com",
    role: "manager",
    department: "Product Engineering",
    teamSize: 8,
  },
  {
    id: "mgr_3",
    name: "Mike Lead",
    email: "mike.lead@company.com",
    role: "manager",
    department: "Platform Engineering",
    teamSize: 6,
  },
]

export const SEED_ENGINEERS: Engineer[] = [
  {
    id: "eng_1",
    name: "Alice Johnson",
    email: "alice.johnson@company.com",
    role: "engineer",
    department: "Frontend",
    seniority: "senior",
    skills: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Next.js", "Tailwind CSS"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2021-03-15",
  },
  {
    id: "eng_2",
    name: "Bob Smith",
    email: "bob.smith@company.com",
    role: "engineer",
    department: "Backend",
    seniority: "senior",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI", "Docker"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2020-08-22",
  },
  {
    id: "eng_3",
    name: "Carol Davis",
    email: "carol.davis@company.com",
    role: "engineer",
    department: "Full Stack",
    seniority: "mid",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "GraphQL", "AWS"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2022-01-10",
  },
  {
    id: "eng_4",
    name: "David Wilson",
    email: "david.wilson@company.com",
    role: "engineer",
    department: "Mobile",
    seniority: "mid",
    skills: ["React Native", "JavaScript", "TypeScript", "Firebase", "iOS", "Android"],
    maxCapacity: 50,
    employmentType: "partTime",
    joinDate: "2022-06-01",
  },
  {
    id: "eng_5",
    name: "Emma Brown",
    email: "emma.brown@company.com",
    role: "engineer",
    department: "DevOps",
    seniority: "senior",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Python", "Bash"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2019-11-05",
  },
  {
    id: "eng_6",
    name: "Frank Miller",
    email: "frank.miller@company.com",
    role: "engineer",
    department: "Backend",
    seniority: "junior",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Git"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2023-02-14",
  },
  {
    id: "eng_7",
    name: "Grace Lee",
    email: "grace.lee@company.com",
    role: "engineer",
    department: "Frontend",
    seniority: "mid",
    skills: ["Vue.js", "JavaScript", "TypeScript", "Sass", "Webpack", "Jest"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2021-09-30",
  },
  {
    id: "eng_8",
    name: "Henry Taylor",
    email: "henry.taylor@company.com",
    role: "engineer",
    department: "Data",
    seniority: "senior",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Machine Learning", "TensorFlow", "Apache Spark"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2020-04-18",
  },
  {
    id: "eng_9",
    name: "Ivy Chen",
    email: "ivy.chen@company.com",
    role: "engineer",
    department: "QA",
    seniority: "mid",
    skills: ["Selenium", "Jest", "Cypress", "Python", "JavaScript", "API Testing"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2022-03-07",
  },
  {
    id: "eng_10",
    name: "Jack Anderson",
    email: "jack.anderson@company.com",
    role: "engineer",
    department: "Security",
    seniority: "senior",
    skills: ["Cybersecurity", "Penetration Testing", "Python", "Network Security", "OWASP"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2021-07-12",
  },
  {
    id: "eng_11",
    name: "Kelly White",
    email: "kelly.white@company.com",
    role: "engineer",
    department: "Full Stack",
    seniority: "junior",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2023-05-20",
  },
  {
    id: "eng_12",
    name: "Liam Garcia",
    email: "liam.garcia@company.com",
    role: "engineer",
    department: "Mobile",
    seniority: "senior",
    skills: ["Flutter", "Dart", "React Native", "iOS", "Android", "Firebase", "GraphQL"],
    maxCapacity: 100,
    employmentType: "fullTime",
    joinDate: "2020-12-03",
  },
]

export const SEED_PROJECTS: Project[] = [
  {
    id: "proj_1",
    name: "E-commerce Platform Redesign",
    description: "Complete redesign of the company's e-commerce platform with modern UI/UX and improved performance",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    requiredSkills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    teamSize: 5,
    status: "active",
    managerId: "mgr_1",
    priority: "high",
    budget: 250000,
  },
  {
    id: "proj_2",
    name: "Mobile App Development",
    description: "Develop a cross-platform mobile application for customer engagement and service delivery",
    startDate: "2024-02-01",
    endDate: "2024-08-15",
    requiredSkills: ["React Native", "TypeScript", "Firebase", "GraphQL"],
    teamSize: 3,
    status: "active",
    managerId: "mgr_2",
    priority: "high",
    budget: 180000,
  },
  {
    id: "proj_3",
    name: "API Gateway Implementation",
    description: "Implement a centralized API gateway for microservices architecture",
    startDate: "2024-01-08",
    endDate: "2024-04-30",
    requiredSkills: ["Node.js", "Docker", "Kubernetes", "AWS", "GraphQL"],
    teamSize: 4,
    status: "active",
    managerId: "mgr_3",
    priority: "medium",
    budget: 120000,
  },
  {
    id: "proj_4",
    name: "Data Analytics Dashboard",
    description: "Build a comprehensive analytics dashboard for business intelligence and reporting",
    startDate: "2024-03-01",
    endDate: "2024-07-31",
    requiredSkills: ["Python", "React", "SQL", "Machine Learning", "AWS"],
    teamSize: 3,
    status: "planning",
    managerId: "mgr_1",
    priority: "medium",
    budget: 150000,
  },
  {
    id: "proj_5",
    name: "Security Audit & Compliance",
    description: "Comprehensive security audit and implementation of compliance measures",
    startDate: "2024-02-15",
    endDate: "2024-05-15",
    requiredSkills: ["Cybersecurity", "Penetration Testing", "Python", "Network Security"],
    teamSize: 2,
    status: "active",
    managerId: "mgr_2",
    priority: "high",
    budget: 80000,
  },
  {
    id: "proj_6",
    name: "Legacy System Migration",
    description: "Migrate legacy systems to modern cloud-based infrastructure",
    startDate: "2023-11-01",
    endDate: "2024-02-28",
    requiredSkills: ["Python", "AWS", "Docker", "PostgreSQL", "Node.js"],
    teamSize: 4,
    status: "completed",
    managerId: "mgr_3",
    priority: "medium",
    budget: 200000,
  },
  {
    id: "proj_7",
    name: "Automated Testing Framework",
    description: "Develop and implement automated testing framework across all applications",
    startDate: "2024-01-22",
    endDate: "2024-05-30",
    requiredSkills: ["Selenium", "Jest", "Cypress", "Python", "JavaScript"],
    teamSize: 2,
    status: "active",
    managerId: "mgr_1",
    priority: "medium",
    budget: 90000,
  },
  {
    id: "proj_8",
    name: "Customer Portal Enhancement",
    description: "Enhance the existing customer portal with new features and improved user experience",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    requiredSkills: ["Vue.js", "JavaScript", "Node.js", "PostgreSQL"],
    teamSize: 3,
    status: "planning",
    managerId: "mgr_2",
    priority: "low",
    budget: 110000,
  },
]

export const SEED_ASSIGNMENTS: Assignment[] = [
  // E-commerce Platform Redesign (proj_1)
  {
    id: "assign_1",
    engineerId: "eng_1", // Alice Johnson (Frontend Senior)
    projectId: "proj_1",
    allocationPercentage: 80,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    role: "Tech Lead",
    status: "active",
  },
  {
    id: "assign_2",
    engineerId: "eng_3", // Carol Davis (Full Stack Mid)
    projectId: "proj_1",
    allocationPercentage: 60,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    role: "Full Stack Developer",
    status: "active",
  },
  {
    id: "assign_3",
    engineerId: "eng_2", // Bob Smith (Backend Senior)
    projectId: "proj_1",
    allocationPercentage: 70,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    role: "Backend Lead",
    status: "active",
  },
  {
    id: "assign_4",
    engineerId: "eng_11", // Kelly White (Full Stack Junior)
    projectId: "proj_1",
    allocationPercentage: 90,
    startDate: "2024-02-01",
    endDate: "2024-06-30",
    role: "Junior Developer",
    status: "active",
  },
  {
    id: "assign_5",
    engineerId: "eng_5", // Emma Brown (DevOps Senior)
    projectId: "proj_1",
    allocationPercentage: 30,
    startDate: "2024-01-15",
    endDate: "2024-03-30",
    role: "DevOps Engineer",
    status: "active",
  },

  // Mobile App Development (proj_2)
  {
    id: "assign_6",
    engineerId: "eng_12", // Liam Garcia (Mobile Senior)
    projectId: "proj_2",
    allocationPercentage: 90,
    startDate: "2024-02-01",
    endDate: "2024-08-15",
    role: "Mobile Lead",
    status: "active",
  },
  {
    id: "assign_7",
    engineerId: "eng_4", // David Wilson (Mobile Mid, Part-time)
    projectId: "proj_2",
    allocationPercentage: 50, // Full capacity for part-time
    startDate: "2024-02-01",
    endDate: "2024-08-15",
    role: "Mobile Developer",
    status: "active",
  },
  {
    id: "assign_8",
    engineerId: "eng_3", // Carol Davis (Full Stack Mid)
    projectId: "proj_2",
    allocationPercentage: 40,
    startDate: "2024-02-15",
    endDate: "2024-08-15",
    role: "Backend Developer",
    status: "active",
  },

  // API Gateway Implementation (proj_3)
  {
    id: "assign_9",
    engineerId: "eng_2", // Bob Smith (Backend Senior)
    projectId: "proj_3",
    allocationPercentage: 30,
    startDate: "2024-01-08",
    endDate: "2024-04-30",
    role: "API Architect",
    status: "active",
  },
  {
    id: "assign_10",
    engineerId: "eng_5", // Emma Brown (DevOps Senior)
    projectId: "proj_3",
    allocationPercentage: 70,
    startDate: "2024-01-08",
    endDate: "2024-04-30",
    role: "DevOps Lead",
    status: "active",
  },
  {
    id: "assign_11",
    engineerId: "eng_6", // Frank Miller (Backend Junior)
    projectId: "proj_3",
    allocationPercentage: 80,
    startDate: "2024-01-15",
    endDate: "2024-04-30",
    role: "Backend Developer",
    status: "active",
  },

  // Security Audit & Compliance (proj_5)
  {
    id: "assign_12",
    engineerId: "eng_10", // Jack Anderson (Security Senior)
    projectId: "proj_5",
    allocationPercentage: 100,
    startDate: "2024-02-15",
    endDate: "2024-05-15",
    role: "Security Lead",
    status: "active",
  },
  {
    id: "assign_13",
    engineerId: "eng_6", // Frank Miller (Backend Junior)
    projectId: "proj_5",
    allocationPercentage: 20,
    startDate: "2024-03-01",
    endDate: "2024-05-15",
    role: "Security Analyst",
    status: "active",
  },

  // Automated Testing Framework (proj_7)
  {
    id: "assign_14",
    engineerId: "eng_9", // Ivy Chen (QA Mid)
    projectId: "proj_7",
    allocationPercentage: 100,
    startDate: "2024-01-22",
    endDate: "2024-05-30",
    role: "QA Lead",
    status: "active",
  },
  {
    id: "assign_15",
    engineerId: "eng_7", // Grace Lee (Frontend Mid)
    projectId: "proj_7",
    allocationPercentage: 30,
    startDate: "2024-02-01",
    endDate: "2024-04-30",
    role: "Frontend Test Developer",
    status: "active",
  },

  // Legacy System Migration (proj_6) - Completed
  {
    id: "assign_16",
    engineerId: "eng_8", // Henry Taylor (Data Senior)
    projectId: "proj_6",
    allocationPercentage: 80,
    startDate: "2023-11-01",
    endDate: "2024-02-28",
    role: "Data Migration Lead",
    status: "completed",
  },
  {
    id: "assign_17",
    engineerId: "eng_5", // Emma Brown (DevOps Senior)
    projectId: "proj_6",
    allocationPercentage: 50,
    startDate: "2023-11-01",
    endDate: "2024-01-31",
    role: "Infrastructure Engineer",
    status: "completed",
  },

  // Future assignments for planning projects
  {
    id: "assign_18",
    engineerId: "eng_8", // Henry Taylor (Data Senior)
    projectId: "proj_4", // Data Analytics Dashboard
    allocationPercentage: 90,
    startDate: "2024-03-01",
    endDate: "2024-07-31",
    role: "Data Engineer",
    status: "upcoming",
  },
  {
    id: "assign_19",
    engineerId: "eng_1", // Alice Johnson (Frontend Senior)
    projectId: "proj_4", // Data Analytics Dashboard
    allocationPercentage: 20,
    startDate: "2024-07-01",
    endDate: "2024-07-31",
    role: "Frontend Developer",
    status: "upcoming",
  },
]

// Utility functions for seeding
export function calculateEngineerCapacity(engineerId: string): {
  allocated: number
  available: number
  assignments: Assignment[]
} {
  const engineer = SEED_ENGINEERS.find((e) => e.id === engineerId)
  if (!engineer) return { allocated: 0, available: 0, assignments: [] }

  const activeAssignments = SEED_ASSIGNMENTS.filter((a) => a.engineerId === engineerId && a.status === "active")

  const totalAllocated = activeAssignments.reduce((sum, a) => sum + a.allocationPercentage, 0)

  return {
    allocated: totalAllocated,
    available: engineer.maxCapacity - totalAllocated,
    assignments: activeAssignments,
  }
}

export function getProjectProgress(projectId: string): number {
  const project = SEED_PROJECTS.find((p) => p.id === projectId)
  if (!project) return 0

  const startDate = new Date(project.startDate)
  const endDate = new Date(project.endDate)
  const currentDate = new Date()

  if (project.status === "completed") return 100
  if (project.status === "planning") return 0
  if (currentDate < startDate) return 0
  if (currentDate > endDate) return 100

  const totalDuration = endDate.getTime() - startDate.getTime()
  const elapsed = currentDate.getTime() - startDate.getTime()

  return Math.min(Math.max(Math.round((elapsed / totalDuration) * 100), 0), 100)
}

export function getSkillsDistribution(): { name: string; value: number; color: string }[] {
  const skillCounts: { [key: string]: number } = {}

  SEED_ENGINEERS.forEach((engineer) => {
    engineer.skills.forEach((skill) => {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1
    })
  })

  const colors = ["#0ea5e9", "#22c55e", "#eab308", "#3b82f6", "#ef4444", "#8b5cf6", "#f97316", "#06b6d4"]

  return Object.entries(skillCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([skill, count], index) => ({
      name: skill,
      value: count,
      color: colors[index % colors.length],
    }))
}

// Database seeding function
export async function seedDatabase() {
  console.log("🌱 Starting database seed...")

  try {
    // In a real application, you would insert this data into your database
    // For example, with MongoDB:

    // await db.collection('managers').insertMany(SEED_MANAGERS)
    // await db.collection('engineers').insertMany(SEED_ENGINEERS)
    // await db.collection('projects').insertMany(SEED_PROJECTS)
    // await db.collection('assignments').insertMany(SEED_ASSIGNMENTS)

    console.log("✅ Managers seeded:", SEED_MANAGERS.length)
    console.log("✅ Engineers seeded:", SEED_ENGINEERS.length)
    console.log("✅ Projects seeded:", SEED_PROJECTS.length)
    console.log("✅ Assignments seeded:", SEED_ASSIGNMENTS.length)

    // Validate data integrity
    console.log("\n📊 Data Summary:")
    console.log(`Total Engineers: ${SEED_ENGINEERS.length}`)
    console.log(`Full-time Engineers: ${SEED_ENGINEERS.filter((e) => e.employmentType === "fullTime").length}`)
    console.log(`Part-time Engineers: ${SEED_ENGINEERS.filter((e) => e.employmentType === "partTime").length}`)
    console.log(`Active Projects: ${SEED_PROJECTS.filter((p) => p.status === "active").length}`)
    console.log(`Planning Projects: ${SEED_PROJECTS.filter((p) => p.status === "planning").length}`)
    console.log(`Completed Projects: ${SEED_PROJECTS.filter((p) => p.status === "completed").length}`)
    console.log(`Active Assignments: ${SEED_ASSIGNMENTS.filter((a) => a.status === "active").length}`)

    // Check for overallocated engineers
    const overallocated = SEED_ENGINEERS.map((engineer) => {
      const capacity = calculateEngineerCapacity(engineer.id)
      return {
        name: engineer.name,
        allocated: capacity.allocated,
        maxCapacity: engineer.maxCapacity,
        overallocated: capacity.allocated > engineer.maxCapacity,
      }
    }).filter((e) => e.overallocated)

    if (overallocated.length > 0) {
      console.log("\n⚠️  Overallocated Engineers:")
      overallocated.forEach((eng) => {
        console.log(`  ${eng.name}: ${eng.allocated}% (max: ${eng.maxCapacity}%)`)
      })
    } else {
      console.log("\n✅ No overallocated engineers found")
    }

    console.log("\n🎉 Database seeding completed successfully!")

    return {
      managers: SEED_MANAGERS,
      engineers: SEED_ENGINEERS,
      projects: SEED_PROJECTS,
      assignments: SEED_ASSIGNMENTS,
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    throw error
  }
}

// Export all data for use in components
export const SEED_DATA = {
  managers: SEED_MANAGERS,
  engineers: SEED_ENGINEERS,
  projects: SEED_PROJECTS,
  assignments: SEED_ASSIGNMENTS,
}

"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Mock data - in a real app, this would come from the API
const SKILLS_DATA = [
  { name: "React", value: 8, color: "#0ea5e9" },
  { name: "Node.js", value: 6, color: "#22c55e" },
  { name: "Python", value: 4, color: "#eab308" },
  { name: "TypeScript", value: 7, color: "#3b82f6" },
  { name: "Java", value: 3, color: "#ef4444" },
]

export function SkillsDistribution() {
  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={SKILLS_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {SKILLS_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} engineers`, "Count"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

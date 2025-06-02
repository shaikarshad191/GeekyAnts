"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "manager" | "engineer"
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string, role: "manager" | "engineer") => Promise<void>
  logout: () => void
  isLoading: boolean
  isManager: () => boolean
  isEngineer: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: "manager" | "engineer") => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data based on role and email
      const mockUser: User = {
        id: role === "manager" ? "mgr_1" : "eng_1",
        name: role === "manager" ? "John Manager" : "Jane Engineer",
        email,
        role,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const isManager = () => user?.role === "manager"
  const isEngineer = () => user?.role === "engineer"

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, isManager, isEngineer }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

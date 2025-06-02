"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-provider"
import Link from "next/link"
import { UserCheck, Users } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"manager" | "engineer" | "">("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!role) {
      toast({
        title: "Role required",
        description: "Please select your role to continue.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      await login(email, password, role as "manager" | "engineer")
      toast({
        title: "Login successful",
        description: `Welcome ${role === "manager" ? "Manager" : "Engineer"}!`,
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickLogin = async (demoRole: "manager" | "engineer") => {
    setIsLoading(true)
    try {
      const demoEmail = demoRole === "manager" ? "manager@company.com" : "engineer@company.com"
      await login(demoEmail, "demo123", demoRole)
      toast({
        title: "Demo login successful",
        description: `Logged in as ${demoRole === "manager" ? "Manager" : "Engineer"}`,
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Demo login failed. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your credentials and select your role to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={(value: "manager" | "engineer") => setRole(value)} required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Manager</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="engineer">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4" />
                        <span>Engineer</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Register
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Demo Login Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Demo Access</CardTitle>
            <CardDescription>Try the application with demo accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={() => handleQuickLogin("manager")}
              variant="outline"
              className="w-full justify-start"
              disabled={isLoading}
            >
              <Users className="mr-2 h-4 w-4" />
              Login as Manager
              <span className="ml-auto text-xs text-muted-foreground">Full access</span>
            </Button>
            <Button
              onClick={() => handleQuickLogin("engineer")}
              variant="outline"
              className="w-full justify-start"
              disabled={isLoading}
            >
              <UserCheck className="mr-2 h-4 w-4" />
              Login as Engineer
              <span className="ml-auto text-xs text-muted-foreground">View assignments</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

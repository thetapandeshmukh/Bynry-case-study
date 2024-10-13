"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useAuth } from "@/app/provider"
import { useState } from "react"
import Link from "next/link"

export default function Signin() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("user") // State to track the current role

  const handleLogin = async () => {
    try {
      const success = await login(email, password, role) // Use the role state
      if (!success) {
        alert("Login failed. Please check your credentials.")
      }
    } catch (error) {
      // Handle specific error cases
      if (error instanceof Error) { // Check if error is an instance of Error
        if (error.message === "User does not exist") {
          alert("User does not exist. Please check your email.")
        } else {
          alert("An unexpected error occurred. Please try again.")
        }
      }
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950">
      <Tabs defaultValue="user" className="w-[400px]" onValueChange={setRole}> {/* Update role on tab change */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User</CardTitle>
              <CardDescription>
                Please enter your email and password to log in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin}>Login</Button>
            </CardFooter>
            <div className="text-center text-zinc-400 mb-5">
              <p className="text-sm">
                Not having an account?{" "}
                <Link href="/signup" className=" text-zinc-200 underline">
                  Create new account
                </Link>
              </p>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin</CardTitle>
              <CardDescription>
                Please enter your email and password to log in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="adminEmail">Email</Label>
                <Input id="adminEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="adminPassword">Password</Label>
                <Input id="adminPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin}>Login as admin</Button>
            </CardFooter>
            <div className="text-center text-zinc-400 mb-5">
              <p className="text-sm">
                Not having an account?{" "}
                <Link href="/signup" className=" text-zinc-200 underline">
                  Create new account
                </Link>
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

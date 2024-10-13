"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
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
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adminCode, setAdminCode] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSignup = async (role:string) => {
    // Input validation
    if (!email || !password || !name) {
      alert("Please fill in all required fields.")
      return
    }

    if (role === "admin" && adminCode !== "7512") {
      alert("Invalid admin code.")
      return
    }

    try {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Check if user already exists
      const userExists = existingUsers.some((user: User) => user.email === email)
      if (userExists) {
        alert("A user with this email already exists. Please use a different email or sign in.")
        return
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password, // Note: In a real application, never store plain text passwords
        image: "",
        coordinates: { latitude: 0, longitude: 0 },
        description: "",
        role: role === "admin" ? "admin" : "user"
      }
      
      // Add the new user to the array
      existingUsers.push(newUser)
      
      // Save the updated array back to local storage
      localStorage.setItem('users', JSON.stringify(existingUsers))
      
      alert("Signup successful! Please sign in.")
      router.push("/signin")
    } catch (error) {
      console.error("Error during signup:", error)
      alert("An error occurred during signup. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <Tabs defaultValue="user" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Signup</CardTitle>
              <CardDescription>
                Please enter your details to create an account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
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
              <Button onClick={() => handleSignup("user")}>Sign Up</Button>
            </CardFooter>
            <div className="text-center text-zinc-400 mb-5">
              <p className="text-sm">
                Already have an account?{" "}
                <Link href="/signin" className="text-zinc-200 underline">
                  Login
                </Link>
              </p>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Signup</CardTitle>
              <CardDescription>
                Please enter your details to create an admin account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="adminName">Name</Label>
                <Input id="adminName" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="adminEmail">Email</Label>
                <Input id="adminEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="adminPassword">Password</Label>
                <Input id="adminPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="adminCode">Admin Code</Label>
                <Input id="adminCode" type="text" value={adminCode} onChange={(e) => setAdminCode(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSignup("admin")}>Sign Up as Admin</Button>
            </CardFooter>
            <div className="text-center text-zinc-400 mb-5">
              <p className="text-sm">
                Already have an account?{" "}
                <Link href="/signin" className="text-zinc-200 underline">
                  Login
                </Link>
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

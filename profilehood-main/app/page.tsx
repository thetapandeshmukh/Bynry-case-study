'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "./provider"
import { redirect } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import users from "@/db/users"

export default function Home() {
  const { logout, user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")

  if (!user) {
    redirect('/signin')
  }

  const handleLogout = () => {
    logout()
    console.log("Logged out")
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full flex justify-between items-center p-6 px-10 border-b border-muted">
        <h1 className="text-2xl font-medium">profilehood</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </nav>

      <main className="flex-grow p-4 sm:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="sticky top-0 z-10">
            <Input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full focus:border focus:border-white"
            />
          </div>

          <ul className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            {filteredUsers.map(user => (
              <Link key={user.id} href={`/userPage?email=${user.email}`} className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow">
                <Image
                  src={user.image}
                  alt={`${user.name}'s profile`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{user.name}</h2>
                  <span className="text-sm text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

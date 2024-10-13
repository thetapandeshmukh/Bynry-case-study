'use client'

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import users from "@/db/users"

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  description: string; 
  image: string; 
  coordinates: { 
    latitude: number;
    longitude: number;
  };
  location?: string; // Add this line to include the location property
}

const User = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const email = searchParams.get('email')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (email) {
      const foundUser = users.find(user => user.email === email) || null
      setUser(foundUser)
    }
  }, [email])

  useEffect(() => {
    // Fix for Leaflet icon issue
    delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    })
  }, [])

  const handleLogout = () => {
    console.log("Logged out")
    router.push('/signin')
  }

  // Function to derive location from coordinates
  const getLocationFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      return data.display_name || null; // Return the name of the location or null if not found
    } catch (error) {
      console.error("Error fetching location:", error); // Log the error
      return null; // Return null in case of an error
    }
  }

  useEffect(() => {
    if (user) {
      getLocationFromCoordinates(user.coordinates.latitude, user.coordinates.longitude)
        .then(location => {
          setUser(prevUser => prevUser ? { ...prevUser, location } : null);
        })
        .catch(error => {
          console.error("Error setting user location:", error); // Log any errors from the promise
        });
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full flex justify-between items-center p-6 px-10 border-b border-muted">
        <h1 className="text-2xl font-medium">profilehood</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </nav>

      <div className="flex-grow flex flex-col md:flex-row p-6 gap-6">
        {user ? (
          <>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <MapContainer 
                center={[user.coordinates.latitude, user.coordinates.longitude]} 
                zoom={13} 
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[user.coordinates.latitude, user.coordinates.longitude]}>
                  <Popup>
                    {user.name}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <Card className="w-full md:w-1/2 shadow-lg rounded-lg border border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{user.name}</CardTitle>
                <CardDescription className="text-md text-zinc-400">{user.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="flex justify-center">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={200}
                    height={200}
                    className="rounded-full border-2 border-muted"
                  />
                </div>
                <p>email: <span className='text-zinc-400'>{user.email}</span></p>
                <p>Coordinates: <span className='text-zinc-400'>{user.coordinates.latitude.toFixed(4)}, {user.coordinates.longitude.toFixed(4)}</span></p>
                {user.location && <p>Location: <span className='text-zinc-400'>{user.location}</span> </p>} {/* Display derived location */}
              </CardContent>
            </Card>
          </>
        ) : (
          <p className="text-center w-full">User not found</p>
        )}
      </div>
    </div>
  )
}

export default User

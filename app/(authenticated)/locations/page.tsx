"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, ArrowRightCircle, Plus } from "lucide-react"
import LocationDetailsModal from "./components/LocationDetailsModal"
import { NewLocationModal } from "@/components/NewLocationModal"

// Mock data for locations with more detailed information
const locations = [
  {
    id: 1,
    name: "Main Branch",
    agent: "John Doe",
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
    postalCode: "62701",
    aiNumber: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "Downtown Office",
    agent: "Jane Smith",
    street: "456 Oak Ave",
    city: "Metro City",
    state: "NY",
    postalCode: "10001",
    aiNumber: "+1 (555) 987-6543",
  },
  {
    id: 3,
    name: "Westside Location",
    agent: "Mike Johnson",
    street: "789 Pine Rd",
    city: "Westville",
    state: "CA",
    postalCode: "90210",
    aiNumber: "+1 (555) 246-8135",
  },
]

export default function LocationsPage() {
  const router = useRouter()
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [isNewLocationModalOpen, setIsNewLocationModalOpen] = useState(false)

  const handleSwitchLocation = (locationId: number) => {
    router.push("/location-dashboard")
  }

  const handleOpenSettings = (location: any) => {
    setSelectedLocation(location)
  }

  const handleCloseModal = () => {
    setSelectedLocation(null)
  }

  const handleCreateLocation = (locationData: any) => {
    console.log("New location data:", locationData)
    // Here you would typically send this data to your backend
    // and then update the locations list
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Locations</h1>
        <Button onClick={() => setIsNewLocationModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create New Location
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <Card key={location.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-bold">{location.name}</CardTitle>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={() => handleSwitchLocation(location.id)}>
                  <ArrowRightCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleOpenSettings(location)}>
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Agent: {location.agent}</p>
              <p className="text-sm text-gray-600">AI Number: {location.aiNumber}</p>
              <p className="text-sm text-gray-600">
                {location.street}, {location.city}, {location.state} {location.postalCode}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedLocation && <LocationDetailsModal location={selectedLocation} onClose={handleCloseModal} />}
      <NewLocationModal
        isOpen={isNewLocationModalOpen}
        onClose={() => setIsNewLocationModalOpen(false)}
        onCreateLocation={handleCreateLocation}
      />
    </div>
  )
}


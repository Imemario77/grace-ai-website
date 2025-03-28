"use client"

import { useState } from "react"
import { Plus, Phone, FileText, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { NewLocationModal } from "@/components/NewLocationModal"

// Sample data for the graphs
const generateData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    date: `2024-${String(i + 1).padStart(2, "0")}-01`,
    value: Math.random() * 100,
  }))
}

const metrics = [
  {
    title: "Total Call Minutes",
    value: "0.00",
    change: "+0.00%",
    data: generateData(30),
    color: "rgb(249, 115, 22)", // Orange/amber color
  },
  {
    title: "Number of Calls",
    value: "0",
    change: "+0.00%",
    data: generateData(30),
    color: "rgb(59, 130, 246)", // Blue color
  },
  {
    title: "Total Spent",
    value: "$1.32",
    change: "+404.94%",
    data: generateData(30),
    color: "rgb(249, 115, 22)", // Orange/amber color
  },
  {
    title: "Average Cost per Call",
    value: "$0.00",
    change: "+0.00%",
    data: generateData(30),
    color: "rgb(45, 212, 191)", // Cyan/turquoise color
  },
]

export default function DashboardPage() {
  const [isNewLocationModalOpen, setIsNewLocationModalOpen] = useState(false)

  const handleCreateLocation = (locationData: any) => {
    console.log("New location data:", locationData)
    // Here you would typically send this data to your backend
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <Button onClick={() => setIsNewLocationModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Location
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-green-600 dark:text-green-400">{metric.change}</div>
              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={metric.data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <XAxis dataKey="date" stroke="#666666" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#666666" fontSize={10} tickLine={false} axisLine={false} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={metric.color}
                      fill={metric.color}
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total AI Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,234</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Recorded Orders</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">432</div>
            <p className="text-xs text-muted-foreground">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">7</div>
            <p className="text-xs text-muted-foreground">Out of 10 total locations</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="md:col-span-4 bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
            <CardDescription className="text-muted-foreground">Latest orders recorded by Grace AI</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>

        <Card className="md:col-span-3 bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Upcoming Appointments</CardTitle>
            <CardDescription className="text-muted-foreground">Scheduled for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingAppointments />
          </CardContent>
        </Card>
      </div>

      <NewLocationModal
        isOpen={isNewLocationModalOpen}
        onClose={() => setIsNewLocationModalOpen(false)}
        onCreateLocation={handleCreateLocation}
      />
    </div>
  )
}


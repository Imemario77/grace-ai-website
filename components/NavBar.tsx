"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, MapPin, FileText, Activity, Users, Calendar, Menu, Settings, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTheme } from "next-themes"
import { useSidebar } from "@/components/SidebarContext"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Locations", href: "/locations", icon: MapPin },
  { name: "Orders", href: "/orders", icon: FileText },
  { name: "AI Activity", href: "/ai-activity", icon: Activity },
  { name: "Human Agents", href: "/human-agents", icon: Users },
  { name: "Appointments", href: "/appointments", icon: Calendar },
]

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { isCollapsed, toggleCollapsed } = useSidebar()
  const [selectedLocation, setSelectedLocation] = useState("all")
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value)
    if (value !== "all") {
      router.push("/location-dashboard")
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <>
      <div
        className={cn(
          "h-screen flex flex-col transition-all duration-300",
          isCollapsed ? "w-20" : "w-64",
          theme === "dark" ? "bg-gray-800" : "bg-gray-100",
        )}
      >
        {/* Logo Section */}
        <div className="p-4">
          <Image
            src={
              theme === "dark"
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20logo%20-%20no%20background-lEmyhiSCoRNGJ8GoX2i2YrIuEvAwci.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-VvfEIrQwT6XnKgZrcMmjWUej1vzclj.png"
            }
            alt="Grace AI Logo"
            width={isCollapsed ? 40 : 80}
            height={isCollapsed ? 40 : 80}
            priority
            className="mx-auto mb-4"
          />

          {!isCollapsed && (
            <Select value={selectedLocation} onValueChange={handleLocationChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Switch into a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Switch into a location</SelectItem>
                <SelectItem value="main">Main Location</SelectItem>
                <SelectItem value="branch-1">Branch 1</SelectItem>
                <SelectItem value="branch-2">Branch 2</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex-1 px-4 py-2 overflow-y-auto">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2",
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                  pathname === item.href && (theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"),
                )}
              >
                <item.icon className={cn("flex-shrink-0", isCollapsed ? "h-6 w-6" : "h-5 w-5")} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Settings at Bottom */}
        <div className="mt-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/settings"
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2",
              theme === "dark"
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
              pathname === "/settings" && (theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"),
            )}
          >
            <Settings className={cn("flex-shrink-0", isCollapsed ? "h-6 w-6" : "h-5 w-5")} />
            {!isCollapsed && <span>Settings</span>}
          </Link>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleCollapsed}
        className={cn(
          "absolute top-4 -right-3 z-50 rounded-full border p-1.5 shadow-md",
          theme === "dark" ? "bg-white text-gray-800" : "bg-white text-gray-800",
        )}
      >
        <Menu className="h-4 w-4" />
      </button>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </>
  )
}

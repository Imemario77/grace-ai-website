import type React from "react"
import AppBar from "@/components/AppBar"
import NavBar from "@/components/NavBar"
import { SidebarProvider, useSidebar } from "@/components/SidebarContext"
import { ThemeProvider } from "@/components/ThemeProvider"

function LayoutContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isCollapsed } = useSidebar()

  return (
    <div className="flex min-h-screen">
      <div className="fixed">
        <NavBar />
      </div>
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-64"}`}>
        <AppBar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SidebarProvider>
        <LayoutContent>{children}</LayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  )
}


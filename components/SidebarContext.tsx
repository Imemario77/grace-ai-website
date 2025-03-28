"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type SidebarContextType = {
  isCollapsed: boolean
  toggleCollapsed: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleCollapsed: () => {},
})

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext)


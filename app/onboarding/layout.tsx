import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "Onboarding - Grace AI",
  description: "Complete your account setup",
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Remove the forced bg-white class to allow proper dark mode support
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">{children}</div>
    </ThemeProvider>
  )
}


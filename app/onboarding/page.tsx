"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FuneralHomeForm } from "./components/funeral-home-form"
import { CalendarIntegration } from "./components/calendar-integration"
import { LocationForm } from "./components/location-form"
import { AgentAssignment } from "./components/agent-assignment"
import { PhoneNumber } from "./components/phone-number"

const steps = ["Funeral Home Details", "Calendar Integration", "Location Setup", "Agent Assignment", "Phone Number"]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    funeralHome: {},
    calendar: {},
    location: {},
    agent: {},
    phoneNumber: {},
  })

  const handleNext = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      [Object.keys(data)[0]]: data[Object.keys(data)[0]],
    }))

    if (currentStep === steps.length - 1) {
      router.push("/dashboard")
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
            alt="EverGrace.AI Logo"
            width={140}
            height={56}
            priority
            className="dark:invert"
          />
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-semibold text-foreground">Set Up Your Account</h1>
            <p className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">{getCurrentComponent()}</main>
    </div>
  )

  function getCurrentComponent() {
    switch (currentStep) {
      case 0:
        return <FuneralHomeForm onNext={handleNext} />
      case 1:
        return <CalendarIntegration onNext={handleNext} onBack={() => setCurrentStep((prev) => prev - 1)} />
      case 2:
        return <LocationForm onNext={handleNext} onBack={() => setCurrentStep((prev) => prev - 1)} />
      case 3:
        return <AgentAssignment onNext={handleNext} onBack={() => setCurrentStep((prev) => prev - 1)} />
      case 4:
        return <PhoneNumber onNext={handleNext} onBack={() => setCurrentStep((prev) => prev - 1)} />
      default:
        return null
    }
  }
}


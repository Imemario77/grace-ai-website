"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CalendarIntegrationProps {
  onNext: (data: { calendar: any }) => void
  onBack: () => void
}

export function CalendarIntegration({ onNext, onBack }: CalendarIntegrationProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selected, setSelected] = useState<"google" | "outlook" | null>(null)

  const handleConnect = async () => {
    if (!selected) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onNext({ calendar: { provider: selected } })
    }, 1500)
  }

  return (
    <Card className="bg-card text-card-foreground p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Connect Your Calendar</h2>
        <p className="text-sm text-muted-foreground">Choose your preferred calendar provider to sync appointments</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setSelected("google")}
          className={`w-full flex items-center p-4 border rounded-lg transition-colors ${
            selected === "google" ? "border-primary bg-primary/10" : "border-border hover:border-primary bg-background"
          }`}
        >
          <Image src="/google-calendar-logo.png" alt="Google Calendar" width={32} height={32} className="mr-4" />
          <div className="flex-1 text-left">
            <h3 className="font-medium">Google Calendar</h3>
            <p className="text-sm text-muted-foreground">Connect your Google Calendar</p>
          </div>
          <div
            className={`w-5 h-5 rounded-full border ${
              selected === "google" ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
            }`}
          >
            {selected === "google" && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </button>

        <button
          onClick={() => setSelected("outlook")}
          className={`w-full flex items-center p-4 border rounded-lg transition-colors ${
            selected === "outlook" ? "border-primary bg-primary/10" : "border-border hover:border-primary bg-background"
          }`}
        >
          <Image src="/outlook-calendar-logo.png" alt="Microsoft Outlook" width={32} height={32} className="mr-4" />
          <div className="flex-1 text-left">
            <h3 className="font-medium">Microsoft Outlook</h3>
            <p className="text-sm text-muted-foreground">Connect your Outlook Calendar</p>
          </div>
          <div
            className={`w-5 h-5 rounded-full border ${
              selected === "outlook" ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
            }`}
          >
            {selected === "outlook" && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </button>
      </div>

      <div className="flex gap-3 mt-8">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={handleConnect} disabled={!selected || isLoading} className="flex-1">
          {isLoading ? "Connecting..." : "Connect"}
        </Button>
      </div>
    </Card>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface AgentAssignmentProps {
  onNext: (data: { agent: any }) => void
  onBack: () => void
}

export function AgentAssignment({ onNext, onBack }: AgentAssignmentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [assignType, setAssignType] = useState<"self" | "invite" | null>(null)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      type: assignType,
      email: assignType === "invite" ? email : "",
    }

    setTimeout(() => {
      setIsLoading(false)
      onNext({ agent: data })
    }, 1000)
  }

  return (
    <Card className="bg-card text-card-foreground p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Assign Location Manager</h2>
        <p className="text-sm text-muted-foreground">Choose who will manage this location</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setAssignType("self")}
            className={`w-full flex items-center p-4 border rounded-lg transition-colors ${
              assignType === "self"
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary bg-background"
            }`}
          >
            <div className="flex-1 text-left">
              <h3 className="font-medium">Just Me for Now</h3>
              <p className="text-sm text-muted-foreground">I'll manage this location myself</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border ${
                assignType === "self" ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
              }`}
            >
              {assignType === "self" && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={() => setAssignType("invite")}
            className={`w-full flex items-center p-4 border rounded-lg transition-colors ${
              assignType === "invite"
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary bg-background"
            }`}
          >
            <div className="flex-1 text-left">
              <h3 className="font-medium">Invite Someone Else</h3>
              <p className="text-sm text-muted-foreground">Send an invitation to another person</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border ${
                assignType === "invite"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground"
              }`}
            >
              {assignType === "invite" && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {assignType === "invite" && (
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@example.com"
              className="bg-background"
              required
            />
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button
            type="submit"
            disabled={!assignType || (assignType === "invite" && !email) || isLoading}
            className="flex-1"
          >
            {isLoading ? "Saving..." : "Continue"}
          </Button>
        </div>
      </form>
    </Card>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface FuneralHomeFormProps {
  onNext: (data: { funeralHome: any }) => void
}

export function FuneralHomeForm({ onNext }: FuneralHomeFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      website: formData.get("website"),
      phone: formData.get("phone"),
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onNext({ funeralHome: data })
    }, 1000)
  }

  return (
    <div className="bg-background rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Funeral Home Details</h2>
        <p className="text-sm text-muted-foreground">Tell us about your funeral home</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Business Name</Label>
          <Input id="name" name="name" type="text" required placeholder="Smith & Sons Funeral Services" />
        </div>

        <div>
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" name="website" type="url" placeholder="https://www.example.com" />
        </div>

        <div>
          <Label htmlFor="phone">Business Phone</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Saving..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  )
}


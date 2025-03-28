"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface PhoneNumberProps {
  onNext: (data: { phoneNumber: any }) => void
  onBack: () => void
}

export function PhoneNumber({ onNext, onBack }: PhoneNumberProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [areaCode, setAreaCode] = useState("")
  const [country, setCountry] = useState("United States")
  const [numbers, setNumbers] = useState<string[]>([])
  const [selectedNumber, setSelectedNumber] = useState<string>("")

  const handleAreaCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove non-digit characters
    setAreaCode(value)
  }

  const handleSearch = async () => {
    setIsLoading(true)
    // Simulate API call to search for available numbers
    setTimeout(() => {
      setIsLoading(false)
      setNumbers([
        "+1 (415) 555-0123",
        "+1 (415) 555-0124",
        "+1 (415) 555-0125",
        "+1 (415) 555-0126",
        "+1 (415) 555-0127",
      ])
    }, 1500)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedNumber) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onNext({ phoneNumber: { number: selectedNumber } })
    }, 1500)
  }

  return (
    <Card className="bg-card text-card-foreground p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Buy An AI Phone Number</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Area Code</label>
            <Input
              value={areaCode}
              onChange={handleAreaCodeChange}
              className="bg-background mt-1"
              placeholder="e.g. 415"
              maxLength={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Country</label>
            <button
              type="button"
              className="mt-1 flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span>{country}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {!selectedNumber && (
          <Button type="button" onClick={handleSearch} disabled={!areaCode || isLoading} className="w-full">
            {isLoading ? "Searching..." : "Search Available Numbers"}
          </Button>
        )}

        {numbers.length > 0 && (
          <div className="space-y-4">
            <div className="text-sm font-medium">Available Numbers</div>
            <div className="space-y-2">
              {numbers.map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => setSelectedNumber(number)}
                  className={`w-full flex items-center justify-between p-3 rounded-md border transition-colors ${
                    selectedNumber === number
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary bg-background"
                  }`}
                >
                  <span>{number}</span>
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedNumber === number
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedNumber === number && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedNumber && (
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Purchasing..." : "Purchase Number"}
            </Button>
          </div>
        )}
      </form>
    </Card>
  )
}


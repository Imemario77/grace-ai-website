"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PhoneNumberSelectorProps {
  currentNumber: string
  onNumberSelected: (number: string) => void
}

export function PhoneNumberSelector({ currentNumber, onNumberSelected }: PhoneNumberSelectorProps) {
  const [areaCode, setAreaCode] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [availableNumbers, setAvailableNumbers] = useState<string[]>([])

  const handleAreaCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove non-digit characters
    setAreaCode(value)
  }

  const handleSearch = () => {
    setIsSearching(true)
    // Simulate API call to search for available numbers
    setTimeout(() => {
      setAvailableNumbers([
        `+1 (${areaCode}) 555-0123`,
        `+1 (${areaCode}) 555-0124`,
        `+1 (${areaCode}) 555-0125`,
        `+1 (${areaCode}) 555-0126`,
        `+1 (${areaCode}) 555-0127`,
      ])
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Area Code"
          value={areaCode}
          onChange={handleAreaCodeChange}
          className="w-24"
          maxLength={3}
        />
        <Button onClick={handleSearch} disabled={isSearching || areaCode.length !== 3}>
          {isSearching ? "Searching..." : "Search"}
        </Button>
      </div>
      {availableNumbers.length > 0 && (
        <div className="space-y-2">
          <Label>Available Numbers</Label>
          {availableNumbers.map((number) => (
            <div key={number} className="flex items-center space-x-2">
              <input
                type="radio"
                id={number}
                name="phoneNumber"
                value={number}
                checked={number === currentNumber}
                onChange={() => onNumberSelected(number)}
              />
              <label htmlFor={number}>{number}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


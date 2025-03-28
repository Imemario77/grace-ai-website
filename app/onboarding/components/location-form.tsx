"use client"

import { useState } from "react"
import { Combobox } from "@headlessui/react"
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import type React from "react"

interface LocationFormProps {
  onNext: (data: { location: any }) => void
  onBack: () => void
}

const US_STATES = [
  { abbr: "AL", name: "Alabama" },
  { abbr: "AK", name: "Alaska" },
  { abbr: "AZ", name: "Arizona" },
  { abbr: "AR", name: "Arkansas" },
  { abbr: "CA", name: "California" },
  { abbr: "CO", name: "Colorado" },
  { abbr: "CT", name: "Connecticut" },
  { abbr: "DE", name: "Delaware" },
  { abbr: "FL", name: "Florida" },
  { abbr: "GA", name: "Georgia" },
  { abbr: "HI", name: "Hawaii" },
  { abbr: "ID", name: "Idaho" },
  { abbr: "IL", name: "Illinois" },
  { abbr: "IN", name: "Indiana" },
  { abbr: "IA", name: "Iowa" },
  { abbr: "KS", name: "Kansas" },
  { abbr: "KY", name: "Kentucky" },
  { abbr: "LA", name: "Louisiana" },
  { abbr: "ME", name: "Maine" },
  { abbr: "MD", name: "Maryland" },
  { abbr: "MA", name: "Massachusetts" },
  { abbr: "MI", name: "Michigan" },
  { abbr: "MN", name: "Minnesota" },
  { abbr: "MS", name: "Mississippi" },
  { abbr: "MO", name: "Missouri" },
  { abbr: "MT", name: "Montana" },
  { abbr: "NE", name: "Nebraska" },
  { abbr: "NV", name: "Nevada" },
  { abbr: "NH", name: "New Hampshire" },
  { abbr: "NJ", name: "New Jersey" },
  { abbr: "NM", name: "New Mexico" },
  { abbr: "NY", name: "New York" },
  { abbr: "NC", name: "North Carolina" },
  { abbr: "ND", name: "North Dakota" },
  { abbr: "OH", name: "Ohio" },
  { abbr: "OK", name: "Oklahoma" },
  { abbr: "OR", name: "Oregon" },
  { abbr: "PA", name: "Pennsylvania" },
  { abbr: "RI", name: "Rhode Island" },
  { abbr: "SC", name: "South Carolina" },
  { abbr: "SD", name: "South Dakota" },
  { abbr: "TN", name: "Tennessee" },
  { abbr: "TX", name: "Texas" },
  { abbr: "UT", name: "Utah" },
  { abbr: "VT", name: "Vermont" },
  { abbr: "VA", name: "Virginia" },
  { abbr: "WA", name: "Washington" },
  { abbr: "WV", name: "West Virginia" },
  { abbr: "WI", name: "Wisconsin" },
  { abbr: "WY", name: "Wyoming" },
]

export function LocationForm({ onNext, onBack }: LocationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedState, setSelectedState] = useState<{ abbr: string; name: string } | null>(null)
  const [query, setQuery] = useState("")

  const filteredStates =
    query === ""
      ? US_STATES
      : US_STATES.filter((state) => {
          return state.name.toLowerCase().includes(query.toLowerCase())
        })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedState) {
      // Handle the case when no state is selected
      alert("Please select a state")
      return
    }
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      street: formData.get("street"),
      city: formData.get("city"),
      state: selectedState.name,
      zipcode: formData.get("zipcode"),
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onNext({ location: data })
    }, 1000)
  }

  return (
    <Card className="bg-card text-card-foreground p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Location Details</h2>
        <p className="text-sm text-muted-foreground">Add Your First Location</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Location Name</Label>
          <Input id="name" name="name" type="text" required placeholder="Main Location" className="bg-background" />
        </div>

        <div>
          <Label htmlFor="street">Street Address</Label>
          <Input id="street" name="street" type="text" required placeholder="123 Main St" className="bg-background" />
        </div>

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-3">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" type="text" required placeholder="City" className="bg-background" />
          </div>

          <div className="col-span-2">
            <Combobox value={selectedState} onChange={setSelectedState}>
              <Label>State</Label>
              <div className="relative mt-1">
                <Combobox.Input
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(state: { name: string } | null) => state?.name ?? ""}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </Combobox.Button>

                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-popover py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredStates.map((state) => (
                    <Combobox.Option
                      key={state.abbr}
                      value={state}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-accent text-accent-foreground" : "text-popover-foreground"
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {state.name}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-accent-foreground" : "text-primary"
                              }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>

          <div>
            <Label htmlFor="zipcode">ZIP</Label>
            <Input id="zipcode" name="zipcode" type="text" required placeholder="12345" className="bg-background" />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button type="submit" disabled={isLoading || !selectedState} className="flex-1">
            {isLoading ? "Saving..." : "Continue"}
          </Button>
        </div>
      </form>
    </Card>
  )
}


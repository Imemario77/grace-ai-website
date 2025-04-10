"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Combobox } from "@headlessui/react"
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid"
import { PhoneNumberSelector } from "@/app/(authenticated)/locations/components/PhoneNumberSelector"

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

interface NewLocationModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateLocation: (locationData: any) => void
}

type AgentAssignmentMode = "select" | "existing" | "new"

export function NewLocationModal({ isOpen, onClose, onCreateLocation }: NewLocationModalProps) {
  const [step, setStep] = useState(1)
  const [agentMode, setAgentMode] = useState<AgentAssignmentMode>("select")
  const [locationData, setLocationData] = useState({
    name: "",
    street: "",
    city: "",
    state: null,
    zipcode: "",
    agent: "",
    newAgentEmail: "",
    phoneNumber: "",
    isPhoneNumberSelected: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationData({ ...locationData, [e.target.name]: e.target.value })
  }

  const handleStateChange = (state: { abbr: string; name: string } | null) => {
    setLocationData({ ...locationData, state })
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    onCreateLocation(locationData)
    setLocationData((prevState) => ({ ...prevState, isPhoneNumberSelected: false }))
    onClose()
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleInviteAgent = () => {
    if (!locationData.newAgentEmail || !isValidEmail(locationData.newAgentEmail)) {
      return
    }
    // Here you would typically send an invitation email to the new agent
    console.log(`Inviting new agent: ${locationData.newAgentEmail}`)
    setLocationData({ ...locationData, agent: locationData.newAgentEmail, newAgentEmail: "" })
    // Progress to next step after successful invite
    setStep(3)
  }

  const renderAgentAssignment = () => {
    if (agentMode === "select") {
      return (
        <div className="space-y-4">
          <h3 className="font-medium mb-4">How would you like to assign an agent?</h3>
          <div className="grid gap-4">
            <Button variant="outline" className="h-auto py-4 px-6" onClick={() => setAgentMode("existing")}>
              <div className="text-left">
                <div className="font-semibold">Assign Existing Agent</div>
                <div className="text-sm text-muted-foreground">Select from your current list of agents</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto py-4 px-6" onClick={() => setAgentMode("new")}>
              <div className="text-left">
                <div className="font-semibold">Invite New Agent</div>
                <div className="text-sm text-muted-foreground">Send an invitation to a new agent</div>
              </div>
            </Button>
          </div>
        </div>
      )
    }

    if (agentMode === "existing") {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Select Existing Agent</Label>
            <Button variant="ghost" size="sm" onClick={() => setAgentMode("select")}>
              Change Option
            </Button>
          </div>
          <Select
            value={locationData.agent}
            onValueChange={(value) => setLocationData({ ...locationData, agent: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="John Doe">John Doe</SelectItem>
              <SelectItem value="Jane Smith">Jane Smith</SelectItem>
              <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )
    }

    if (agentMode === "new") {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Invite New Agent</Label>
            <Button variant="ghost" size="sm" onClick={() => setAgentMode("select")}>
              Change Option
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="New agent's email"
              value={locationData.newAgentEmail}
              onChange={(e) => setLocationData({ ...locationData, newAgentEmail: e.target.value })}
              className={
                !locationData.newAgentEmail || isValidEmail(locationData.newAgentEmail)
                  ? ""
                  : "border-red-500 focus-visible:ring-red-500"
              }
            />
            <Button onClick={handleInviteAgent} disabled={!locationData.newAgentEmail}>
              Invite
            </Button>
          </div>
        </div>
      )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Location</DialogTitle>
        </DialogHeader>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Location Name</Label>
              <Input
                id="name"
                name="name"
                value={locationData.name}
                onChange={handleInputChange}
                placeholder="Main Branch"
              />
            </div>
            <div>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                name="street"
                value={locationData.street}
                onChange={handleInputChange}
                placeholder="123 Main St"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={locationData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Combobox value={locationData.state} onChange={handleStateChange}>
                  <div className="relative mt-1">
                    <Combobox.Input
                      className="w-full rounded-md border border-input bg-background py-2 pl-3 pr-10 text-foreground shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 sm:text-sm"
                      displayValue={(state: { name: string } | null) => state?.name ?? ""}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    </Combobox.Button>
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-popover py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {US_STATES.map((state) => (
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
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-accent-foreground" : "text-amber-600"
                                  }`}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  </div>
                </Combobox>
              </div>
            </div>
            <div>
              <Label htmlFor="zipcode">ZIP Code</Label>
              <Input
                id="zipcode"
                name="zipcode"
                value={locationData.zipcode}
                onChange={handleInputChange}
                placeholder="12345"
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-medium mb-4">How would you like to assign an agent?</h3>
            <div className="space-y-4">
              <label className="flex items-start space-x-3 p-4 border rounded-lg hover:border-amber-500 cursor-pointer">
                <input
                  type="radio"
                  name="agentType"
                  value="existing"
                  checked={agentMode === "existing"}
                  onChange={() => setAgentMode("existing")}
                  className="mt-1"
                />
                <div>
                  <div className="font-semibold">Assign Existing Agent</div>
                  <div className="text-sm text-muted-foreground">Select from your current list of agents</div>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-4 border rounded-lg hover:border-amber-500 cursor-pointer">
                <input
                  type="radio"
                  name="agentType"
                  value="new"
                  checked={agentMode === "new"}
                  onChange={() => setAgentMode("new")}
                  className="mt-1"
                />
                <div>
                  <div className="font-semibold">Invite New Agent</div>
                  <div className="text-sm text-muted-foreground">Send an invitation to a new agent</div>
                </div>
              </label>
            </div>

            {agentMode === "existing" && (
              <div className="mt-4">
                <Label>Select Existing Agent</Label>
                <Select
                  value={locationData.agent}
                  onValueChange={(value) => setLocationData({ ...locationData, agent: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="John Doe">John Doe</SelectItem>
                    <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                    <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {agentMode === "new" && (
              <div className="mt-4">
                <Label>Invite New Agent</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="email"
                    placeholder="New agent's email"
                    value={locationData.newAgentEmail}
                    onChange={(e) => setLocationData({ ...locationData, newAgentEmail: e.target.value })}
                    className={
                      !locationData.newAgentEmail || isValidEmail(locationData.newAgentEmail)
                        ? ""
                        : "border-red-500 focus-visible:ring-red-500"
                    }
                  />
                  <Button onClick={handleInviteAgent} disabled={!locationData.newAgentEmail}>
                    Invite
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <Label>Select Phone Number</Label>
            <PhoneNumberSelector
              currentNumber={locationData.phoneNumber}
              onNumberSelected={(number) =>
                setLocationData({ ...locationData, phoneNumber: number, isPhoneNumberSelected: true })
              }
            />
          </div>
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button onClick={handleBack} variant="outline">
              Back
            </Button>
          )}
          {step < 3 && !(step === 2 && agentMode === "new") && (
            <Button onClick={handleNext} className="ml-auto" disabled={step === 2 && !agentMode}>
              Next
            </Button>
          )}
          {step === 3 && (
            <Button onClick={handleSubmit} className="ml-auto" disabled={!locationData.isPhoneNumberSelected}>
              Create Location
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

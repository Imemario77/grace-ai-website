"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AINumberSelector } from "./AINumberSelector"
import { AgentSelector } from "./AgentSelector"
import { Building2, MapPin, Phone, User, Pencil, Save } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LocationDetailsModalProps {
  location: {
    id: number
    name: string
    agent: string
    street: string
    city: string
    state: string
    postalCode: string
    aiNumber: string
  }
  onClose: () => void
}

export default function LocationDetailsModal({ location, onClose }: LocationDetailsModalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(location)
  const [showAINumberSelector, setShowAINumberSelector] = useState(false)
  const [showAgentSelector, setShowAgentSelector] = useState(false)
  const [selectedAINumber, setSelectedAINumber] = useState("")
  const [selectedAgent, setSelectedAgent] = useState("")

  const handleSave = () => {
    console.log("Saving changes:", formData)
    setIsEditing(false)
  }

  const handleToggleEdit = () => {
    if (isEditing) {
      handleSave()
    } else {
      setIsEditing(true)
    }
  }

  const InfoRow = ({ icon: Icon, label, value, editMode = false, onChange = null }) => (
    <div className="flex items-center gap-3 py-1">
      <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      {editMode ? <Input value={value} onChange={onChange} className="flex-1" /> : <span>{value}</span>}
    </div>
  )

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
          <DialogTitle className="text-xl">Location Details</DialogTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={handleToggleEdit}>
              {isEditing ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* General Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">General Information</h3>
              <InfoRow
                icon={Building2}
                label="Name"
                value={formData.name}
                editMode={isEditing}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Address</h3>
              <div className="space-y-2">
                <InfoRow
                  icon={MapPin}
                  label="Street"
                  value={formData.street}
                  editMode={isEditing}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                />
                {isEditing ? (
                  <div className="ml-8 grid grid-cols-2 gap-2">
                    <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Springfield">Springfield</SelectItem>
                        <SelectItem value="Metro City">Metro City</SelectItem>
                        <SelectItem value="Westville">Westville</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="ZIP"
                    />
                  </div>
                ) : (
                  <div className="ml-8">
                    {formData.city}, {formData.state} {formData.postalCode}
                  </div>
                )}
              </div>
            </div>

            {/* AI Number */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">AI Number</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <InfoRow icon={Phone} label="AI Number" value={formData.aiNumber} />
                  {isEditing && !showAINumberSelector && (
                    <Button variant="outline" size="sm" onClick={() => setShowAINumberSelector(true)}>
                      Replace
                    </Button>
                  )}
                </div>
                {showAINumberSelector && (
                  <div className="mt-2">
                    <AINumberSelector currentNumber={formData.aiNumber} onNumberSelected={setSelectedAINumber} />
                    {selectedAINumber && (
                      <Button
                        className="mt-2"
                        onClick={() => {
                          setFormData({ ...formData, aiNumber: selectedAINumber })
                          setShowAINumberSelector(false)
                          setSelectedAINumber("")
                        }}
                      >
                        Confirm New Number
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Assigned Agent */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Assigned Agent</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <InfoRow icon={User} label="Agent" value={formData.agent} />
                  {isEditing && !showAgentSelector && (
                    <Button variant="outline" size="sm" onClick={() => setShowAgentSelector(true)}>
                      Replace
                    </Button>
                  )}
                </div>
                {showAgentSelector && (
                  <div className="mt-2">
                    <AgentSelector
                      currentAgent={formData.agent}
                      onAgentSelected={setSelectedAgent}
                      isValidEmail={isValidEmail}
                    />
                    {selectedAgent && (
                      <Button
                        className="mt-2"
                        onClick={() => {
                          setFormData({ ...formData, agent: selectedAgent })
                          setShowAgentSelector(false)
                          setSelectedAgent("")
                        }}
                      >
                        Confirm New Agent
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>

        {isEditing && (
          <div className="flex justify-end gap-2 border-t pt-4 mt-4">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}


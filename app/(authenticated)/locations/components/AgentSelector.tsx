"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AgentSelectorProps {
  currentAgent: string
  onAgentSelected: (agent: string) => void
  isValidEmail: (email: string) => boolean
}

export function AgentSelector({ currentAgent, onAgentSelected, isValidEmail }: AgentSelectorProps) {
  const [mode, setMode] = useState<"select" | "invite">("select")
  const [inviteEmail, setInviteEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleInvite = () => {
    if (isValidEmail(inviteEmail)) {
      onAgentSelected(inviteEmail)
      setInviteEmail("")
      setEmailError("")
      setMode("select")
    } else {
      setEmailError("Please enter a valid email address")
    }
  }

  return (
    <div className="space-y-4">
      {mode === "select" ? (
        <>
          <Select value={currentAgent} onValueChange={onAgentSelected}>
            <SelectTrigger>
              <SelectValue placeholder="Select an agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="John Doe">John Doe</SelectItem>
              <SelectItem value="Jane Smith">Jane Smith</SelectItem>
              <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => setMode("invite")}>
            Invite New Agent
          </Button>
        </>
      ) : (
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter email address"
            value={inviteEmail}
            onChange={(e) => {
              setInviteEmail(e.target.value)
              setEmailError("")
            }}
            className={emailError ? "border-red-500" : ""}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <div className="flex space-x-2">
            <Button onClick={handleInvite} disabled={!inviteEmail}>
              Send Invite
            </Button>
            <Button variant="outline" onClick={() => setMode("select")}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}


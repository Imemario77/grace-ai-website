"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type UserState = "notLoggedIn" | "matchingEmail" | "nonMatchingEmail" | "loading"

export default function InvitationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const invitedEmail = searchParams.get("email") || "invited@example.com"
  const businessName = searchParams.get("business") || "Smith & Sons Funeral Services"
  const [userState, setUserState] = useState<UserState>("loading")
  const [currentUserEmail, setCurrentUserEmail] = useState("current@example.com")

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setUserState("notLoggedIn"), 1000)
  }, [])

  const handleSignIn = () => {
    router.push("/login")
  }

  const handleCreateAccount = () => {
    router.push("/signup")
  }

  const handleAcceptInvitation = () => {
    console.log("Invitation accepted")
  }

  const handleDeclineInvitation = () => {
    console.log("Invitation declined")
  }

  const scenarioButtons: { label: string; state: UserState; email?: string }[] = [
    { label: "Not Logged In", state: "notLoggedIn" },
    { label: "Matching Email", state: "matchingEmail", email: invitedEmail },
    { label: "Non-Matching Email", state: "nonMatchingEmail", email: "different@example.com" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md mb-8">
        <div className="flex justify-center space-x-4 mb-4">
          {scenarioButtons.map((scenario) => (
            <Button
              key={scenario.state}
              variant="outline"
              size="sm"
              onClick={() => {
                setUserState(scenario.state)
                if (scenario.email) setCurrentUserEmail(scenario.email)
              }}
            >
              {scenario.label}
            </Button>
          ))}
        </div>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
            alt="EverGrace.AI Logo"
            width={180}
            height={72}
            priority
            className="mx-auto mb-4 dark:invert"
          />
          <CardTitle className="text-2xl font-bold">You've been invited!</CardTitle>
          <CardDescription className="mt-2">
            {businessName} has invited you to join their Grace AI account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {userState === "loading" && <p className="text-center">Loading...</p>}

          {userState === "notLoggedIn" && (
            <div className="space-y-4">
              <p className="text-center text-muted-foreground mb-4">
                To accept the invitation from {businessName}, please sign in or create an account using{" "}
                <span className="font-medium text-foreground">{invitedEmail}</span>.
              </p>
              <Button onClick={handleSignIn} className="w-full">
                Sign In
              </Button>
              <Button onClick={handleCreateAccount} variant="outline" className="w-full">
                Create Account
              </Button>
            </div>
          )}

          {userState === "matchingEmail" && (
            <div className="space-y-4">
              <p className="text-center text-muted-foreground mb-4">
                You're signed in as <span className="font-medium text-foreground">{currentUserEmail}</span>. Would you
                like to join {businessName}'s Grace AI account?
              </p>
              <Button onClick={handleAcceptInvitation} className="w-full">
                Accept Invitation
              </Button>
              <Button onClick={handleDeclineInvitation} variant="outline" className="w-full">
                Decline
              </Button>
            </div>
          )}

          {userState === "nonMatchingEmail" && (
            <div className="space-y-4">
              <p className="text-center text-muted-foreground">
                You're currently signed in as <span className="font-medium text-foreground">{currentUserEmail}</span>.
                However, this invitation was sent to <span className="font-medium text-foreground">{invitedEmail}</span>
                .
              </p>
              <p className="text-center text-muted-foreground">
                To accept this invitation from {businessName}, please sign out and then sign in or create a new account
                using <span className="font-medium text-foreground">{invitedEmail}</span>.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


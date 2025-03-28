"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

export default function VerifyPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(30)
  const [error, setError] = useState("")

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    // Focus next input
    if (element.value !== "") {
      const nextElement = element.nextElementSibling as HTMLInputElement
      if (nextElement) {
        nextElement.focus()
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if ((e.target as HTMLInputElement).value === "") {
        const prevElement = (e.target as HTMLInputElement).previousElementSibling as HTMLInputElement
        if (prevElement) {
          prevElement.focus()
          setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))])
        }
      } else {
        setOtp([...otp.map((d, idx) => (idx === index ? "" : d))])
      }
    }
  }

  const handleResend = () => {
    setTimeLeft(30)
    // Add resend OTP logic here
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const enteredOtp = otp.join("")

    try {
      // Replace this with your actual OTP verification API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.push("/onboarding")
    } catch (err) {
      setError("Invalid verification code. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
              alt="EverGrace.AI Logo"
              width={180}
              height={72}
              priority
              className="dark:invert"
            />
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-foreground">Verify your email</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We sent a verification code to <span className="font-medium text-foreground">{email}</span>
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl font-semibold rounded-md border border-input bg-background focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.some((digit) => digit === "")}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            {timeLeft > 0 ? (
              <span className="text-muted-foreground">Resend in {timeLeft}s</span>
            ) : (
              <button onClick={handleResend} className="text-primary hover:text-primary/90 font-medium">
                Resend code
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}


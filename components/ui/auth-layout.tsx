import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description: string
  footer?: ReactNode
}

export function AuthLayout({ children, title, description, footer }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-2 mb-8">
            <Link href="/" className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
                alt="EverGrace.AI Logo"
                width={200}
                height={80}
                priority
              />
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-center">{title}</h1>
            <p className="text-muted-foreground text-center">{description}</p>
          </div>
          {children}
        </div>
        {footer && <div className="mt-8 text-center w-full max-w-md">{footer}</div>}
      </div>

      {/* Right side - Branding */}
      <div className="hidden lg:flex bg-secondary flex-col justify-center items-center p-12">
        <div className="max-w-md space-y-8 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20logo%20-%20no%20background-lEmyhiSCoRNGJ8GoX2i2YrIuEvAwci.png"
            alt="EverGrace.AI Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          <h2 className="text-3xl font-bold text-white">Empowering Funeral Homes with AI Voice Assistance</h2>
          <p className="text-gray-300 text-lg">
            Grace AI helps funeral homes provide compassionate service through intelligent call handling, record
            creation, and appointment scheduling.
          </p>
          <div className="pt-8">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white italic">
                "Grace AI has transformed how we handle incoming calls, allowing our staff to focus on providing
                personalized care to families in need."
              </p>
              <p className="text-primary mt-2 font-medium">— Funeral Home Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

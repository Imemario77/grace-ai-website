"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  compact?: boolean
}

export function Logo({ width = 160, height = 64, className = "", compact = false }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure we only render theme-dependent UI after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR
    return <div style={{ width, height }} className={`flex items-center ${className}`} />
  }

  // Update the logoSrc logic to ensure it's using the correct file paths
  // Use compact logos when compact prop is true
  const logoSrc = compact
    ? theme === "dark"
      ? "/images/logo-compact-dark.png"
      : "/images/logo-compact-light.png"
    : theme === "dark"
      ? "/images/logo-dark.png"
      : "/images/logo-light.png"

  return (
    <div className={className}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="EverGrace.AI Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  )
}

export function LogoLink({ width = 160, height = 64, className = "", compact = false }: LogoProps) {
  return (
    <Link href="/">
      <Logo width={width} height={height} className={className} compact={compact} />
    </Link>
  )
}

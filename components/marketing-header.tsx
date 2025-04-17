"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { LogoLink } from "@/components/logo"
import { useScrollHeader } from "@/hooks/use-scroll-header"

export function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useScrollHeader()
  const pathname = usePathname()

  // Don't show header on authentication pages
  if (
    pathname.includes("/login") ||
    pathname.includes("/signup") ||
    pathname.includes("/forgot-password") ||
    pathname.includes("/reset-password") ||
    pathname.includes("/verify") ||
    pathname.includes("/invitation") ||
    pathname.includes("/onboarding")
  ) {
    return null
  }

  return (
    <>
      <header
        className={`border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isScrolled ? "py-1" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoLink
              width={isScrolled ? 140 : 120}
              height={isScrolled ? 40 : 48}
              className="transition-all duration-300 ease-in-out"
              compact={isScrolled}
            />
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/features"
              className={`text-foreground hover:text-primary transition-colors text-sm ${
                isScrolled ? "py-1" : "py-2"
              } ${pathname === "/features" ? "font-semibold" : ""}`}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`text-foreground hover:text-primary transition-colors text-sm ${
                isScrolled ? "py-1" : "py-2"
              } ${pathname === "/how-it-works" ? "font-semibold" : ""}`}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className={`text-foreground hover:text-primary transition-colors text-sm ${
                isScrolled ? "py-1" : "py-2"
              } ${pathname === "/pricing" ? "font-semibold" : ""}`}
            >
              Pricing
            </Link>
            <ThemeToggle />
            <Link href="https://app.evergrace.ai/login">
              <Button
                variant="outline"
                size={isScrolled ? "sm" : "default"}
                className="transition-all duration-300 ease-in-out"
              >
                Sign In
              </Button>
            </Link>
            <Link href="https://app.evergrace.ai/signup">
              <Button size={isScrolled ? "sm" : "default"} className="transition-all duration-300 ease-in-out">
                Get Started
              </Button>
            </Link>
          </motion.nav>
          <motion.div
            className="flex items-center space-x-2 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={isScrolled ? "h-8 w-8" : "h-10 w-10"}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? "h-5 w-5" : "h-6 w-6"} />
              ) : (
                <Menu className={isScrolled ? "h-5 w-5" : "h-6 w-6"} />
              )}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-40 bg-background"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col p-8 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <LogoLink width={100} height={40} className="mb-4" />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <Link
              href="/features"
              className={`text-foreground hover:text-primary transition-colors py-3 border-b border-border ${pathname === "/features" ? "font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`text-foreground hover:text-primary transition-colors py-3 border-b border-border ${pathname === "/how-it-works" ? "font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className={`text-foreground hover:text-primary transition-colors py-3 border-b border-border ${pathname === "/pricing" ? "font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`text-foreground hover:text-primary transition-colors py-3 border-b border-border ${pathname === "/contact" ? "font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="https://app.evergrace.ai/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="https://app.evergrace.ai/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

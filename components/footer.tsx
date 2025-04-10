"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()

  // Don't show footer on authentication pages
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
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">EverGrace.AI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered voice assistance for funeral homes providing compassionate service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                  How It Works
                </Link>
              </li>
              {/* Removed Careers link */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              {/* Removed About Us link */}
              {/* Removed Blog link */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              {/* Removed Cookie Policy link */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} EverGrace.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EverGrace.AI - AI Voice Assistance for Funeral Homes",
  description:
    "AI-powered voice assistance system for funeral homes providing compassionate service through intelligent call handling, record creation, and appointment scheduling.",
    generator: 'v0.dev'
}

// Add a script to scroll to top on navigation
function ScrollToTop() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            // Disable browser's automatic scroll restoration
            window.history.scrollRestoration = 'manual';
            
            // Scroll to top when page loads
            window.addEventListener('load', function() {
              window.scrollTo(0, 0);
            });
            
            // Scroll to top when navigating between pages
            document.addEventListener('DOMContentLoaded', function() {
              window.scrollTo(0, 0);
            });
            
            // Listen for navigation events
            const handleRouteChange = () => {
              window.scrollTo(0, 0);
            };
            
            // Add event listener for route changes
            if (typeof window.navigation !== 'undefined' && window.navigation.addEventListener) {
              window.navigation.addEventListener('navigate', handleRouteChange);
            }
          }
        `,
      }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ScrollToTop />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, FileText, Menu, Clock, X, MessageSquare } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from "@/lib/animations"
import { useState } from "react"

export default function LandingPage() {
  // This hook will scroll to top whenever this page is navigated to
  useScrollTop()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
              alt="EverGrace.AI Logo"
              width={160}
              height={64}
              priority
              className="dark:invert"
            />
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <ThemeToggle />
            <Link href="https://app.evergrace.ai/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="https://app.evergrace.ai/signup">
              <Button>Get Started</Button>
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
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </header>
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
                alt="EverGrace.AI Logo"
                width={120}
                height={48}
                priority
                className="dark:invert"
              />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <Link
              href="/features"
              className="text-foreground hover:text-primary transition-colors py-3 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-foreground hover:text-primary transition-colors py-3 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors py-3 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors py-3 border-b border-border"
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
                variants={fadeIn}
              >
                Empowering Funeral Homes with AI Voice Assistance
              </motion.h1>
              <motion.p className="text-xl text-muted-foreground" variants={fadeIn}>
                Grace AI helps funeral homes provide compassionate service through intelligent call handling, record
                creation, and appointment scheduling.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={fadeIn}>
                <Link href="https://app.evergrace.ai/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn("right")}
            >
              <Image
                src="/images/funeral-service.png"
                alt="Funeral Home Service"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeIn}>
              Comprehensive AI Solutions for Funeral Homes
            </motion.h2>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
              Grace AI provides a suite of tools designed specifically for the funeral service industry, helping you
              serve families with dignity and compassion.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI Call Handling</h3>
              <p className="text-muted-foreground">
                Our AI assistant answers calls 24/7, gathering essential information with empathy and precision,
                ensuring no call goes unanswered.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Automated Record Creation</h3>
              <p className="text-muted-foreground">
                Convert conversations into detailed records automatically, reducing administrative work and ensuring
                accurate information capture.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Allow families to schedule appointments directly through the AI, with seamless integration to your
                existing calendar systems.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Compassionate Communication</h3>
              <p className="text-muted-foreground">
                Our AI is trained specifically for funeral service communication, providing empathetic and respectful
                interactions with families.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Provide round-the-clock service without increasing staff workload, ensuring families receive support
                whenever they need it.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Seamless Integration</h3>
              <p className="text-muted-foreground">
                Easily integrates with your existing systems and workflows, requiring minimal setup and technical
                expertise.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/features">
              <Button size="lg" variant="outline">
                View All Features
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeIn}>
              How Grace AI Works
            </motion.h2>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
              Our AI assistant seamlessly integrates into your funeral home operations, providing immediate value with
              minimal disruption.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Setup Your Account</h3>
              <p className="text-muted-foreground">
                Complete a simple onboarding process to customize Grace AI for your funeral home's specific needs and
                preferences.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Activate Your AI Number</h3>
              <p className="text-muted-foreground">
                Choose a dedicated phone number for Grace AI or integrate with your existing phone system to start
                handling calls.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.5 }}
            >
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Start Serving Families Better</h3>
              <p className="text-muted-foreground">
                Grace AI begins answering calls, scheduling appointments, and creating detailed records immediately,
                while you maintain full control.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/how-it-works">
              <Button size="lg" variant="outline">
                Learn More About How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeIn}>
            Ready to Transform Your Funeral Home Operations?
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeIn}>
            Join the growing community of funeral homes using Grace AI to provide exceptional service while reducing
            administrative burden.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
            <Link href="https://app.evergrace.ai/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
                alt="EverGrace.AI Logo"
                width={160}
                height={64}
                className="mb-4 dark:invert"
              />
              <p className="text-muted-foreground mb-4">
                Empowering funeral homes with AI voice assistance to provide compassionate, efficient service.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Grace AI Solution, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

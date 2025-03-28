"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { MessageSquare, Phone, FileText, Calendar, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  // This hook will scroll to top whenever this page is navigated to
  useScrollTop()

  const steps = [
    {
      number: 1,
      title: "Sign Up and Onboarding",
      description:
        "Create your account and complete our guided onboarding process. Our team will help you customize Grace AI to match your funeral home's specific needs, services, and brand voice.",
    },
    {
      number: 2,
      title: "Choose Your AI Phone Number",
      description:
        "Select a dedicated phone number for Grace AI or integrate with your existing phone system. This number will be used by Grace AI to answer calls and interact with families.",
    },
    {
      number: 3,
      title: "Configure Your Preferences",
      description:
        "Set up your business hours, service offerings, pricing, and other important details. Grace AI will use this information to provide accurate information to callers.",
    },
    {
      number: 4,
      title: "AI Handles Incoming Calls",
      description:
        "Grace AI answers calls 24/7, gathering essential information with empathy and precision. It can answer common questions, provide information about your services, and collect details from callers.",
    },
    {
      number: 5,
      title: "Automated Record Creation",
      description:
        "After each call, Grace AI automatically creates detailed records in your system, including caller information, reason for call, and any specific requests or needs mentioned.",
    },
    {
      number: 6,
      title: "Smart Appointment Scheduling",
      description:
        "Grace AI can schedule appointments directly into your calendar system, ensuring your team is always prepared for upcoming meetings with families.",
    },
    {
      number: 7,
      title: "Continuous Improvement",
      description:
        "Our system learns from each interaction to provide increasingly personalized and effective service. Regular updates and enhancements ensure you always have access to the latest features.",
    },
  ]

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
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
                alt="EverGrace.AI Logo"
                width={160}
                height={64}
                priority
                className="dark:invert"
              />
            </Link>
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-semibold">
              How It Works
            </Link>
            <ThemeToggle />
            <Link href="https://app.evergrace.ai/signin">
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
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="inline-block mb-6 p-2 bg-primary/10 rounded-full" variants={fadeIn}>
              <div className="bg-primary/20 p-3 rounded-full">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              variants={fadeIn}
            >
              How Grace AI <span className="text-primary">Works</span>
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" variants={fadeIn}>
              Discover the simple process of integrating Grace AI into your funeral home operations and transforming how
              you serve families with our innovative technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-16 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-primary to-transparent flex-grow ml-4"
                  variants={fadeIn}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <motion.div className="md:col-span-4 flex items-center justify-center" variants={fadeIn}>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {index % 7 === 0 ? (
                        <Phone className="h-8 w-8 text-primary" />
                      ) : index % 7 === 1 ? (
                        <MessageSquare className="h-8 w-8 text-primary" />
                      ) : index % 7 === 2 ? (
                        <FileText className="h-8 w-8 text-primary" />
                      ) : index % 7 === 3 ? (
                        <Calendar className="h-8 w-8 text-primary" />
                      ) : index % 7 === 4 ? (
                        <CheckCircle className="h-8 w-8 text-primary" />
                      ) : index % 7 === 5 ? (
                        <Phone className="h-8 w-8 text-primary" />
                      ) : (
                        <MessageSquare className="h-8 w-8 text-primary" />
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="md:col-span-8 space-y-4" variants={fadeIn}>
                    <h2 className="text-3xl font-bold text-foreground">{step.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="inline-block mb-6 p-2 bg-primary/10 rounded-full" variants={fadeIn}>
              <div className="bg-primary/20 p-3 rounded-full">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeIn}>
              Benefits of Using <span className="text-primary">Grace AI</span>
            </motion.h2>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
              See how Grace AI transforms your funeral home operations and enhances the service you provide to families.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Never Miss a Call</h3>
              <p className="text-muted-foreground">
                Ensure every family receives immediate attention, regardless of time or staff availability.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reduce Administrative Work</h3>
              <p className="text-muted-foreground">
                Automate record creation and data entry, freeing your staff to focus on providing personalized care.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Streamlined Scheduling</h3>
              <p className="text-muted-foreground">
                Simplify appointment booking and management with automated scheduling capabilities.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Enhanced Service Quality</h3>
              <p className="text-muted-foreground">
                Provide consistent, compassionate service to every family, every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeIn}>
            Ready to Transform Your <span className="text-primary">Funeral Home Operations</span>?
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" variants={fadeIn}>
            Join the growing community of funeral homes using Grace AI to provide exceptional service while reducing
            administrative burden.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
            <Link href="https://app.evergrace.ai/signup">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">
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
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://app.evergrace.ai/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="https://app.evergrace.ai/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
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


"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { MarketingHeader } from "@/components/marketing-header"
import { Logo } from "@/components/logo"
import {
  Phone,
  FileText,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  BarChart,
  Shield,
  Headphones,
  Globe,
  Smartphone,
  Settings,
} from "lucide-react"

export default function FeaturesPage() {
  // This hook will scroll to top whenever this page is navigated to
  useScrollTop()

  const features = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "AI Call Handling",
      description:
        "Our AI assistant answers calls 24/7, gathering essential information with empathy and precision, ensuring no call goes unanswered.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Automated Record Creation",
      description:
        "Convert conversations into detailed records automatically, reducing administrative work and ensuring accurate information capture.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Smart Scheduling",
      description:
        "Allow families to schedule appointments directly through the AI, with seamless integration to your existing calendar systems.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Compassionate Communication",
      description:
        "Our AI is trained specifically for funeral service communication, providing empathetic and respectful interactions with families.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Availability",
      description:
        "Provide round-the-clock service without increasing staff workload, ensuring families receive support whenever they need it.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Seamless Integration",
      description:
        "Easily integrates with your existing systems and workflows, requiring minimal setup and technical expertise.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Detailed Analytics",
      description:
        "Gain insights into call volumes, common requests, and service quality with comprehensive reporting tools.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Data Security",
      description:
        "Enterprise-grade security ensures all sensitive information is protected with encryption and secure storage.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary" />,
      title: "Live Agent Handoff",
      description:
        "Seamlessly transfer complex conversations to human staff when needed, with full context preservation.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multi-language Support",
      description: "Communicate with families in their preferred language with our multilingual AI capabilities.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile Notifications",
      description: "Receive instant alerts about important calls and appointments directly on your mobile device.",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Customizable Workflows",
      description:
        "Tailor the AI's responses and processes to match your funeral home's unique procedures and brand voice.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <MarketingHeader />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" variants={fadeIn}>
              Powerful Features for Funeral Homes
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
              Discover how Grace AI's comprehensive suite of tools can transform your funeral home operations and
              enhance the service you provide to families.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeIn}>
            Ready to Experience These Features?
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
              <Logo width={160} height={64} className="mb-4" />
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
      <Link href="https://app.evergrace.ai/login">
        <Button variant="outline">Sign In</Button>
      </Link>
    </div>
  )
}

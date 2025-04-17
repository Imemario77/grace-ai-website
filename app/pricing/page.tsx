"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MarketingHeader } from "@/components/marketing-header"
import { MarketingFooter } from "@/components/marketing-footer"

export default function PricingPage() {
  const pathname = usePathname()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Introductory Offering for Legacy Council Members
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mt-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that's right for your funeral home
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {/* Trial Offer */}
              <Card className="md:col-span-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold">7 day Trial with all Packages</h3>
                    <p className="text-muted-foreground mt-2">Try any plan risk-free for 7 days</p>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Plan - EverGrace Essentials */}
              <Card className="flex flex-col">
                <CardHeader className="pb-0">
                  <div className="bg-amber-100 dark:bg-amber-900/20 -mx-6 -mt-6 p-4 rounded-t-lg">
                    <div className="text-center font-bold text-lg mb-2">EverGrace Essentials</div>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$25</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-3">
                    {/* Feature items with consistent layout */}
                    <FeatureItem text="Max 25 Orders per month" />
                    <FeatureItem
                      text="Web inquiry response"
                      tooltip="Grace responds to all 'Contact Us' web inquiries"
                    />
                    <FeatureItem
                      text="Automated calling"
                      tooltip="Grace will call and ask questions to gather information"
                    />
                    <FeatureItem
                      text="Conversation transcripts"
                      tooltip="Grace provides transcript & summary conversation in portal"
                    />
                    <FeatureItem text="Director notifications" tooltip="Grace notifies Director of inquiry" />
                    <FeatureItem text="Appointment scheduling" tooltip="Grace schedules appointments with families" />
                    <FeatureItem text="Inquiry analytics" tooltip="Grace provides inquiry analytics and reporting" />
                    <FeatureItem text="Email Support" />
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Advanced Plan - EverGrace Connect */}
              <Card className="flex flex-col">
                <CardHeader className="pb-0">
                  <div className="bg-amber-100 dark:bg-amber-900/20 -mx-6 -mt-6 p-4 rounded-t-lg">
                    <div className="text-center font-bold text-lg mb-2">EverGrace Connect</div>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$99</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-3">
                    <FeatureItem text="Everything in Essentials plan" />
                    <FeatureItem text="Max 50 Orders per month" />
                    <FeatureItem
                      text="Web voice & Chat Concierge"
                      tooltip="Grace acts as a voice and chat concierge agent when users visit your website"
                    />
                    <FeatureItem
                      text="Enhanced analytics"
                      tooltip="Advanced Grace Analytics for deeper insights into customer interactions"
                    />
                    <FeatureItem text="Email Support" />
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Plan - EverGrace Eternal */}
              <Card className="flex flex-col border-primary relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <Badge className="bg-primary text-white px-3 py-1">Best Value</Badge>
                </div>
                <CardHeader className="pb-0">
                  <div className="bg-amber-100 dark:bg-amber-900/20 -mx-6 -mt-6 p-4 rounded-t-lg">
                    <div className="text-center font-bold text-lg mb-2">EverGrace Eternal</div>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$250</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-3">
                    <FeatureItem text="Everything in Connect plan" />
                    <FeatureItem
                      text="24/7 Voice Call Center"
                      tooltip="Full 24/7 AI-Powered Voice Call Center capabilities"
                    />
                    <FeatureItem text="Max 150 Orders per month" />
                    <FeatureItem text="Email Support" />
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full" variant="default" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col">
                <CardHeader className="pb-0">
                  <div className="bg-amber-100 dark:bg-amber-900/20 -mx-6 -mt-6 p-4 rounded-t-lg">
                    <div className="text-center font-bold text-lg mb-2">Enterprise</div>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-2xl font-bold">Call us</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <p className="text-muted-foreground mb-6">
                    Custom solutions for large funeral home groups and enterprise clients with specific needs.
                  </p>
                  <ul className="space-y-3">
                    <FeatureItem text="Everything from EverGrace Eternal" />
                    <FeatureItem text="Custom integrations" />
                    <FeatureItem text="Dedicated account manager" />
                    <FeatureItem text="Custom AI training" />
                    <FeatureItem text="Priority Support" />
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}

// Reusable feature item component with consistent layout
function FeatureItem({ text, tooltip }: { text: string; tooltip?: string }) {
  return (
    <li className="flex items-start">
      <div className="w-5 flex-shrink-0">
        <Check className="h-5 w-5 text-primary" />
      </div>
      <div className="ml-3 flex-1 flex justify-between items-start">
        <span className="text-base">{text}</span>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent side="right" className="max-w-xs p-4">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </li>
  )
}

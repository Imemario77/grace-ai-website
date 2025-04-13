"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export default function TermsOfServicePage() {
  // This hook will scroll to top whenever this page is navigated to
  useScrollTop()

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
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
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

      {/* Content */}
      <div className="container mx-auto py-12 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-foreground">Terms of Use</h1>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                These Terms of Use, together with Grace AI Solution, LLC Privacy Policy, (collectively, the "Terms") set
                forth the terms and conditions that apply to your access and use of the website of Grace AI Solutions,
                LLC. (https://EverGrace.ai) ("us" "we" or "our") and associated services, including services that are
                available through the websites of our client funeral homes and other funeral professionals (together,
                the "Sites"), whether as a client, end-user or customer of a client, or otherwise. "Grace AI Solution"
                includes all officers, directors, employees, consultants, affiliates, parents, subsidiaries, and agents.
                The Terms constitute a legally binding agreement between you, whether personally or on behalf of an
                entity ("you"), and Grace AI Solution concerning your access to and use of the Sites.
              </p>
              <p className="mt-4">
                By using or accessing the Sites, you agree to these Terms, as may be updated from time to time in
                accordance with Section 10 below.
              </p>
              <p className="mt-4 font-bold">PLEASE READ THE FOLLOWING TERMS CAREFULLY.</p>
              <p className="mt-4 font-bold">
                BY CLICKING "I ACCEPT," OR BY DOWNLOADING, INSTALLING, OR OTHERWISE ACCESSING OR USING THE SITES, YOU
                AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE, YOU AGREE TO BE
                BOUND BY, THE TERMS, GRACE AI SOLUTION' PRIVACY POLICY.
              </p>
              <p className="mt-4 font-bold">
                ARBITRATION NOTICE. You agree that disputes arising under these Terms will be resolved by binding,
                individual arbitration as further described in Section 12, and BY ACCEPTING THESE TERMS, YOU AND GRACE
                AI SOLUTION ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
                REPRESENTATIVE PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your
                rights under this contract (except for matters that may be taken to small claims court). Your rights
                will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury.
              </p>
              <p className="mt-4">
                If you do not agree to all the terms and conditions of this Agreement, you may not access or use the
                Sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Account Security</h2>
              <p>
                To use the Sites you must (i) be at least eighteen (18) years of age; (ii) have not previously been
                suspended or removed from the Sites; and (iii) register for and use the Sites in compliance with any and
                all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
              <p>
                To access some features of the Sites, you may be required to register for an account. When you register
                for an account, we may ask you to give us certain identifying information about yourself, including but
                not limited to your email address and other contact information, and to create a user name and password
                ("Registration Information"). When registering for and maintaining an account, you agree to provide
                true, accurate, current, and complete information about yourself. You also agree not to impersonate
                anyone, misrepresent any affiliation with anyone else, use false information, or otherwise conceal your
                identity from Grace AI Solution for any purpose.
              </p>
              <p className="mt-4">
                You are solely responsible for maintaining the confidentiality and security of your password and other
                Registration Information. For your protection and the protection of other users, we ask you not to share
                your Registration Information with anyone else. If you do share this information with anyone, we will
                consider their activities to have been authorized by you. If you have reason to believe that your
                account is no longer secure, you must immediately notify us at hello@EverGrace.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Prohibited</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Use the Sites for any illegal purpose, or in violation of any local, state, national, or international
                  law;
                </li>
                <li>
                  Violate or encourage others to violate the rights of third parties, including intellectual property
                  rights, privacy rights, and/or publicity rights;
                </li>
                <li>
                  Post, upload, or distribute any content that is unlawful, defamatory, libelous, inaccurate, or that a
                  reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing,
                  threatening, hateful, or otherwise inappropriate;
                </li>
                <li>Interfere in any way with security-related features of the Sites;</li>
                <li>
                  Interfere with the operation or any user's enjoyment of the Sites, including by uploading or otherwise
                  disseminating viruses, adware, spyware, worms, or other malicious code, making unsolicited offers or
                  advertisements to other users, or attempting to collect personal information about users or third
                  parties without their consent;
                </li>
                <li>
                  Access, monitor or copy any content or information of the Sites using any robot, spider, scraper, or
                  other automated means or any manual process for any purpose without express written permission from
                  the funeral home who owns the Site(s) and Grace AI Solution;
                </li>
                <li>
                  Use, reproduce, modify, distribute or store any part of the Sites (including obituaries, event
                  information, or other content) for any purpose without the prior written permission of Grace AI
                  Solution;
                </li>
                <li>
                  Perform any fraudulent activity, including impersonating any person or entity, claiming false
                  affiliations, accessing the accounts of other users without permission, or falsifying your identity or
                  any information about you, including age or date of birth; or
                </li>
                <li>Sell or otherwise transfer the access granted herein.</li>
              </ul>
            </section>

            {/* Additional sections would continue here */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Content</h2>
              <p>
                The Sites may contain links to third-party websites and services. Grace AI Solution provides such links
                as a convenience and does not control or endorse these websites and services. You acknowledge and agree
                that Grace AI Solution has not reviewed the content, advertising, products, services, or other materials
                that appear on such third-party websites or services, and is not responsible for the legality, accuracy,
                or appropriateness of any such content, and shall not be responsible or liable, directly or indirectly,
                for any damage or loss caused or alleged to be caused by or in connection with the use of any such
                third-party websites or services.
              </p>
            </section>

            {/* Continue with more sections as needed */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p>
                You acknowledge and agree that when you submit an obituary, post comments, submit a tribute video, or
                post or submit other content (together, "Content") to Grace AI Solution or any website of any Client
                operated by Grace AI Solution, such content will be shared with and stored by Grace AI Solution and its
                affiliates and partners. The Sites are owned by our funeral home clients and are protected by applicable
                copyright and other intellectual property laws, and no materials from the Sites may be copied,
                reproduced, republished, uploaded, posted, transmitted, or distributed in any way without express
                permission of the funeral home. Grace AI Solution owns or has duly licensed: a) all images it makes
                available for your use in creating memorials; b) the software and other technology it makes available to
                you for creating memorials; and c) the EverGrace TM trademark.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User License Grant to Tukios</h2>
              <p>
                You grant Grace AI Solution, its affiliates, and related entities a royalty-free, perpetual,
                irrevocable, non-exclusive right and license to use, copy, modify, display, archive, store, publish,
                transmit, perform, distribute, reproduce and create derivative works from all Content you provide to
                Grace AI Solution in any form, media, software or technology of any kind now existing or developed in
                the future. Without limiting the generality of the previous sentence, you authorize Grace AI Solution to
                include the Content you provide in a searchable format that may be accessed by users of the Grace AI
                Solution services and other websites. You also grant Grace AI Solution and its affiliates and related
                entities the right to use your name and any other information about you that you provide in connection
                with the use, reproduction or distribution of such Content. You also grant Grace AI Solution the right
                to use the Content and any facts, ideas, concepts, know-how or techniques ("Information") contained in
                any Content or communication you send to us for any purpose whatsoever, including but not limited to,
                developing, manufacturing, promoting and/or marketing products and services. You grant all rights
                described in this paragraph in consideration of your use of the Grace AI Solution services and Sites
                without the need for additional compensation of any sort to you. Grace AI Solution does not claim
                ownership of Content you submit to the Sites.
              </p>
            </section>

            {/* More sections would be added here to complete the Terms of Service */}
          </div>
        </motion.div>
      </div>

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

"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { LogoLink, Logo } from "@/components/logo"

export default function PrivacyPolicyPage() {
  // This hook will scroll to top whenever this page is navigated to
  useScrollTop()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoLink width={120} height={48} />
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-6">Effective Date: March 1, 2025</p>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                Choice Appointments LLC ("us", "we", or "our") operates the https://www.EverGrace.ai website (the
                "Service"), which is the EverGrace product. This page informs you of our policies regarding the
                collection, use, and disclosure of personal data when you use our Service and the choices you have
                associated with that data.
              </p>
              <p className="mt-4">
                By using the Service, you agree to the collection and use of information in accordance with this policy.
                Unless otherwise defined herein, terms used in this Privacy Policy have the same meanings as in our
                Terms and Conditions, accessible from https://www.EverGrace.ai
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information Collection and Use</h2>
              <p>
                We collect various types of information for several purposes to provide and improve our Service for you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Data Collected</h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Personal Data</h3>
              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email Address</li>
                <li>First and Last Name</li>
                <li>Phone Number</li>
                <li>Address, State, Province, ZIP/Postal Code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
              <p>We may also collect information how the Service is accessed and used ("Usage Data").</p>
              <p className="mt-2">
                This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our Service that you visit, the time and date of
                your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Tracking and Cookies Data</h3>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain
                information.
              </p>
              <p className="mt-2">
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies
                are sent to your browser from a website and stored on your device. Tracking technologies also used are
                beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
              </p>
              <p className="mt-2">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p className="mt-2">Examples of Cookies we use:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Session Cookies.</strong> We use Session Cookies to operate our Service.
                </li>
                <li>
                  <strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and
                  various settings.
                </li>
                <li>
                  <strong>Security Cookies.</strong> We use Security Cookies for security purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use of Data</h2>
              <p>Choice Appointments LLC uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Google Workspace API Integration and Data Handling</h2>
              <h3 className="text-xl font-medium mt-6 mb-3">Google Workspace API Data</h3>
              <p>
                When you connect your Google account, our application utilizes Google Workspace APIs. In this context:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Limited Data Storage:</strong> We store only a refresh token required for authentication and
                  authorization. No additional user data obtained from Google Workspace APIs is retained.
                </li>
                <li>
                  <strong>User-Controlled Data Access:</strong> Users can easily revoke their connection from the app
                  settings, which effectively removes the association and any stored refresh token.
                </li>
                <li>
                  <strong>No AI/ML Training with User Data:</strong> Our application does not retain user data acquired
                  through Google Workspace APIs for the purpose of developing, improving, or training generalized AI and
                  ML models. Instead, our AI functionality is powered by external Gemini LLM APIs. We do not use
                  Workspace API data for training or fine-tuning any AI models.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention and Deletion</h2>
              <p>We design our practices to prioritize both data utility and your privacy:</p>

              <h3 className="text-xl font-medium mt-6 mb-3">Retention Practices:</h3>
              <p>
                The only information retained from the Google Workspace integration is the refresh token used for
                maintaining session continuity. Once a user revokes their connection, access to the associated token is
                terminated, and no further user data is stored from that integration.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Deletion Procedures:</h3>
              <p>
                You can disconnect your Google account at any time using our Service settings. Upon revocation, any
                stored refresh token is promptly invalidated. Additionally, if you request deletion, we commit to
                removing any data retained as part of this authentication process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Transfer of Data</h2>
              <p>
                Your information, including Personal Data, may be transferred to—and maintained on—computers located
                outside of your state, province, country or other governmental jurisdiction where the data protection
                laws may differ than those from your jurisdiction.
              </p>
              <p className="mt-4">
                If you are located outside United States and choose to provide information to us, please note that we
                transfer the data, including Personal Data, to United States and process it there.
              </p>
              <p className="mt-4">
                Your consent to this Privacy Policy followed by your submission of such information represents your
                agreement to that transfer.
              </p>
              <p className="mt-4">
                Choice Appointments LLC will take all steps reasonably necessary to ensure that your data is treated
                securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take
                place to an organization or a country unless there are adequate controls in place including the security
                of your data and other personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Disclosure of Data</h2>
              <h3 className="text-xl font-medium mt-6 mb-3">Legal Requirements</h3>
              <p>
                Choice Appointments LLC may disclose your Personal Data in the good faith belief that such action is
                necessary to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Choice Appointments LLC</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Service Providers</h2>
              <p>
                We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to
                provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
                our Service is used.
              </p>
              <p className="mt-4">
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Analytics</h2>
              <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

              <h3 className="text-xl font-medium mt-6 mb-3">Google Analytics</h3>
              <p>
                Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
                Google uses the data collected to track and monitor the use of our Service. This data is shared with
                other Google services. Google may use the collected data to contextualize and personalize the ads of its
                own advertising network.
              </p>
              <p className="mt-4">
                You can opt-out of having made your activity on the Service available to Google Analytics by installing
                the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
                analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
              </p>
              <p className="mt-4">
                For more information on the privacy practices of Google, please visit the Google Privacy & Terms web
                page:
                <Link href="https://policies.google.com/privacy?hl=en" className="text-primary ml-1 hover:underline">
                  https://policies.google.com/privacy?hl=en
                </Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy
                Policy of every site you visit.
              </p>
              <p className="mt-4">
                We have no control over and assume no responsibility for the content, privacy policies or practices of
                any third party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
              <p>Our Service does not address anyone under the age of 18 ("Children").</p>
              <p className="mt-4">
                We do not knowingly collect personally identifiable information from anyone under the age of 18. If you
                are a parent or guardian and you are aware that your Children has provided us with Personal Data, please
                contact us. If we become aware that we have collected Personal Data from children without verification
                of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to this Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </p>
              <p className="mt-4">
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                effective and update the "effective date" at the top of this Privacy Policy.
              </p>
              <p className="mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  By phone at{" "}
                  <a href="tel:4847348100" className="text-primary hover:underline">
                    484-734-8100
                  </a>
                </li>
                <li>
                  By email at{" "}
                  <a href="mailto:hello@EverGrace.ai" className="text-primary hover:underline">
                    hello@EverGrace.ai
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>

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
            <p>&copy; {new Date().getFullYear()} Choice Appointments LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

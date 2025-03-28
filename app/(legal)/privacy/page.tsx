import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20logo%20-%20no%20background-oObeh6HaSfjlziwnlfa5ewGeCBEnGN.png"
              alt="EverGrace.AI Logo"
              width={180}
              height={72}
              priority
              className="dark:invert"
            />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-6">Effective Date: March 1, 2025</p>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                Grace AI Solution, LLC. ("us", "we", or "our") operates the https://www.EverGrace.ai website (the
                "Service"). This page informs you of our policies regarding the collection, use, and disclosure of
                personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="mt-4">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection
                and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy,
                terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from
                https://www.EverGrace.ai
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
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
              <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
              <p>Grace AI Solution, LLC. uses the collected data for various purposes:</p>
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
              <h2 className="text-2xl font-semibold mb-4">Transfer of Data</h2>
              <p>
                Grace AI Solution WILL NOT share your data with any other integrated platforms or third parties,
                including but not limited to case management systems, obituary publishing providers, answering services,
                etc., or other systems required for day to day operation unless directed to do so by the funeral home.
              </p>
              <p className="mt-4">
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
                Grace AI Solution, LLC. will take all steps reasonably necessary to ensure that your data is treated
                securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take
                place to an organization or a country unless there are adequate controls in place including the security
                of your data and other personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclosure of Data</h2>
              <h3 className="text-xl font-medium mt-6 mb-3">Legal Requirements</h3>
              <p>
                Grace AI Solution, LLC. may disclose your Personal Data in the good faith belief that such action is
                necessary to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Grace AI Solution, LLC.</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Links to Other Sites</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p>Our Service does not address anyone under the age of 18 ("Children").</p>
              <p className="mt-4">
                We do not knowingly collect personally identifiable information from anyone under the age of 18. If you
                are a parent or guardian and you are aware that your Children has provided us with Personal Data, please
                contact us. If we become aware that we have collected Personal Data from children without verification
                of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
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
        </div>
      </div>
    </div>
  )
}


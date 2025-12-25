import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Gavel, Scale, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge className="py-1 px-3 text-sm">Last Updated: March 1, 2025</Badge>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <Gavel className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Legal Agreement</h3>
                    <p className="text-sm text-muted-foreground">These terms form a binding legal agreement</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Scale className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Your Rights</h3>
                    <p className="text-sm text-muted-foreground">Understand what you can and cannot do</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <FileText className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Responsibilities</h3>
                    <p className="text-sm text-muted-foreground">Know your obligations when using our services</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Brokle&apos;s website, products, or services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you should not use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Brokle, Inc. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services following any changes indicates your acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p>
                  Brokle provides a data annotation and labeling platform that allows users to create, manage, and analyze datasets for machine learning and AI development. Our services include annotation tools, collaboration features, data management capabilities, and related functionality as described on our website.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice or liability.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p>
                  To use certain features of our services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
                <p>
                  We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Subscription and Billing</h2>
                <p>
                  Some of our services are offered on a subscription basis. You agree to pay all fees charged to your account based on the pricing and billing terms presented to you at the time of purchase.
                </p>
                <p>
                  Unless otherwise stated, subscriptions automatically renew for additional periods equal to the original subscription term. You may cancel your subscription at any time through your account settings or by contacting us.
                </p>
                <p>
                  We reserve the right to change our prices at any time. If we change prices, we will provide notice of the change on our website or by email, at our option, at least 30 days before the change is effective. Your continued use of our services after the price change becomes effective constitutes your agreement to pay the changed amount.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
                <p>
                  Our services allow you to upload, submit, store, send, or receive content (&quot;User Content&quot;). You retain ownership of any intellectual property rights that you hold in that User Content.
                </p>
                <p>
                  When you upload, submit, store, send, or receive User Content through our services, you give us (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such User Content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our services.
                </p>
                <p>
                  You represent and warrant that you have (and will maintain) all rights necessary to grant us the license above and that your User Content does not violate any third party rights or applicable laws.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Prohibited Uses</h2>
                <p>
                  You agree not to use our services:
                </p>
                <ul>
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                  <li>To impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                  <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of our services</li>
                  <li>To attempt to gain unauthorized access to our services, user accounts, or computer systems</li>
                  <li>To transmit any viruses, malware, or other harmful code</li>
                  <li>To collect or harvest any information from our services or users without authorization</li>
                  <li>To use our services for any commercial purpose not expressly permitted by us</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Intellectual Property Rights</h2>
                <p>
                  Our services and all content, features, and functionality thereof (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  These Terms do not grant you any rights to use our trademarks, logos, domain names, or other brand features. Any feedback, comments, or suggestions you may provide regarding our services is entirely voluntary, and we will be free to use such feedback, comments, or suggestions as we see fit without any obligation to you.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
                </p>
                <p>
                  We make no warranty that our services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality, accuracy, timeliness, truthfulness, completeness, or reliability of any content available through our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE OR OUR AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, OUR SERVICES.
                </p>
                <p>
                  UNDER NO CIRCUMSTANCES WILL OUR AGGREGATE LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID US IN THE THREE MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN US AND YOU.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services, your User Content, or your violation of these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">11. Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms and any dispute arising out of or related to these Terms or our services shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule.
                </p>
                <p>
                  Any legal suit, action, or proceeding arising out of or related to these Terms or our services shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in San Francisco County. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">12. Miscellaneous</h2>
                <p>
                  These Terms constitute the entire agreement between you and us regarding our services and supersede all prior agreements and understandings, whether written or oral, regarding our services.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions of these Terms will remain in full force and effect.
                </p>
                <p>
                  We may assign or transfer these Terms, in whole or in part, without restriction. You may not assign or transfer your rights or obligations under these Terms without our prior written consent.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <ul>
                  <li>Email: legal@brokle.com</li>
                  <li>Address: 123 Main Street, Suite 100, San Francisco, CA 94105</li>
                  <li>Phone: (555) 123-4567</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Legal FAQ</Badge>
              <h2 className="text-3xl font-bold mb-4">Common Legal Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to frequently asked questions about our terms and conditions.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I terminate my account?</AccordionTrigger>
                <AccordionContent>
                  You can terminate your account at any time by going to your account settings and selecting the &quot;Delete Account&quot; option, or by contacting our support team at support@brokle.com. Upon termination, you will lose access to our services, and we will delete your data in accordance with our Privacy Policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Who owns the data I upload to your platform?</AccordionTrigger>
                <AccordionContent>
                  You retain ownership of all data you upload to our platform. We only use your data as necessary to provide our services to you, as described in our Terms of Service. We do not claim ownership of your data, and we do not use it for purposes other than providing and improving our services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use your platform for commercial purposes?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can use our platform for commercial purposes, including for your business or organization. However, you may not resell or redistribute access to our platform without our explicit permission, and you must comply with all terms and conditions regarding usage limits and prohibited uses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if you change the Terms of Service?</AccordionTrigger>
                <AccordionContent>
                  When we make material changes to our Terms of Service, we will provide notice through our website or by email at least 30 days before the changes take effect. Your continued use of our services after the changes take effect constitutes your acceptance of the new Terms. If you do not agree with the changes, you must stop using our services and terminate your account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is my subscription automatically renewed?</AccordionTrigger>
                <AccordionContent>
                  Yes, subscriptions automatically renew for additional periods equal to your original subscription term. You can cancel auto-renewal at any time through your account settings or by contacting our support team. If you cancel, you will still have access to the services until the end of your current billing period, at which point your subscription will not renew.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our legal team is available to help with any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Legal Team <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
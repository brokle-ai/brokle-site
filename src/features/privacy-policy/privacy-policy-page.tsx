import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Shield, User } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Learn how we collect, use, and protect your personal information.
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
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Data Protection</h3>
                    <p className="text-sm text-muted-foreground">We use industry-standard security measures to protect your data</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <User className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Your Rights</h3>
                    <p className="text-sm text-muted-foreground">You maintain control over your personal information</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <FileText className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium mb-2">Transparency</h3>
                    <p className="text-sm text-muted-foreground">We clearly explain how your data is used</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy describes how Brokle (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares your personal information when you use our website, products, or services. We respect your privacy and are committed to protecting your personal information.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-3">2.1 Information You Provide</h3>
                <p>We collect information you provide directly to us, including:</p>
                <ul>
                  <li>Account information (name, email address, password, etc.)</li>
                  <li>Profile information (job title, company, profile picture, etc.)</li>
                  <li>Content you upload, submit, or create within our services</li>
                  <li>Billing information (credit card details, billing address, etc.)</li>
                  <li>Communications you send to us (support requests, feedback, etc.)</li>
                </ul>

                <h3 className="text-xl font-medium mb-3 mt-6">2.2 Information Collected Automatically</h3>
                <p>When you use our services, we automatically collect certain information, including:</p>
                <ul>
                  <li>Device information (IP address, browser type, operating system, etc.)</li>
                  <li>Usage information (pages visited, features used, actions taken, etc.)</li>
                  <li>Log data (time and duration of use, error reports, etc.)</li>
                  <li>Location information (based on IP address or GPS with your consent)</li>
                  <li>Information collected through cookies and similar technologies</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p>We use your information for various purposes, including to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and manage your account</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Protect the rights and property of Brokle and others</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li>With service providers who perform services on our behalf</li>
                  <li>With business partners with your consent</li>
                  <li>In connection with a merger, sale, or acquisition of all or a portion of our company</li>
                  <li>To comply with legal obligations or protect rights</li>
                  <li>When you direct us to share your information</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>Accessing, correcting, or deleting your personal information</li>
                  <li>Withdrawing your consent at any time</li>
                  <li>Requesting portability of your personal information</li>
                  <li>Objecting to certain processing of your personal information</li>
                  <li>Opting out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@brokle.com.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                <p>
                  Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We take steps to ensure that your personal information receives an adequate level of protection wherever it is processed.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul>
                  <li>Email: privacy@brokle.com</li>
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
              <Badge className="mb-4">Privacy FAQ</Badge>
              <h2 className="text-3xl font-bold mb-4">Common Privacy Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to frequently asked questions about our privacy practices.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you protect my data?</AccordionTrigger>
                <AccordionContent>
                  We implement industry-standard security measures including encryption, access controls, regular security assessments, and ongoing monitoring to protect your data. All data is encrypted both in transit and at rest, and we maintain strict access controls to ensure only authorized personnel can access your information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I request deletion of my personal information?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can request deletion of your personal information at any time by contacting privacy@brokle.com. We will process your request within 30 days. Please note that some information may be retained for legal or business purposes, such as to comply with our legal obligations, resolve disputes, or enforce our agreements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you share my data with third parties?</AccordionTrigger>
                <AccordionContent>
                  We only share your data with third-party service providers who help us operate our business and deliver services to you. These providers are contractually obligated to use your information only for the services they provide to us and are prohibited from using your information for their own purposes. We do not sell your personal information to third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How long do you keep my data?</AccordionTrigger>
                <AccordionContent>
                  We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including to provide you with our services, comply with legal obligations, resolve disputes, and enforce our agreements. The specific retention period depends on the type of information and the purpose for which it was collected.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What happens to my data if I cancel my account?</AccordionTrigger>
                <AccordionContent>
                  When you cancel your account, your personal information will be deleted or anonymized within 30 days, except for information that we are required to keep for legal or business purposes. You can also request immediate deletion of your data by contacting our privacy team at privacy@brokle.com.
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
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our privacy team is here to help with any questions about your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Privacy Team <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
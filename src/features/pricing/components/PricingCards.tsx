'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { pricingTiers, addOns } from "@/data/pricing-tiers"

export default function PricingCards() {
  return (
    <>
      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              {/* Monthly Plans */}
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingTiers.map((tier) => (
                    <Card key={tier.id} className={tier.highlighted ? "border-primary relative shadow-lg" : "relative"}>
                      {tier.badge && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          {tier.badge}
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-4xl font-extrabold">
                            {tier.priceDisplay.monthly}
                          </span>
                          {tier.price.monthly !== null && tier.price.monthly !== 0 && (
                            <span className="ml-1 text-lg font-medium text-muted-foreground">/mo</span>
                          )}
                        </div>
                        <CardDescription className="mt-2 text-sm">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <ul className="space-y-2.5">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant={tier.cta.variant as "default" | "outline"}
                          className="w-full"
                          asChild
                        >
                          <Link href={tier.cta.href}>
                            {tier.cta.text}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Annual Plans */}
              <TabsContent value="annual">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingTiers.map((tier) => (
                    <Card key={tier.id} className={tier.highlighted ? "border-primary relative shadow-lg" : "relative"}>
                      {tier.badge && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          {tier.badge}
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-4xl font-extrabold">
                            {tier.priceDisplay.annual}
                          </span>
                          {tier.price.annual !== null && tier.price.annual !== 0 && (
                            <span className="ml-1 text-lg font-medium text-muted-foreground">/mo</span>
                          )}
                        </div>
                        <CardDescription className="mt-2 text-sm">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <ul className="space-y-2.5">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant={tier.cta.variant as "default" | "outline"}
                          className="w-full"
                          asChild
                        >
                          <Link href={tier.cta.href}>
                            {tier.cta.text}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-8 text-sm text-muted-foreground">
              All paid plans include a 14-day free trial. No credit card required to start.
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Add-ons</Badge>
            <h2 className="text-3xl font-bold mb-4">Scale as you need</h2>
            <p className="text-lg text-muted-foreground">
              Need more capacity? Add these to any plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn) => (
              <Card key={addOn.id} className="border-0 shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{addOn.name}</CardTitle>
                  <div className="mt-2 text-xl font-bold">
                    ${addOn.price}
                    <span className="text-sm font-medium text-muted-foreground">{addOn.priceUnit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{addOn.description}</p>
                  <ul className="space-y-2">
                    {addOn.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

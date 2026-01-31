"use client"
import { useState } from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

import { motion } from "framer-motion"

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "5GB storage", "Basic analytics", "Community support", "Monthly updates"],
    limitations: ["Advanced analytics", "Priority support", "Custom integrations"],
    cta: "Get started",
    link: "/signup?plan=starter",
  },
  {
    name: "Professional",
    price: { monthly: 79, yearly: 790 },
    description: "For growing teams and businesses",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Weekly updates",
      "Custom integrations",
    ],
    limitations: ["Unlimited storage", "24/7 dedicated support", "SLA guarantee"],
    cta: "Get started",
    link: "/signup?plan=professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 199, yearly: 1990 },
    description: "For large-scale operations",
    features: [
      "Unlimited everything",
      "Unlimited storage",
      "Real-time analytics",
      "24/7 dedicated support",
      "Daily updates",
      "Custom integrations",
      "SLA guarantee",
    ],
    limitations: [],
    cta: "Get started",
    link: "/signup?plan=enterprise",
    highlighted: true,
  },
]

export default function PriceSection() {
  const [frequency, setFrequency] = useState("monthly")

  return (
    <section id="pricing" className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-background rounded-t-4xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-2 text-center">
            <div className="space-y-1">
              <h1 className="text-xl font-medium md:text-4xl text-balance">
                Simple, Transparent{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Pricing</span>
                  <svg
                    className="absolute -inset-x-2.5 -inset-y-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] text-primary select-none pointer-events-none -rotate-12"
                    viewBox="0 0 160 60"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <motion.path
                      d="M 10,30 C 10,10 50,5 90,8 C 130,11 150,15 150,30 C 150,45 120,55 80,52 C 40,49 10,45 10,30"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
            </div>
            <div className="mx-auto flex w-fit rounded-full bg-[#eceae8] p-1">
              {["monthly", "yearly"].map((freq) => (
                <Tab
                  key={freq}
                  text={freq}
                  selected={frequency === freq}
                  setSelected={setFrequency}
                  discount={freq === "yearly"}
                />
              ))}
            </div>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} frequency={frequency} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

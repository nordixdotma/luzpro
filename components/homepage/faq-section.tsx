"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQs = [
  {
    question: "What precisely distinguishes the Starter plan from the Professional plan, and how do I know which one is right for my current business stage?",
    answer:
      "The Starter plan is perfect for individuals with up to 5 projects and basic analytics needs. The Professional plan unlocks unlimited projects, advanced analytics, priority support, and is designed for growing teams who need more power and flexibility.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, absolutely. You can upgrade or downgrade your plan at any time from your dashboard. If you upgrade, the change is instant. If you downgrade, it will take effect at the end of your billing cycle without any data loss.",
  },
  {
    question: "Is there a free trial available for new users?",
    answer:
      "We offer a 14-day free trial for all new users on our Professional and Enterprise plans, so you can experience the full power of LUZ Pro risk-free with access to all premium features.",
  },
  {
    question: "What kind of dedicated support can I expect from the LUZ Pro team if I encounter technical issues with my account?",
    answer:
      "All customers receive access to our community support. Professional and Enterprise customers get access to Priority Support with faster response times and dedicated account managers for large-scale operations.",
  },
  {
    question: "Do you offer custom integrations with other tools?",
    answer:
      "Yes! Custom integrations are available on our Professional and Enterprise plans. We support seamless connections with major tools like Slack, Notion, GitHub, and more to fit into your existing workflow.",
  },
  {
    question: "Is my sensitive project data securely stored and encrypted with LUZ Pro, and what compliance standards do you follow?",
    answer:
      "Security is our top priority. We use industry-standard encryption for data in transit and at rest, and we perform regular security audits to ensure your data is always safe and compliant with best practices.",
  },
  {
    question: "What happens if I exceed my current storage limits mid-billing cycle, and will my projects be interrupted in any way?",
    answer:
      "If you near your storage limit, we'll notify you. You can choose to upgrade your plan or contact support for a custom storage add-on. We won't interrupt your work, but you won't be able to upload new files until the limit is addressed.",
  },
  {
    question: "Do you offer any discounts for users on yearly plans?",
    answer:
      "Yes, you save significantly by choosing annual billing. Our yearly plans effectively give you 2 months free compared to paying monthly, making it the most cost-effective choice for long-term projects.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleInteraction = (index: number | null, isHover: boolean) => {
    // Only handle hover on desktop (min-width: 768px as a rule of thumb)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      if (isHover) setOpenIndex(index)
      else setOpenIndex(null)
    }
  }

  const handleClick = (index: number) => {
    // Handle click for mobile and as a fallback
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-10 px-3 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-xl font-bold md:text-4xl text-balance text-black">
            <span className="relative inline-block">
              <span className="relative z-10">Frequently</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[6px] md:h-[10px] text-primary select-none pointer-events-none"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 20c40-5 90-5 130 2c35 5 55 5 65-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
            </span>{" "}
            asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-7xl mx-auto items-stretch">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => handleInteraction(index, true)}
              onMouseLeave={() => handleInteraction(null, false)}
              onClick={() => handleClick(index)}
              className={`group border-2 transition-colors duration-200 rounded-sm bg-[#f3f1ef] overflow-hidden cursor-pointer h-full ${
                openIndex === index ? "border-primary" : "border-[#e5e7eb] hover:border-primary"
              }`}
            >
              <button
                className="w-full text-left px-3 py-3 sm:px-5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className={`font-medium text-base transition-colors duration-200 leading-tight ${
                  openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                }`}>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                    openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-3 pb-3 sm:px-5 sm:pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

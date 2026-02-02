"use client"

import { motion } from "framer-motion"

const useCases = [
  {
    role: "Legal",
    description: "Automate audits and ensure compliance across all contracts.",
    image: "/one.svg",
  },
  {
    role: "Sales",
    description: "Close deals faster with AI drafting and CRM sync.",
    image: "/one.svg",
  },
  {
    role: "Procurement",
    description: "Master renewals and cut costs with automated tracking.",
    image: "/one.svg",
  },
  {
    role: "HR & People",
    description: "Streamline NDAs and centralize employee agreements.",
    image: "/one.svg",
  },
]

export default function UseCasesSection() {
  return (
    <section className="w-full py-10 px-2 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl font-bold md:text-4xl text-balance">
            <span className="relative inline-block">
              <span className="relative z-10">One</span>
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
            </span>{" "}
            platform for every team
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Luz brings speed to Sales, precision to Legal, and total control to Procurement. One platform, unified workflows.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 mt-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.role}
              className="relative flex flex-col bg-white rounded-sm md:rounded-lg overflow-hidden border-2 border-[#e5e7eb] transition-all duration-300 cursor-pointer hover:border-primary group"
            >
              {/* Image Container */}
              <div className="relative h-36 md:h-56 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.role}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-2 md:p-4 flex flex-col flex-1">
                <div className="space-y-0.5 mb-3">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors">{useCase.role}</h3>
                  <p className="text-neutral-500 text-[11px] md:text-sm">
                    {useCase.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-2 border-t border-gray-50">
                  <button className="text-[10px] md:text-[14px] font-semibold flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                    See how {useCase.role} uses Luz ➔
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

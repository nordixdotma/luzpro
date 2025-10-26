"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Shield, Rocket } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Black background container */}
        <div className="bg-black rounded-2xl px-20 py-12">
          {/* Centered content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium md:text-5xl text-white mb-4 text-balance">
              Ready to transform your contracts?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8 text-balance max-w-2xl mx-auto">
              Join thousands of teams already using Luz Pro to streamline their contract management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup?plan=starter">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 cursor-pointer w-full font-semibold"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-white/10 border border-white text-white rounded-full px-8 py-6 cursor-pointer w-full font-semibold"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Three columns with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/70 text-sm">
                Process contracts in minutes, not days. Automated workflows save your team hours every week.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/70 text-sm">
                Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-2">Scale Effortlessly</h3>
              <p className="text-white/70 text-sm">
                Handle unlimited contracts and team members. Grow without worrying about infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

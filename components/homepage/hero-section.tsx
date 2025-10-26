"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-2 mt-16 px-2 py-1 rounded-full bg-[#eceae8]">
          <span className="text-sm font-bold text-black/50">Contract management reimagined</span>
        </div>

        <h1 className="text-6xl font-bold mb-2 text-balance text-black">
          Where teams{" "}
          <span className="inline-flex -space-x-3">
            <img
              src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Team avatars"
              className="h-12 rounded-full border-4 border-background"
            />
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Team avatars"
              className="h-12 rounded-full border-4 border-white"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080"
              alt="Team avatars"
              className="h-12 rounded-full border-4 border-white"
            />
          </span>
          turn agreements into motion.
        </h1>

        <p className="text-lg sm:text-xl font-medium text-black/50 mb-6 text-balance max-w-2xl mx-auto">
          Streamline your contract workflows and accelerate deal closure with intelligent automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup?plan=starter">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 border-2 border-gray text-black font-bold rounded-full px-7 py-6 cursor-pointer w-full"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="#demo">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white font-bold rounded-full px-7 py-6 cursor-pointer w-full"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="mt-10 w-full">
          <img src="/hero.png" alt="Hero dashboard" className="w-full rounded-xl border-[6px] border-white/30 backdrop-blur-xl shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

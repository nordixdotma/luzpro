"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-balance text-black">
          Where the creativity & strategy meet
        </h1>
        <p className="text-lg sm:text-xl text-black/80 mb-8 text-balance max-w-2xl mx-auto">
          Create beautiful, responsive web experiences with our modern platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup?plan=starter">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 border border-primary text-primary-foreground rounded-full px-7 py-6 cursor-pointer w-full"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="#demo">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white text-black hover:text-black bg-white hover:bg-white cursor-pointer w-full px-7 py-6"
            >
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

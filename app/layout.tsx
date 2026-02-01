import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Caveat } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "L U Z",
  description: "L U Z",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${caveat.variable} antialiased relative`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

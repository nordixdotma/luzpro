import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://luzpro.vercel.app"),
  title: {
    default: "L U Z",
    template: "%s | LUZ",
  },
  description: "Streamline your contract workflows and accelerate deal closure with intelligent automation. Turn agreements into motion with LUZ, the modern platform for contract management.",
  keywords: ["contract management", "legal automation", "workflow automation", "deal closure", "agreement management", "SaaS", "LUZ"],
  authors: [{ name: "LUZ Team" }],
  creator: "LUZ",
  publisher: "LUZ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luzpro.vercel.app",
    siteName: "LUZ",
    title: "LUZ | Contract Management Reimagined",
    description: "Streamline your contract workflows and accelerate deal closure with intelligent automation.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "LUZ - Contract Management Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUZ | Contract Management Reimagined",
    description: "Streamline your contract workflows and accelerate deal closure with intelligent automation.",
    images: ["/icon.png"],
    creator: "@luzpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
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

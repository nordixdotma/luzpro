"use client"

import {
  Shield,
  FileText,
  BookOpen,
  Info,
  Cookie,
  FileQuestion,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full text-foreground pt-16 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Social */}
          <div className="flex flex-col justify-between">
            <div className="flex justify-center">
              <a href="https://instagram.com/Luzdotma">
                {/* Use CSS drop-shadow so shadow follows non-transparent pixels of the PNG */}
                <img src="/blacklogo.png" alt="Luz Logo" className="h-20" />
              </a>
            </div>

            {/* Social icons - centered at bottom, black filled circle with white icon */}
            <div className="flex justify-center gap-3 mt-4">
              <a
                href="https://twitter.com/Luzdotma"
                aria-label="Twitter"
                className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:opacity-90 transition"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://instagram.com/Luzdotma"
                aria-label="Instagram"
                className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:opacity-90 transition"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/luzdotma"
                aria-label="LinkedIn"
                className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:opacity-90 transition"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* PLATFORM*/}
          <div className="grid grid-cols-2 gap-4">
            {/* PLATFORM */}
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*LEGAL */}
          <div className="grid grid-cols-2 gap-4">
            {/* PLATFORM */}
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground/60">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground font-semibold hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Logo */}
          <div>
            <div>
              <a href="https://instagram.com/Luzdotma">
                {/* Use CSS drop-shadow so shadow follows non-transparent pixels of the PNG */}
                <img
                  src="/coloredlogo.png"
                  alt="Luz Logo"
                  className="inline-block logo-drop"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10" />

        {/* Bottom - grid layout: left=status, center=nav (centered), right=copyright */}
       <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4 py-8">
          {/* Left: status pill */}
          <div className="flex justify-start">
            <div className="bg-white rounded-full px-3 py-2 flex items-center text-sm border-2 border-gray-200">
              <span
                className="w-2 h-2 bg-emerald-500 rounded-full mr-2 inline-block animate-pulse"
                aria-hidden="true"
              />
              <span className="text-foreground/60 font-medium">All Systems operational</span>
            </div>
          </div>

          {/* Center: nav (centered on md and larger; sits between left & right) */}
          <nav className="flex justify-center pr-30">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#" className="text-foreground hover:text-primary transition">Legal notice</a>
              <a href="#" className="text-foreground hover:text-primary transition">Terms &amp; conditions</a>
              <a href="#" className="text-foreground hover:text-primary transition">Privacy policy</a>
              <a href="#" className="text-foreground hover:text-primary transition">Cookie policy</a>
              <a href="#" className="text-foreground hover:text-primary transition">Cookie settings</a>
            </div>
          </nav>

          {/* Right: copyright */}
          <div className="flex justify-end">
            <p className="text-foreground">© 2025 Luz</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

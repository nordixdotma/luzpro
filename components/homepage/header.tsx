"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = NavLink | NavDropdown

interface NavLink {
  name: string
  href: string
  type?: never
}

interface NavDropdown {
  name: string
  type: "dropdown"
  items: Array<{ name: string; href: string }>
}

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const shouldShowScrolledHeader = false

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(shouldShowScrolledHeader)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 || shouldShowScrolledHeader) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  useEffect(() => {
    if (shouldShowScrolledHeader) {
      setVisible(true)
    }
  }, [shouldShowScrolledHeader])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHoveredDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "#pricing" },
    {
      name: "Resources",
      type: "dropdown",
      items: [
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/guides" },
      ],
    },
    {
      name: "Company",
      type: "dropdown",
      items: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ]

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 w-full">
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "80%" : "90%",
          y: visible ? 20 : 10,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: visible ? "0.375rem" : "9999px",
        }}
        className={`relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <span className={`text-2xl font-bold transition-colors ${visible ? "text-primary" : "text-black"}`}>
            Luz Pro
          </span>
        </Link>

        <motion.div
          onMouseLeave={() => {
            setHovered(null)
            setHoveredDropdown(null)
          }}
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex"
        >
          {navItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              {item.type === "dropdown" ? (
                <div
                  ref={dropdownRef}
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                  className="relative"
                >
                  <button
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                      hoveredDropdown === item.name
                        ? "text-white"
                        : visible
                          ? "text-black hover:text-white"
                          : "text-black"
                    }`}
                  >
                    {hoveredDropdown === item.name && (
                      <motion.div
                        layoutId="hovered"
                        className="absolute inset-0 h-full w-full rounded-full bg-primary"
                        transition={{ type: "spring", duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-20 flex items-center gap-1">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${hoveredDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        {item.items?.map((subitem, subidx) => (
                          <Link
                            key={subidx}
                            href={subitem.href}
                            className="block px-4 py-3 text-black hover:bg-gray-100 transition-colors text-sm font-medium"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  onMouseEnter={() => setHovered(idx)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    hovered === idx ? "text-white" : visible ? "text-black hover:text-white" : "text-black"
                  } ${pathname && pathname === item.href ? "font-semibold" : ""}`}
                  href={item.href}
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="hovered"
                      className="absolute inset-0 h-full w-full rounded-full bg-primary"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </motion.div>

        <div className="hidden md:flex items-center justify-end relative z-30 gap-4">
          <Button
            variant="outline"
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              visible
                ? "text-white bg-black hover:bg-white hover:text-black border border-black hover:border-black"
                : "text-black bg-white hover:bg-white/80 hover:text-black border border-gray"
            }`}
          >
            Sign In
          </Button>
          <Button
            className={`transition-all duration-300 relative z-30 rounded-full cursor-pointer ${
              visible
                ? "bg-primary text-white hover:bg-primary/90 border border-primary hover:border-primary"
                : "bg-black text-white hover:bg-black/90 border border-black hover:border-black"
            }`}
          >
            Get Started
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "16px",
          paddingLeft: visible ? "12px" : "16px",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        style={{
          borderRadius: visible ? "0.375rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold transition-colors ${visible ? "text-primary" : "text-black"}`}>
              Luz Pro
            </span>
          </Link>

          <button
            className="p-2 rounded-full cursor-pointer text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      {item.type === "dropdown" ? (
                        <div className="w-full">
                          <button
                            onClick={() => setHoveredDropdown(hoveredDropdown === item.name ? null : item.name)}
                            className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-base text-gray-800 hover:bg-gray-50 transition-all"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${hoveredDropdown === item.name ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {hoveredDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                {item.items?.map((subitem, subidx) => (
                                  <Link
                                    key={subidx}
                                    href={subitem.href}
                                    className="block py-2 px-8 text-gray-700 hover:text-primary text-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all cursor-pointer ${
                            pathname && pathname === item.href
                              ? "bg-gray-100 text-primary"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="w-full pt-4 border-t border-gray-100 flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent cursor-pointer rounded-full">
                    Sign In
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer rounded-full">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}

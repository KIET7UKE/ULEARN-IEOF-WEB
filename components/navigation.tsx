"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegistrationModal } from "@/components/registration-modal"
import { Menu, X, Globe, Award, BookOpen, Phone, Home } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Globe },
    { href: "/awards", label: "Awards", icon: Award },
    { href: "/syllabus", label: "Syllabus", icon: BookOpen },
    { href: "/hall-of-fame", label: "Hall of Fame", icon: Award },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image src="/ieof-logo.png" alt="IEOF Logo" fill className="object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90" onClick={() => setIsRegistrationModalOpen(true)}>
                Register Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90"
                    onClick={() => {
                      setIsRegistrationModalOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        type="registration"
      />
    </>
  )
}

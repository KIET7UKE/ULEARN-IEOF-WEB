import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image src="/ieof-logo.png" alt="IEOF Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">IEOF</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering students with world-class English skills and global recognition through the Global English
              Olympiad. India's first offline international English competition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/awards", label: "Awards & Prizes" },
                { href: "/syllabus", label: "Syllabus" },
                { href: "/hall-of-fame", label: "Hall of Fame" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  G–108, Keerthi Apartments, Ameerpet, Hyderabad – 500073
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 9777784988</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@ieofoundation.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                )
              })}
            </div>
            <p className="text-xs text-gray-300">
              Stay updated with the latest news and announcements about GEO 2025.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side - Navigation links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                TERMS OF USE
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                SITEMAP
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                DATA PROTECTION
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>

            {/* Right side - Social media icons */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-300">
              Copyright 2025 IEOF Academy Pte Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

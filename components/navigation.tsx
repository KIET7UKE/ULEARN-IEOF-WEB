"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/registration-modal";
import {
  Menu,
  X,
  Globe,
  Award,
  BookOpen,
  Phone,
  Home,
  Search,
  User,
  ChevronDown,
  Users,
  Calendar,
  MapPin,
  GraduationCap,
  Trophy,
  Star,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/about",
      label: "About Us",
      icon: Globe,
    },
    {
      href: "/syllabus",
      label: "Syllabus",
      icon: BookOpen,
    },
    {
      href: "/awards",
      label: "Awards & Prizes",
      icon: Award,
    },
    {
      href: "/hall-of-fame",
      label: "Hall of Fame",
      icon: Trophy,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: Phone,
    },
  ];

  return (
    <>
      {/* Main Header */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/ieof-logo.png"
                  alt="IEOF Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">IEOF</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-gray-300"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-gray-300"
              >
                <User className="w-5 h-5" />
              </Button> */}
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-6"
                onClick={() => setIsRegistrationModalOpen(true)}
              >
                Register Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => {
                      setIsRegistrationModalOpen(true);
                      setIsOpen(false);
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

      {/* Chat Widget */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 cursor-pointer hover:bg-red-700 transition-colors">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Hello! Welcome to IEOF!</p>
            <p className="text-xs opacity-90">How can we help you?</p>
          </div>
        </div>
      </div> */}

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        type="registration"
      />
    </>
  );
}

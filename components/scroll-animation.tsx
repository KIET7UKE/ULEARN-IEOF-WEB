"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight"
}

export function ScrollAnimation({ children, className = "", animation = "fadeInUp" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const animateIn = () => {
      el.classList.add("animate")
      // map animation prop to css class
      const map: Record<string, string> = {
        fadeInUp: "animate-fade-in-up",
        slideInLeft: "animate-slide-in-left",
        slideInRight: "animate-slide-in-right",
      }
      const cls = map[animation] || map.fadeInUp
      el.classList.add(cls)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animateIn()
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation])

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

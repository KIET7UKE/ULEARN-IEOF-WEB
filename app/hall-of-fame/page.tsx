"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HallOfFamePage() {
  const [year] = useState("2024–25")

  const images = [
    { src: "/students-receiving-gold-medals-at-award-ceremony-w.png", alt: "Gold Medal Winners" },
    { src: "/happy-students-at-universal-studios-singapore-with.png", alt: "Universal Studios" },
    { src: "/formal-award-ceremony-in-singapore-with-internatio.png", alt: "International Ceremony" },
    { src: "/diverse-group-of-students-holding-certificates-of-.png", alt: "Certificates" },
    { src: "/indian-students-exploring-singapore-cultural-sites.png", alt: "Cultural Exploration" },
    { src: "/students-presenting-their-achievements-at-internat.png", alt: "Global Recognition" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollAnimation className="space-y-3">
            <Badge className="bg-secondary text-secondary-foreground">Hall of Fame</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">Celebrating Our Champions</h1>
            <p className="text-muted-foreground">Top achievers of {year} who exemplify English excellence.</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <ScrollAnimation key={i}>
                <Card className="overflow-hidden hover:shadow-xl transition">
                  <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-56 object-cover" />
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{img.alt}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "50K+", label: "Students" },
            { value: "500+", label: "Schools" },
            { value: "10", label: "Grades" },
            { value: "100%", label: "Recognition" },
          ].map((m, i) => (
            <ScrollAnimation key={i}>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-3xl font-bold">{m.value}</div>
                <div className="text-muted-foreground">{m.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { RegistrationModal } from "@/components/registration-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Medal,
  Plane,
  Star,
  Gift,
  Camera,
  MapPin,
  Calendar,
  Users,
  Award,
  CheckCircle,
  Crown,
  Sparkles,
} from "lucide-react"

export default function AwardsPage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollAnimation className="text-center lg:text-left space-y-8">
              <Badge className="bg-secondary text-secondary-foreground text-lg px-6 py-2">Awards & Recognition</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Celebrating Excellence</h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto lg:mx-0 text-pretty">
                Every participant in the Global English Olympiad is a winner. Discover the exciting prizes, recognition,
                and life-changing opportunities awaiting our students.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slideInRight">
              <img
                src={"/public/images/singapore-hero-skyline.png"}
                alt="Singapore skyline at night"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Main Prize Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Prize Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Different grade levels, different amazing rewards - but every student gets recognized for their effort.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grades 1-3 Awards */}
            <ScrollAnimation animation="slideInLeft">
              <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/20 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl text-primary">Grades 1-3</CardTitle>
                  <CardDescription className="text-lg">National Toppers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">₹40,000</div>
                    <p className="text-lg text-muted-foreground">Cash Prize</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: Medal, text: "Gold Medal & Trophy" },
                      { icon: Award, text: "National Recognition Certificate" },
                      { icon: Star, text: "Winner's Gallery Feature" },
                      { icon: Gift, text: "Special Achievement Badge" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-card rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground text-center">
                      Perfect for young achievers to build confidence and receive early recognition for their English
                      skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Grades 4-10 Awards */}
            <ScrollAnimation animation="slideInRight">
              <Card className="h-full bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl text-secondary">Grades 4-10</CardTitle>
                  <CardDescription className="text-lg">International Experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">Singapore Trip</div>
                    <p className="text-lg text-muted-foreground">3 Nights / 4 Days Fully Sponsored</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: MapPin, text: "Universal Studios Singapore" },
                      { icon: Award, text: "International Award Ceremony" },
                      { icon: Camera, text: "Cultural Sightseeing Tours" },
                      { icon: Users, text: "Global Networking Events" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-card rounded-lg p-4 border border-secondary/20">
                    <p className="text-sm text-muted-foreground text-center">
                      A life-changing international experience that many students will remember forever as their first
                      foreign trip.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Singapore Experience Details */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">The Singapore Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A detailed look at what awaits our top performers in the international finale.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                day: "Day 1",
                title: "Arrival & Welcome",
                activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "City orientation"],
                icon: Plane,
              },
              {
                day: "Day 2",
                title: "Universal Studios",
                activities: [
                  "Full day at Universal Studios",
                  "Thrilling rides & shows",
                  "Character meet & greets",
                  "Souvenir shopping",
                ],
                icon: Star,
              },
              {
                day: "Day 3",
                title: "Award Ceremony",
                activities: [
                  "International Award Ceremony",
                  "Recognition by dignitaries",
                  "Cultural performances",
                  "Networking dinner",
                ],
                icon: Trophy,
              },
              {
                day: "Day 4",
                title: "Exploration & Departure",
                activities: [
                  "Singapore sightseeing",
                  "Cultural landmarks",
                  "Final group photos",
                  "Departure preparations",
                ],
                icon: Camera,
              },
            ].map((day, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <day.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {day.day}
                    </Badge>
                    <CardTitle className="text-lg">{day.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="mt-12">
            <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <h3 className="text-2xl font-bold text-foreground">100% Sponsored by IEOF</h3>
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    All expenses including flights, accommodation, meals, activities, and local transportation are
                    completely covered by the International English Olympiad Foundation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Recognition Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Recognition at Every Level</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From participation to international excellence, every achievement is celebrated and rewarded.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "Participation",
                title: "Certificate of Participation",
                description: "Every student receives recognition for their effort and participation.",
                icon: Award,
                color: "bg-blue-500",
                recipients: "All Participants",
              },
              {
                level: "School Level",
                title: "School Champion",
                description:
                  "Top performers at school level receive special recognition and advance to regional level.",
                icon: Medal,
                color: "bg-green-500",
                recipients: "Top 10% per school",
              },
              {
                level: "Regional Level",
                title: "Regional Excellence",
                description: "State and regional winners receive medals and qualify for national competition.",
                icon: Star,
                color: "bg-primary",
                recipients: "Top 5% per region",
              },
              {
                level: "National Level",
                title: "National Champions",
                description: "Ultimate recognition with cash prizes or international trips to Singapore.",
                icon: Crown,
                color: "bg-secondary",
                recipients: "Top 1% nationally",
              },
            ].map((level, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <level.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {level.level}
                    </Badge>
                    <CardTitle className="text-lg">{level.title}</CardTitle>
                    <CardDescription className="text-sm text-primary font-medium">{level.recipients}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{level.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Award Gallery Preview */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Award Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A glimpse of the prestigious awards and memorable moments from our competitions.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gold Medal Winners",
                description: "National champions receiving their gold medals and certificates",
                image: "/public/images/award-ceremony-singapore.png",
              },
              {
                title: "Singapore Trip Winners",
                description: "Students enjoying their fully sponsored international experience",
                image: "/public/images/universal-studios-globe.png",
              },
              {
                title: "Award Ceremony",
                description: "International dignitaries presenting awards to young achievers",
                image: "/public/images/award-ceremony-singapore.png",
              },
              {
                title: "Certificate Presentation",
                description: "Students proudly displaying their participation certificates",
                image: "/public/images/students-holding-certificates.png",
              },
              {
                title: "Cultural Exchange",
                description: "Students experiencing Singapore's rich cultural heritage",
                image: "/public/images/singapore-cultural-exploration.png",
              },
              {
                title: "Global Recognition",
                description: "Winners being featured in international education forums",
                image: "/public/images/global-recognition-presentation.png",
              },
            ].map((gallery, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={gallery.image || "/placeholder.svg"}
                      alt={gallery.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{gallery.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{gallery.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Your Journey to Excellence Starts Here
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Don't miss this opportunity to compete on a global stage, develop world-class English skills, and
              potentially win life-changing prizes including a trip to Singapore.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => setIsRegistrationModalOpen(true)}
              >
                Register Now - ₹299
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Syllabus
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Calendar, label: "Registration Open", value: "August 2025" },
                { icon: Trophy, label: "Level 1 Exam", value: "10 Oct 2025" },
                { icon: Plane, label: "Grand Finale", value: "6–9 Dec 2025 • Singapore" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary-foreground">{item.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        type="registration"
      />
    </div>
  )
}

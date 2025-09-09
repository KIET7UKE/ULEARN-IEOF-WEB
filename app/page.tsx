"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import { RegistrationModal } from "@/components/registration-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MediaCarousel from "@/components/media-carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Globe,
  Award,
  Users,
  Calendar,
  MapPin,
  Star,
  Trophy,
  Plane,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Counter } from "@/components/counter";
import { MarqueeLogos } from "@/components/marquee-logos";
import { TimelineGeoSingapore } from "@/components/timeline-geo-singapore";
import { Commitments } from "@/components/commitments";

export default function HomePage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const introVideo = process.env.NEXT_PUBLIC_INTRO_VIDEO_URL;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Professional Background */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-[url('/images/students-preparing-olympiad.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <ScrollAnimation>
                  <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      Global English Olympiad{" "}
                      <span className="text-red-500">(GEO)</span>
                    </h1>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xl font-semibold">
                          India's First Offline International English Olympiad
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xl font-semibold">
                          Grades 1-10 • Cash Prizes • Dubai Trip
                        </span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                      onClick={() => setIsRegistrationModalOpen(true)}
                    >
                      Register Now - ₹299
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Content - Image or Additional Info */}
              <div className="hidden lg:block">
                <ScrollAnimation animation="slideInRight">
                  <div className="relative">
                    <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">
                          Why Choose GEO?
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Trophy className="w-6 h-6 text-red-500" />
                            <span className="text-white">
                              ₹40,000 Cash Prizes (Grades 1-3)
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Globe className="w-6 h-6 text-red-500" />
                            <span className="text-white">
                              Fully Sponsored Dubai Trip
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Award className="w-6 h-6 text-red-500" />
                            <span className="text-white">
                              International Recognition
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-6 h-6 text-red-500" />
                            <span className="text-white">
                              50,000+ Students Participated
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Media Carousel Section */}
      <MediaCarousel
        videoSrc={introVideo}
        videoPoster="/ieof-intro-video-poster.png"
        images={[
          {
            src: "/images/universal-studios-globe.png",
            alt: "Universal Studios Singapore globe with students",
          },
          {
            src: "/images/award-ceremony-singapore.png",
            alt: "International award ceremony in Singapore",
          },
          {
            src: "/images/students-preparing-olympiad.png",
            alt: "Students preparing for the English Olympiad",
          },
        ]}
      />

      {/* Feature Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Register for GEO Card */}
            <ScrollAnimation animation="fadeInUp">
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/students-preparing-olympiad.png"
                    alt="Students preparing for Olympiad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ₹299
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold text-lg">
                        REGISTER
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-4">
                    REGISTER FOR GEO
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Join India's first offline international English Olympiad
                    for Grades 1-10. Register now for just ₹299.
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 p-0 font-semibold"
                    onClick={() => setIsRegistrationModalOpen(true)}
                  >
                    REGISTER NOW <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Dubai Experience Card */}
            <ScrollAnimation animation="fadeInUp">
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/singapore-hero-skyline.png"
                    alt="Dubai skyline and international experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      3N/4D
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold text-lg">
                        DUBAI
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-4">
                    DUBAI EXPERIENCE
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Winners get a fully sponsored 3N/4D Dubai trip with
                    international award ceremony and cultural exploration.
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 p-0 font-semibold"
                  >
                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Awards & Prizes Card */}
            <ScrollAnimation animation="fadeInUp">
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/award-ceremony-singapore.png"
                    alt="Award ceremony and prizes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ₹40,000
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold text-lg">
                        PRIZES
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-4">
                    AWARDS & PRIZES
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    ₹40,000 cash prizes for Grades 1-3 winners and fully
                    sponsored Dubai trip for Grades 4-10 toppers.
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 p-0 font-semibold"
                  >
                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About IEOF
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The International English Olympiad Foundation (IEOF) is dedicated
              to promoting excellence in the English language and creating
              global opportunities for students.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To inspire and empower young learners by nurturing English
                  language excellence, building communication confidence, and
                  creating inclusive opportunities for every child.
                </p>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most impactful English Olympiad
                  foundation by making high-quality learning opportunities
                  accessible to all.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                  Learn More About Us
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <img
                    src="/images/students-preparing-olympiad.png"
                    alt="Students preparing for Olympiad"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  50,000+
                </div>
                <div className="text-gray-600">Students Participated</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  ₹40,000
                </div>
                <div className="text-gray-600">Cash Prizes</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  3N/4D
                </div>
                <div className="text-gray-600">Dubai Trip</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Sponsored</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-600">
              UPCOMING EVENTS
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Poster */}
            <ScrollAnimation animation="slideInLeft">
              <div className="relative">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 text-white">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">
                        GEO EXAM DATES 2025-26
                      </h3>
                      <p className="text-red-100">Global English Olympiad</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-white" />
                        <span className="text-lg font-semibold">
                          Level 1: 3rd Nov 2025
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-lg font-semibold">
                          Level 2: 30th Nov 2025
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-white" />
                        <span className="text-lg font-semibold">
                          Grand Finale: 11-14 Jan 2026
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                        LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Event Details */}
            <ScrollAnimation animation="slideInRight">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    GEO Exam Structure
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The Global English Olympiad (GEO) is conducted in three
                    levels, progressing from school-level to regional-level,
                    culminating in the grand finale in Dubai. Each level tests
                    different aspects of English proficiency and builds
                    confidence in students.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">
                        Level 1: School-level exam (3rd Nov 2025)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">
                        Level 2: Regional-level exam (30th Nov 2025)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">
                        Grand Finale: Dubai award ceremony (11-14 Jan 2026)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">
                        100% sponsored Dubai trip for winners
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                    VIEW ALL
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Virtual Campus Tour Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/images/award-ceremony-singapore.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-600">
              VIRTUAL CAMPUS TOUR
            </h2>
          </ScrollAnimation>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content - Overlay Box */}
              <ScrollAnimation animation="slideInLeft">
                <div className="lg:col-span-1">
                  <div className="bg-red-600 text-white p-8 rounded-lg shadow-xl">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">GEO EXAM CENTERS</h3>
                      <p className="text-red-100 leading-relaxed">
                        Our examination centers are equipped with modern
                        facilities and comfortable seating arrangements.
                        Students take their GEO exams in a professional
                        environment that ensures fair assessment and optimal
                        performance.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Modern Examination Halls</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Comfortable Seating Arrangements</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Professional Assessment Environment</span>
                        </div>
                      </div>
                      <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                        VIEW MORE <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Content - Carousel Indicators */}
              <ScrollAnimation animation="slideInRight">
                <div className="lg:col-span-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        GEO Features
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">
                              School-Level Exams
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">Regional Centers</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">
                              Dubai Award Ceremony
                            </span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">
                              Cash Prizes (₹40,000)
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">
                              Sponsored Dubai Trip
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-white">
                              International Recognition
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Carousel Indicators */}
                      <div className="flex justify-center space-x-2 pt-6">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-600">
              BLOG
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slideInLeft">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-white opacity-80" />
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        Why GEO is India's Most Prestigious English Olympiad
                      </h3>
                      <p className="text-gray-600 text-sm">08th Sep 2025</p>
                      <p className="text-gray-700 leading-relaxed">
                        Discover why the Global English Olympiad (GEO) stands
                        out as India's first offline international English
                        competition. Learn about our unique three-level
                        structure, cash prizes, and the life-changing Dubai
                        experience for winners.
                      </p>
                      <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                        READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Trophy className="w-12 h-12 text-white opacity-80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          GEO Registration Process: Step-by-Step Guide
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          08th Sep 2025
                        </p>
                        <Button
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 p-0 text-sm"
                        >
                          READ MORE <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Users className="w-12 h-12 text-white opacity-80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Dubai Experience: What Winners Can Expect
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          01st Sep 2025
                        </p>
                        <Button
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 p-0 text-sm"
                        >
                          READ MORE <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Target className="w-12 h-12 text-white opacity-80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          GEO Syllabus & Preparation Tips for Success
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          28th Aug 2025
                        </p>
                        <Button
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 p-0 text-sm"
                        >
                          READ MORE <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    VIEW ALL
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section> */}

      {/* IEOF - Leading Education Institution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-red-600">
              IEOF - ONE OF INDIA'S LEADING PRIVATE EDUCATION INSTITUTIONS
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                The International English Olympiad Foundation (IEOF) is
                dedicated to promoting excellence in the English language and
                creating global opportunities for students. We aim to bridge the
                gap between classroom learning and international exposure,
                empowering young learners to grow into confident communicators
                and future leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through the Global English Olympiad (GEO), we provide India's
                first offline international English competition for Grades 1-10,
                with cash prizes, Dubai trips, and global recognition for
                winners.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              READ MORE
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Marquee Logos Section */}
      <MarqueeLogos />

      {/* Lead Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Lead Partners
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading educational institutions
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <img
                    src="/partners/edufam.png"
                    alt="Edufam"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Edufam International Academy
                </h3>
                <p className="text-gray-600">Dubai, UAE</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <img
                    src="/partners/psacwa.png"
                    alt="PSACWA"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PSACWA</h3>
                <p className="text-gray-600">Educational Partner</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <img
                    src="/partners/trsma.png"
                    alt="TRSMA"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">TRSMA</h3>
                <p className="text-gray-600">Academic Partner</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Accreditations and Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Accreditations & Awards
            </h2>
            <p className="text-lg text-gray-600">
              Recognized excellence in education
            </p>
          </ScrollAnimation>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {[
              {
                title: "INDIA'S FIRST OFFLINE INTERNATIONAL ENGLISH OLYMPIAD",
                icon: Trophy,
              },
              { title: "₹40,000 CASH PRIZES FOR GRADES 1-3", icon: Award },
              { title: "FULLY SPONSORED DUBAI TRIP", icon: Star },
              { title: "50,000+ STUDENTS PARTICIPATED", icon: Globe },
              { title: "INTERNATIONAL RECOGNITION", icon: BookOpen },
            ].map((award, index) => (
              <ScrollAnimation key={index} animation="fadeInUp">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <award.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {award.title}
                  </h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Certification Logos */}
          <ScrollAnimation className="text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-gray-600 font-semibold">IEOF</span>
                </div>
                <p className="text-sm text-gray-600">
                  International English Olympiad Foundation
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-gray-600 font-semibold">EDUFAM</span>
                </div>
                <p className="text-sm text-gray-600">
                  International Academy, Dubai
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-gray-600 font-semibold">GEO</span>
                </div>
                <p className="text-sm text-gray-600">Global English Olympiad</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Competition Levels (timeline updated to exact dates) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Competition Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A three-stage journey to recognize English excellence—ending with
              international recognition in Singapore.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Level 1",
                title: "School-Level Exam",
                date: "10 October 2025",
                description:
                  "Conducted at school level; top performers qualify for regional round.",
                icon: BookOpen,
                color: "bg-blue-500",
              },
              {
                level: "Level 2",
                title: "Regional-Level Exam",
                date: "2 November 2025",
                description:
                  "Conducted at regional centers; qualifiers move to national recognition.",
                icon: Users,
                color: "bg-green-500",
              },
              {
                level: "Grand Finale",
                title: "International Award Ceremony",
                date: "6–9 December 2025 • Singapore",
                description:
                  "Winners are flown to Singapore for international felicitation and experiences.",
                icon: Plane,
                color: "bg-primary",
              },
            ].map((stage, index) => (
              <ScrollAnimation
                key={index}
                className="h-full"
                animation={
                  index === 0
                    ? "slideInLeft"
                    : index === 2
                    ? "slideInRight"
                    : "fadeInUp"
                }
              >
                <Card className="h-full relative overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${stage.color}`}
                  ></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{stage.level}</Badge>
                      <div
                        className={`w-12 h-12 ${stage.color} rounded-lg flex items-center justify-center`}
                      >
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{stage.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {stage.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Note: The Singapore trip is 100% sponsored by IEOF – covering
              travel, stay, meals, and activities.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Awards & Prizes */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Exciting Prizes & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every participant is a winner, but top achievers receive
              life-changing rewards and international exposure.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slideInLeft">
              <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        Grades 1-3 Winners
                      </CardTitle>
                      <CardDescription>National Toppers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary">₹40,000</div>
                  <p className="text-lg text-muted-foreground">
                    Cash Prize + Certificate + Medal
                  </p>
                  <ul className="space-y-2">
                    {[
                      "National recognition certificate",
                      "Gold medal and trophy",
                      "Cash reward of ₹40,000",
                      "Featured in winner's gallery",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <Card className="h-full bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        Grades 4-10 Winners
                      </CardTitle>
                      <CardDescription>
                        International Experience
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-secondary">
                    Singapore Trip
                  </div>
                  <p className="text-lg text-muted-foreground">
                    3 Nights / 4 Days Fully Sponsored
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Universal Studios Singapore visit",
                      "International Award Ceremony",
                      "Cultural exploration & sightseeing",
                      "Global networking opportunities",
                      "All expenses covered by IEOF",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Star className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Every Student Wins
                  </h3>
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  All participants receive a Certificate of Participation,
                  recognizing their effort and encouraging continued English
                  excellence.
                </p>
                <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
                  "No Child Should Be Left Behind"
                </Badge>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Singapore Journey Timeline Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Singapore Journey Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Follow the journey of the Global English Olympiad from
              registration to the grand finale in Singapore.
            </p>
          </ScrollAnimation>
          <TimelineGeoSingapore showHeading={false} className="py-0" />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold">Success Stories</h3>
            <p className="text-muted-foreground">
              What parents and students say about GEO
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "GEO transformed my child’s confidence in English.",
                name: "Parent of Grade 6 Winner",
                avatar: "/images/testimonials/parent.png",
                fallback: "PR",
              },
              {
                quote: "The Singapore trip was a dream come true!",
                name: "National Topper (Grade 8)",
                avatar: "/images/testimonials/student.png",
                fallback: "ST",
              },
              {
                quote: "High-quality, fair assessment with global recognition.",
                name: "School Coordinator",
                avatar: "/images/testimonials/teacher.png",
                fallback: "TC",
              },
            ].map((t, i) => (
              <ScrollAnimation key={i}>
                <Card className="h-full">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={t.avatar || "/placeholder.svg"}
                          alt={t.name}
                        />
                        <AvatarFallback>{t.fallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-foreground">“{t.quote}”</p>
                        <p className="text-sm text-muted-foreground">
                          — {t.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <Commitments />

      {/* Registration CTA (update dates) */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Register now for just ₹299 and give your child the opportunity to
              compete on a global stage and win a life‑changing trip to
              Singapore.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => setIsRegistrationModalOpen(true)}
              >
                Register Now - ₹299
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                onClick={() => setIsSyllabusModalOpen(true)}
              >
                Download Syllabus - ₹100
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Registration Open", value: "August 2025" },
                { label: "Level 1 Exam", value: "10 Oct 2025" },
                { label: "Grand Finale", value: "6–9 Dec 2025 • Singapore" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {item.value}
                  </div>
                  <div className="text-primary-foreground/80">{item.label}</div>
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

      <RegistrationModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        type="syllabus"
      />
    </div>
  );
}

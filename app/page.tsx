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

      {/* Counter Section */}
      {/* Removed to avoid duplicate stats and NaN from <Counter /> without 'to' prop */}

      {/* Hero Section with Background Elements */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/8 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-secondary/12 rounded-full blur-md animate-pulse delay-700"></div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-1/4 animate-float">
            <Globe className="w-8 h-8 text-primary/20" />
          </div>
          <div className="absolute top-48 right-1/3 animate-float delay-1000">
            <Award className="w-6 h-6 text-secondary/20" />
          </div>
          <div className="absolute bottom-32 right-1/4 animate-float delay-500">
            <BookOpen className="w-7 h-7 text-primary/15" />
          </div>
          <div className="absolute top-1/3 left-20 animate-float delay-700">
            <Trophy className="w-5 h-5 text-secondary/25" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <ScrollAnimation className="space-y-5">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm whitespace-normal text-pretty shadow-lg"
            >
              International English Olympiad Foundation (IEOF)
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">
              GEO
            </h1>
            <p className="text-lg lg:text-xl font-semibold text-foreground">
              GEO: Gateway to Global Recognition
            </p>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              The Global English Olympiad (GEO) is{" "}
              <strong>India's first offline</strong>, international‑standard
              English competition for Grades 1–10, in collaboration with Edufam
              International Academy, Dubai.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setIsRegistrationModalOpen(true)}
              >
                Register Now - ₹299
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setIsSyllabusModalOpen(true)}
              >
                Download Syllabus
              </Button>
            </div>

            {/* Quick facts (updated timeline) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-3 py-2 rounded-full">
                <Users className="w-5 h-5 text-primary" />
                <span>Grades 1–10</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-3 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-primary" />
                <span>10 Oct • 2 Nov • 6–9 Dec 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-3 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Grand Finale: Singapore</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
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
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              About Global English Olympiad
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              India's first offline, international-standard English competition
              organized by IEOF in collaboration with Edufam International
              Academy, Dubai.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "International Standards",
                description:
                  "Globally benchmarked competition designed to meet international English proficiency standards.",
              },
              {
                icon: Award,
                title: "Prestigious Recognition",
                description:
                  "Certificates and awards recognized globally, enhancing students' academic profiles.",
              },
              {
                icon: Target,
                title: "Skill Development",
                description:
                  "Comprehensive assessment of grammar, vocabulary, comprehension, and communication skills.",
              },
            ].map((feature, index) => (
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-3 mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold">GEO in Numbers</h3>
            <p className="text-muted-foreground">
              Rolling counters animate when this section enters view
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Counter
                to={50000}
                suffix="+"
                className="text-4xl font-extrabold text-foreground"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Students Reached
              </p>
            </div>
            <div>
              <Counter
                to={10}
                className="text-4xl font-extrabold text-foreground"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Grades (1–10)
              </p>
            </div>
            <div>
              <Counter
                to={3}
                className="text-4xl font-extrabold text-foreground"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Competition Levels
              </p>
            </div>
            <div>
              <Counter
                to={7}
                className="text-4xl font-extrabold text-foreground"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Singapore Toppers (Grades 4–10)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GEO Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-10">
            <h3 className="text-2xl lg:text-4xl font-bold">Why Choose GEO?</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Gateway to Global Recognition — build English excellence and
              unlock international exposure.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Platform",
                desc: "Truly international competition and recognition.",
              },
              {
                icon: Target,
                title: "English Excellence",
                desc: "Grammar, vocabulary, comprehension, and oracy.",
              },
              {
                icon: Trophy,
                title: "Rewards & Awards",
                desc: "Cash prizes, certificates, medals, Singapore trip.",
              },
              {
                icon: Users,
                title: "Every Child Valued",
                desc: "From participation to international awards.",
              },
            ].map((f, i) => (
              <ScrollAnimation key={i} animation="fadeInUp">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{f.desc}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Logos Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Our Partners</h3>
            <MarqueeLogos />
          </ScrollAnimation>
        </div>
      </section>

      {/* Lead Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-2 mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Our Lead Partners
            </h3>
            <p className="text-muted-foreground">
              In collaboration with Edufam International Academy, Dubai
            </p>
          </ScrollAnimation>
          <MarqueeLogos
            logos={[
              { src: "/ieof-logo.png", alt: "IEOF" },
              {
                src: "/partners/edufam.png",
                alt: "Edufam International Academy",
              },
              { src: "/partners/trsma.png", alt: "TRSMA" },
              { src: "/partners/psacwa.png", alt: "PSACWA" },
            ]}
          />
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

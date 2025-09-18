import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Target,
  Users,
  Award,
  BookOpen,
  Heart,
  Lightbulb,
  Handshake,
  MapPin,
  Calendar,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEOF - International English Olympiad Foundation",
  description:
    "Learn about the International English Olympiad Foundation (IEOF), India's leading private education institution conducting Global English Olympiad (GEO) for Grades 1-10 with cash prizes and Dubai trips.",
  keywords: [
    "About IEOF",
    "International English Olympiad Foundation",
    "IEOF organization",
    "English Olympiad foundation India",
    "GEO program",
    "English education foundation",
    "IEOF mission vision",
    "English Olympiad about us",
  ],
  openGraph: {
    title: "About IEOF - International English Olympiad Foundation",
    description:
      "Learn about the International English Olympiad Foundation (IEOF), India's leading private education institution conducting Global English Olympiad (GEO) for Grades 1-10.",
    images: [
      {
        url: "/diverse-students-from-different-backgrounds-studyi.png",
        width: 1200,
        height: 630,
        alt: "Students learning English at IEOF",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-6 py-2">
              About IEOF
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              International English Olympiad Foundation
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Dedicated to improving English language proficiency among students
              across India through structured, competitive, and globally
              benchmarked programs.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <img
                src="/diverse-students-from-different-backgrounds-studyi.png"
                alt="Students learning English together"
                className="rounded-2xl shadow-xl"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight" className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    To empower students with world-class English skills, provide
                    them with global exposure, and reward excellence with
                    prestigious awards, cash prizes, and international
                    experiences.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    To create a platform where every Indian student can showcase
                    their English proficiency on a global stage and gain
                    recognition that opens doors to international opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Motto
                  </h3>
                </div>
                <p className="text-xl text-primary font-semibold">
                  "No Child Should Be Left Behind"
                </p>
                <p className="text-muted-foreground mt-2">
                  Every student deserves a stage to shine and showcase their
                  English excellence.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The principles that guide our mission to transform English
              education in India.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description:
                  "We strive for the highest standards in English education and assessment, ensuring every student reaches their full potential.",
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description:
                  "We bring international standards and exposure to Indian classrooms, preparing students for a globalized world.",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "We believe every child, regardless of background, deserves equal opportunity to excel and be recognized.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously evolve our methods and approaches to make English learning engaging and effective.",
              },
              {
                icon: Award,
                title: "Recognition",
                description:
                  "We celebrate and reward student achievements at every level, from participation to international excellence.",
              },
              {
                icon: Handshake,
                title: "Collaboration",
                description:
                  "We work closely with schools, educators, and international partners to create meaningful learning experiences.",
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideInLeft" className="space-y-8">
              <div>
                <Badge className="bg-secondary text-secondary-foreground mb-4">
                  International Collaboration
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6">
                  Partnership with Edufam International Academy, Dubai
                </h2>
                <p className="text-lg text-muted-foreground text-pretty mb-6">
                  Our collaboration with Edufam International Academy brings
                  authentic international exposure right into Indian classrooms.
                  This partnership ensures that our students receive globally
                  recognized certification and opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "International curriculum standards",
                  "Global certification and recognition",
                  "Cross-cultural learning experiences",
                  "Access to international educational resources",
                  "Networking with global educators",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <img
                src="/modern-international-academy-building-in-dubai-wit.png"
                alt="Edufam International Academy Dubai"
                className="rounded-2xl shadow-xl"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What We Aim To Achieve */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              What We Aim to Achieve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Through the Global English Olympiad, we work towards specific
              goals that benefit every participating student.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Strengthen English Foundation",
                description:
                  "Enhance comprehension, vocabulary, and grammar skills through structured competitive assessment.",
                color: "bg-blue-500",
              },
              {
                icon: Target,
                title: "Real Competitive Platform",
                description:
                  "Provide students with challenges beyond school textbooks, preparing them for global standards.",
                color: "bg-green-500",
              },
              {
                icon: Award,
                title: "Multi-Level Recognition",
                description:
                  "Recognize and reward young talent at school, regional, national, and international levels.",
                color: "bg-primary",
              },
              {
                icon: Globe,
                title: "Global Exposure",
                description:
                  "Connect Indian students with international opportunities and cross-cultural experiences.",
                color: "bg-secondary",
              },
            ].map((goal, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 ${goal.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <goal.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {goal.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              About Our Organization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Learn more about the International English Olympiad Foundation and
              our commitment to educational excellence.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation animation="slideInLeft">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Headquarters
                    </h4>
                    <p className="text-muted-foreground">
                      G–108, Keerthi Apartments
                      <br />
                      Ameerpet, Hyderabad – 500073
                      <br />
                      Telangana, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Contact Information
                    </h4>
                    <p className="text-muted-foreground">
                      Website: www.ieofoundation.org
                      <br />
                      Email: info@ieofoundation.org
                      <br />
                      Phone: +91 9777784988
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Our Journey</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Established
                    </h4>
                    <p className="text-muted-foreground">
                      Founded with the vision of creating India's first
                      international-standard English competition for school
                      students.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Global Reach
                    </h4>
                    <p className="text-muted-foreground">
                      Partnered with international institutions to provide
                      authentic global exposure and recognition to Indian
                      students.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Future Vision
                    </h4>
                    <p className="text-muted-foreground">
                      Expanding to reach every corner of India, ensuring no
                      child is left behind in the journey of English excellence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

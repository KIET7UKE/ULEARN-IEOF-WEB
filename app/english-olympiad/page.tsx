import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Trophy,
  Globe,
  Users,
  Award,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "English Olympiad India - Global English Olympiad (GEO) | IEOF",
  description:
    "Join India's premier English Olympiad competition - Global English Olympiad (GEO) by International English Olympiad Foundation (IEOF). Grades 1-10, cash prizes, Dubai trips, international recognition.",
  keywords: [
    "English Olympiad India",
    "English competition India",
    "Global English Olympiad",
    "IEOF English Olympiad",
    "English Olympiad competition",
    "English Olympiad 2025",
    "English Olympiad registration",
    "English Olympiad prizes",
    "English Olympiad Dubai trip",
  ],
  openGraph: {
    title: "English Olympiad India - Global English Olympiad (GEO) | IEOF",
    description:
      "Join India's premier English Olympiad competition - Global English Olympiad (GEO) by International English Olympiad Foundation (IEOF).",
    images: [
      {
        url: "/images/award-ceremony-singapore.png",
        width: 1200,
        height: 630,
        alt: "English Olympiad Award Ceremony",
      },
    ],
  },
};

export default function EnglishOlympiadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
              India's Premier English Competition
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              English Olympiad India - Global English Olympiad (GEO)
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Join India's most prestigious English Olympiad competition
              conducted by the International English Olympiad Foundation (IEOF).
              Compete for cash prizes, international recognition, and
              life-changing Dubai experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              About Global English Olympiad (GEO)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              India's first offline International English Olympiad Foundation
              competition designed to test and enhance English language
              proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description:
                  "Tests grammar, vocabulary, comprehension, and writing skills across all grade levels",
              },
              {
                icon: Trophy,
                title: "Cash Prizes",
                description:
                  "₹40,000 cash prizes for Grades 1-3 winners and international recognition",
              },
              {
                icon: Globe,
                title: "Dubai Experience",
                description:
                  "Fully sponsored 3N/4D Dubai trip for Grades 4-10 toppers",
              },
              {
                icon: Users,
                title: "50,000+ Participants",
                description:
                  "Join thousands of students from across India in this prestigious competition",
              },
              {
                icon: Award,
                title: "International Recognition",
                description:
                  "Get certified by International English Olympiad Foundation with global validity",
              },
              {
                icon: Star,
                title: "Three Levels",
                description:
                  "School, Regional, and International levels for comprehensive assessment",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Competition Timeline 2025-26
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Follow the journey from registration to the grand finale in Dubai.
            </p>
          </div>

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
                date: "6–9 December 2025 • Dubai",
                description:
                  "Winners are flown to Dubai for international felicitation and experiences.",
                icon: Globe,
                color: "bg-primary",
              },
            ].map((stage, index) => (
              <Card
                key={index}
                className="h-full relative overflow-hidden hover:shadow-xl transition-all duration-300"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Join India's Premier English Olympiad?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Register now for the Global English Olympiad (GEO) and give your
              child the opportunity to compete on a global stage with
              international recognition and life-changing prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                Register Now - ₹299
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Download Syllabus - ₹100
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

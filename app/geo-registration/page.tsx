import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
import { CheckCircle, Star, Trophy, Globe, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Registration - Global English Olympiad Registration | IEOF",
  description:
    "Register for Global English Olympiad (GEO) - India's first offline International English Olympiad for Grades 1-10. ₹40,000 cash prizes, Dubai trip, international recognition. Register now for just ₹299!",
  keywords: [
    "GEO registration",
    "Global English Olympiad registration",
    "English Olympiad registration",
    "IEOF registration",
    "English competition registration",
    "GEO exam registration",
    "English Olympiad 2025 registration",
    "IEOF GEO registration form",
  ],
  openGraph: {
    title: "GEO Registration - Global English Olympiad Registration | IEOF",
    description:
      "Register for Global English Olympiad (GEO) - India's first offline International English Olympiad for Grades 1-10 with cash prizes and Dubai trips.",
    images: [
      {
        url: "/images/students-preparing-olympiad.png",
        width: 1200,
        height: 630,
        alt: "Students registering for Global English Olympiad",
      },
    ],
  },
};

export default function GeoRegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
              GEO Registration Open
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Register for Global English Olympiad (GEO)
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Join India's first offline International English Olympiad
              Foundation (IEOF) competition. Compete for ₹40,000 cash prizes and
              fully sponsored Dubai trips!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Register Now - ₹299
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Download Syllabus - ₹100
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Why Register for GEO?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Join thousands of students who have already registered for India's
              most prestigious English competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "₹40,000 Cash Prizes",
                description:
                  "Grades 1-3 winners receive cash prizes up to ₹40,000",
              },
              {
                icon: Globe,
                title: "Dubai Trip",
                description:
                  "Fully sponsored 3N/4D Dubai trip for Grades 4-10 winners",
              },
              {
                icon: Award,
                title: "International Recognition",
                description:
                  "Get certified by International English Olympiad Foundation",
              },
              {
                icon: Users,
                title: "50,000+ Participants",
                description:
                  "Join the largest English Olympiad community in India",
              },
              {
                icon: Star,
                title: "Three Levels",
                description:
                  "School, Regional, and International levels of competition",
              },
              {
                icon: CheckCircle,
                title: "Easy Registration",
                description: "Simple online registration process for just ₹299",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
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
              Ready to Begin Your GEO Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Register now for just ₹299 and give your child the opportunity to
              compete on a global stage and win a life-changing trip to Dubai.
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

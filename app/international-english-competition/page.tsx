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
  Globe,
  Trophy,
  Award,
  Users,
  Calendar,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "International English Competition - Global English Olympiad | IEOF",
  description:
    "Join the International English Competition - Global English Olympiad (GEO) by International English Olympiad Foundation (IEOF). India's first offline international English competition with Dubai trips and cash prizes.",
  keywords: [
    "International English Competition",
    "International English Olympiad",
    "Global English Olympiad",
    "IEOF International Competition",
    "English competition international",
    "International English Olympiad Foundation",
    "English competition Dubai",
    "International English competition India",
  ],
  openGraph: {
    title: "International English Competition - Global English Olympiad | IEOF",
    description:
      "Join the International English Competition - Global English Olympiad (GEO) by International English Olympiad Foundation (IEOF).",
    images: [
      {
        url: "/images/students-holding-certificates.png",
        width: 1200,
        height: 630,
        alt: "International English Competition Winners",
      },
    ],
  },
};

export default function InternationalEnglishCompetitionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
              International Recognition
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              International English Competition - Global English Olympiad
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Experience India's first offline International English Competition
              conducted by the International English Olympiad Foundation (IEOF).
              Compete globally, win internationally, and create memories that
              last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Why Choose Our International English Competition?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Join the most prestigious international English competition in
              India with global recognition and life-changing rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "International Standards",
                description:
                  "Competition designed with global English proficiency standards and international recognition",
              },
              {
                icon: Trophy,
                title: "Cash Prizes",
                description:
                  "₹40,000 cash prizes for Grades 1-3 winners with international certification",
              },
              {
                icon: MapPin,
                title: "Dubai Experience",
                description:
                  "Fully sponsored 3N/4D Dubai trip for Grades 4-10 winners with international award ceremony",
              },
              {
                icon: Users,
                title: "Global Community",
                description:
                  "Join 50,000+ students from across India in this prestigious international competition",
              },
              {
                icon: Award,
                title: "International Certification",
                description:
                  "Get certified by International English Olympiad Foundation with global validity",
              },
              {
                icon: Star,
                title: "Three-Tier Competition",
                description:
                  "School, Regional, and International levels for comprehensive global assessment",
              },
            ].map((highlight, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Recognition */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              International Recognition & Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our international partnerships ensure global recognition and
              authentic international exposure for all participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Edufam International Academy, Dubai
                </h3>
                <p className="text-lg text-muted-foreground text-pretty">
                  Our partnership with Edufam International Academy brings
                  authentic international exposure right into Indian classrooms.
                  This collaboration ensures globally recognized certification
                  and opportunities for all participants.
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
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-international-academy-building-in-dubai-wit.png"
                alt="Edufam International Academy Dubai"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              International Competition Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A three-stage journey to international recognition, culminating in
              the grand finale in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Level 1",
                title: "School-Level Competition",
                date: "10 October 2025",
                description:
                  "Conducted at school level; top performers qualify for regional round.",
                icon: Calendar,
                color: "bg-blue-500",
              },
              {
                level: "Level 2",
                title: "Regional Competition",
                date: "2 November 2025",
                description:
                  "Conducted at regional centers; qualifiers move to international recognition.",
                icon: Users,
                color: "bg-green-500",
              },
              {
                level: "Grand Finale",
                title: "International Award Ceremony",
                date: "6–9 December 2025 • Dubai",
                description:
                  "Winners are flown to Dubai for international felicitation and global experiences.",
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
              Ready for International Recognition?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Register now for the International English Competition - Global
              English Olympiad (GEO) and give your child the opportunity to
              compete on a global stage with international recognition.
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

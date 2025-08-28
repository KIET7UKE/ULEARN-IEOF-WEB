import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Globe,
  Users,
  HelpCircle,
  BookOpen,
  Award,
  Calendar,
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-6 py-2">Contact Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Get in Touch with IEOF</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Have questions about the Global English Olympiad? Need help with registration or syllabus? Our dedicated
              team is here to assist you every step of the way.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Multiple ways to reach us for all your queries and support needs.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Our Address",
                content: "G–108, Keerthi Apartments, Ameerpet, Hyderabad – 500073, Telangana, India",
                action: "Get Directions",
                color: "bg-blue-500",
              },
              {
                icon: Phone,
                title: "Phone & WhatsApp",
                content: "+91 9777784988",
                action: "Call Now",
                color: "bg-green-500",
              },
              {
                icon: Mail,
                title: "Email Address",
                content: "info@ieofoundation.org",
                action: "Send Email",
                color: "bg-primary",
              },
              {
                icon: Globe,
                title: "Website",
                content: "www.ieofoundation.org",
                action: "Visit Website",
                color: "bg-secondary",
              },
            ].map((contact, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">{contact.content}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation animation="slideInLeft">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your inquiry about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your query in detail..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Office Hours & Quick Info */}
            <ScrollAnimation animation="slideInRight" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during
                      business days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                  <CardDescription>Find answers to common questions or access important resources.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { icon: Users, label: "Registration Process", href: "#" },
                    { icon: BookOpen, label: "Syllabus Download", href: "#" },
                    { icon: Award, label: "Awards & Prizes", href: "/awards" },
                    { icon: Calendar, label: "Important Dates", href: "#" },
                    { icon: HelpCircle, label: "FAQ Section", href: "#" },
                  ].map((link, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start">
                      <link.icon className="w-5 h-5 mr-3" />
                      {link.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Quick answers to the most common questions about the Global English Olympiad.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I register for the Global English Olympiad?",
                answer:
                  "Registration is simple! Visit our website, fill out the registration form, and pay the ₹299 registration fee through our secure online payment gateway. You'll receive a confirmation email with all the details.",
              },
              {
                question: "What is included in the registration fee?",
                answer:
                  "The ₹299 registration fee includes participation in both Level 1 and Level 2 exams, a certificate of participation, eligibility for all awards and prizes, and access to result announcements.",
              },
              {
                question: "When will the exam results be announced?",
                answer:
                  "Level 1 results are announced within 10 days of the exam. Level 2 results and national rankings are announced in December 2025, followed by the Singapore trip winners announcement.",
              },
              {
                question: "Is the syllabus booklet mandatory?",
                answer:
                  "The syllabus booklet is not mandatory but highly recommended. It contains detailed preparation materials, sample questions, and practice tests that significantly improve your chances of success.",
              },
              {
                question: "Who is eligible for the Singapore trip?",
                answer:
                  "Students from Grades 4-10 who achieve top national rankings in their respective grade categories are eligible for the fully sponsored 3N/4D Singapore trip, including Universal Studios visit and award ceremony.",
              },
              {
                question: "Can I get a refund if I can't participate?",
                answer:
                  "Refund policies vary based on the timing of your request. Please contact our support team with your specific situation, and we'll do our best to accommodate your needs within our policy guidelines.",
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Our Support Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Dedicated professionals ready to help you succeed in the Global English Olympiad.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Registration Support",
                description: "Help with registration process, payment issues, and account setup.",
                contact: "registration@ieofoundation.org",
                hours: "Mon-Fri: 9 AM - 6 PM",
              },
              {
                name: "Academic Support",
                description: "Syllabus queries, preparation guidance, and study material assistance.",
                contact: "academic@ieofoundation.org",
                hours: "Mon-Sat: 10 AM - 5 PM",
              },
              {
                name: "Technical Support",
                description: "Website issues, online payment problems, and technical difficulties.",
                contact: "tech@ieofoundation.org",
                hours: "Mon-Fri: 9 AM - 7 PM",
              },
            ].map((support, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{support.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{support.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{support.contact}</p>
                      <p className="text-sm text-muted-foreground">{support.hours}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Contact Team
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Need Immediate Help?</h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    For urgent queries during exam periods or registration deadlines, contact our emergency helpline for
                    immediate assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +91 9777784988
                    </Button>
                    <Button size="lg" variant="outline">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      WhatsApp Support
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Emergency support available during exam periods and registration deadlines
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}

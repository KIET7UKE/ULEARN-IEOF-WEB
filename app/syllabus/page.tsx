"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import { RegistrationModal } from "@/components/registration-modal";
import { GradeCodeModal } from "@/components/grade-code-modal";
import { GradeSyllabusAccess } from "@/components/grade-syllabus-access";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Download,
  CheckCircle,
  Clock,
  Users,
  Target,
  FileText,
  PenTool,
  MessageCircle,
  Brain,
  Star,
  ShoppingCart,
  Key,
  Lock,
  AlertCircle,
} from "lucide-react";

export default function SyllabusPage() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isGradeCodeModalOpen, setIsGradeCodeModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const gradeGroups = [
    { id: "1-3", label: "Grades 1-3", description: "Foundation Level" },
    { id: "4-6", label: "Grades 4-6", description: "Elementary Level" },
    { id: "7-8", label: "Grades 7-8", description: "Intermediate Level" },
    { id: "9-10", label: "Grades 9-10", description: "Advanced Level" },
  ];

  const handleGradeCodeValidated = (grade: number) => {
    setSelectedGrade(grade);
    setIsGradeCodeModalOpen(false);
  };

  const handleBackToSelection = () => {
    setSelectedGrade(null);
  };

  // If a grade is selected, show the grade-specific syllabus access
  if (selectedGrade) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <GradeSyllabusAccess
            grade={selectedGrade}
            onBack={handleBackToSelection}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-6 py-2">
              Syllabus & Preparation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Comprehensive Study Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Detailed syllabus, practice materials, and preparation strategies
              for the Global English Olympiad 2025. Everything you need to excel
              in both Level 1 and Level 2 examinations.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Grade Code Access Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Key className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Access Your Grade-Specific Syllabus
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
                Students can access their grade-specific syllabus content using
                unique global codes. These codes are provided by schools and
                grant access only to syllabus materials.
              </p>
            </div>

            <div className="w-full">
              <ScrollAnimation animation="slideInLeft">
                <Card className="p-8 w-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Key className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Student Access</CardTitle>
                    <CardDescription className="text-lg">
                      Enter your unique grade code to access syllabus content
                      for your specific grade level.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        "Access grade-specific syllabus content",
                        "View detailed learning objectives",
                        "Download syllabus materials",
                        "Restricted to syllabus only - no lessons or exercises",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => setIsGradeCodeModalOpen(true)}
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      <Key className="w-5 h-5 mr-2" />
                      Enter Grade Code
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Syllabus Booklet Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <img
                src="/professional-syllabus-booklet-with-geo-branding-sh.png"
                alt="GEO Syllabus Booklet"
                className="rounded-2xl shadow-xl"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight" className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6">
                  Grade-Specific Syllabus & Practice Booklet
                </h2>
                <p className="text-lg text-muted-foreground text-pretty mb-6">
                  Our comprehensive booklet is designed to help students prepare
                  effectively for both Level 1 (School-Level) and Level 2
                  (Regional-Level) examinations of the Global English Olympiad.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Detailed syllabus breakdown for each grade",
                  "Sample questions matching exam structure",
                  "Practice tests for both Level 1 & Level 2",
                  "Answer keys with detailed explanations",
                  "Preparation tips and strategies",
                  "Grammar reference guide",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">₹100</h3>
                    <p className="text-muted-foreground">
                      Per booklet (inclusive of taxes)
                    </p>
                  </div>
                  <Button
                    className="bg-secondary hover:bg-secondary/90"
                    onClick={() => setIsSyllabusModalOpen(true)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secure online payment • Delivered within 7 working days
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              What We Assess
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The Global English Olympiad evaluates comprehensive English
              language skills through structured assessment areas.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Comprehension Skills",
                description:
                  "Understanding and interpreting various types of texts, passages, and literary pieces.",
                color: "bg-blue-500",
              },
              {
                icon: PenTool,
                title: "Grammar & Vocabulary",
                description:
                  "Mastery of language structure, word usage, and advanced vocabulary application.",
                color: "bg-green-500",
              },
              {
                icon: MessageCircle,
                title: "Situational Conversation",
                description:
                  "Practical English for real-life scenarios and effective communication skills.",
                color: "bg-primary",
              },
              {
                icon: FileText,
                title: "Writing Skills",
                description:
                  "Creative and analytical writing abilities, including essays and structured responses.",
                color: "bg-secondary",
              },
            ].map((area, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-center">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-wise Syllabus */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Grade-wise Syllabus Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Detailed curriculum designed to match each grade level's learning
              objectives and capabilities.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <Tabs defaultValue="1-3" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <TabsList className="grid w-full md:w-auto grid-cols-2 lg:grid-cols-4">
                  {gradeGroups.map((group) => (
                    <TabsTrigger
                      key={group.id}
                      value={group.id}
                      className="text-center"
                    >
                      <div>
                        <div className="font-semibold">{group.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {group.description}
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex gap-3">
                  <Button
                    className="bg-secondary hover:bg-secondary/90"
                    onClick={() => setIsSyllabusModalOpen(true)}
                  >
                    Buy Booklet ₹100
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/api/syllabus?grade=all">Download Free Syllabus</a>
                  </Button>
                </div>
              </div>

              <TabsContent value="1-3" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Grades 1-3: Foundation Level</span>
                    </CardTitle>
                    <CardDescription>
                      Building strong English fundamentals through engaging and
                      age-appropriate content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Target className="w-5 h-5 text-primary mr-2" />
                          Core Topics
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Basic vocabulary and word recognition",
                            "Simple sentence formation",
                            "Phonics and pronunciation",
                            "Picture-based comprehension",
                            "Basic grammar concepts",
                            "Rhymes and simple poems",
                          ].map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Exam Structure
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-muted rounded-lg p-3">
                            <div className="font-medium text-foreground">
                              Duration: 45 minutes
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Total Questions: 30
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Multiple Choice</span>
                              <span className="text-sm font-medium">
                                20 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">
                                Fill in the blanks
                              </span>
                              <span className="text-sm font-medium">
                                5 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Picture-based</span>
                              <span className="text-sm font-medium">
                                5 questions
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex gap-3 px-1">
                    <Button variant="outline" asChild>
                      <a href="/api/syllabus?grade=1-3">Free Download (1–3)</a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="4-6" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Grades 4-6: Elementary Level</span>
                    </CardTitle>
                    <CardDescription>
                      Developing intermediate English skills with focus on
                      comprehension and expression.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Target className="w-5 h-5 text-primary mr-2" />
                          Core Topics
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Reading comprehension passages",
                            "Parts of speech and grammar rules",
                            "Synonyms, antonyms, and word meanings",
                            "Simple essay writing",
                            "Punctuation and capitalization",
                            "Story sequencing and completion",
                          ].map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Exam Structure
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-muted rounded-lg p-3">
                            <div className="font-medium text-foreground">
                              Duration: 60 minutes
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Total Questions: 40
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Multiple Choice</span>
                              <span className="text-sm font-medium">
                                25 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Comprehension</span>
                              <span className="text-sm font-medium">
                                10 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Writing Tasks</span>
                              <span className="text-sm font-medium">
                                5 questions
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex gap-3 px-1">
                    <Button variant="outline" asChild>
                      <a href="/api/syllabus?grade=4-6">Free Download (4–6)</a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="7-8" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Grades 7-8: Intermediate Level</span>
                    </CardTitle>
                    <CardDescription>
                      Advanced language skills with emphasis on critical
                      thinking and analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Target className="w-5 h-5 text-primary mr-2" />
                          Core Topics
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Complex reading comprehension",
                            "Advanced grammar and syntax",
                            "Vocabulary building and usage",
                            "Creative and analytical writing",
                            "Literature appreciation",
                            "Formal and informal communication",
                          ].map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Exam Structure
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-muted rounded-lg p-3">
                            <div className="font-medium text-foreground">
                              Duration: 75 minutes
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Total Questions: 50
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Multiple Choice</span>
                              <span className="text-sm font-medium">
                                30 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Comprehension</span>
                              <span className="text-sm font-medium">
                                15 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Essay Writing</span>
                              <span className="text-sm font-medium">
                                5 questions
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex gap-3 px-1">
                    <Button variant="outline" asChild>
                      <a href="/api/syllabus?grade=7-8">Free Download (7–8)</a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="9-10" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Grades 9-10: Advanced Level</span>
                    </CardTitle>
                    <CardDescription>
                      Mastery-level English skills preparing students for higher
                      education and global communication.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Target className="w-5 h-5 text-primary mr-2" />
                          Core Topics
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Advanced comprehension and analysis",
                            "Complex grammatical structures",
                            "Extensive vocabulary and idioms",
                            "Argumentative and persuasive writing",
                            "Literary criticism and interpretation",
                            "Professional communication skills",
                          ].map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Exam Structure
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-muted rounded-lg p-3">
                            <div className="font-medium text-foreground">
                              Duration: 90 minutes
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Total Questions: 60
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Multiple Choice</span>
                              <span className="text-sm font-medium">
                                35 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Comprehension</span>
                              <span className="text-sm font-medium">
                                15 questions
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Essay & Analysis</span>
                              <span className="text-sm font-medium">
                                10 questions
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex gap-3 px-1">
                    <Button variant="outline" asChild>
                      <a href="/api/syllabus?grade=9-10">
                        Free Download (9–10)
                      </a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* Preparation Tips */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
              Preparation Strategies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expert tips and proven strategies to help students excel in the
              Global English Olympiad.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Regular Reading Practice",
                tips: [
                  "Read diverse materials daily",
                  "Practice comprehension questions",
                  "Build vocabulary through context",
                  "Summarize what you read",
                ],
              },
              {
                icon: PenTool,
                title: "Grammar Mastery",
                tips: [
                  "Learn grammar rules systematically",
                  "Practice with varied exercises",
                  "Identify common error patterns",
                  "Apply rules in writing tasks",
                ],
              },
              {
                icon: MessageCircle,
                title: "Communication Skills",
                tips: [
                  "Practice speaking English daily",
                  "Engage in conversations",
                  "Learn situational responses",
                  "Build confidence in expression",
                ],
              },
              {
                icon: FileText,
                title: "Writing Excellence",
                tips: [
                  "Practice different writing formats",
                  "Focus on structure and clarity",
                  "Expand vocabulary usage",
                  "Review and edit your work",
                ],
              },
              {
                icon: Clock,
                title: "Time Management",
                tips: [
                  "Practice with timed tests",
                  "Allocate time per section",
                  "Skip difficult questions initially",
                  "Review answers if time permits",
                ],
              },
              {
                icon: Star,
                title: "Mock Tests",
                tips: [
                  "Take regular practice tests",
                  "Analyze your performance",
                  "Identify weak areas",
                  "Track improvement over time",
                ],
              },
            ].map((strategy, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <strategy.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      {/* <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Get Your Syllabus Booklet Today
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Don't leave your preparation to chance. Get the official syllabus
              booklet with practice questions, sample tests, and detailed
              preparation guidelines for just ₹100.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => setIsSyllabusModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Syllabus Booklet - ₹100
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Sample Pages
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Secure Payment", value: "Online Gateway" },
                { label: "Fast Delivery", value: "7 Working Days" },
                { label: "All Grades", value: "1 to 10 Available" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-primary-foreground">
                    {item.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section> */}

      <Footer />

      <RegistrationModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        type="syllabus"
      />
      <GradeCodeModal
        isOpen={isGradeCodeModalOpen}
        onClose={() => setIsGradeCodeModalOpen(false)}
        onCodeValidated={handleGradeCodeValidated}
      />
    </div>
  );
}

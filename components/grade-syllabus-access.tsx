"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Clock,
  Target,
  Users,
  BookOpen,
  Download,
  ArrowLeft,
  Lock,
  AlertCircle,
} from "lucide-react";

interface GradeSyllabusAccessProps {
  grade: number;
  onBack: () => void;
}

const GRADE_SYLLABUS_DATA = {
  1: {
    title: "Grade 1: Foundation Level",
    description:
      "Building strong English fundamentals through engaging and age-appropriate content.",
    duration: "45 minutes",
    totalQuestions: 30,
    sections: [
      { name: "Multiple Choice", count: 20 },
      { name: "Fill in the blanks", count: 5 },
      { name: "Picture-based", count: 5 },
    ],
    topics: [
      "Basic vocabulary and word recognition",
      "Simple sentence formation",
      "Phonics and pronunciation",
      "Picture-based comprehension",
      "Basic grammar concepts",
      "Rhymes and simple poems",
    ],
  },
  2: {
    title: "Grade 2: Foundation Level",
    description:
      "Building strong English fundamentals through engaging and age-appropriate content.",
    duration: "45 minutes",
    totalQuestions: 30,
    sections: [
      { name: "Multiple Choice", count: 20 },
      { name: "Fill in the blanks", count: 5 },
      { name: "Picture-based", count: 5 },
    ],
    topics: [
      "Basic vocabulary and word recognition",
      "Simple sentence formation",
      "Phonics and pronunciation",
      "Picture-based comprehension",
      "Basic grammar concepts",
      "Rhymes and simple poems",
    ],
  },
  3: {
    title: "Grade 3: Foundation Level",
    description:
      "Building strong English fundamentals through engaging and age-appropriate content.",
    duration: "45 minutes",
    totalQuestions: 30,
    sections: [
      { name: "Multiple Choice", count: 20 },
      { name: "Fill in the blanks", count: 5 },
      { name: "Picture-based", count: 5 },
    ],
    topics: [
      "Basic vocabulary and word recognition",
      "Simple sentence formation",
      "Phonics and pronunciation",
      "Picture-based comprehension",
      "Basic grammar concepts",
      "Rhymes and simple poems",
    ],
  },
  4: {
    title: "Grade 4: Elementary Level",
    description:
      "Developing intermediate English skills with focus on comprehension and expression.",
    duration: "60 minutes",
    totalQuestions: 40,
    sections: [
      { name: "Multiple Choice", count: 25 },
      { name: "Comprehension", count: 10 },
      { name: "Writing Tasks", count: 5 },
    ],
    topics: [
      "Reading comprehension passages",
      "Parts of speech and grammar rules",
      "Synonyms, antonyms, and word meanings",
      "Simple essay writing",
      "Punctuation and capitalization",
      "Story sequencing and completion",
    ],
  },
  5: {
    title: "Grade 5: Elementary Level",
    description:
      "Developing intermediate English skills with focus on comprehension and expression.",
    duration: "60 minutes",
    totalQuestions: 40,
    sections: [
      { name: "Multiple Choice", count: 25 },
      { name: "Comprehension", count: 10 },
      { name: "Writing Tasks", count: 5 },
    ],
    topics: [
      "Reading comprehension passages",
      "Parts of speech and grammar rules",
      "Synonyms, antonyms, and word meanings",
      "Simple essay writing",
      "Punctuation and capitalization",
      "Story sequencing and completion",
    ],
  },
  6: {
    title: "Grade 6: Elementary Level",
    description:
      "Developing intermediate English skills with focus on comprehension and expression.",
    duration: "60 minutes",
    totalQuestions: 40,
    sections: [
      { name: "Multiple Choice", count: 25 },
      { name: "Comprehension", count: 10 },
      { name: "Writing Tasks", count: 5 },
    ],
    topics: [
      "Reading comprehension passages",
      "Parts of speech and grammar rules",
      "Synonyms, antonyms, and word meanings",
      "Simple essay writing",
      "Punctuation and capitalization",
      "Story sequencing and completion",
    ],
  },
  7: {
    title: "Grade 7: Intermediate Level",
    description:
      "Advanced language skills with emphasis on critical thinking and analysis.",
    duration: "75 minutes",
    totalQuestions: 50,
    sections: [
      { name: "Multiple Choice", count: 30 },
      { name: "Comprehension", count: 15 },
      { name: "Essay Writing", count: 5 },
    ],
    topics: [
      "Complex reading comprehension",
      "Advanced grammar and syntax",
      "Vocabulary building and usage",
      "Creative and analytical writing",
      "Literature appreciation",
      "Formal and informal communication",
    ],
  },
  8: {
    title: "Grade 8: Intermediate Level",
    description:
      "Advanced language skills with emphasis on critical thinking and analysis.",
    duration: "75 minutes",
    totalQuestions: 50,
    sections: [
      { name: "Multiple Choice", count: 30 },
      { name: "Comprehension", count: 15 },
      { name: "Essay Writing", count: 5 },
    ],
    topics: [
      "Complex reading comprehension",
      "Advanced grammar and syntax",
      "Vocabulary building and usage",
      "Creative and analytical writing",
      "Literature appreciation",
      "Formal and informal communication",
    ],
  },
  9: {
    title: "Grade 9: Advanced Level",
    description:
      "Mastery-level English skills preparing students for higher education and global communication.",
    duration: "90 minutes",
    totalQuestions: 60,
    sections: [
      { name: "Multiple Choice", count: 35 },
      { name: "Comprehension", count: 15 },
      { name: "Essay & Analysis", count: 10 },
    ],
    topics: [
      "Advanced comprehension and analysis",
      "Complex grammatical structures",
      "Extensive vocabulary and idioms",
      "Argumentative and persuasive writing",
      "Literary criticism and interpretation",
      "Professional communication skills",
    ],
  },
  10: {
    title: "Grade 10: Advanced Level",
    description:
      "Mastery-level English skills preparing students for higher education and global communication.",
    duration: "90 minutes",
    totalQuestions: 60,
    sections: [
      { name: "Multiple Choice", count: 35 },
      { name: "Comprehension", count: 15 },
      { name: "Essay & Analysis", count: 10 },
    ],
    topics: [
      "Advanced comprehension and analysis",
      "Complex grammatical structures",
      "Extensive vocabulary and idioms",
      "Argumentative and persuasive writing",
      "Literary criticism and interpretation",
      "Professional communication skills",
    ],
  },
};

export function GradeSyllabusAccess({
  grade,
  onBack,
}: GradeSyllabusAccessProps) {
  const [activeTab, setActiveTab] = useState("syllabus");

  const gradeData =
    GRADE_SYLLABUS_DATA[grade as keyof typeof GRADE_SYLLABUS_DATA];

  if (!gradeData) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-red-600 mb-2">
          Invalid Grade
        </h3>
        <p className="text-muted-foreground mb-4">
          The selected grade is not available.
        </p>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button onClick={onBack} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {gradeData.title}
            </h2>
            <p className="text-muted-foreground">{gradeData.description}</p>
          </div>
        </div>
        <Badge variant="secondary" className="text-sm">
          Grade {grade} Access
        </Badge>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="syllabus">Syllabus Details</TabsTrigger>
          <TabsTrigger value="exam">Exam Structure</TabsTrigger>
        </TabsList>

        {/* Syllabus Content */}
        <TabsContent value="syllabus" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Core Topics & Learning Objectives</span>
              </CardTitle>
              <CardDescription>
                Comprehensive coverage of English language skills for Grade{" "}
                {grade} students.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Target className="w-5 h-5 text-primary mr-2" />
                    Core Topics
                  </h4>
                  <ul className="space-y-2">
                    {gradeData.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-2">
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
                    <Users className="w-5 h-5 text-primary mr-2" />
                    Learning Focus
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="font-medium text-foreground">
                        Grade Level: {grade}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {grade <= 3
                          ? "Foundation Level"
                          : grade <= 6
                          ? "Elementary Level"
                          : grade <= 8
                          ? "Intermediate Level"
                          : "Advanced Level"}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Difficulty Level:</span>
                        <span className="font-medium">
                          {grade <= 3
                            ? "Basic"
                            : grade <= 6
                            ? "Intermediate"
                            : grade <= 8
                            ? "Advanced"
                            : "Expert"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Preparation Time:</span>
                        <span className="font-medium">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Restricted Access Notice */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800">
                    Restricted Access Notice
                  </h4>
                  <p className="text-sm text-amber-700">
                    This code provides access only to the syllabus content for
                    Grade {grade}. Access to practice tests, detailed lessons,
                    and other learning materials requires additional permissions
                    or purchase of the complete study package.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exam Structure */}
        <TabsContent value="exam" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Exam Structure & Format</span>
              </CardTitle>
              <CardDescription>
                Detailed breakdown of the examination format for Grade {grade}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Exam Details
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="font-medium text-foreground">
                        Duration: {gradeData.duration}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Questions: {gradeData.totalQuestions}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        Question Distribution:
                      </div>
                      {gradeData.sections.map((section, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span>{section.name}</span>
                          <span className="font-medium">
                            {section.count} questions
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Assessment Areas
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Comprehension Skills",
                      "Grammar & Vocabulary",
                      "Writing Abilities",
                      "Critical Thinking",
                    ].map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" asChild>
          <a href={`/api/syllabus?grade=${grade}`}>
            <Download className="w-4 h-4 mr-2" />
            Download Grade {grade} Syllabus
          </a>
        </Button>
        <Button onClick={onBack} variant="secondary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Grade Selection
        </Button>
      </div>
    </div>
  );
}


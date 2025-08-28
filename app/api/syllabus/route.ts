import type { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const grade = (searchParams.get("grade") || "all").toLowerCase()

  const content = `Global English Olympiad (GEO) - Free Syllabus Outline
Grade(s): ${grade.toUpperCase()}
-------------------------------------------------
Level 1: School-Level Exam
- Comprehension, Grammar & Vocabulary, Situational Conversation
Level 2: Regional-Level Exam
- Advanced comprehension, usage, writing, and communication

Key Topics by Grade Group:
1-3: Basics, phonics, simple sentences, picture comprehension
4-6: Parts of speech, reading comprehension, writing basics
7-8: Advanced grammar, literature appreciation, analytical writing
9-10: Mastery-level comprehension, persuasive writing, critical analysis

Tip: Purchase the official booklet for sample tests, answer keys, and deep practice.
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="geo-syllabus-${grade}.txt"`,
    },
  })
}

import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "IEOF - International English Olympiad Foundation | Global English Olympiad (GEO)",
    template: "%s | IEOF - International English Olympiad Foundation",
  },
  description:
    "Join India's first offline International English Olympiad Foundation (IEOF). Global English Olympiad (GEO) for Grades 1-10 with ₹40,000 cash prizes, Dubai trip, and international recognition. Register now for just ₹299!",
  keywords: [
    "IEOF",
    "International English Olympiad Foundation",
    "Global English Olympiad",
    "GEO",
    "English Olympiad India",
    "English competition",
    "Dubai trip for students",
    "English Olympiad registration",
    "Unique Educon IEOF",
    "English Olympiad prizes",
    "International English competition",
    "Student English Olympiad",
    "English Olympiad 2025",
    "Singapore trip students",
    "English Olympiad foundation",
  ],
  authors: [{ name: "International English Olympiad Foundation" }],
  creator: "IEOF",
  publisher: "International English Olympiad Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ieof.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ieof.in",
    siteName: "IEOF - International English Olympiad Foundation",
    title:
      "IEOF - International English Olympiad Foundation | Global English Olympiad (GEO)",
    description:
      "Join India's first offline International English Olympiad Foundation (IEOF). Global English Olympiad (GEO) for Grades 1-10 with ₹40,000 cash prizes, Dubai trip, and international recognition.",
    images: [
      {
        url: "/images/students-preparing-olympiad.png",
        width: 1200,
        height: 630,
        alt: "Students preparing for Global English Olympiad (GEO)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IEOF - International English Olympiad Foundation | Global English Olympiad (GEO)",
    description:
      "Join India's first offline International English Olympiad Foundation (IEOF). Global English Olympiad (GEO) for Grades 1-10 with ₹40,000 cash prizes, Dubai trip, and international recognition.",
    images: ["/images/students-preparing-olympiad.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
  },
  category: "education",
  classification: "Educational Institution",
  generator: "Next.js",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ieof.in" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}

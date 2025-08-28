"use client"

import type React from "react"

type HeroBackgroundVideoProps = {
  className?: string
  // Optional poster for faster first paint; falls back to placeholder if not provided
  poster?: string
  // Children are the centered foreground content
  children: React.ReactNode
}

export default function HeroBackgroundVideo({
  className,
  poster = "/ieof-intro-video-poster.png",
  children,
}: HeroBackgroundVideoProps) {
  const src = typeof window !== "undefined" ? process.env.NEXT_PUBLIC_INTRO_VIDEO_URL : undefined

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        "bg-background",
        "min-h-[70vh] md:min-h-[80vh] flex items-center justify-center",
        className || "",
      ].join(" ")}
      aria-label="Hero"
    >
      {/* Background media */}
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-hidden="true"
        >
          <source src={src as string} />
        </video>
      ) : (
        <img
          src="/english-olympiad-students-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Overlay for contrast */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* base scrim */}
        <div className="absolute inset-0 bg-black/55" />
        {/* gradient focus to center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-3xl md:max-w-4xl px-4 text-center">
          <div className="mx-auto w-full rounded-2xl border border-white/10 bg-background/55 supports-[backdrop-filter]:bg-background/40 backdrop-blur-md shadow-lg p-6 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

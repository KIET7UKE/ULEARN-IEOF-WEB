"use client"

import Image from "next/image"

type MarqueeLogosProps = {
  logos?: { src: string; alt: string }[]
  height?: number
  speedSec?: number
}

export function MarqueeLogos({ logos, height = 80, speedSec = 28 }: MarqueeLogosProps) {
  // Default fallback logos if none are provided
  const defaultLogos: { src: string; alt: string }[] = [
    { src: "/ieof-logo.png", alt: "International English Olympiad Foundation (IEOF)" },
    { src: "/partners/edufam.png", alt: "Edufam International Academy" },
    { src: "/partners/trsma.png", alt: "TRSMA" },
    { src: "/partners/psacwa.png", alt: "PSACWA" },
  ]

  // Normalize to a safe iterable array
  const safe = Array.isArray(logos) && logos.length > 0 ? logos : defaultLogos

  // If somehow empty, render nothing to avoid errors
  if (!Array.isArray(safe) || safe.length === 0) {
    return null
  }

  const track = [...safe, ...safe] // duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden" aria-label="Partner logos marquee">
      <div
        className="whitespace-nowrap will-change-transform marquee-anim"
        style={{
          display: "inline-flex",
          animation: `marquee ${speedSec}s linear infinite`,
        }}
      >
        {track.map((l, i) => (
          <div key={`${l.alt}-${i}`} className="mx-10 shrink-0 opacity-90">
            <Image
              src={l.src || "/placeholder.svg?height=80&width=240&query=partner%20logo"}
              alt={l.alt || "Partner logo"}
              height={height}
              width={Math.round(height * 3)}
              className="h-20 w-auto object-contain md:h-24"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-anim { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

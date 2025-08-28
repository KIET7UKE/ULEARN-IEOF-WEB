"use client"

import type React from "react"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ImageItem = { src: string; alt: string }
type Props = {
  videoSrc?: string
  videoPoster?: string
  images: ImageItem[]
  className?: string
}

export default function MediaCarousel({ videoSrc, videoPoster, images, className }: Props) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const touchStartX = useRef<number | null>(null)

  const total = (videoSrc ? 1 : 0) + images.length

  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total])
  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  // Auto-advance logic:
  // - If on video slide (0) with videoSrc: wait for "ended" to advance
  // - Otherwise auto-advance every 5s
  useEffect(() => {
    if (videoSrc && index === 0) {
      const v = videoRef.current
      if (!v) return
      const onEnded = () => next()
      v.addEventListener("ended", onEnded)
      return () => v.removeEventListener("ended", onEnded)
    } else {
      const id = setTimeout(next, 5000)
      return () => clearTimeout(id)
    }
  }, [index, next, videoSrc])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-black"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {/* Video slide (index 0) */}
          {videoSrc ? (
            <div className="min-w-full aspect-video bg-black">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src={videoSrc}
                poster={videoPoster}
                playsInline
                muted
                autoPlay
                controls
              />
            </div>
          ) : null}

          {/* Image slides */}
          {images.map((img, i) => (
            <div key={i} className="min-w-full aspect-video bg-black">
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <Button
            variant="secondary"
            size="icon"
            className="pointer-events-auto rounded-full bg-white/80 hover:bg-white"
            onClick={prev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="pointer-events-auto rounded-full bg-white/80 hover:bg-white"
            onClick={next}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={cn("h-2 w-2 rounded-full transition", i === index ? "bg-white" : "bg-white/50")}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

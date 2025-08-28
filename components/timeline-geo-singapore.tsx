"use client"

import { cn } from "@/lib/utils"

const STEPS = [
  { step: "01", title: "3 Nights / 4 Days", desc: "Fully sponsored educational trip to Singapore." },
  { step: "02", title: "Universal Studios", desc: "World‑class entertainment and experiences." },
  { step: "03", title: "International Ceremony", desc: "Awards alongside global dignitaries." },
  { step: "04", title: "Explore & Learn", desc: "Culture, education hubs, and landmarks." },
  { step: "05", title: "Global Ambassadors", desc: "Return inspired as English excellence ambassadors." },
]

export function TimelineGeoSingapore({
  className,
  showHeading = true,
}: {
  className?: string
  showHeading?: boolean
}) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {showHeading ? (
          <>
            <h2 className="text-center text-2xl font-semibold md:text-3xl">Singapore Journey Timeline</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground md:text-base">
              What toppers experience during the Global English Olympiad Felicitation in Singapore
            </p>
          </>
        ) : null}

        <div className={cn("grid gap-6 md:grid-cols-5", showHeading ? "mt-8" : "")}>
          {STEPS.map((s) => (
            <div key={s.step} className="relative rounded-lg border bg-background p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary">
                <span className="text-sm font-semibold">{s.step}</span>
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"

const items = [
  { title: "Equity", desc: "Equal opportunity for all learners." },
  { title: "Sustainability", desc: "Eco‑friendly event practices." },
  { title: "Inclusivity", desc: "Access and opportunity for every student, everywhere." },
]

export function Commitments({
  className,
  showHeading = true,
}: {
  className?: string
  showHeading?: boolean
}) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {showHeading ? <h2 className="text-center text-2xl font-semibold md:text-3xl">Our Commitments</h2> : null}
        <div className={cn("grid gap-4 md:grid-cols-3", showHeading ? "mt-8" : "")}>
          {items.map((i) => (
            <div key={i.title} className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-2 inline-block rounded px-2 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                {i.title}
              </div>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

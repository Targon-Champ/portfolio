"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function StatPill({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group cursor-default rounded-2xl border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 transition-all hover:bg-emerald-500/10 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.16)]">
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
          <div className="mt-1 h-[2px] w-10 bg-emerald-500/40 transition-all group-hover:w-16" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 border-emerald-500/25">
        <p className="text-sm text-muted-foreground">{hint}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

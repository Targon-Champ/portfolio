"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export type TechIconDef = { file: string; label: string }

export function TechIcon({ file, label, size = 26 }: TechIconDef & { size?: number }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "group flex items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-2",
            "transition-all hover:-translate-y-0.5 hover:bg-emerald-500/10",
            "hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18)]"
          )}
        >
          <img
            src={`/svg/${file}.svg`}
            alt={label}
            width={size}
            height={size}
            className="opacity-90 transition-opacity group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export function IconStrip({ icons }: { icons: TechIconDef[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {icons.map((i) => (
        <TechIcon key={i.file} file={i.file} label={i.label} size={22} />
      ))}
    </div>
  )
}

"use client"

import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Kbd } from "@/components/ui/8bit/kbd"

import { IconStrip, type TechIconDef } from "./tech-icons"
import { Space } from "lucide-react"

export function ProjectCard({
  title,
  tag,
  highlight,
  href,
  icons,
}: {
  title: string
  tag: string
  highlight: string
  href: string
  icons: TechIconDef[]
}) {
  return (
    <Card className="group border-emerald-500/20 bg-background/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-18px_rgba(16,185,129,0.55)]">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg leading-tight">
              <Kbd className="h-6 px-2 text-sm">{title}</Kbd>
            </CardTitle>
            <Space className="h-4" />
            <CardDescription className="text-sm">{highlight}</CardDescription>
          </div>
          <Badge variant="outline" className="border-emerald-500/30">
            {tag}
          </Badge>
        </div>

        <IconStrip icons={icons} />
      </CardHeader>

      <CardContent className="pt-0">
        <Button variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10" asChild>
          <Link href={href}>Open</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

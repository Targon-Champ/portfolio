"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CtaSection() {
  return (
    <div className="mt-12 md:mt-16">
      <Card className="border-emerald-500/20 bg-emerald-500/5">
        <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold">Open to AI tooling, backend, and performance-focused roles.</p>
            <p className="text-sm text-muted-foreground">
              Clear signal: measurable impact, real systems, and clean UX.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-600/90 transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10 transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

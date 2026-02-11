"use client"

import Link from "next/link"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Kbd } from "@/components/ui/8bit/kbd"

import { StatPill } from "./stat-pill"
import { TechIcon, type TechIconDef } from "./tech-icons"

export function HeroSection() {
  const heroIcons: TechIconDef[] = [
    { file: "Python", label: "Python" },
    { file: "FastAPI", label: "FastAPI" },
    { file: "C", label: "C" },
    { file: "C++-(CPlusPlus)", label: "C++" },
    { file: "Linux", label: "Linux" },
    { file: "Docker", label: "Docker" },
    { file: "PyTorch", label: "PyTorch" },
    { file: "Google-Cloud", label: "Google Cloud" },
    { file: "AWS", label: "AWS" },
    { file: "PostgresSQL", label: "PostgreSQL" },
    { file: "Kubernetes", label: "Kubernetes" },
    { file: "Git", label: "Git" },
    { file: "TypeScript", label: "TypeScript" },
    { file: "Next.js", label: "Next.js" },
    { file: "React", label: "React" },
    { file: "Tailwind-CSS", label: "Tailwind CSS" },
    { file: "OpenAI", label: "OpenAI" },
    { file: "HTML5", label: "HTML5" },
    { file: "CSS3", label: "CSS3" },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-start">
      <Card className="relative overflow-hidden border-emerald-500/20 bg-background/70 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]">
        <div className="absolute right-[-60px] top-[-60px] h-[220px] w-[220px] rounded-full bg-emerald-500/10 blur-2xl" />

        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
              AI Tooling - Systems - Performance - Data Engineering
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30">
              MS CS @ Case Western Reserve University
            </Badge>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-3xl leading-tight md:text-4xl">
              <Kbd className="h-10 px-3 text-base md:h-12 md:px-4 md:text-lg">
                Sri Satya Sai Immani
              </Kbd>
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              I build practical AI systems and developer-friendly tooling: LLM integrations, retrieval workflows,
              reliable APIs, and performance-aware pipelines.
            </CardDescription>
          </div>

        </CardHeader>

        <CardContent className="space-y-5">
          <Separator className="bg-emerald-500/15" />

          <div className="grid gap-3 sm:grid-cols-3">
            <StatPill
              label="Library chatbot impact"
              value="30% workload drop"
              hint="Resume: built a library-query chatbot that reduced front desk workload by 30%."
            />
            <StatPill
              label="MCQ agent impact"
              value="~60% time saved"
              hint="Resume: engineered an agent that retrieves NLM images and auto-generates MCQs, reducing ~60% professor workload."
            />
            <StatPill
              label="GPU sorting throughput"
              value="344.6M elems/s"
              hint="Resume: Hybrid Bucket-Radix GPU sort reached up to 344.6M elements/sec and reduced atomics 10-50x."
            />
          </div>

          <div className="pt-1">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500/70" />
              Tech stack
            </div>

            <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
              {heroIcons.map((i) => (
                <TechIcon key={i.file} file={i.file} label={i.label} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-500/20 bg-background/70">
        <CardHeader>
          <CardTitle className="text-lg">
            <Kbd className="h-6 px-2 text-sm">About</Kbd>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
            <div className="grid aspect-[4/3] place-items-center">
              
                <Avatar className="mx-auto h-54 w-52 border border-emerald-500/30">
                  <AvatarImage src="/sri.jpeg" alt="Sri Satya Sai Immani" />
                  <AvatarFallback className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    SS
                  </AvatarFallback>
                </Avatar>
              
            </div>
            <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(90deg,rgba(16,185,129,0.35)_0px,rgba(16,185,129,0.35)_1px,transparent_2px,transparent_9px)]" />
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <p className="transition-transform duration-300 hover:translate-x-[2px]">
              Graduate CS engineer focused on AI systems and performance work: LLM integration, RAG-style workflows,
              and GPU/CPU benchmarking, built to be measurable and reliable.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-emerald-500/30">
                LLM Integration
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30">
                Data + APIs
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30">
                CUDA / Benchmarking
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

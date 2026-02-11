"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Kbd } from "@/components/ui/8bit/kbd"

import { ProjectCard } from "./project-card"

export function FeaturedProjects() {
  return (
    <div className="mt-10 md:mt-14">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          <Kbd className="h-7 px-3 text-sm md:h-8 md:px-3 md:text-base">Featured Projects</Kbd>
        </h2>
        <Button variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10" asChild>
          <Link href="/projects">See all</Link>
        </Button>
      </div>
      <Separator className="my-4 bg-emerald-500/15" />

      <div className="grid gap-4 md:grid-cols-3">
        <ProjectCard
          title="NovelTease"
          tag="AI App"
          href="/projects"
          highlight="Multimodal generation + FFmpeg video synthesis behind a production-grade FastAPI backend."
          icons={[
            { file: "Python", label: "Python" },
            { file: "FastAPI", label: "FastAPI" },
            { file: "TypeScript", label: "TypeScript" },
            { file: "OpenAI", label: "OpenAI" },
          ]}
        />

        <ProjectCard
          title="Hybrid Bucket-Radix GPU Sort"
          tag="CUDA"
          href="/projects"
          highlight="Warp-aggregated scatter reduces atomics and hits 344.6M elements/sec on large benchmarks."
          icons={[
            { file: "C", label: "C" },
            { file: "C++-(CPlusPlus)", label: "C++" },
            { file: "CUDA", label: "CUDA" },
            { file: "Linux", label: "Linux" },
            { file: "CMake", label: "CMake" },
          ]}
        />

        <ProjectCard
          title="Multiclass Vulnerability Detection (GGNN)"
          tag="GNN"
          href="/projects"
          highlight="Trained GGNNs on interprocedural program graphs (150K+ funcs); improved macro-F1 0.72 -> 0.84."
          icons={[
            { file: "Python", label: "Python" },
            { file: "PyTorch", label: "PyTorch" },
            { file: "C", label: "C" },
            { file: "C++-(CPlusPlus)", label: "C++" },
          ]}
        />
      </div>
    </div>
  )
}

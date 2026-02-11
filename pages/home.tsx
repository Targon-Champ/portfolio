"use client"

import { TooltipProvider } from "@/components/ui/tooltip"

import { BackgroundGlow } from "@/components/home/background-glow"
import { CtaSection } from "@/components/home/cta-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { HeroSection } from "@/components/home/hero-section"
import { WorkExperience } from "@/components/home/work-experience"

export default function HomePage() {
  return (
    <TooltipProvider delayDuration={250}>
      <main className="min-h-screen bg-background">
        <BackgroundGlow />

        <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <HeroSection />
          <FeaturedProjects />
          <WorkExperience />
          <CtaSection />
        </section>
      </main>
    </TooltipProvider>
  )
}

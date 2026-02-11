"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Kbd } from "@/components/ui/8bit/kbd"

import { IconStrip } from "./tech-icons"

export function WorkExperience() {
  return (
    <div className="mt-10 md:mt-14">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        <Kbd className="h-7 px-3 text-sm md:h-8 md:px-3 md:text-base">Work Experience</Kbd>
      </h2>
      <Separator className="my-4 bg-emerald-500/15" />

      <Tabs defaultValue="cwru" className="w-full">
        <TabsList className="w-full justify-start border border-emerald-500/20 bg-emerald-500/5">
          <TabsTrigger value="cwru" className="data-[state=active]:bg-emerald-500/15">
            Case Western Reserve University
          </TabsTrigger>
          <TabsTrigger value="deloitte" className="data-[state=active]:bg-emerald-500/15">
            Deloitte
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cwru" className="mt-4 space-y-4">
          <Card className="border-emerald-500/20 bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-18px_rgba(16,185,129,0.55)]">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-lg">
                  <Kbd className="h-6 px-2 text-sm">Generative AI Research Assistant - [U]Tech</Kbd>
                </CardTitle>
                <Badge variant="outline" className="border-emerald-500/30">
                  Apr 2025 - Jan 2026
                </Badge>
              </div>
              <CardDescription>Impact-first AI systems work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <ul className="list-disc space-y-2 pl-5">
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Developed a memory retaining retrieval-augmented generation agent which acts like a patient with predefined medical conditions.
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Built a library-query chatbot reducing front desk workload by 30%.
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Engineered an agent that retrieves NLM images and auto-generates MCQs (~60% professor workload reduction).
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Curated and evaluated 5-10 AI tools monthly; authored adoption reports reviewed by leadership.
                </li>
              </ul>

              <IconStrip
                icons={[
                  { file: "CopilotStudio", label: "Copilot Studio" },
                  { file: "Dataverse", label: "Dataverse" },
                  { file: "PowerApps", label: "PowerApps" },
                  { file: "Sharepoint", label: "Sharepoint" }
                ]}
              />
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-18px_rgba(16,185,129,0.55)]">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-lg">
                  <Kbd className="h-6 px-2 text-sm">Digital Accessibility Assistant - [U]Tech</Kbd>
                </CardTitle>
                <Badge variant="outline" className="border-emerald-500/30">
                  Jan 2025 - Apr 2025
                </Badge>
              </div>
              <CardDescription>Quality assurance and structured outputs at scale.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <ul className="list-disc space-y-2 pl-5">
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Processed and validated digital content with QA standards to ensure clean, structured outputs.
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Corrected 100+ hours of content to pass accessibility rubrics and metadata accuracy checks.
                </li>
              </ul>
              <IconStrip
                icons={[
                  { file: "Markdown", label: "Markdown" },
                  { file: "Echo360", label: "Echo360" },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deloitte" className="mt-4 space-y-4">
          <Card className="border-emerald-500/20 bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-18px_rgba(16,185,129,0.55)]">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-lg">
                  <Kbd className="h-6 px-2 text-sm">ServiceNow Developer - Deloitte USI Support Services</Kbd>
                </CardTitle>
                <Badge variant="outline" className="border-emerald-500/30">
                  Jun 2022 - Apr 2024
                </Badge>
              </div>
              <CardDescription>Enterprise workflows, data tracking, and reliability improvements.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <ul className="list-disc space-y-2 pl-5">
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Automated onboarding workflows and data tracking processes, improving accuracy and reliability.
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Resolved 150+ incidents; strengthened SQL-driven analysis and troubleshooting.
                </li>
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Built dashboards tracking 120+ escalations; supported 18% engagement KPI improvement within 2 quarters.
                </li>
              </ul>

              <IconStrip
                icons={[
                  { file: "JavaScript", label: "JavaScript" },
                  { file: "SQL-Developer", label: "SQL" },
                  { file: "ServiceNow", label: "ServiceNow" },
                  { file: "HTML5", label: "HTML5" },
                  { file: "CSS3", label: "CSS3" },
                ]}
              />
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-18px_rgba(16,185,129,0.55)]">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-lg">
                  <Kbd className="h-6 px-2 text-sm">Technology Analyst Intern - Deloitte USI</Kbd>
                </CardTitle>
                <Badge variant="outline" className="border-emerald-500/30">
                  Dec 2021 - Jun 2022
                </Badge>
              </div>
              <CardDescription>Enterprise development support with integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <ul className="list-disc space-y-2 pl-5">
                <li className="transition-transform duration-300 hover:translate-x-1">
                  Supported development tasks on enterprise workflows involving structured data models and integrations.
                </li>
              </ul>

              <IconStrip
                icons={[
                  { file: "JavaScript", label: "JavaScript" },
                  { file: "ServiceNow", label: "ServiceNow" },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

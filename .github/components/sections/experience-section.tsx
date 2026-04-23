"use client"

import { Briefcase, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Remote Sensing Expert",
    company: "Kenya Space Agency",
    companyUrl: "https://www.ksa.go.ke",
    location: "Nairobi, Kenya",
    period: "2022 — Present",
    description:
      "Lead geospatial expert managing cartography, quality assurance, and remote sensing initiatives. Direct production of satellite-derived map outputs, oversee quality checks across stages, and drive process improvements for enhanced accuracy.",
    highlights: [
      "Conducted systematic quality checks on geospatial map outputs verifying spatial accuracy and EU Deforestation Regulation compliance",
      "Proactively identified and analyzed data anomalies, boundary mismatches, and classification conflicts across county-level datasets",
      "Led quality assurance processes for satellite-derived agricultural products ensuring consistency across large datasets",
      "Designed and implemented internal geospatial data quality protocols establishing standards for accuracy and documentation",
      "Collaborated with national GIS teams and regulatory stakeholders to align map outputs with product quality standards",
    ],
    technologies: ["QGIS", "ArcGIS Pro", "Google Earth Engine", "Remote Sensing", "PostGIS", "Python"],
  },
  {
    title: "Consultant — Community Manager",
    company: "DevGlobal (Remote)",
    companyUrl: "https://www.dev.global",
    location: "Remote",
    period: "Oct 2024 — Jan 2025",
    description:
      "Managed structured digital content workflows and facilitated virtual technical events for an internationally distributed organization. Demonstrated strong organizational skills and attention to detail in a fully remote environment.",
    highlights: [
      "Managed structured digital content workflows and technical documentation",
      "Facilitated virtual technical events and community engagement",
      "Collaborated across diverse, internationally distributed teams",
      "Supported shared objectives through clear, professional communication",
    ],
    technologies: ["Project Management", "Community Engagement", "Digital Content", "Remote Collaboration"],
  },
  {
    title: "GIS Intern",
    company: "Azimath Limited",
    companyUrl: "#",
    location: "Nairobi, Kenya",
    period: "2016 — 2018",
    description:
      "Validated and quality-checked field data under major mapping campaigns. Conducted spatial analysis and produced clean, accurate map layers following defined cartographic standards.",
    highlights: [
      "Validated and quality-checked field data for the KPLC Meter Box campaign",
      "Conducted spatial analysis on cadastral sheets and aerial imagery",
      "Produced accurate map layers for county-level spatial plans",
      "Applied meticulous attention to detail identifying data inconsistencies",
    ],
    technologies: ["QGIS", "ArcGIS", "Spatial Analysis", "Cartography"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Experience
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Professional Journey
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-mono text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline mb-1"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.location}
                      </p>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

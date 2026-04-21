"use client"

import Image from "next/image"
import { ExternalLink, Github, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "National Coffee Geomapping",
    description:
      "GIS expert and Kajiado County lead for systematic quality checks on coffee geospatial maps. Verified spatial accuracy, classification consistency, and EU Deforestation Regulation compliance. Managed county mapping deliverables ensuring high-quality submissions aligned with national reporting timelines.",
    image: "/images/project-landcover.jpg",
    technologies: ["QGIS", "ArcGIS Pro", "Quality Assurance", "Coffee Mapping"],
    liveUrl: "https://www.ksa.go.ke",
    githubUrl: "#",
  },
  {
    title: "Agricultural Remote Sensing Project",
    description:
      "Lead remote sensing team managing quality assurance for satellite-derived agricultural map products. Performed regular accuracy checks, spatial resolution analysis, and visual consistency validation across large agricultural datasets. Proactively experimented with preprocessing approaches to improve product reliability.",
    image: "/images/project-ndvi.jpg",
    technologies: ["Remote Sensing", "Google Earth Engine", "Python", "Agricultural Monitoring"],
    liveUrl: "https://www.ksa.go.ke",
    githubUrl: "#",
  },
  {
    title: "Flood Risk Analysis & Mapping",
    description:
      "Technical lead directing production of flood risk map outputs with comprehensive quality checks from data ingestion through cartographic delivery. Applied analytical skills to identify edge cases and map inconsistencies, implementing targeted fixes to reduce turnaround time without compromising accuracy.",
    image: "/images/project-flood.jpg",
    technologies: ["Flood Mapping", "Risk Analysis", "Quality Checks", "Cartography"],
    liveUrl: "https://www.ksa.go.ke",
    githubUrl: "#",
  },
  {
    title: "Earth Observation & Space Innovation",
    description:
      "Thematic lead for Earth Observation education and outreach. Produced comprehensive mapping documentation and training materials demonstrating technical knowledge across audiences. Researched emerging technologies and methodologies in mapping and geospatial sector, contributing analytical insights to strategic planning initiatives.",
    image: "/images/project-landcover.jpg",
    technologies: ["Earth Observation", "Training", "Technology Research", "Innovation"],
    liveUrl: "https://www.ksa.go.ke",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Projects
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Work
        </h3>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of geospatial projects showcasing remote sensing analysis,
          environmental monitoring, and spatial data visualization.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-primary">
                    <Layers className="h-4 w-4" />
                    <span className="text-sm font-mono uppercase tracking-wider bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View visualization"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View code"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

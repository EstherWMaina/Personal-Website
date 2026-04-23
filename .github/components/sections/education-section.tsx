"use client"

import { GraduationCap, BookOpen, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "M.Sc. Space Entrepreneurship",
    institution: "European Institute of Innovation for Sustainability",
    location: "Italy",
    period: "2024 — 2025",
    description:
      "Advanced studies in space-based solutions and entrepreneurship. Focused on leveraging space technology for sustainable development and innovation in geospatial applications.",
    courses: [
      "Space Technology Applications",
      "Entrepreneurship & Innovation",
      "Sustainable Development Goals",
      "Space Policy & Governance",
    ],
  },
  {
    degree: "B.Sc. Geospatial Information Science",
    institution: "Dedan Kimathi University of Technology",
    location: "Nairobi, Kenya",
    period: "2012 — 2016",
    description:
      "Comprehensive foundation in geospatial science, mapping technologies, and spatial data analysis with practical GIS applications across diverse sectors.",
    courses: [
      "GIS & Spatial Analysis",
      "Cartography & Map Production",
      "Remote Sensing",
      "Spatial Database Management",
    ],
  },
]

const certifications = [
  {
    name: "Applied AI for Social Good",
    issuer: "PoliSync",
    year: "2026",
  },
  {
    name: "Climate & Carbon Data Intelligence",
    issuer: "Vest Carbon",
    year: "2025",
  },
  {
    name: "ArcGIS Online, ArcGIS Pro & ENVI",
    issuer: "RCMRD Kenya",
    year: "2025",
  },
  {
    name: "AI Ethics Summer School",
    issuer: "Pan-Africa Centre for AI Ethics",
    year: "2025",
  },
  {
    name: "AWS Cloud Practitioner Certified",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "Agriculture Informatics using GIS & RS",
    issuer: "IIRS, ISRO",
    year: "2024",
  },
  {
    name: "Project Management",
    issuer: "European Business Institute Luxembourg",
    year: "2024",
  },
  {
    name: "Report Writing",
    issuer: "Kenya School of Government",
    year: "2024",
  },
  {
    name: "Reproducible Research Fundamentals",
    issuer: "World Bank",
    year: "2023",
  },
  {
    name: "Software Engineering",
    issuer: "Moringa School",
    year: "2023",
  },
  {
    name: "Mapping Crops",
    issuer: "ARSET (NASA)",
    year: "2022",
  },
  {
    name: "Introduction to Sandbox",
    issuer: "Digital Earth Africa",
    year: "2022",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Education
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Academic Background
        </h3>

        <div className="grid gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 p-6 bg-primary/5 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-border">
                    <GraduationCap className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-mono text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {edu.location}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        Key Courses
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certifications
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-4">
                <p className="font-medium text-foreground mb-1">{cert.name}</p>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

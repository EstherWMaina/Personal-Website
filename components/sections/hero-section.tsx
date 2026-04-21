"use client"

import Image from "next/image"
import { MapPin, Satellite, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Satellite className="h-5 w-5" />
              <span className="font-mono text-sm uppercase tracking-wider">
                Geospatial Expert
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Esther Wanjiku Maina
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Senior Cartographer and Geospatial Analyst with 8+ years of expertise in map quality assurance, spatial data analysis, and remote sensing. I specialize in transforming satellite imagery into actionable insights for environmental monitoring and mapping solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span>Remote Available</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["QGIS", "ArcGIS Pro", "Python", "Google Earth Engine", "Remote Sensing", "PostGIS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Esther Maina - Senior Cartographer & Geospatial Expert"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

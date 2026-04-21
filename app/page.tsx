import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { FooterSection } from "@/components/sections/footer-section"
import { AnimatedBackground } from "@/components/animated-background"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  )
}

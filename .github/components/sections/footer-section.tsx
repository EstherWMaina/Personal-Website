"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
                Contact
              </h2>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Interested in collaborating on geospatial projects or discussing remote sensing solutions? I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:esmainaa8@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">esmainaa8@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+254718624359"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+254 718 624 359</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Quick Nav */}
          <div className="md:pl-12 md:border-l border-border">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-12">
              <a
                href="https://linkedin.com/in/esther-maina-2b3b1a129"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/EstherWMaina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Education", href: "#education" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Esther Wanjiku Maina. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for geospatial science and innovation
          </p>
        </div>
      </div>
    </footer>
  )
}

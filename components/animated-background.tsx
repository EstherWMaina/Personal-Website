"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas!.width) this.x = 0
        if (this.x < 0) this.x = canvas!.width
        if (this.y > canvas!.height) this.y = 0
        if (this.y < 0) this.y = canvas!.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(var(--particle-color), ${this.opacity})`
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000))
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw grid
    const drawGrid = () => {
      if (!ctx) return
      const gridSize = 60
      ctx.strokeStyle = "rgba(var(--grid-color), 0.03)"
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Draw contour lines
    const time = { value: 0 }
    const drawContours = () => {
      if (!ctx) return
      ctx.strokeStyle = "rgba(var(--contour-color), 0.04)"
      ctx.lineWidth = 1

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const offset = i * 150 + time.value * 0.02
        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin((x + offset) * 0.005) * 100 +
            Math.sin((x + offset) * 0.01) * 50 +
            i * 80 -
            200
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }
    }

    // Connect nearby particles
    const connectParticles = () => {
      if (!ctx) return
      const maxDistance = 120
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(var(--line-color), ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawContours()
      time.value++

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={
        {
          "--particle-color": "var(--primary-rgb, 80, 180, 160)",
          "--grid-color": "var(--primary-rgb, 80, 180, 160)",
          "--contour-color": "var(--primary-rgb, 80, 180, 160)",
          "--line-color": "var(--primary-rgb, 80, 180, 160)",
        } as React.CSSProperties
      }
    />
  )
}

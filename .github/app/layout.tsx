import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'Alex Morgan | Geospatial & Remote Sensing Expert',
  description: 'Portfolio and resume of Alex Morgan - Geospatial Analyst specializing in satellite imagery, GIS, and environmental monitoring',
  openGraph: {
    title: 'Alex Morgan | Geospatial & Remote Sensing Expert',
    description: 'Transforming satellite imagery and spatial data into actionable insights',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

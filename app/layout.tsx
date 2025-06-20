import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ]
}

export const metadata: Metadata = {
  title: "zarirul_",
  description: "Personal Portfolio of Zarirul - Frontend Developer & Tech Enthusiast",
  generator: 'Next.js',
  authors: [{ name: 'Zarirul', url: 'https://github.com/zarirulaja' }],
  keywords: ['portfolio', 'web developer', 'frontend', 'zarirul', 'next.js'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'zarirul_ - Personal Portfolio',
    description: 'Frontend Developer & Tech Enthusiast',
    url: 'https://your-portfolio-url.com',
    siteName: 'zarirul_',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zarirul_ - Personal Portfolio',
    description: 'Frontend Developer & Tech Enthusiast',
    creator: '@zarirul_',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

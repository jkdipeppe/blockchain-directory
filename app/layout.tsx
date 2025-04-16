import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blockchain Ecosystem Directory",
  description: "Discover and explore projects across multiple blockchain ecosystems",
  keywords: [
    "blockchain",
    "solana",
    "ethereum",
    "base",
    "avalanche",
    "berachain",
    "defi",
    "nft",
    "web3",
    "cryptocurrency",
    "crypto",
    "directory",
  ],
  authors: [
    {
      name: "Blockchain Directory Team",
      url: "https://blockchaindirectory.com",
    },
  ],
  creator: "Blockchain Directory Team",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
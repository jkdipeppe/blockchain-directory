import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProjects } from "@/components/featured-projects"
import { BlockchainStats } from "@/components/blockchain-stats"
import { PageHeader } from "@/components/page-header"
import { getFilteredProjects, getBlockchainStats } from "@/lib/data"
import type { FilterOptions } from "@/lib/types"

interface HomePageProps {
  searchParams: FilterOptions
}

export default function HomePage({ searchParams }: HomePageProps) {
  const projects = getFilteredProjects(searchParams)
  const stats = getBlockchainStats()

  return (
    <div className="container px-4 py-10 mx-auto max-w-7xl">
      <div className="flex justify-between items-start pt-6 pb-4 md:pt-5 md:pb-6">
        <PageHeader
          title="Web3 Ecosystem Directory"
          description="Discover and explore projects across multiple blockchain ecosystems"
        />
        <Link href="/events" passHref className="mt-1">
          <Button /*variant="outline"*/ className="bg-secondary-accent/50 text-secondary-foreground hover:bg-secondary-accent/50">
            IRL Events
          </Button>
        </Link>
      </div>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zinc-400">Featured Projects</h2>
          <Link href="/directory">
            <Button /*variant="outline"*/ className="gap-2 bg-secondary-accent/50 text-secondary-foreground hover:bg-secondary-accent/50">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Suspense fallback={<div className="h-64 rounded-lg bg-muted animate-pulse" />}>
          <FeaturedProjects />
        </Suspense>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Ecosystem Overview</h2>
        <Suspense fallback={<div className="h-64 rounded-lg bg-muted animate-pulse" />}>
          <BlockchainStats />
        </Suspense>
      </section>

      <section className="mt-16 mb-10">
        <div className="p-8 text-center rounded-lg bg-muted">
          <h2 className="mb-4 text-2xl font-bold">Submit Your Project</h2>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Building on blockchain? Get your project listed in our directory and reach thousands of blockchain
            enthusiasts.
          </p>
          <Button asChild>
            <Link href="https://forms.gle/h6z8zZo9TbUQ895e8" target="_blank">
              Submit Project
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

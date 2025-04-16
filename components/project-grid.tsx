"use client"

import { useSearchParams } from "next/navigation"
import { ProjectCard } from "@/components/project-card"
import { getFilteredProjects } from "@/lib/data"

export function ProjectGrid() {
  const searchParams = useSearchParams()

  const blockchain = searchParams.get("blockchain") || "all"
  const categories = searchParams.get("categories")?.split(",").filter(Boolean) || []
  const search = searchParams.get("search") || ""
  const sort = searchParams.get("sort") || "featured"

  const projects = getFilteredProjects({
    blockchain,
    categories,
    search,
    sort,
  })

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 mt-8 text-center border rounded-lg">
        <h3 className="mb-2 text-xl font-medium">No projects found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

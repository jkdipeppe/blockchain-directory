"use client"

import { ProjectCard } from "@/components/project-card"
import { getFeaturedProjects } from "@/lib/data"

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

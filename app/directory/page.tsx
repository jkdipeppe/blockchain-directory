import { Suspense } from "react"
import { DirectoryHeader } from "@/components/directory-header"
import { ProjectGrid } from "@/components/project-grid"
import { PageHeader } from "@/components/page-header"

export default function DirectoryPage() {
  return (
    <div className="container px-4 py-10 mx-auto max-w-7xl">
      <PageHeader
        title="Project Directory"
        description="Browse and filter projects across multiple blockchain ecosystems"
      />

      <Suspense fallback={<div className="h-16 mt-8 rounded-lg bg-muted animate-pulse" />}>
        <DirectoryHeader />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-64 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        }
      >
        <ProjectGrid />
      </Suspense>
    </div>
  )
}

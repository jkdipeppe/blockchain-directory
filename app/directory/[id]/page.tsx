import { notFound } from "next/navigation"
import { ProjectDetails } from "@/components/project-details"
import { getProjectById } from "@/lib/data"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 py-10 mx-auto max-w-4xl">
      <ProjectDetails project={project} />
    </div>
  )
}

"use client"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Heart, MessageSquare, Share2, Twitter } from "lucide-react"
import { useState, useRef, useEffect } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFavorites } from "@/hooks/use-favorites"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites(project.id)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Handle mouse enter - start timer to show full description
  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowFullDescription(true)
    }, 1000) // 2 second delay
    setHoverTimeout(timeout)
  }

  // Handle mouse leave - clear timer and hide full description
  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setShowFullDescription(false)
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  return (
    <div
      ref={cardRef}
      className="overflow-hidden transition-all border rounded-lg hover:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-md">
              <Image
                src={project.logo || `/placeholder.svg?height=40&width=40`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full", isFavorite && "text-rose-500")}
            onClick={() => toggleFavorite()}
          >
            <Heart className={cn("w-5 h-5", isFavorite && "fill-rose-500")} />
            <span className="sr-only">Favorite</span>
          </Button>
        </div>

        <p
          className={cn(
            "mb-4 text-sm text-muted-foreground transition-all duration-300",
            showFullDescription ? "" : "line-clamp-3",
          )}
        >
          {project.description}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 mb-4">
          {project.twitter && (
            <a
              href={project.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {project.discord && (
            <a
              href={project.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="sr-only">Discord</span>
            </a>
          )}
          {project.telegram && (
            <a
              href={project.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="sr-only">Telegram</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="sr-only">Website</span>
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.blockchains.map((blockchain) => (
            <Badge key={blockchain} variant="outline" className="text-xs">
              {blockchain}
            </Badge>
          ))}
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 text-sm border-t">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  project.status === "Live"
                    ? "bg-green-500"
                    : project.status === "Beta"
                      ? "bg-yellow-500"
                      : "bg-blue-500",
                )}
              />
              <span>{project.status}</span>
            </div>
            {project.tvl && <div className="text-muted-foreground">TVL: ${project.tvl}</div>}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/directory/${project.id}`}>Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

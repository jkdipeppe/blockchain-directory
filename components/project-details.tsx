"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, ExternalLink, Github, Heart, MessageSquare, Share2, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useFavorites } from "@/hooks/use-favorites"
import type { Project } from "@/lib/types"

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { isFavorite, toggleFavorite } = useFavorites(project.id)

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/directory" className="gap-1">
            <ArrowLeft className="w-4 h-4" />
            Back to Directory
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-16 h-16 overflow-hidden rounded-lg">
              <Image
                src={project.logo || `/placeholder.svg?height=64&width=64`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold">{project.title}</h1>
                  <p className="text-xl text-muted-foreground">{project.subtitle}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn("rounded-full", isFavorite && "text-rose-500")}
                  onClick={() => toggleFavorite()}
                >
                  <Heart className={cn("w-5 h-5", isFavorite && "fill-rose-500")} />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.blockchains.map((blockchain) => (
                  <Badge key={blockchain} variant="outline">
                    {blockchain}
                  </Badge>
                ))}
                {project.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 mb-8 border rounded-lg">
            <h2 className="mb-4 text-xl font-medium">About</h2>
            <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>

            {project.longDescription && (
              <p className="mt-4 text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div className="p-6 mb-8 border rounded-lg">
              <h2 className="mb-4 text-xl font-medium">Key Features</h2>
              <ul className="pl-5 space-y-2 list-disc">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full md:w-80">
          <div className="sticky p-6 border rounded-lg top-24">
            <div className="flex items-center justify-between mb-4">
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

              {project.launchDate && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.launchDate}</span>
                </div>
              )}
            </div>

            <Button className="w-full mb-4" asChild>
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>

            <h3 className="mb-2 font-medium">Project Details</h3>
            <div className="space-y-2 text-sm">
              {project.tvl && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">TVL:</span>
                  <span>${project.tvl}</span>
                </div>
              )}

              {project.funding && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Funding:</span>
                  <span>{project.funding}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Token:</span>
                <span>{project.hasToken ? project.tokenSymbol || "Yes" : "No"}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <h3 className="mb-2 font-medium">Connect</h3>
            <div className="grid grid-cols-2 gap-2">
              {project.twitter && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              )}

              {project.discord && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.discord} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discord
                  </a>
                </Button>
              )}

              {project.github && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}

              {project.telegram && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.telegram} target="_blank" rel="noopener noreferrer">
                    <Share2 className="w-4 h-4 mr-2" />
                    Telegram
                  </a>
                </Button>
              )}
            </div>

            {project.founders && project.founders.length > 0 && (
              <>
                <Separator className="my-4" />
                <h3 className="mb-2 font-medium">Founders</h3>
                <div className="space-y-3">
                  {project.founders.map((founder, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative w-8 h-8 overflow-hidden rounded-full">
                        <Image
                          src={founder.avatar || `/placeholder.svg?height=32&width=32`}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-sm">
                        <div className="font-medium">{founder.name}</div>
                        <div className="text-xs text-muted-foreground">{founder.role}</div>
                      </div>
                      {founder.twitter && (
                        <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
                          <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-4 h-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </Button>
                      )}
                      {founder.linkedin && (
                        <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { blockchains, categories, sortOptions } from "@/lib/data"

export function DirectoryHeader() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState("")
  const [selectedBlockchain, setSelectedBlockchain] = useState(searchParams.get("blockchain") || "all")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || [],
  )
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "featured")

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()

    if (selectedBlockchain !== "all") {
      params.set("blockchain", selectedBlockchain)
    }

    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","))
    }

    if (sortBy !== "featured") {
      params.set("sort", sortBy)
    }

    if (search) {
      params.set("search", search)
    }

    const queryString = params.toString()
    router.push(`/directory${queryString ? `?${queryString}` : ""}`)
  }, [selectedBlockchain, selectedCategories, sortBy, search, router])

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is already updated via the input onChange
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="sticky top-16 z-30 py-4 bg-background border-b">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Select value={selectedBlockchain} onValueChange={setSelectedBlockchain}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Blockchain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Blockchains</SelectItem>
              {blockchains.map((blockchain) => (
                <SelectItem key={blockchain.id} value={blockchain.id}>
                  {blockchain.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Categories
                {selectedCategories.length > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 text-xs rounded-full bg-primary text-primary-foreground">
                    {selectedCategories.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                >
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <Input
            type="search"
            placeholder="Search projects..."
            className="w-full md:w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

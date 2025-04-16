"use client"

import { useState, useEffect } from "react"

export function useFavorites(projectId: string) {
  const [isFavorite, setIsFavorite] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorite(favorites.includes(projectId))
  }, [projectId])

  // Toggle favorite status
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

    let newFavorites
    if (favorites.includes(projectId)) {
      newFavorites = favorites.filter((id: string) => id !== projectId)
      setIsFavorite(false)
    } else {
      newFavorites = [...favorites, projectId]
      setIsFavorite(true)
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  return { isFavorite, toggleFavorite }
}

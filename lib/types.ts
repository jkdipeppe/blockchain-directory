export interface Blockchain {
  id: string
  name: string
  icon?: string
}

export interface Category {
  id: string
  name: string
}

export interface SortOption {
  value: string
  label: string
}

export interface Founder {
  name: string
  role: string
  avatar?: string
  twitter?: string
  linkedin?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription?: string
  logo?: string
  website: string
  blockchains: string[]
  categories: string[]
  status: "Live" | "Beta" | "In Development"
  featured?: boolean
  tvl?: string
  funding?: string
  launchDate?: string
  hasToken: boolean
  tokenSymbol?: string
  twitter?: string
  discord?: string
  telegram?: string
  github?: string
  features?: string[]
  founders?: Founder[]
}

export interface FilterOptions {
  blockchain: string
  categories: string[]
  search: string
  sort: string
}

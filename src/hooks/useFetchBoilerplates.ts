import { useState, useEffect } from 'react'
import boilerplatesData from '../data/boilerplates.json'

interface Boilerplate {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  author: string
  createdAt: string
  updatedAt: string
  downloadUrl: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

interface UseFetchBoilerplatesReturn {
  boilerplates: Boilerplate[]
  loading: boolean
  error: string | null
}

export function useFetchBoilerplates(): UseFetchBoilerplatesReturn {
  const [boilerplates, setBoilerplates] = useState<Boilerplate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBoilerplates = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Simulate API delay for demonstration
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // In a real application, this would be an API call
        // const response = await fetch('/api/boilerplates')
        // const data = await response.json()
        
        setBoilerplates(boilerplatesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch boilerplates')
      } finally {
        setLoading(false)
      }
    }

    fetchBoilerplates()
  }, [])

  return { boilerplates, loading, error }
}

// Additional hook for filtering boilerplates
export function useFilteredBoilerplates(
  category?: string,
  tags?: string[],
  searchTerm?: string
): UseFetchBoilerplatesReturn {
  const { boilerplates: allBoilerplates, loading, error } = useFetchBoilerplates()
  const [filteredBoilerplates, setFilteredBoilerplates] = useState<Boilerplate[]>([])

  useEffect(() => {
    let filtered = allBoilerplates

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(bp => 
        bp.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by tags
    if (tags && tags.length > 0) {
      filtered = filtered.filter(bp => 
        tags.some(tag => 
          bp.tags.some(bpTag => 
            bpTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      )
    }

    // Filter by search term
    if (searchTerm && searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim()
      filtered = filtered.filter(bp => 
        bp.name.toLowerCase().includes(term) ||
        bp.description.toLowerCase().includes(term) ||
        bp.tags.some(tag => tag.toLowerCase().includes(term)) ||
        bp.author.toLowerCase().includes(term)
      )
    }

    // Sort featured items first
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })

    setFilteredBoilerplates(filtered)
  }, [allBoilerplates, category, tags, searchTerm])

  return { 
    boilerplates: filteredBoilerplates, 
    loading, 
    error 
  }
}

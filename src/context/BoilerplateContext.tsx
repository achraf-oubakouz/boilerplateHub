import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// Types
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

interface BoilerplateState {
  favorites: string[] // Array of boilerplate IDs
  recentlyViewed: string[] // Array of boilerplate IDs
  searchHistory: string[] // Array of search terms
  filters: {
    category: string
    tags: string[]
    searchTerm: string
  }
}

type BoilerplateAction =
  | { type: 'ADD_TO_FAVORITES'; payload: string }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: string }
  | { type: 'ADD_TO_RECENTLY_VIEWED'; payload: string }
  | { type: 'SET_FILTERS'; payload: Partial<BoilerplateState['filters']> }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'ADD_TO_SEARCH_HISTORY'; payload: string }
  | { type: 'CLEAR_SEARCH_HISTORY' }
  | { type: 'RESET_STATE' }

interface BoilerplateContextType {
  state: BoilerplateState
  dispatch: React.Dispatch<BoilerplateAction>
  // Convenience methods
  addToFavorites: (id: string) => void
  removeFromFavorites: (id: string) => void
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  addToRecentlyViewed: (id: string) => void
  setFilters: (filters: Partial<BoilerplateState['filters']>) => void
  clearFilters: () => void
  addToSearchHistory: (term: string) => void
  clearSearchHistory: () => void
}

// Initial state
const initialState: BoilerplateState = {
  favorites: [],
  recentlyViewed: [],
  searchHistory: [],
  filters: {
    category: '',
    tags: [],
    searchTerm: ''
  }
}

// Reducer
function boilerplateReducer(
  state: BoilerplateState, 
  action: BoilerplateAction
): BoilerplateState {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      if (state.favorites.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    }

    case 'REMOVE_FROM_FAVORITES': {
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      }
    }

    case 'ADD_TO_RECENTLY_VIEWED': {
      const filtered = state.recentlyViewed.filter(id => id !== action.payload)
      return {
        ...state,
        recentlyViewed: [action.payload, ...filtered].slice(0, 10) // Keep only last 10
      }
    }

    case 'SET_FILTERS': {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    }

    case 'CLEAR_FILTERS': {
      return {
        ...state,
        filters: initialState.filters
      }
    }

    case 'ADD_TO_SEARCH_HISTORY': {
      const term = action.payload.trim()
      if (!term || state.searchHistory.includes(term)) {
        return state
      }
      return {
        ...state,
        searchHistory: [term, ...state.searchHistory].slice(0, 10) // Keep only last 10
      }
    }

    case 'CLEAR_SEARCH_HISTORY': {
      return {
        ...state,
        searchHistory: []
      }
    }

    case 'RESET_STATE': {
      return initialState
    }

    default:
      return state
  }
}

// Context
const BoilerplateContext = createContext<BoilerplateContextType | null>(null)

// Provider component
interface BoilerplateProviderProps {
  children: ReactNode
}

export function BoilerplateProvider({ children }: BoilerplateProviderProps) {
  const [state, dispatch] = useReducer(boilerplateReducer, initialState)

  // Convenience methods
  const addToFavorites = (id: string) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: id })
  }

  const removeFromFavorites = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id })
  }

  const toggleFavorite = (id: string) => {
    if (state.favorites.includes(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  }

  const isFavorite = (id: string) => {
    return state.favorites.includes(id)
  }

  const addToRecentlyViewed = (id: string) => {
    dispatch({ type: 'ADD_TO_RECENTLY_VIEWED', payload: id })
  }

  const setFilters = (filters: Partial<BoilerplateState['filters']>) => {
    dispatch({ type: 'SET_FILTERS', payload: filters })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  const addToSearchHistory = (term: string) => {
    dispatch({ type: 'ADD_TO_SEARCH_HISTORY', payload: term })
  }

  const clearSearchHistory = () => {
    dispatch({ type: 'CLEAR_SEARCH_HISTORY' })
  }

  const value: BoilerplateContextType = {
    state,
    dispatch,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    addToRecentlyViewed,
    setFilters,
    clearFilters,
    addToSearchHistory,
    clearSearchHistory
  }

  return (
    <BoilerplateContext.Provider value={value}>
      {children}
    </BoilerplateContext.Provider>
  )
}

// Hook to use the context
export function useBoilerplateContext() {
  const context = useContext(BoilerplateContext)
  
  if (!context) {
    throw new Error('useBoilerplateContext must be used within a BoilerplateProvider')
  }
  
  return context
}

// Hook to get favorites
export function useFavorites() {
  const { state, addToFavorites, removeFromFavorites, toggleFavorite, isFavorite } = useBoilerplateContext()
  
  return {
    favorites: state.favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  }
}

// Hook to get recently viewed
export function useRecentlyViewed() {
  const { state, addToRecentlyViewed } = useBoilerplateContext()
  
  return {
    recentlyViewed: state.recentlyViewed,
    addToRecentlyViewed
  }
}

// Hook to get filters
export function useFilters() {
  const { state, setFilters, clearFilters } = useBoilerplateContext()
  
  return {
    filters: state.filters,
    setFilters,
    clearFilters
  }
}

// Hook to get search history
export function useSearchHistory() {
  const { state, addToSearchHistory, clearSearchHistory } = useBoilerplateContext()
  
  return {
    searchHistory: state.searchHistory,
    addToSearchHistory,
    clearSearchHistory
  }
}

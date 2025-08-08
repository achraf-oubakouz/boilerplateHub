import Link from 'next/link'
import { formatDate } from '../utils/formatDate'

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

interface BoilerplateCardProps {
  boilerplate: Boilerplate
}

export default function BoilerplateCard({ boilerplate }: BoilerplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      {boilerplate.featured && (
        <div className="mb-2">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        <Link href={`/${boilerplate.id}`} className="hover:text-blue-600 transition-colors">
          {boilerplate.name}
        </Link>
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {boilerplate.description}
      </p>

      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
          {boilerplate.category}
        </span>
        {boilerplate.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-2"
          >
            {tag}
          </span>
        ))}
        {boilerplate.tags.length > 2 && (
          <span className="text-xs text-gray-500">
            +{boilerplate.tags.length - 2} more
          </span>
        )}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>By {boilerplate.author}</span>
        <span>{formatDate(boilerplate.updatedAt)}</span>
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/${boilerplate.id}`}
          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          View Details
        </Link>
        
        {boilerplate.demoUrl && (
          <a
            href={boilerplate.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

import Head from 'next/head'
import Layout from '../components/Layout'
import BoilerplateCard from '../components/BoilerplateCard'
import { useFetchBoilerplates } from '../hooks/useFetchBoilerplates'

export default function Templates() {
  const { boilerplates, loading, error } = useFetchBoilerplates()

  return (
    <>
      <Head>
        <title>Templates - BoilerplateHub</title>
        <meta name="description" content="Browse all available templates and boilerplates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Templates</h1>
            <p className="text-lg text-gray-600">
              Browse our complete collection of templates and boilerplates for all your development needs.
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Filter Templates</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                All
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Frontend
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Backend
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Full Stack
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Mobile
              </button>
            </div>
          </div>

          {/* Templates Grid */}
          {loading && (
            <div className="text-center">
              <p className="text-gray-600">Loading templates...</p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p className="text-red-600">Error loading templates: {error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boilerplates.map((boilerplate) => (
              <BoilerplateCard key={boilerplate.id} boilerplate={boilerplate} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

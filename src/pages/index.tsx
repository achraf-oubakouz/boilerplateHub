import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import BoilerplateCard from '../components/BoilerplateCard'
import { useFetchBoilerplates } from '../hooks/useFetchBoilerplates'

export default function Home() {
  const { boilerplates, loading, error } = useFetchBoilerplates()

  return (
    <>
      <Head>
        <title>BoilerplateHub - Reusable Development Boilerplates</title>
        <meta name="description" content="A collection of reusable boilerplates for developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to BoilerplateHub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover and use high-quality, reusable boilerplates to jumpstart your development projects
            </p>
          </div>

          {loading && (
            <div className="text-center">
              <p className="text-gray-600">Loading boilerplates...</p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p className="text-red-600">Error loading boilerplates: {error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boilerplates.map((boilerplate) => (
              <BoilerplateCard key={boilerplate.id} boilerplate={boilerplate} />
            ))}
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  )
}

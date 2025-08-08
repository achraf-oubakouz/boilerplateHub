import Head from 'next/head'
import Layout from '../components/Layout'

export default function MyAssets() {
  return (
    <>
      <Head>
        <title>My Assets - BoilerplateHub</title>
        <meta name="description" content="Manage your personal collection of boilerplates and templates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Assets</h1>
            <p className="text-lg text-gray-600">
              Manage your personal collection of boilerplates, templates, and saved resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Your Boilerplates</h3>
              <p className="text-gray-600">View and manage your created boilerplates.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Saved Templates</h3>
              <p className="text-gray-600">Access your bookmarked templates.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Downloads</h3>
              <p className="text-gray-600">Track your downloaded resources.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

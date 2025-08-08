import Head from 'next/head'
import Layout from '../components/Layout'

export default function Collections() {
  return (
    <>
      <Head>
        <title>Collections - BoilerplateHub</title>
        <meta name="description" content="Browse curated collections of boilerplates organized by themes and use cases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Collections</h1>
            <p className="text-lg text-gray-600">
              Discover curated collections of boilerplates organized by themes, technologies, and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample collections */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">React Starters</h3>
              <p className="text-gray-600 mb-4">Complete React application boilerplates for different project types.</p>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">12 templates</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Node.js APIs</h3>
              <p className="text-gray-600 mb-4">Backend API boilerplates with different frameworks and databases.</p>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">8 templates</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Cross-platform and native mobile application starters.</p>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">6 templates</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">Ready-to-use e-commerce solutions and shopping cart templates.</p>
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">5 templates</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">AI & ML</h3>
              <p className="text-gray-600 mb-4">Machine learning and AI application boilerplates.</p>
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">4 templates</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">DevOps Tools</h3>
              <p className="text-gray-600 mb-4">CI/CD, containerization, and deployment configurations.</p>
              <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">7 templates</span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

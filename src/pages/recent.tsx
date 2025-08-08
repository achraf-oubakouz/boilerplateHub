import Head from 'next/head'
import Layout from '../components/Layout'

export default function Recent() {
  return (
    <>
      <Head>
        <title>Recent - BoilerplateHub</title>
        <meta name="description" content="Recently viewed and accessed boilerplates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Recent</h1>
            <p className="text-lg text-gray-600">
              Recently viewed boilerplates, templates, and your latest activity.
            </p>
          </div>

          <div className="space-y-6">
            {/* Recently Viewed Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Recently Viewed
              </h2>
              <div className="text-gray-600 text-center py-8">
                <p>No recently viewed items yet. Start exploring to see your history here!</p>
              </div>
            </div>

            {/* Recent Downloads Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Recent Downloads
              </h2>
              <div className="text-gray-600 text-center py-8">
                <p>No downloads yet. Download some boilerplates to track them here!</p>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Activity Feed
              </h2>
              <div className="text-gray-600 text-center py-8">
                <p>Your activity feed will appear here as you interact with the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

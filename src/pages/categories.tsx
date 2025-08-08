import Head from 'next/head'
import Layout from '../components/Layout'

export default function Categories() {
  return (
    <>
      <Head>
        <title>Categories - BoilerplateHub</title>
        <meta name="description" content="Browse boilerplates by technology categories and frameworks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Categories</h1>
            <p className="text-lg text-gray-600">
              Browse boilerplates organized by technology categories and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Category */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm mb-3">React, Vue, Angular, and more</p>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">24 templates</span>
            </div>

            {/* Backend Category */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600 text-sm mb-3">Node.js, Python, Go, PHP</p>
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">18 templates</span>
            </div>

            {/* Full Stack Category */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack</h3>
              <p className="text-gray-600 text-sm mb-3">Complete web applications</p>
              <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">15 templates</span>
            </div>

            {/* Mobile Category */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-pink-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile</h3>
              <p className="text-gray-600 text-sm mb-3">React Native, Flutter, iOS, Android</p>
              <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded">12 templates</span>
            </div>

            {/* DevOps Category */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps</h3>
              <p className="text-gray-600 text-sm mb-3">Docker, CI/CD, Deployment</p>
              <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">9 templates</span>
            </div>

            {/* Database Category */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-teal-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Database</h3>
              <p className="text-gray-600 text-sm mb-3">SQL, NoSQL, ORM setups</p>
              <span className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">8 templates</span>
            </div>

            {/* AI/ML Category */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & ML</h3>
              <p className="text-gray-600 text-sm mb-3">Machine Learning, Data Science</p>
              <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded">6 templates</span>
            </div>

            {/* Testing Category */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm mb-3">Unit, Integration, E2E testing</p>
              <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">5 templates</span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

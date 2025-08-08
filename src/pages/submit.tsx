import Head from 'next/head'
import Layout from '../components/Layout'

export default function Submit() {
  return (
    <>
      <Head>
        <title>Submit - BoilerplateHub</title>
        <meta name="description" content="Submit your boilerplate or template to BoilerplateHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit a Boilerplate</h1>
            <p className="text-lg text-gray-600">
              Share your boilerplate or template with the community and help other developers get started faster.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Boilerplate Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="e.g., React TypeScript Starter"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Describe what your boilerplate does and what makes it useful..."
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select a category</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Full Stack">Full Stack</option>
                      <option value="Mobile">Mobile</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Database">Database</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="React, TypeScript, Tailwind CSS (comma separated)"
                    />
                  </div>
                </div>
              </div>

              {/* Repository Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Repository Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="github-url" className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub Repository URL *
                    </label>
                    <input
                      type="url"
                      id="github-url"
                      name="github-url"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="https://github.com/username/repository"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-url" className="block text-sm font-medium text-gray-700 mb-2">
                      Demo URL (optional)
                    </label>
                    <input
                      type="url"
                      id="demo-url"
                      name="demo-url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="https://your-demo.vercel.app"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="author-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="author-name"
                      name="author-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Submission Guidelines</h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Ensure your repository is public and well-documented</li>
                  <li>Include a comprehensive README with setup instructions</li>
                  <li>Your code should be clean, commented, and follow best practices</li>
                  <li>Test your boilerplate before submission</li>
                  <li>Respect licensing and attribution requirements</li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Boilerplate
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

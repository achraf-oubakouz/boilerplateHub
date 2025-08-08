import Head from 'next/head'
import Layout from '../components/Layout'

export default function Snippets() {
  return (
    <>
      <Head>
        <title>Snippets - BoilerplateHub</title>
        <meta name="description" content="Browse code snippets and reusable components" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Snippets</h1>
            <p className="text-lg text-gray-600">
              Discover useful code snippets, components, and small reusable pieces of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample snippets */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">React Hook Form Validation</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Complete form validation setup with React Hook Form and Zod schema validation.
              </p>
              <div className="bg-gray-100 rounded-md p-3 mb-4">
                <code className="text-sm text-gray-800">
                  {`const { register, handleSubmit, formState: { errors } } = useForm();`}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Updated 2 days ago</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Express Middleware Setup</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Common Express.js middleware configuration for CORS, parsing, and security.
              </p>
              <div className="bg-gray-100 rounded-md p-3 mb-4">
                <code className="text-sm text-gray-800">
                  {`app.use(cors()); app.use(express.json());`}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Updated 1 week ago</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Tailwind Button Component</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">CSS</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Reusable button component with multiple variants using Tailwind CSS.
              </p>
              <div className="bg-gray-100 rounded-md p-3 mb-4">
                <code className="text-sm text-gray-800">
                  {`className="px-4 py-2 bg-blue-600 text-white rounded"`}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Updated 3 days ago</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Python API Client</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Python</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                HTTP client wrapper with error handling and authentication for Python APIs.
              </p>
              <div className="bg-gray-100 rounded-md p-3 mb-4">
                <code className="text-sm text-gray-800">
                  {`import requests; response = requests.get(url, headers=headers)`}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Updated 5 days ago</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Browse by Language</h2>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Vue', 'Python', 'Node.js', 'PHP', 'Go', 'Rust', 'CSS'].map((lang) => (
                <button
                  key={lang}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

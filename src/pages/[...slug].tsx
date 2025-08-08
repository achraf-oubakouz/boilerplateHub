import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import boilerplatesData from '../data/boilerplates.json'

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

interface BoilerplateDetailProps {
  boilerplate: Boilerplate | null
}

export default function BoilerplateDetail({ boilerplate }: BoilerplateDetailProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!boilerplate) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Boilerplate Not Found
            </h1>
            <p className="text-gray-600">
              The boilerplate you're looking for doesn't exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{boilerplate.name} - BoilerplateHub</title>
        <meta name="description" content={boilerplate.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {boilerplate.name}
            </h1>
            
            <p className="text-gray-600 mb-6">
              {boilerplate.description}
            </p>

            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mr-2">
                {boilerplate.category}
              </span>
              {boilerplate.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={boilerplate.downloadUrl}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download
              </a>
              
              {boilerplate.demoUrl && (
                <a
                  href={boilerplate.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Live Demo
                </a>
              )}

              {boilerplate.githubUrl && (
                <a
                  href={boilerplate.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="text-sm text-gray-500">
              <p>Author: {boilerplate.author}</p>
              <p>Created: {new Date(boilerplate.createdAt).toLocaleDateString()}</p>
              <p>Updated: {new Date(boilerplate.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = boilerplatesData.map((boilerplate) => ({
    params: { slug: [boilerplate.id] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[]
  const boilerplateId = slug?.[0]

  const boilerplate = boilerplatesData.find((b) => b.id === boilerplateId) || null

  return {
    props: {
      boilerplate,
    },
  }
}

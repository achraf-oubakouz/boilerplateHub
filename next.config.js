/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable experimental features if needed
  experimental: {
    // Add experimental features here
  },

  // Images configuration
  images: {
    domains: [
      // Add domains for external images here
      'images.unsplash.com',
      'via.placeholder.com',
      'github.com',
      'raw.githubusercontent.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Environment variables that should be available on the client side
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects configuration
  async redirects() {
    return [
      // Add redirects here if needed
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites configuration
  async rewrites() {
    return [
      // Add rewrites here if needed
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Custom webpack config modifications
    return config
  },

  // Output configuration for static export (uncomment if needed)
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/boilerplatehub',

  // Compiler options
  compiler: {
    // Enable SWC compiler features
    styledComponents: false, // Set to true if using styled-components
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

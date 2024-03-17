/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'fluxconsole.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    REACT_APP_FLUX_API: process.env.REACT_APP_FLUX_API
  }
}

module.exports = nextConfig

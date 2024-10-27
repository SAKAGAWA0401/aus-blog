/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
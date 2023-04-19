/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "1avwo91wibi3",
    CONTENTFUL_ACCESS_KEY: "ZDGmm2QQjcY1zUaAPxn0LEtLoafIivdWM4zMD4gL-SU"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig

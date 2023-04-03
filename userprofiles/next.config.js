/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    SPACE_ID: "grozoip6xola",
    CONTENTFUL_ACCESS_KEY: "kQ9xaFgU7fmmBGWUxs92xbDNY34pRt24lFhZ6kZr7T0"
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/charles-lueker-official' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/charles-lueker-official/' : '',
}

module.exports = nextConfig

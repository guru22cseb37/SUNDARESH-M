/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
};

module.exports = nextConfig;

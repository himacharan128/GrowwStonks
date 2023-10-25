/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports={
    images:{
      domains:["i.ibb.co","ibb.co"],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    API_CODE: process.env.API_CODE,
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Xss-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
};

export default nextConfig;

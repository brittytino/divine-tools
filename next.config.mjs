/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'tools.divineinfotech.org',
            },
          ],
          destination: '/tools/:path*',
        },
      ],
    }
  },
  images: {
    domains: ['tools.divineinfotech.org'],
  },
}

export default nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.blacksscreen.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/page',
      },
      {
        source: '/clock-themes',
        destination: '/clock-themes/page',
      },
      {
        source: '/cool-themes',
        destination: '/cool-themes/page',
      },
      {
        source: '/about',
        destination: '/about/page',
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-and-conditions/page',
      },
      {
        source: '/privacy-policy',
        destination: '/privacy-policy/page',
      }
    ]
  },
  experimental: {
  },
}

export default nextConfig;

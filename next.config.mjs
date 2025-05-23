/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
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
  // 添加以下配置
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    scrollRestoration: true,
  }
}

export default nextConfig;

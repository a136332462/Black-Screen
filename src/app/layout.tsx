import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'BlackScreen - One-Click Fullscreen Tool for Presentations & Eye Protection',
  description: 'Free online tool with multiple color themes for presentations, eye protection, OLED screen care, and battery saving. Simple spacebar control with high-resolution downloads up to 8K.',
  keywords: ['black screen', 'fullscreen tool', 'presentation screen', 'eye protection', 'OLED screen protection', 'battery saving', 'meditation timer', 'pixel testing', 'photography lighting', 'blank screen online'],
  authors: [{ name: 'BlackScreen Team' }],
  creator: 'BlackScreen Team',
  publisher: 'BlackScreen',
  metadataBase: new URL('https://www.blacksscreen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BlackScreen - One-Click Fullscreen Tool for Presentations & Eye Protection',
    description: 'Free online fullscreen tool with multiple color themes for presentations, eye protection, OLED screen care, and battery saving. Simple spacebar control with downloadable high-resolution images.',
    url: 'https://www.blacksscreen.com',
    siteName: 'BlackScreen',
    images: [
      {
        url: '/images/icon.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen - One-Click Fullscreen Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackScreen - One-Click Fullscreen Tool for Presentations & Eye Protection',
    description: 'Free online fullscreen tool with multiple color themes for presentations, eye protection, OLED screen care, and battery saving. Simple spacebar control.',
    images: ['/images/icon.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '6LetiP8qAAAAABGbym3yFGVu4dWOg1Jd9lqN6sXv',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
        ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180' }
    ],
    shortcut: ['/favicon.ico']
  },
}

// 添加结构化数据脚本
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BlackScreen",
  "url": "https://www.blacksscreen.com",
  "description": "Free online tool with multiple color themes for presentations, eye protection, OLED screen care, and battery saving.",
  "applicationCategory": "Utility",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "BlackScreen Team",
    "url": "https://www.blacksscreen.com/about-us"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-YMJ9WBF0G1"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YMJ9WBF0G1', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            `,
          }}
        />
        {/* 结构化数据脚本 */}
      </head>
      <body className="bg-black">{children}</body>
    </html>
  )
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData)
  }}
/>

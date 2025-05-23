import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - How BlackScreen Protects Your Data | Black Screen Tool',
  description: "BlackScreen's privacy policy explains our data practices. Learn how we prioritize your privacy with local storage, minimal data collection, and secure connections for our presentation and eye protection tools.",
  keywords: ['blackscreen privacy', 'screen tool privacy policy', 'data protection', 'user privacy', 'online privacy', 'secure screen tool', 'privacy practices', 'data collection policy', 'GDPR compliant', 'CCPA compliant', 'black screen privacy'],
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy - How BlackScreen Protects Your Data | Black Screen Tool',
    description: 'Our comprehensive privacy policy details how BlackScreen handles your information. We prioritize local storage and minimal data collection to ensure your privacy while using our screen tools.',
    url: 'https://www.blacksscreen.com/privacy-policy',
    images: [
      {
        url: '/images/icon.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen Privacy Policy',
      },
    ],
    siteName: 'BlackScreen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - How BlackScreen Protects Your Data | Black Screen Tool',
    description: 'Our comprehensive privacy policy details how BlackScreen handles your information. We prioritize local storage and minimal data collection to ensure your privacy.',
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
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

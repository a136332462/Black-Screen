import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - BlackScreen Usage Guidelines',
  description: "BlackScreen's terms outline how to use our presentation and eye protection tools. Learn about intellectual property rights, user responsibilities, and our commitment to providing reliable screen utilities.",
  keywords: ['blackscreen terms', 'usage terms', 'screen tool terms', 'service agreement', 'user guidelines', 'intellectual property', 'online tool terms', 'legal terms', 'user conduct', 'service terms'],
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions - BlackScreen Usage Guidelines',
    description: 'Our terms and conditions explain how to properly use BlackScreen tools for presentations, eye protection, and screen utilities while respecting intellectual property and maintaining proper user conduct.',
    url: 'https://www.blacksscreen.com/terms-and-conditions',
    images: [
      {
        url: '/images/icon.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen Terms and Conditions',
      },
    ],
    siteName: 'BlackScreen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - BlackScreen Usage Guidelines',
    description: 'Our terms and conditions explain how to properly use BlackScreen tools for presentations, eye protection, and screen utilities while respecting intellectual property.',
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

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BlackScreen - The Team Behind Your Favorite Screen Tool',
  description: "Meet the creators of BlackScreen, the innovative online tool for presentations, eye protection, and OLED screen care. Learn about our mission to simplify digital experiences with one-click solutions.",
  keywords: ['about blackscreen', 'blackscreen team', 'screen tool developers', 'presentation tool creators', 'eye protection software', 'OLED screen protection', 'black screen developers', 'online tool team', 'digital wellbeing', 'screen utility creators'],
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About BlackScreen - The Team Behind Your Favorite Screen Tool',
    description: 'Discover the story and mission of the BlackScreen team. We create simple yet powerful tools for presentations, eye protection, and better digital experiences.',
    url: 'https://www.blacksscreen.com/about-us',
    images: [
      {
        url: '/images/icon.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen Team',
      },
    ],
    siteName: 'BlackScreen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BlackScreen - The Team Behind Your Favorite Screen Tool',
    description: 'Discover the story and mission of the BlackScreen team. We create simple yet powerful tools for presentations, eye protection, and better digital experiences.',
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

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

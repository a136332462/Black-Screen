import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool Themes - Stunning Visual Effects for Fullscreen Experience | BlackScreen',
  description: "Explore BlackScreen's stunning visual themes including Aurora, Deep Ocean, Starfield and more. Perfect for presentations, eye relaxation, and creative work with one-click fullscreen mode and customizable options.",
  keywords: ['black screen themes', 'fullscreen visual effects', 'aurora theme', 'deep ocean theme', 'starfield theme', 'presentation backgrounds', 'eye rest themes', 'meditation screen', 'creative backgrounds', 'black screen tool'],
  alternates: {
    canonical: '/cool-themes',
  },
  openGraph: {
    title: 'BlackScreen Cool Themes - Stunning Visual Effects for Fullscreen Experience',
    description: 'Transform your screen with beautiful visual themes like Aurora, Deep Ocean, and Starfield. Perfect for presentations, eye relaxation, and creative work with simple spacebar control.',
    url: 'https://www.blacksscreen.com/cool-themes',
    images: [
      {
        url: '/images/cool-themes-og.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen Cool Themes',
      },
    ],
    siteName: 'BlackScreen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackScreen Cool Themes - Stunning Visual Effects for Fullscreen Experience',
    description: 'Transform your screen with beautiful visual themes like Aurora, Deep Ocean, and Starfield. Perfect for presentations, eye relaxation, and creative work.',
    images: ['/images/cool-themes-og.webp'],
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

export default function CoolThemesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clock Themes - Stylish Digital Displays for Your Screen | BlackScreen',
  description: "Enhance your presentations and focus sessions with BlackScreen's elegant clock themes. Choose from digital, binary, wave, and chase clocks with one-click fullscreen mode and customizable displays.",
  keywords: ['clock themes', 'digital clock', 'binary clock', 'wave clock', 'chase clock', 'fullscreen clock', 'presentation clock', 'focus timer', 'black screen clock', 'screen clock'],
  alternates: {
    canonical: '/clock-themes',
  },
  openGraph: {
    title: 'Clock Themes - Stylish Digital Displays for Your Screen | BlackScreen',
    description: 'Transform your screen with elegant clock themes including digital, binary, wave and chase clocks. Perfect for presentations, focus sessions, and eye rest breaks.',
    url: 'https://www.blacksscreen.com/clock-themes',
    images: [
      {
        url: '/images/clock-themes-og.webp',
        width: 1200,
        height: 630,
        alt: 'BlackScreen Clock Themes',
      },
    ],
    siteName: 'BlackScreen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clock Themes - Stylish Digital Displays for Your Screen | BlackScreen',
    description: 'Transform your screen with elegant clock themes including digital, binary, wave and chase clocks. Perfect for presentations, focus sessions, and eye rest breaks.',
    images: ['/images/clock-themes-og.webp'],
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

export default function ClockThemesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

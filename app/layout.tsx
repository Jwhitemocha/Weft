import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://weft.example'),
  title: {
    default: 'Weft - Weaving Your Fitness. Together.',
    template: '%s | Weft',
  },
  description: 'A permanent public utility for fitness and nutrition clarity. Fast, free, honest.',
  keywords: ['TDEE calculator', 'fitness', 'nutrition', 'energy balance', 'fat loss', 'calories'],
  authors: [{ name: 'Weft' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weft.example',
    siteName: 'Weft',
    images: [
      {
        url: '/logo/weft_daruma.png',
        width: 1200,
        height: 630,
        alt: 'Weft - Denim Daruma Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weft - Weaving Your Fitness. Together.',
    description: 'A permanent public utility for fitness and nutrition clarity.',
    images: ['/logo/weft_daruma.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

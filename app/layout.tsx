import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Analytics from '@/components/Analytics'
import './globals.css'

const serif = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://amanda-telford-fitness.vercel.app'),
  title: 'Amanda Telford Fitness | Clubbercise, Beatz, Zumba & BlockFit — Shrewsbury',
  description:
    'Dance fitness classes in Shrewsbury with Amanda Telford. Clubbercise, Beatz Fitness, Zumba and BlockFit — high-energy, welcoming and genuinely fun. All fitness levels welcome.',
  keywords: [
    'Clubbercise Shrewsbury',
    'Zumba Shrewsbury',
    'Beatz Fitness Shrewsbury',
    'BlockFit Shrewsbury',
    'dance fitness classes Shrewsbury',
    'fitness classes Shropshire',
    'Amanda Telford',
  ],
  openGraph: {
    title: 'Amanda Telford Fitness — Dance Fitness Classes in Shrewsbury',
    description:
      'Clubbercise, Beatz, Zumba and BlockFit with Amanda. Come for the workout, stay for the people.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Amanda Telford Fitness',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'Amanda Telford Fitness',
  description:
    'Dance fitness classes in Shrewsbury — Clubbercise, Beatz Fitness, Zumba and BlockFit with Amanda Telford.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shrewsbury',
    addressRegion: 'Shropshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Shrewsbury' },
    { '@type': 'AdministrativeArea', name: 'Shropshire' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-cream-50 text-plum-800 antialiased">
        <div className="pointer-events-none fixed inset-0 paper-grain opacity-50 z-[1]" />
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

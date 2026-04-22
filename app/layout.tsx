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
  title: 'Amanda Telford Fitness | Clubbercise, Zumba, Yogascape & More — Telford',
  description:
    'Community fun fitness classes in Telford with Amanda Telford. Clubbercise, Decades Reloaded, Yogascape, Step In Line Dancing, PomSquad, Beatz, Zumba and BlockFit — all levels welcome.',
  keywords: [
    'Clubbercise Telford',
    'Zumba Telford',
    'Yogascape Telford',
    'PomSquad Fitness Telford',
    'Step In Line Dancing Telford',
    'Decades Reloaded Telford',
    'dance fitness classes Telford',
    'fitness classes Shropshire',
    'Amanda Telford',
  ],
  openGraph: {
    title: 'Amanda Telford Fitness — Community Fun Fitness Classes in Telford',
    description:
      'Clubbercise, Decades Reloaded, Yogascape, Step In Line, PomSquad, Zumba, Beatz and BlockFit with Amanda. Non-judgemental, fun, friendly. All levels welcome.',
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
    'Community fun fitness classes in Telford with Amanda Telford — Clubbercise, Decades Reloaded, Yogascape, Step In Line Dancing, PomSquad Fitness, Beatz, Zumba and BlockFit.',
  telephone: '+44 7780 515350',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Telford',
    addressRegion: 'Shropshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Telford' },
    { '@type': 'AdministrativeArea', name: 'Shropshire' },
  ],
  sameAs: [
    'https://www.instagram.com/amandaclubbercise72/',
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

import type { Metadata } from 'next'
import { Barlow, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://questly.it'),
  title: 'Questly.it — Crescita digitale per PMI italiane',
  description:
    'Aiutiamo le aziende italiane a ottenere più contatti online. Siti web, marketing digitale e automazioni AI su misura per PMI e imprenditori.',
  openGraph: {
    title: 'Questly.it — Crescita digitale per PMI italiane',
    description: 'Siti web, marketing digitale e automazioni AI per far crescere la tua azienda.',
    url: 'https://questly.it',
    siteName: 'Questly',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Questly.it — Crescita digitale per PMI italiane',
    description: 'Siti web, marketing digitale e automazioni AI per far crescere la tua azienda.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${barlow.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

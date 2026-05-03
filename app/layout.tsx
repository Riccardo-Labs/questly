import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
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
    <html lang="it" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">
        {/* Animated background blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[rgba(61,106,255,0.18)] blur-[120px] bg-blob-1" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[rgba(61,106,255,0.14)] blur-[140px] bg-blob-2" />
          <div className="absolute bottom-[-5%] left-[30%] w-[550px] h-[550px] rounded-full bg-[rgba(99,130,255,0.16)] blur-[130px] bg-blob-3" />
        </div>
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

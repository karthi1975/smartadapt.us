import type { Metadata } from 'next'
import { DM_Sans, Jost } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import SkipLink from '@/components/layout/SkipLink'
import { company } from '@/content/site'

// Display face: a geometric sans that echoes the Futura in the Tetradapt logo.
const jost = Jost({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name}: ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    type: 'website',
    siteName: company.name,
    locale: 'en_US',
  },
  // NEXT_PUBLIC_NOINDEX=1 keeps review deployments out of search results.
  robots: process.env.NEXT_PUBLIC_NOINDEX === '1' ? { index: false, follow: false } : { index: true, follow: true },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

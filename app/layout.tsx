import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

import CookieBar from '@/components/CookieBar/CookieBar'
import NavBar from '@/components/NavBar/NavBar'
import { performRequest } from '@/datocms/performRequest'
import { LAYOUT_CONTENT_QUERY } from '@/datocms/queries'
import { Layout } from '@/models/layout'

import { Providers } from './providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: Layout } }>({
    query: LAYOUT_CONTENT_QUERY,
  })

  return {
    title: homePagina._seoMetaTags.find(
      metaTag => metaTag.attributes?.property === 'og:site_name'
    )?.attributes?.content,
    description: homePagina._seoMetaTags.find(
      metaTag => metaTag.attributes?.name === 'description'
    )?.attributes?.content,
    keywords: homePagina.keywords,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <NavBar />
            {children}
            <CookieBar />
            <Analytics />
          </Providers>
        </body>
        <GoogleTagManager gtmId="GTM-TQFMR3BD" />
        <GoogleTagManager gtmId="G-P8FM46Q057" />
      </html>
    </ViewTransitions>
  )
}

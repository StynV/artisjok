import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import CookieBar from '@/components/CookieBar/CookieBar'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import { performRequest } from '@/datocms/performRequest'
import { LAYOUT_CONTENT_QUERY, ONLY_LOGO_QUERY } from '@/datocms/queries'
import { HomePagina } from '@/models/homePagina'
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: ONLY_LOGO_QUERY,
  })
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main className="min-h-screen overflow-y-auto bg-white flex flex-col pt-16">
            {children}
            <Footer
              facebook={homePagina.facebook}
              facebookLogo={homePagina.facebookLogo}
              instagram={homePagina.instagram}
              instagramLogo={homePagina.instagramLogo}
              linkedin={homePagina.linkedin}
              linkedinLogo={homePagina.linkedinLogo}
            />
          </main>
          <CookieBar />
          <Analytics />
        </Providers>
      </body>
      <GoogleTagManager gtmId="GTM-TQFMR3BD" />
      <GoogleTagManager gtmId="G-P8FM46Q057" />
    </html>
  )
}

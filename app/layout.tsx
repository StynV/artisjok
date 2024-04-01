import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { performRequest } from "@/datocms/performRequest";
import { Layout } from "@/models/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    _seoMetaTags(locale: nl) {
      attributes
      content
      tag
    }
  }
}
`;

export async function generateMetadata(): Promise<Metadata> {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: Layout } }>({query: PAGE_CONTENT_QUERY})
  return {
    title: homePagina._seoMetaTags.find(metaTag => metaTag.attributes?.property === 'og:site_name')?.attributes?.content,
    description: homePagina._seoMetaTags.find(metaTag => metaTag.attributes?.name === 'description')?.attributes?.content
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

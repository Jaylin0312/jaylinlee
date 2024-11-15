import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jaylin Lee',
  description: 'Personal Portfolio Site',
  webkitURL: 'https://jaylinlee.dev',
  imageURL: '/opengraph-image.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={metadata.webkitURL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${metadata.webkitURL}${metadata.imageURL}`}
        />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  )
}

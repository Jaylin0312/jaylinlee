import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jaylin's Portfolio",
  description: 'Personal portfolio and journey as a computing student',
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
        <meta property="og:url" content="https://jaylinlee.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}

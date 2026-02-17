import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: 'Cove Hacks | 48-Hour Bay Area Hackathon',
  description: 'The largest high school hackathon ever. 400 hackers, 48 hours, hardware labs, and a whole lot of building. Bay Area, June 17-19, 2026.',
  keywords: ['hackathon', 'Bay Area', 'high school', 'Cove Hacks', 'hardware', 'coding'],
  openGraph: {
    title: 'Cove Hacks | 48-Hour Bay Area Hackathon',
    description: 'The largest high school hackathon ever. 400 hackers, 48 hours, Bay Area. June 17-19, 2026.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7BA4D9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

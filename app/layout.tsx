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
  description: 'Join 400 hackers for a 48-hour hackathon in the Bay Area where nature meets innovation. Free food, workshops, prizes, and good vibes.',
  keywords: ['hackathon', 'Bay Area', 'coding', 'Cove Hacks', 'technology', 'innovation'],
  openGraph: {
    title: 'Cove Hacks | 48-Hour Bay Area Hackathon',
    description: 'Join 400 hackers for a 48-hour hackathon in the Bay Area where nature meets innovation.',
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

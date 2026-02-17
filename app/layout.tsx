import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
})

export const metadata: Metadata = {
  title: 'Cove Hacks | 48-Hour Bay Area Hackathon',
  description: 'The largest high school hackathon ever. 400 hackers, 48 hours, hardware labs, and a whole lot of building. Bay Area, June 19-21, 2026.',
  keywords: ['hackathon', 'Bay Area', 'high school', 'Cove Hacks', 'hardware', 'coding'],
  openGraph: {
    title: 'Cove Hacks | 48-Hour Bay Area Hackathon',
    description: 'The largest high school hackathon ever. 400 hackers, 48 hours, Bay Area. June 19-21, 2026.',
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
    <html lang="en" className={`${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

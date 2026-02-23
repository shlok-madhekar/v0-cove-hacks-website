import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://covehacks.dev"),

  title: {
    default: "Cove Hacks | The World's Largest IRL High School Hackathon",
    template: "%s | Cove Hacks",
  },

  description:
    "Cove Hacks is the world's largest in-person high school hackathon — 400 hackers, 48 hours, hardware labs, workshops, mentors, and $30K+ in prizes. Bay Area, CA. June 26–28, 2026. 100% free.",

  keywords: [
    "hackathon",
    "high school hackathon",
    "Bay Area hackathon",
    "Cove Hacks",
    "Cove Hacks 2026",
    "teen hackathon",
    "coding competition",
    "hardware hackathon",
    "in-person hackathon",
    "Bay Area",
    "California hackathon",
    "free hackathon",
    "student hackathon",
    "learn to code",
    "hack event",
    "programming competition",
    "STEM event",
    "youth hackathon",
  ],

  authors: [{ name: "Cove Hacks", url: "https://covehacks.dev" }],
  creator: "Cove Hacks",
  publisher: "Cove Hacks",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covehacks.dev",
    siteName: "Cove Hacks",
    title: "Cove Hacks | The World's Largest IRL High School Hackathon",
    description:
      "400 hackers. 48 hours. In-person hardware labs, workshops, mentors, and $30K+ in prizes. Bay Area, CA — June 26–28, 2026. 100% free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cove Hacks — The World's Largest In-Person High School Hackathon. 400 hackers, 48 hours, $30K+ in prizes. June 26–28, 2026. Bay Area, CA.",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cove Hacks | The World's Largest IRL High School Hackathon",
    description:
      "400 hackers. 48 hours. In-person hardware labs, workshops, mentors, and $30K+ in prizes. Bay Area — June 26–28, 2026. Completely free.",
    creator: "@covehacks",
    site: "@covehacks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cove Hacks — The World's Largest In-Person High School Hackathon. 400 hackers, 48 hours, $30K+ in prizes. June 26–28, 2026. Bay Area, CA.",
      },
    ],
  },

  alternates: {
    canonical: "https://covehacks.dev",
  },

  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },

  category: "technology",

  other: {
    "apple-mobile-web-app-title": "Cove Hacks",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6B9BD2" },
    { media: "(prefers-color-scheme: dark)", color: "#5a8abf" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

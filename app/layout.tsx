import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sundaresh-portfolio.vercel.app"),
  title: "Sundaresh M | Full Stack Developer & AI Enthusiast",
  description:
    "Full Stack Developer specializing in React.js, Node.js, and AI-powered applications. Building intelligent digital experiences from Madurai, Tamil Nadu. Open to opportunities in 2026.",
  keywords: [
    "Sundaresh M",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AI Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Madurai",
    "Tamil Nadu",
    "HireSight",
    "Hospital Management System",
  ],
  authors: [{ name: "Sundaresh M", url: "https://github.com/sundaresh017" }],
  creator: "Sundaresh M",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sundaresh M | Full Stack Developer & AI Enthusiast",
    description:
      "Building intelligent digital experiences with React.js, Node.js, and AI technologies.",
    siteName: "Sundaresh M Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sundaresh M - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundaresh M | Full Stack Developer & AI Enthusiast",
    description:
      "Building intelligent digital experiences with React.js, Node.js, and AI technologies.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sundaresh.dev" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="antialiased aurora-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}

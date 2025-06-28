import type { Metadata } from "next";
import { Instrument_Serif, Nanum_Brush_Script, Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const nanumBrushScript = Nanum_Brush_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nanum-brush",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chivo-mono",
  display: "swap",
});

const mondwest = localFont({
  src: [
    {
      path: "../../public/fonts/Mondwest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mondwest-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mondwest",
  display: "swap",
});

const neueBit = localFont({
  src: [
    {
      path: "../../public/fonts/NeueBit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueBit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neueBit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asteria Software",
  description: "Products and Apps by Asteria Software",
  keywords: ["software", "apps", "development", "asteria", "battledex", "products"],
  authors: [{ name: "Asteria Software" }],
  creator: "Asteria Software",
  publisher: "Asteria Software",
  metadataBase: new URL("https://asteria.software"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Asteria Software",
    description: "Products and Apps by Asteria Software",
    url: "https://asteria.software",
    siteName: "Asteria Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asteria Software - Products and Apps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asteria Software",
    description: "Products and Apps by Asteria Software",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${nanumBrushScript.variable} ${chivoMono.variable} ${mondwest.variable} ${neueBit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

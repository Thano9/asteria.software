import type { Metadata } from "next";
import { Instrument_Serif, Nanum_Brush_Script, Chivo_Mono } from "next/font/google";
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Asteria Software",
    description: "Products and Apps by Asteria Software",
    url: "https://asteria.software",
    siteName: "Asteria Software",
    images: [
      {
        url: "/og-image.svg",
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
    images: ["/og-image.svg"],
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
      <body className={`${instrumentSerif.variable} ${nanumBrushScript.variable} ${chivoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

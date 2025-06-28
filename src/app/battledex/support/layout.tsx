import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - BattleDex | Asteria Software",
  description: "Get support for BattleDex - Contact us for help with the ultimate Pokémon battle assistant app. We're here to help with any questions or issues.",
  keywords: ["battledex support", "pokemon app support", "asteria software support", "help", "contact"],
  authors: [{ name: "Asteria Software" }],
  creator: "Asteria Software",
  publisher: "Asteria Software",
  metadataBase: new URL("https://asteria.software"),
  alternates: {
    canonical: "/battledex/support",
  },
  openGraph: {
    title: "Support - BattleDex",
    description: "Get support for BattleDex - Contact us for help with the ultimate Pokémon battle assistant app. We're here to help with any questions or issues.",
    url: "https://asteria.software/battledex/support",
    siteName: "Asteria Software",
    images: [
      {
        url: "/assets/projects/battledex/og-image.png",
        width: 1200,
        height: 630,
        alt: "BattleDex - Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Support - BattleDex",
    description: "Get support for BattleDex - Contact us for help with the ultimate Pokémon battle assistant app.",
    images: ["/assets/projects/battledex/og-image.png"],
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

export default function BattleDexSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
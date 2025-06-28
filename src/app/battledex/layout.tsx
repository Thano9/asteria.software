import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BattleDex | Asteria Software",
  description: "Master Pokémon type matchups with BattleDex. The ultimate Pokémon battle assistant app with comprehensive type effectiveness.",
  keywords: ["pokemon", "battledex", "type effectiveness", "pokemon battles", "matchups", "asteria software", "pokemon app", "battle assistant"],
  authors: [{ name: "Asteria Software" }],
  creator: "Asteria Software",
  publisher: "Asteria Software",
  metadataBase: new URL("https://asteria.software"),
  alternates: {
    canonical: "/battledex",
  },
  openGraph: {
    title: "BattleDex",
    description: "Master Pokémon type matchups with BattleDex. The ultimate Pokémon battle assistant app with comprehensive type effectiveness.",
    url: "https://asteria.software/battledex",
    siteName: "Asteria Software",
    images: [
      {
        url: "/assets/projects/battledex/og-image.png",
        width: 1200,
        height: 630,
        alt: "BattleDex - Master Pokémon Matchups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BattleDex",
    description: "Master Pokémon type matchups with BattleDex. The ultimate Pokémon battle assistant app with comprehensive type effectiveness.",
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

export default function BattleDexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
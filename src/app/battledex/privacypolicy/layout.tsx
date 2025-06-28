import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BattleDex | Asteria Software",
  description: "Privacy Policy for BattleDex - Learn how we protect your privacy. BattleDex only uses anonymous analytics and stores all data locally on your device.",
  keywords: ["battledex privacy policy", "pokemon app privacy", "asteria software privacy", "data protection"],
  authors: [{ name: "Asteria Software" }],
  creator: "Asteria Software",
  publisher: "Asteria Software",
  metadataBase: new URL("https://asteria.software"),
  alternates: {
    canonical: "/battledex/privacypolicy",
  },
  openGraph: {
    title: "Privacy Policy - BattleDex",
    description: "Privacy Policy for BattleDex - Learn how we protect your privacy. BattleDex only uses anonymous analytics and stores all data locally on your device.",
    url: "https://asteria.software/battledex/privacypolicy",
    siteName: "Asteria Software",
    images: [
      {
        url: "/assets/projects/battledex/og-image.png",
        width: 1200,
        height: 630,
        alt: "BattleDex - Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - BattleDex",
    description: "Privacy Policy for BattleDex - Learn how we protect your privacy.",
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

export default function BattleDexPrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
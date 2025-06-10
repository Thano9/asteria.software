import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asteria Software",
  description: "Products and Apps by Asteria Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

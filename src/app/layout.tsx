import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Small Business Websites – Professional Sites in 48 Hours",
  description: "Professional websites for small businesses — live in 48 hours. Clean, mobile-friendly websites that help local businesses get more calls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

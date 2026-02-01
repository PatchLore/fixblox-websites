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
      <head>
        <link rel="preconnect" href="https://api.qrserver.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <style
          dangerouslySetInnerHTML={{
            __html: `/* Critical above-the-fold - 8-Second Test: system fonts, no render-block */
            body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

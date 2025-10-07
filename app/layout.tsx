import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Synark42",
  description: "Synark42: Your trusted IT consulting and service firm. We deliver innovative solutions for AI, software development, cloud services, and digital transformation.",
  icons: ["/logo.svg"],
  keywords: ["Synark42", "AI Solutions", "Software Development", "Cloud Services", "Digital Transformation"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

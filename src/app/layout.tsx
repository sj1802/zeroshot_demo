import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "ZeroShot Productions | Cinematic Product Content",
  description:
    "Transform a single product photo into cinematic 4K video content. No reshoots, no delays — just stunning results in 48 hours. ZeroShot Productions.",
  keywords: [
    "product photography",
    "product video",
    "cinematic content",
    "4K video",
    "e-commerce visuals",
    "ZeroShot Productions",
  ],
  openGraph: {
    title: "ZeroShot Productions | Cinematic Product Content",
    description:
      "One photo in, cinematic content out. Transform your product visuals with ZeroShot.",
    type: "website",
    locale: "en_US",
  },
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
    <html lang="en" className="dark">
      <head>
        {/* Preload critical first frame for instant hero display */}
        <link
          rel="preload"
          href="/assets/sequence/ezgif-frame-001.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className={cn(
          inter.className,
          spaceMono.variable,
          "bg-[#050505] text-white antialiased"
        )}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollToTop />
      </body>
    </html>
  );
}

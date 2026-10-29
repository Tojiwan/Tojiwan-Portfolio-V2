import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteBackground } from "@/components/layout/site-background";
import { PageIntro } from "@/components/layout/page-intro";

const title = "Tojiwan — Web Developer & Automation Specialist";
const description =
  "Jake Andrei R. Peralta, a web developer in Pampanga, Philippines. Explore my responsive websites, Shopify storefronts, and AI automation projects.";
const siteUrl = process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#1b202b" },
  ],
};

//  Light is the served default ('paper mode'); the pre-paint script adds the
//  dark console class only when the visitor's stored preference says so.
const themeInitScript = `(function(){try{if(localStorage.getItem('tojiwan-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* All four faces render in the first viewport (hero + header); preloading
            them starts the fetch before the CSS body is parsed. Fonts are CORS-mode
            requests, so crossorigin is required even same-origin. */}
        <link rel="preload" href="/fonts/Courier_Prime/CourierPrime-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Courier_Prime/CourierPrime-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBM_Plex_Mono/IBMPlexMono-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-mono text-(--text)">
        <SiteBackground />
        <PageIntro>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:border-2 focus:border-black focus:bg-(--accent) focus:px-3 focus:py-2 focus:font-bold focus:text-[#111821]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
        </PageIntro>
      </body>
    </html>
  );
}

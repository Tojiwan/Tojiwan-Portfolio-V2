import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Tojiwan — Full-Stack Developer",
  description:
    "Placeholder neo-brutalist portfolio. React, TypeScript, Next.js, and UI systems. Replace with real copy before launch.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Tojiwan — Full-Stack Developer",
    description: "Simplified placeholder portfolio. Real projects and copy coming soon.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tojiwan — Full-Stack Developer",
    description: "Simplified placeholder portfolio.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('tojiwan-theme');if(t==='light'){document.documentElement.classList.remove('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-mono text-(--text)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:border-2 focus:border-black focus:bg-(--accent) focus:px-3 focus:py-2 focus:font-bold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

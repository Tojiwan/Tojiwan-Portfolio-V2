import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const courier = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Vance — Full-Stack Developer",
  description:
    "Placeholder neo-brutalist portfolio. React, TypeScript, Next.js, and UI systems. Replace with real copy before launch.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Alex Vance — Full-Stack Developer",
    description: "Simplified placeholder portfolio. Real projects and copy coming soon.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Vance — Full-Stack Developer",
    description: "Simplified placeholder portfolio.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-mono text-[#1b1b1b]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:border-2 focus:border-black focus:bg-[#0ea5e9] focus:px-3 focus:py-2 focus:font-bold"
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

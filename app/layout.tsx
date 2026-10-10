import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Gentlemen's Club | Precision. Confidence. Style.",
  description:
    "A cinematic men's grooming salon website by GitByte Labs. Precision haircuts, beard styling, and private appointment experiences.",
  openGraph: {
    title: "The Gentlemen's Club",
    description: "Precision. Confidence. Style. A premium grooming website showcase by GitByte Labs.",
    images: ["/images/hero-poster.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-charcoal text-ivory">
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

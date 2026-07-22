import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
// @ts-expect-error - Next.js handles global CSS imports in app/layout.tsx
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shivam Digital Studio",
  description:
    "We design, build and automate powerful websites and digital systems that attract customers, streamline operations and scale your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}

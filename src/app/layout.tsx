import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "React Hinglish - Learn React in Hinglish with Memes and Fun!",
  description:
    "Discover React Hinglish - the fun way to learn React! Dive into interactive tutorials, Hinglish explanations, and hilarious memes that make mastering React and its ecosystem easy and entertaining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx("h-full antialiased", inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

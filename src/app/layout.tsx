import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navigation from "./components/Navigation";

// import { Inter } from 'next/font/google';
// import BackgroundShapes from "./components/BackgroundShapes";

// const inter = Inter({ subsets: ['latin'] })

// const geistSans = Geist({
  // variable: "--font-geist-sans",
  // subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
  // variable: "--font-geist-mono",
  // subsets: ["latin"],
// });

// export const metadata: Metadata = {
  // title: "My portfolio",
  // description: "Showcase of my games and development skills",
// };

// export default function RootLayout({
  // children,
// }: Readonly<{
  // children: React.ReactNode;
// }>) {
  // return (
    // <html lang="en">
      // <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // >
      // <Navigation activeSection="Modules" />
      // <main className="pt-16">
        // {children}
      // </main>
      // </body>
    // </html>
  // );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

import { Inter } from 'next/font/google';
// import BackgroundShapes from "./components/BackgroundShapes";

const inter = Inter({ subsets: ['latin'] }) // Initialize Inter font

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Showcase of my games and development skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`} // Add inter.className here
      >
      <Navigation activeSection="Modules" />
      <main className="pt-16">
        {children}
      </main>
      {/* <BackgroundShapes /> <] [> Ensure BackgroundShapes is inside body if you want it to be in the background of the whole page */}
      </body>
    </html>
  );
}

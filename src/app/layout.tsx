import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// const avenir = localFont({
//   src: [
//     {
//       path: "./fonts/avenir_roman_12.otf",
//       style: "normal",
//     },
//   ],
//   variable: "--font-avenir",
// });

// const geometric = localFont({
//   src: [
//     {
//       path: "./fonts/ufonts.com_geometr415-blk-bt-black.ttf",
//       style: "normal",
//     },
//   ],
//   variable: "--font-geometric",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

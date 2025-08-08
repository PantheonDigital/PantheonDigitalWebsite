import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Pantheon Digital",
  description: "Welcome to Pantheon Digital, where innovation meets excellence. As a leading player in the digital landscape, we specialize in crafting transformative solutions that empower businesses to thrive in the modern era.",
  icons: {
    icon: "/Logo.svg"
  }
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

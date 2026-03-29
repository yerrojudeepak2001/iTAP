import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashGate from "./components/SplashGate";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iTAP Technologies",
  description: "iTAP Technologies | Better Future",
  icons: {
    icon: "/itap-logo.png?v=4",
    shortcut: "/itap-logo.png?v=4",
    apple: "/itap-logo.png?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SplashGate>
          <Navbar />
          {children}
          <Footer />
        </SplashGate>
      </body>
    </html>
  );
}

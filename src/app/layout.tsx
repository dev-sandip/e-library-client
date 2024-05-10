import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serenity Shelf - Your Personal eLibrary",
  description:
    "Serenity Shelf is a personal eLibrary project created by dev-sandip. Upload and view PDFs hassle-free!",
  keywords: "Serenity Shelf, eLibrary, PDF, upload, view, dev-sandip",
  authors: [{ name: "dev-sandip" }],
  category: "eLibrary",
  creator: "dev-sandip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

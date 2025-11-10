import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toko Syuhada - Toko Sepeda Terpercaya",
  description: "Jual berbagai jenis sepeda berkualitas dengan harga terbaik. MTB, Road Bike, Hybrid, BMX dan aksesoris sepeda.",
  keywords: ["toko sepeda", "jual sepeda", "sepeda mtb", "sepeda gunung", "sepeda balap", "toko syuhada"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

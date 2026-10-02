import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className={`${jakarta.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

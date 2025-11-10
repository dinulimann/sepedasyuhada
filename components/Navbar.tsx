'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚲</span>
            <span className="text-xl font-bold text-primary-600">Toko Syuhada</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Beranda
            </Link>
            <Link href="/produk" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Produk
            </Link>
            <Link href="/artikel" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Artikel
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Kontak
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/produk"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Produk
              </Link>
              <Link
                href="/artikel"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Artikel
              </Link>
              <Link
                href="/tentang"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/kontak"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

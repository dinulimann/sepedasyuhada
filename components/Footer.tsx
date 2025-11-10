import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚲</span>
              <span className="text-xl font-bold text-white">Toko Syuhada</span>
            </div>
            <p className="text-sm">
              Toko sepeda terpercaya dengan berbagai pilihan sepeda berkualitas untuk segala kebutuhan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produk?kategori=mtb" className="hover:text-white transition-colors">
                  Mountain Bike
                </Link>
              </li>
              <li>
                <Link href="/produk?kategori=road-bike" className="hover:text-white transition-colors">
                  Road Bike
                </Link>
              </li>
              <li>
                <Link href="/produk?kategori=hybrid" className="hover:text-white transition-colors">
                  Hybrid
                </Link>
              </li>
              <li>
                <Link href="/produk?kategori=bmx" className="hover:text-white transition-colors">
                  BMX
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Jl. Contoh No. 123, Jakarta</li>
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ info@tokosyuhada.com</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">FB</a>
                  <a href="#" className="hover:text-white transition-colors">IG</a>
                  <a href="#" className="hover:text-white transition-colors">WA</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Toko Syuhada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

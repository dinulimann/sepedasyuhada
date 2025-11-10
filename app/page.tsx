import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  // Fetch featured products
  const featuredProducts = await prisma.product.findMany({
    where: { featured: true },
    include: { category: true },
    take: 6,
  }).catch(() => []);

  // Fetch recent articles
  const recentArticles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  }).catch(() => []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Selamat Datang di Toko Syuhada
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Toko sepeda terpercaya dengan berbagai pilihan sepeda berkualitas untuk segala kebutuhan Anda
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/produk" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Lihat Produk
              </Link>
              <Link href="/artikel" className="btn-secondary bg-primary-700 text-white hover:bg-primary-600">
                Artikel & Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Sepeda</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Mountain Bike', emoji: '🚵', slug: 'mtb' },
              { name: 'Road Bike', emoji: '🚴', slug: 'road-bike' },
              { name: 'Hybrid', emoji: '🚲', slug: 'hybrid' },
              { name: 'BMX', emoji: '🛹', slug: 'bmx' },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/produk?kategori=${cat.slug}`}
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-3">{cat.emoji}</div>
                <h3 className="font-semibold text-lg">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produk Unggulan</h2>
            <Link href="/produk" className="text-primary-600 hover:text-primary-700 font-semibold">
              Lihat Semua →
            </Link>
          </div>
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>Belum ada produk. Silakan tambahkan produk terlebih dahulu.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Semua produk kami bergaransi resmi dan berkualitas tinggi</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Harga Terbaik</h3>
              <p className="text-gray-600">Dapatkan harga kompetitif dan berbagai promo menarik</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Layanan Purna Jual</h3>
              <p className="text-gray-600">Service dan maintenance sepeda dengan teknisi berpengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Artikel Terbaru</h2>
              <Link href="/artikel" className="text-primary-600 hover:text-primary-700 font-semibold">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Link key={article.id} href={`/artikel/${article.slug}`} className="card">
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <span className="text-primary-600 font-medium hover:text-primary-700">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

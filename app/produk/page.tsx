import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";

interface SearchParams {
  kategori?: string;
  search?: string;
}

export default async function ProdukPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { kategori, search } = searchParams;
  const where: any = {};

  if (kategori) {
    where.category = {
      slug: kategori,
    };
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { brand: { contains: search, mode: 'insensitive' } },
    ];
  }

  // Fetch products
  const products = await prisma.product.findMany({
    where,
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  }).catch(() => []);

  // Fetch categories
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
  }).catch(() => []);

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-gray-600 text-lg">
            Temukan sepeda impian Anda dari berbagai kategori dan merek terbaik
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Kategori:</span>
            <a
              href="/produk"
              className={`px-4 py-2 rounded-lg transition-colors ${
                !kategori
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Semua
            </a>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/produk?kategori=${cat.slug}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  kategori === cat.slug
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <form action="/produk" method="get" className="max-w-md">
            <div className="flex gap-2">
              <input
                type="text"
                name="search"
                placeholder="Cari sepeda..."
                defaultValue={search}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Cari
              </button>
            </div>
          </form>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">Produk tidak ditemukan</h3>
            <p className="text-gray-600 mb-6">
              Maaf, tidak ada produk yang sesuai dengan pencarian Anda. Mohon cari yang lain
            </p>
            <a href="/produk" className="btn-primary inline-block">
              Lihat Semua Produk
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

interface SearchParams {
  kategori?: string;
  search?: string;
}

export default async function ProdukPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { kategori, search } = await searchParams;
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

  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
      active
        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
        : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:text-primary-700 hover:ring-primary-300'
    }`;

  return (
    <div>
      <PageHero
        eyebrow="Katalog"
        title="Katalog Produk"
        subtitle="Temukan sepeda impian Anda dari berbagai kategori dan merek terbaik"
      >
        {/* Search */}
        <form action="/produk" method="get" className="mx-auto max-w-xl">
          {kategori && <input type="hidden" name="kategori" value={kategori} />}
          <div className="flex items-center gap-2 rounded-full bg-white p-1.5 shadow-2xl shadow-primary-950/40 ring-1 ring-white/20 transition-all focus-within:ring-4 focus-within:ring-primary-400/40">
            <span className="pl-4 text-slate-400">🔍</span>
            <input
              type="text"
              name="search"
              placeholder="Cari sepeda, merek..."
              defaultValue={search}
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button type="submit" className="btn-primary px-6 py-2.5">
              Cari
            </button>
          </div>
        </form>
      </PageHero>

      <div className="container-custom py-12">
        {/* Filters */}
        <div className="-mx-4 mb-10 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          <Link href="/produk" className={chip(!kategori)}>
            Semua
          </Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/produk?kategori=${cat.slug}`} className={chip(kategori === cat.slug)}>
              {cat.name}
            </Link>
          ))}
        </div>

        {search && (
          <p className="mb-6 text-slate-500">
            Menampilkan <span className="font-semibold text-slate-900">{products.length}</span> hasil untuk
            &ldquo;<span className="font-semibold text-slate-900">{search}</span>&rdquo;
          </p>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="rounded-3xl bg-white px-6 py-16 text-center ring-1 ring-slate-200">
            <div className="mb-4 inline-block animate-float text-6xl">🔍</div>
            <h3 className="mb-2 text-2xl font-bold">Produk tidak ditemukan</h3>
            <p className="mb-6 text-slate-500">
              Maaf, tidak ada produk yang sesuai dengan pencarian Anda. Mohon cari yang lain
            </p>
            <Link href="/produk" className="btn-primary">
              Lihat Semua Produk
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  );
}

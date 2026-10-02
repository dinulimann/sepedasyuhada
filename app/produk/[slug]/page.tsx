import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProductCard, { formatPrice } from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  }).catch(() => null);

  if (!product) {
    notFound();
  }

  const relatedProducts = await prisma.product.findMany({
    where: { categoryId: product.categoryId, NOT: { id: product.id } },
    include: { category: true },
    take: 4,
  }).catch(() => []);

  const specs = [
    { label: 'Ukuran Frame', value: product.frameSize, icon: '📐' },
    { label: 'Material Frame', value: product.frameMaterial, icon: '🧱' },
    { label: 'Ukuran Roda', value: product.wheelSize, icon: '⭕' },
    { label: 'Sistem Gear', value: product.gearSystem, icon: '⚙️' },
  ].filter((spec) => spec.value);

  return (
    <div className="py-10">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8 flex animate-fade-in flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-primary-600">Beranda</Link>
          <span className="text-slate-300">/</span>
          <Link href="/produk" className="transition-colors hover:text-primary-600">Produk</Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Images */}
          <div className="animate-fade-up">
            <div className="group relative mb-4 aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-300/20 ring-1 ring-slate-200">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="absolute h-64 w-64 animate-blob rounded-full bg-primary-200/60 blur-3xl" />
                  <span className="relative animate-float text-[9rem]">🚲</span>
                </div>
              )}
              {product.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  ⭐ Unggulan
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 transition-all hover:ring-2 hover:ring-primary-400">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <Link
              href={`/produk?kategori=${product.category.slug}`}
              className="eyebrow transition-colors hover:bg-primary-100"
            >
              {product.category.name}
            </Link>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{product.name}</h1>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Merek: <span className="font-semibold text-slate-900">{product.brand}</span></span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Tipe: <span className="font-semibold text-slate-900">{product.type}</span></span>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white p-6 ring-1 ring-primary-100">
              <div className="text-4xl font-extrabold text-primary-700">
                {formatPrice(product.price)}
              </div>
              <p className="mt-2 flex items-center gap-2 text-slate-600">
                <span className={`h-2.5 w-2.5 rounded-full ${product.stock > 0 ? 'animate-pulse bg-green-500' : 'bg-red-500'}`} />
                Stok:
                <span className={product.stock > 0 ? 'font-semibold text-green-600' : 'font-semibold text-red-600'}>
                  {product.stock > 0 ? `${product.stock} unit tersedia` : 'Habis'}
                </span>
              </p>
            </div>

            {/* Specifications */}
            {specs.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-bold">Spesifikasi</h2>
                <div className="grid grid-cols-2 gap-3">
                  {specs.map((spec) => (
                    <div key={spec.label} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft hover:ring-primary-200">
                      <p className="text-xs text-slate-500">{spec.icon} {spec.label}</p>
                      <p className="mt-1 font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold">Deskripsi</h2>
              <p className="whitespace-pre-line leading-relaxed text-slate-600">{product.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                💬 Hubungi Via WhatsApp
              </a>
              <button className="btn-secondary">
                🛒 Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h2 className="section-title mb-8 text-2xl md:text-3xl">Produk Terkait</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related, i) => (
                <Reveal key={related.id} delay={i * 80}>
                  <ProductCard product={related} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

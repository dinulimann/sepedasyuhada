import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  }).catch(() => null);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-600">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:text-primary-600">Produk</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-9xl">🚲</span>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
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
          <div>
            <div className="mb-4">
              <Link
                href={`/produk?kategori=${product.category.slug}`}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                {product.category.name}
              </Link>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="mb-6">
              <p className="text-gray-600 mb-2">Merek: <span className="font-semibold text-gray-900">{product.brand}</span></p>
              <p className="text-gray-600">Tipe: <span className="font-semibold text-gray-900">{product.type}</span></p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {formatPrice(product.price)}
              </div>
              <p className="text-gray-600">
                Stok: <span className={product.stock > 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {product.stock > 0 ? `${product.stock} unit tersedia` : 'Habis'}
                </span>
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Spesifikasi</h2>
              <div className="space-y-3">
                {product.frameSize && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ukuran Frame</span>
                    <span className="font-semibold">{product.frameSize}</span>
                  </div>
                )}
                {product.frameMaterial && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material Frame</span>
                    <span className="font-semibold">{product.frameMaterial}</span>
                  </div>
                )}
                {product.wheelSize && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ukuran Roda</span>
                    <span className="font-semibold">{product.wheelSize}</span>
                  </div>
                )}
                {product.gearSystem && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sistem Gear</span>
                    <span className="font-semibold">{product.gearSystem}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Deskripsi</h2>
              <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
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
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Produk Terkait</h2>
          {/* TODO: Add related products component */}
        </div>
      </div>
    </div>
  );
}

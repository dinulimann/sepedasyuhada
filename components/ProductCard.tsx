import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  brand: string;
  stock?: number;
  category: {
    name: string;
  };
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produk/${product.slug}`} className="card group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-300/20">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute h-32 w-32 rounded-full bg-primary-200/50 blur-2xl transition-all duration-700 group-hover:scale-150" />
            <span className="relative text-7xl transition-transform duration-700 ease-out group-hover:-rotate-6 group-hover:scale-110">🚲</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur">
          {product.category.name}
        </span>
        {product.stock === 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            Habis
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{product.brand}</p>
        <h3 className="mb-4 line-clamp-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary-600">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-extrabold text-slate-900">{formatPrice(product.price)}</p>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:-rotate-45">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

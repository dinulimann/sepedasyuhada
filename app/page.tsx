import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import BikeIllustration from "@/components/BikeIllustration";

const categories = [
  { name: 'Mountain Bike', emoji: '🚵', slug: 'mtb', desc: 'Tangguh di medan trail', color: 'from-emerald-400 to-teal-600' },
  { name: 'Road Bike', emoji: '🚴', slug: 'road-bike', desc: 'Ringan & secepat angin', color: 'from-primary-400 to-primary-700' },
  { name: 'Hybrid', emoji: '🚲', slug: 'hybrid', desc: 'Nyaman untuk harian', color: 'from-violet-400 to-indigo-600' },
  { name: 'BMX', emoji: '🛹', slug: 'bmx', desc: 'Siap untuk freestyle', color: 'from-accent-400 to-rose-500' },
];

const brands = ['Polygon', 'United', 'Pacific', 'Giant', 'Trek', 'Specialized', 'Shimano', 'SRAM', 'Element', 'Thrill'];

const features = [
  { icon: '✓', title: 'Kualitas Terjamin', desc: 'Semua produk kami bergaransi resmi dan berkualitas tinggi' },
  { icon: '💰', title: 'Harga Terbaik', desc: 'Dapatkan harga kompetitif dan berbagai promo menarik' },
  { icon: '🛠️', title: 'Layanan Purna Jual', desc: 'Service dan maintenance sepeda dengan teknisi berpengalaman' },
];

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
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-primary-600/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] animate-blob rounded-full bg-accent-500/25 blur-3xl [animation-delay:-5s]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 animate-blob rounded-full bg-indigo-500/25 blur-3xl [animation-delay:-9s]" />

        <div className="container-custom relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-100 ring-1 ring-white/15 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Toko sepeda terpercaya sejak 2010
            </span>
            <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight [animation-delay:120ms] md:text-6xl">
              Selamat Datang di <span className="text-gradient">Toko Syuhada</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg text-slate-300 [animation-delay:240ms] md:text-xl">
              Toko sepeda terpercaya dengan berbagai pilihan sepeda berkualitas untuk segala kebutuhan Anda
            </p>
            <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms]">
              <Link href="/produk" className="btn-light">
                Lihat Produk <span aria-hidden>→</span>
              </Link>
              <Link href="/artikel" className="btn-ghost">
                Artikel & Tips
              </Link>
            </div>

            <dl className="mt-14 grid max-w-lg animate-fade-up grid-cols-3 gap-6 border-t border-white/10 pt-8 [animation-delay:480ms]">
              <div>
                <dt className="text-sm text-slate-400">Pelanggan</dt>
                <dd className="mt-1 text-2xl font-extrabold md:text-3xl"><CountUp end={1000} suffix="+" /></dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Tahun</dt>
                <dd className="mt-1 text-2xl font-extrabold md:text-3xl"><CountUp end={15} suffix="+" /></dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Kategori</dt>
                <dd className="mt-1 text-2xl font-extrabold md:text-3xl"><CountUp end={4} /></dd>
              </div>
            </dl>
          </div>

          {/* Ilustrasi sepeda */}
          <div className="relative hidden animate-fade-in pb-14 pt-12 [animation-delay:300ms] lg:block">
            <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/30 blur-2xl" />
            <div className="relative animate-float">
              <BikeIllustration className="mx-auto w-full max-w-lg text-white drop-shadow-[0_20px_40px_rgba(14,165,233,0.35)]" />
            </div>
            <div className="mx-auto mt-2 h-1 w-4/5 animate-road rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.5)_0_32px,transparent_32px_64px)]" />

            <div className="absolute left-0 top-0 animate-float rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-md [animation-delay:-2s]">
              <p className="text-xs text-slate-300">Garansi resmi</p>
              <p className="font-bold">100% Original</p>
            </div>
            <div className="absolute bottom-0 right-0 animate-float rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-md [animation-delay:-4s]">
              <p className="text-xs text-slate-300">Layanan purna jual</p>
              <p className="font-bold">🛠️ Servis & Perawatan</p>
            </div>
          </div>
        </div>

        {/* Brand marquee */}
        <div className="relative border-t border-white/10 bg-white/[0.03] py-6">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {[...brands, ...brands].map((brand, i) => (
                <span key={i} className="text-xl font-extrabold uppercase tracking-widest text-white/30 transition-colors hover:text-white/80">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow">Kategori</span>
            <h2 className="section-title mt-4">Kategori Sepeda</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">Pilih jenis sepeda yang paling cocok dengan gaya berkendara Anda</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 100}>
                <Link href={`/produk?kategori=${cat.slug}`} className="card group block h-full p-6 text-center">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.color} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />
                  <div className={`mx-auto mb-4 grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${cat.color} text-4xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110`}>
                    {cat.emoji}
                  </div>
                  <h3 className="text-lg font-bold">{cat.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{cat.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-custom">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Pilihan Terbaik</span>
              <h2 className="section-title mt-4">Produk Unggulan</h2>
            </div>
            <Link href="/produk" className="link-arrow">
              Lihat Semua <span>→</span>
            </Link>
          </Reveal>
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product, i) => (
                <Reveal key={product.id} delay={i * 100}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-slate-200 py-12 text-center text-slate-500">
              <p>Belum ada produk. Silakan tambahkan produk terlebih dahulu.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="container-custom">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow">Keunggulan</span>
            <h2 className="section-title mt-4">Mengapa Memilih Kami?</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="group h-full rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-primary-100 text-3xl transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-glow">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p className="text-slate-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Blog</span>
                <h2 className="section-title mt-4">Artikel Terbaru</h2>
              </div>
              <Link href="/artikel" className="link-arrow">
                Lihat Semua <span>→</span>
              </Link>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {recentArticles.map((article, i) => (
                <Reveal key={article.id} delay={i * 100}>
                  <Link href={`/artikel/${article.slug}`} className="card group block h-full p-6">
                    <p className="mb-3 text-sm text-slate-400">
                      {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h3 className="mb-2 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary-600">{article.title}</h3>
                    <p className="mb-6 line-clamp-3 text-slate-500">{article.excerpt}</p>
                    <span className="link-arrow">
                      Baca Selengkapnya <span>→</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-20">
        <div className="container-custom">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-indigo-600 bg-[length:200%_auto] px-8 py-14 text-center text-white animate-gradient-x md:px-16">
              <div className="bg-grid absolute inset-0 opacity-50" />
              <div className="absolute -right-10 -top-10 h-48 w-48 animate-blob rounded-full bg-accent-400/30 blur-2xl" />
              <div className="relative">
                <h2 className="text-3xl font-extrabold md:text-4xl">Siap gowes bersama kami?</h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-100">
                  Konsultasikan kebutuhan sepeda Anda secara gratis dengan tim kami
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/produk" className="btn-light">Jelajahi Produk</Link>
                  <Link href="/kontak" className="btn-ghost">Hubungi Kami</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

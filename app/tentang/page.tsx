import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const values = [
  { icon: '🎯', title: 'Kualitas Terjamin', desc: 'Kami hanya menjual produk original dengan garansi resmi dari distributor' },
  { icon: '❤️', title: 'Pelayanan Terbaik', desc: 'Kepuasan pelanggan adalah prioritas utama kami dalam setiap transaksi' },
  { icon: '🤝', title: 'Kepercayaan', desc: 'Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan' },
];

const services = [
  { icon: '🚲', title: 'Penjualan Sepeda', desc: 'Berbagai jenis sepeda dari brand ternama dengan pilihan lengkap untuk semua kebutuhan' },
  { icon: '🔧', title: 'Servis & Maintenance', desc: 'Layanan perawatan sepeda dengan teknisi berpengalaman dan spare part original' },
  { icon: '🛠️', title: 'Custom Build', desc: 'Rakit sepeda sesuai keinginan Anda dengan konsultasi dari tim ahli kami' },
  { icon: '📦', title: 'Pengiriman', desc: 'Layanan pengiriman ke seluruh Indonesia dengan packaging aman dan terpercaya' },
];

const stats = [
  { end: 15, suffix: '+', label: 'Tahun berpengalaman' },
  { end: 1000, suffix: '+', label: 'Pelanggan puas' },
  { end: 4, suffix: '', label: 'Kategori sepeda' },
  { end: 4, suffix: '', label: 'Layanan utama' },
];

export default function TentangPage() {
  return (
    <div>
      <PageHero
        eyebrow="Sejak 2010"
        title="Tentang Toko Syuhada"
        subtitle="Toko sepeda terpercaya sejak tahun 2010, melayani kebutuhan bersepeda Anda dengan produk berkualitas dan layanan terbaik"
      />

      <div className="container-custom py-16">
        {/* Stats */}
        <div className="relative z-10 -mt-24 mb-20 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-slate-200 md:-mt-28 md:grid-cols-4 md:p-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="text-3xl font-extrabold text-primary-600 md:text-4xl">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Story */}
        <div className="mx-auto mb-20 grid max-w-6xl items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-2 rotate-6 rounded-[2rem] bg-gradient-to-br from-accent-400 to-rose-500 transition-transform duration-700 hover:rotate-12" />
              <div className="absolute inset-0 grid place-items-center rounded-[2rem] bg-gradient-to-br from-primary-500 to-primary-800 shadow-lift">
                <span className="animate-float text-[8rem]">🚴</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <span className="eyebrow">Cerita Kami</span>
            <h2 className="section-title mt-4 mb-6">Kisah Kami</h2>
            <div className="space-y-4 leading-relaxed text-slate-600">
              <p>
                Toko Syuhada didirikan pada tahun 2010 dengan visi untuk menjadi toko sepeda terpercaya yang menyediakan
                berbagai jenis sepeda berkualitas dengan harga terjangkau. Berawal dari sebuah toko kecil, kami terus
                berkembang dan kini melayani ribuan pelanggan di seluruh Indonesia.
              </p>
              <p>
                Kami memahami bahwa setiap pengendara sepeda memiliki kebutuhan yang berbeda. Oleh karena itu, kami
                menyediakan berbagai pilihan sepeda mulai dari Mountain Bike, Road Bike, Hybrid, hingga BMX dari
                brand-brand ternama dengan kualitas terjamin.
              </p>
              <p>
                Selain menjual sepeda, kami juga menyediakan layanan servis dan maintenance untuk memastikan sepeda
                Anda selalu dalam kondisi prima. Tim teknisi kami yang berpengalaman siap membantu segala kebutuhan
                perawatan sepeda Anda.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mb-20">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow">Prinsip</span>
            <h2 className="section-title mt-4">Nilai-Nilai Kami</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="card group h-full p-8 text-center">
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-primary-100 text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {v.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{v.title}</h3>
                  <p className="text-slate-500">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow">Layanan</span>
            <h2 className="section-title mt-4">Layanan Kami</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 120}>
                <div className="group flex h-full gap-5 rounded-2xl bg-gradient-to-br from-primary-50 to-white p-6 ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-white text-2xl shadow-soft transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                    <p className="text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-indigo-600 bg-[length:200%_auto] p-10 text-center text-white animate-gradient-x md:p-14">
            <div className="bg-grid absolute inset-0 opacity-50" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold">Siap Menemukan Sepeda Impian Anda?</h2>
              <p className="mb-8 text-lg text-primary-100">
                Kunjungi toko kami atau hubungi customer service kami untuk konsultasi gratis
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/produk" className="btn-light">
                  Lihat Produk
                </Link>
                <Link href="/kontak" className="btn-ghost">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

import Link from "next/link";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/artikel", label: "Artikel" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

const categories = [
  { href: "/produk?kategori=mtb", label: "Mountain Bike" },
  { href: "/produk?kategori=road-bike", label: "Road Bike" },
  { href: "/produk?kategori=hybrid", label: "Hybrid" },
  { href: "/produk?kategori=bmx", label: "BMX" },
];

const socials = [
  { href: "#", label: "FB" },
  { href: "#", label: "IG" },
  { href: "https://wa.me/6281234567890", label: "WA" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-slate-400">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl">🚲</span>
              <span className="text-xl font-extrabold text-white">Toko Syuhada</span>
            </div>
            <p className="text-sm leading-relaxed">
              Toko sepeda terpercaya dengan berbagai pilihan sepeda berkualitas untuk segala kebutuhan Anda.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xs font-bold text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-600 hover:text-white hover:ring-primary-500"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Menu</h3>
            <ul className="space-y-2.5 text-sm">
              {menu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Kategori</h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>📍</span> Jl. Contoh No. 123, Jakarta</li>
              <li className="flex gap-2"><span>📞</span> +62 812-3456-7890</li>
              <li className="flex gap-2"><span>✉️</span> info@tokosyuhada.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Toko Syuhada. All rights reserved.</p>
          <p className="text-slate-500">Dibuat dengan ❤️ untuk para pesepeda</p>
        </div>
      </div>
    </footer>
  );
}

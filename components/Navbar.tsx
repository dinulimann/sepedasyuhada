'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/artikel", label: "Artikel" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/80 shadow-soft backdrop-blur-xl ring-1 ring-slate-200/60"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl shadow-lg shadow-primary-500/30 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
              🚲
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Toko <span className="text-primary-600">Syuhada</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative isolate rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive(link.href) ? "text-primary-700" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span
                  className={`absolute inset-0 -z-10 rounded-full bg-primary-50 transition-all duration-300 ${
                    isActive(link.href) ? "scale-100 opacity-100" : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-slate-100"
                  }`}
                />
                {link.label}
              </Link>
            ))}
            <Link href="/produk" className="btn-primary ml-3 px-5 py-2.5 text-sm">
              Belanja Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative grid h-10 w-10 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 border-t border-slate-200/70 py-4">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                  className={`rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  } ${isActive(link.href) ? "bg-primary-50 text-primary-700" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

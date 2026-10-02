import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

// Header gelap beranimasi untuk halaman-halaman dalam.
export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -left-24 -top-24 h-80 w-80 animate-blob rounded-full bg-primary-600/40 blur-3xl" />
      <div className="absolute -right-16 top-0 h-72 w-72 animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" />

      <div className="container-custom relative py-16 text-center md:py-24">
        {eyebrow && (
          <span className="inline-block animate-fade-up rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-100 ring-1 ring-white/15 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold tracking-tight [animation-delay:100ms] md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl animate-fade-up text-lg text-slate-300 [animation-delay:200ms]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:300ms]">{children}</div>}
      </div>
    </section>
  );
}

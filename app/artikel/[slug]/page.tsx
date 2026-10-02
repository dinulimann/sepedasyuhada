import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
  }).catch(() => null);

  if (!article || !article.published) {
    notFound();
  }

  const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/artikel/${article.slug}`;
  const shareLinks = [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      className: 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30',
    },
    {
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`,
      className: 'bg-sky-500 hover:bg-sky-600 hover:shadow-sky-500/30',
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + articleUrl)}`,
      className: 'bg-green-600 hover:bg-green-700 hover:shadow-green-600/30',
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="page-hero">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute -left-24 -top-24 h-80 w-80 animate-blob rounded-full bg-primary-600/40 blur-3xl" />
        <div className="absolute -right-16 top-0 h-72 w-72 animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" />

        <div className="container-custom relative max-w-4xl py-14 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex animate-fade-in flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition-colors hover:text-white">Beranda</Link>
            <span className="text-slate-600">/</span>
            <Link href="/artikel" className="transition-colors hover:text-white">Artikel</Link>
            <span className="text-slate-600">/</span>
            <span className="line-clamp-1 text-slate-200">{article.title}</span>
          </nav>

          {article.tags.length > 0 && (
            <div className="mb-5 flex animate-fade-up flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-100 ring-1 ring-white/15">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="animate-fade-up text-3xl font-extrabold leading-tight tracking-tight [animation-delay:100ms] md:text-5xl">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-8 flex animate-fade-up items-center gap-3 [animation-delay:200ms]">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary-400 to-primary-700 font-bold">
              {article.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-slate-400">
                {new Date(article.createdAt).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-12">
        <article className="mx-auto max-w-3xl">
          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative mb-10 aspect-video animate-fade-up overflow-hidden rounded-3xl bg-slate-100 shadow-lift">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <Reveal className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-10">
            <div className="whitespace-pre-line text-lg leading-relaxed text-slate-700">
              {article.content}
            </div>
          </Reveal>

          {/* Share */}
          <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-slate-700">Bagikan artikel ini:</p>
            <div className="flex flex-wrap gap-3">
              {shareLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${s.className}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </article>

        {/* Related Articles */}
        <Reveal className="mx-auto mt-16 max-w-3xl rounded-3xl bg-gradient-to-r from-primary-50 to-white p-8 text-center ring-1 ring-primary-100">
          <h2 className="mb-3 text-2xl font-bold">Artikel Lainnya</h2>
          <Link href="/artikel" className="link-arrow">
            Lihat Semua Artikel <span>→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

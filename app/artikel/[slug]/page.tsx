import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  }).catch(() => null);

  if (!article || !article.published) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-600">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/artikel" className="hover:text-primary-600">Artikel</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{article.title}</span>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-8">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold">
                  {article.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(article.createdAt).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {article.content}
            </div>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 mb-4">Bagikan artikel ini:</p>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Artikel Lainnya</h2>
          <div className="text-center py-8 text-gray-500">
            <Link href="/artikel" className="text-primary-600 hover:text-primary-700 font-semibold">
              Lihat Semua Artikel →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

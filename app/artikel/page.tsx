import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function ArtikelPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  }).catch(() => []);

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel & Tips Sepeda</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan berbagai artikel menarik, tips perawatan, dan informasi seputar dunia bersepeda
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/artikel/${article.slug}`} className="card group">
                {article.coverImage && (
                  <div className="relative aspect-video bg-gray-100">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>
                      {new Date(article.createdAt).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold mb-2">Belum ada artikel</h3>
            <p className="text-gray-600">
              Artikel akan segera hadir. Pantau terus website kami!
            </p>
          </div>
        )}

        {/* Categories/Topics */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Topik Populer</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tips Perawatan', 'Review Produk', 'Teknik Bersepeda', 'Destinasi', 'Kesehatan', 'Event'].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

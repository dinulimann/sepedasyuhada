import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default async function ArtikelPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  }).catch(() => []);

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Artikel & Tips Sepeda"
        subtitle="Temukan berbagai artikel menarik, tips perawatan, dan informasi seputar dunia bersepeda"
      />

      <div className="container-custom py-16">
        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 100}>
                <Link href={`/artikel/${article.slug}`} className="card group flex h-full flex-col">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-600 to-indigo-700">
                    {article.coverImage ? (
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <div className="bg-grid absolute inset-0 opacity-60" />
                        <span className="relative text-6xl transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-6">📖</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {article.tags.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="mb-3 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary-600">
                      {article.title}
                    </h2>
                    <p className="mb-6 line-clamp-3 text-slate-500">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                          {article.author.charAt(0).toUpperCase()}
                        </span>
                        {article.author}
                      </span>
                      <span>
                        {new Date(article.createdAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="rounded-3xl bg-white py-16 text-center ring-1 ring-slate-200">
            <div className="mb-4 inline-block animate-float text-6xl">📝</div>
            <h3 className="mb-2 text-2xl font-bold">Belum ada artikel</h3>
            <p className="text-slate-500">
              Artikel akan segera hadir. Pantau terus website kami!
            </p>
          </Reveal>
        )}

        {/* Categories/Topics */}
        <Reveal className="mt-16 rounded-3xl bg-white p-8 text-center ring-1 ring-slate-200 md:p-12">
          <h2 className="mb-6 text-2xl font-bold">Topik Populer</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tips Perawatan', 'Review Produk', 'Teknik Bersepeda', 'Destinasi', 'Kesehatan', 'Event'].map((topic) => (
              <span
                key={topic}
                className="cursor-pointer rounded-full bg-slate-100 px-5 py-2 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-primary-600/30"
              >
                {topic}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

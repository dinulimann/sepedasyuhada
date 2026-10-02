import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const contactInfo = [
  { icon: '📍', title: 'Alamat Toko', lines: ['Jl. Contoh Alamat No. 123', 'Jakarta Selatan, DKI Jakarta 12345'] },
  { icon: '📞', title: 'Telepon', lines: ['+62 812-3456-7890', '+62 21-1234-5678'] },
  { icon: '✉️', title: 'Email', lines: ['info@tokosyuhada.com', 'support@tokosyuhada.com'] },
  { icon: '🕐', title: 'Jam Operasional', lines: ['Senin - Jumat: 09.00 - 18.00 WIB', 'Sabtu: 09.00 - 16.00 WIB', 'Minggu & Libur: Tutup'] },
];

const socials = [
  { icon: '📘', label: 'Facebook - Toko Syuhada', href: '#' },
  { icon: '📷', label: 'Instagram - @tokosyuhada', href: '#' },
  { icon: '💬', label: 'WhatsApp - Chat Langsung', href: 'https://wa.me/6281234567890' },
];

export default function KontakPage() {
  return (
    <div>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Silakan hubungi kami melalui form di bawah atau kunjungi toko kami langsung"
      />

      <div className="container-custom py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200 md:p-10">
              <h2 className="mb-2 text-2xl font-bold">Kirim Pesan</h2>
              <p className="mb-8 text-slate-500">Kami akan membalas pesan Anda secepatnya.</p>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                      Nama Lengkap
                    </label>
                    <input type="text" id="name" name="name" className="input" placeholder="Masukkan nama Anda" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input type="email" id="email" name="email" className="input" placeholder="nama@email.com" required />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Nomor Telepon
                    </label>
                    <input type="tel" id="phone" name="phone" className="input" placeholder="08123456789" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">
                      Subjek
                    </label>
                    <input type="text" id="subject" name="subject" className="input" placeholder="Perihal pesan Anda" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Kirim Pesan <span aria-hidden>✈️</span>
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={120}>
              <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200 md:p-8">
                <h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="group flex items-start gap-4">
                      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary-50 text-2xl ring-1 ring-primary-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="mb-0.5 font-semibold">{info.title}</h3>
                        {info.lines.map((line) => (
                          <p key={line} className="text-sm text-slate-500">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Social Media */}
            <Reveal delay={240}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-indigo-700 p-6 text-white md:p-8">
                <div className="absolute -right-12 -top-12 h-40 w-40 animate-blob rounded-full bg-accent-400/30 blur-2xl" />
                <h2 className="relative mb-2 text-2xl font-bold">Media Sosial</h2>
                <p className="relative mb-6 text-primary-100">Ikuti kami untuk update produk dan promo terbaru!</p>
                <div className="relative space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10 transition-all duration-300 hover:translate-x-1 hover:bg-white/20"
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <span className="flex-1 font-semibold">{s.label}</span>
                      <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map Placeholder */}
        <Reveal className="mx-auto mt-12 max-w-6xl">
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-primary-50 ring-1 ring-slate-200">
            <div className="absolute inset-0 [background-image:radial-gradient(rgba(2,132,199,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative text-center text-slate-500">
              <span className="relative mb-4 inline-block">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary-400/40" />
                <span className="relative block animate-float text-6xl">📍</span>
              </span>
              <p className="text-lg font-semibold text-slate-700">Google Maps akan ditampilkan di sini</p>
              <p className="mt-2 text-sm">Tambahkan iframe Google Maps untuk lokasi toko</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

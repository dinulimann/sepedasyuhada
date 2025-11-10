export default function TentangPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Toko Syuhada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toko sepeda terpercaya sejak tahun 2010, melayani kebutuhan bersepeda Anda dengan produk berkualitas dan layanan terbaik
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Kisah Kami</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
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
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Kami hanya menjual produk original dengan garansi resmi dari distributor
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Pelayanan Terbaik</h3>
              <p className="text-gray-600">
                Kepuasan pelanggan adalah prioritas utama kami dalam setiap transaksi
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Kepercayaan</h3>
              <p className="text-gray-600">
                Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100">
              <h3 className="font-bold text-xl mb-2">🚲 Penjualan Sepeda</h3>
              <p className="text-gray-600">
                Berbagai jenis sepeda dari brand ternama dengan pilihan lengkap untuk semua kebutuhan
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100">
              <h3 className="font-bold text-xl mb-2">🔧 Servis & Maintenance</h3>
              <p className="text-gray-600">
                Layanan perawatan sepeda dengan teknisi berpengalaman dan spare part original
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100">
              <h3 className="font-bold text-xl mb-2">🛠️ Custom Build</h3>
              <p className="text-gray-600">
                Rakit sepeda sesuai keinginan Anda dengan konsultasi dari tim ahli kami
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100">
              <h3 className="font-bold text-xl mb-2">📦 Pengiriman</h3>
              <p className="text-gray-600">
                Layanan pengiriman ke seluruh Indonesia dengan packaging aman dan terpercaya
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Menemukan Sepeda Impian Anda?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Kunjungi toko kami atau hubungi customer service kami untuk konsultasi gratis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/produk" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Lihat Produk
            </a>
            <a href="/kontak" className="btn-secondary bg-primary-700 text-white hover:bg-primary-600">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

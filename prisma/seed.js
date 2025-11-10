const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'mtb' },
      update: {},
      create: {
        name: 'Mountain Bike',
        slug: 'mtb',
        description: 'Sepeda gunung untuk medan off-road dan trail',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'road-bike' },
      update: {},
      create: {
        name: 'Road Bike',
        slug: 'road-bike',
        description: 'Sepeda balap untuk jalan aspal dan kecepatan',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'hybrid' },
      update: {},
      create: {
        name: 'Hybrid',
        slug: 'hybrid',
        description: 'Sepeda serbaguna untuk jalanan kota dan ringan off-road',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'bmx' },
      update: {},
      create: {
        name: 'BMX',
        slug: 'bmx',
        description: 'Sepeda untuk freestyle dan trick',
      },
    }),
  ]);

  console.log('✅ Categories created:', categories.length);

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { slug: 'polygon-xtrada-7' },
      update: {},
      create: {
        name: 'Polygon Xtrada 7',
        slug: 'polygon-xtrada-7',
        description: 'Sepeda MTB dengan frame alloy ringan dan fork suspension. Cocok untuk trail dan cross country.',
        price: 5500000,
        stock: 10,
        brand: 'Polygon',
        type: 'MTB',
        frameSize: 'M',
        frameMaterial: 'Aluminium',
        wheelSize: '27.5"',
        gearSystem: 'Shimano Deore',
        images: [],
        featured: true,
        categoryId: categories.find(c => c.slug === 'mtb').id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'united-clovis-3' },
      update: {},
      create: {
        name: 'United Clovis 3.0',
        slug: 'united-clovis-3',
        description: 'Road bike dengan frame carbon yang ringan. Ideal untuk speed dan performa maksimal.',
        price: 8900000,
        stock: 5,
        brand: 'United',
        type: 'Road Bike',
        frameSize: 'L',
        frameMaterial: 'Carbon',
        wheelSize: '700c',
        gearSystem: 'Shimano 105',
        images: [],
        featured: true,
        categoryId: categories.find(c => c.slug === 'road-bike').id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'pacific-vigilon-2' },
      update: {},
      create: {
        name: 'Pacific Vigilon 2.0',
        slug: 'pacific-vigilon-2',
        description: 'Sepeda hybrid yang nyaman untuk perjalanan kota dengan kemampuan ringan off-road.',
        price: 3200000,
        stock: 15,
        brand: 'Pacific',
        type: 'Hybrid',
        frameSize: 'M',
        frameMaterial: 'Aluminium',
        wheelSize: '700c',
        gearSystem: 'Shimano Tourney',
        images: [],
        featured: false,
        categoryId: categories.find(c => c.slug === 'hybrid').id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'wimcycle-dragster' },
      update: {},
      create: {
        name: 'Wimcycle Dragster BMX',
        slug: 'wimcycle-dragster',
        description: 'BMX freestyle dengan frame kuat untuk trick dan akrobatik.',
        price: 2500000,
        stock: 8,
        brand: 'Wimcycle',
        type: 'BMX',
        frameSize: '20"',
        frameMaterial: 'Steel',
        wheelSize: '20"',
        gearSystem: 'Single Speed',
        images: [],
        featured: false,
        categoryId: categories.find(c => c.slug === 'bmx').id,
      },
    }),
  ]);

  console.log('✅ Products created:', products.length);

  // Create sample articles
  const articles = await Promise.all([
    prisma.article.upsert({
      where: { slug: 'tips-memilih-sepeda-pemula' },
      update: {},
      create: {
        title: 'Tips Memilih Sepeda untuk Pemula',
        slug: 'tips-memilih-sepeda-pemula',
        excerpt: 'Panduan lengkap memilih sepeda yang tepat untuk Anda yang baru memulai hobi bersepeda.',
        content: `Memilih sepeda yang tepat sangat penting untuk kenyamanan dan keamanan Anda saat bersepeda. Berikut adalah beberapa tips yang bisa membantu Anda:

1. Tentukan Tujuan Penggunaan
Apakah untuk commuting, olahraga, atau rekreasi? Setiap tujuan membutuhkan tipe sepeda yang berbeda.

2. Ukuran Frame yang Sesuai
Pastikan ukuran frame sepeda sesuai dengan tinggi badan Anda. Frame yang terlalu besar atau kecil akan mengurangi kenyamanan.

3. Budget
Tentukan budget yang sesuai. Untuk pemula, tidak perlu langsung membeli sepeda yang mahal.

4. Test Ride
Selalu lakukan test ride sebelum membeli untuk memastikan sepeda nyaman untuk Anda.

5. Pertimbangkan Perawatan
Pilih sepeda yang mudah dalam perawatan dan spare part yang mudah didapat.

Dengan mengikuti tips di atas, Anda akan lebih mudah menemukan sepeda yang tepat untuk kebutuhan Anda.`,
        tags: ['Tips', 'Pemula', 'Panduan'],
        published: true,
      },
    }),
    prisma.article.upsert({
      where: { slug: 'cara-merawat-sepeda' },
      update: {},
      create: {
        title: 'Cara Merawat Sepeda Agar Awet',
        slug: 'cara-merawat-sepeda',
        excerpt: 'Perawatan rutin yang harus dilakukan agar sepeda Anda tetap awet dan nyaman digunakan.',
        content: `Perawatan sepeda yang rutin akan membuat sepeda Anda lebih awet dan nyaman digunakan. Berikut adalah langkah-langkah perawatan yang bisa Anda lakukan:

1. Bersihkan Secara Rutin
Bersihkan sepeda setelah digunakan, terutama setelah melewati medan kotor atau hujan.

2. Lumasi Rantai
Rantai yang kering akan cepat aus. Lumasi rantai secara rutin setiap 100-200 km.

3. Cek Tekanan Ban
Pastikan tekanan ban selalu dalam kondisi optimal sesuai rekomendasi.

4. Periksa Rem
Cek kondisi brake pad dan pastikan rem berfungsi dengan baik.

5. Service Rutin
Lakukan service rutin setiap 3-6 bulan di bengkel sepeda profesional.

Dengan perawatan yang tepat, sepeda Anda akan awet dan performanya tetap optimal.`,
        tags: ['Perawatan', 'Tips', 'Maintenance'],
        published: true,
      },
    }),
  ]);

  console.log('✅ Articles created:', articles.length);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

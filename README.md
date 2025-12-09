# Toko Syuhada - Website Penjualan Sepeda

Website penjualan dan informasi seputar sepeda dengan fitur katalog produk, artikel, dan informasi lengkap.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Fitur

### 1. Halaman Utama (Landing Page)
- Hero section dengan CTA
- Kategori sepeda (MTB, Road Bike, Hybrid, BMX)
- Produk unggulan
- Artikel terbaru
- Informasi keunggulan toko

### 2. Katalog Produk
- Daftar semua produk sepeda
- Filter berdasarkan kategori
- Pencarian produk
- Detail spesifikasi lengkap

### 3. Detail Produk
- Informasi lengkap produk
- Spesifikasi detail (frame, roda, gear, dll)
- Gambar produk
- Harga dan stok
- Tombol kontak WhatsApp

### 4. Artikel & Tips
- Artikel seputar sepeda
- Tips perawatan dan pemilihan sepeda
- Kategori/tag artikel

### 5. Halaman Informasi
- Tentang Kami
- Kontak
- Footer dengan info lengkap

### 6. REST API
- CRUD Produk
- CRUD Kategori
- CRUD Artikel

## Database Schema

### Product
- Informasi produk (nama, deskripsi, harga, stok)
- Spesifikasi (brand, type, frame size, material, wheel size, gear system)
- Relasi dengan kategori
- Featured flag untuk produk unggulan

### Category
- Nama dan slug kategori
- Deskripsi kategori

### Article
- Judul, slug, konten
- Author, tags
- Published status

### User
- Email, nama, password
- Role (user/admin)

## Setup & Instalasi

### Prasyarat
- Node.js 18+
- PostgreSQL 14+
- npm atau yarn

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/dinulimann/sepedasyuhada.git
   cd sepedasyuhada
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Copy file `.env.example` ke `.env` dan sesuaikan:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` dan update dengan kredensial database Anda:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/tokosyuhada?schema=public"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Setup Database**

   Jalankan migrasi database:
   ```bash
   npm run db:push
   ```

   Generate Prisma Client:
   ```bash
   npm run db:generate
   ```

5. **Seed Database (Optional)**

   Isi database dengan data contoh:
   ```bash
   npm run db:seed
   ```

6. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

   Buka browser dan akses: http://localhost:3000

## NPM Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm start` - Jalankan production server
- `npm run lint` - Jalankan linter
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema ke database
- `npm run db:migrate` - Jalankan migrasi database
- `npm run db:studio` - Buka Prisma Studio
- `npm run db:seed` - Seed database dengan data contoh

## API Endpoints

### Products
- `GET /api/products` - Get all products (dengan filter)
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get product by ID
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

### Articles
- `GET /api/articles` - Get all articles
- `POST /api/articles` - Create article

## Struktur Folder

```
├── app/
│   ├── api/              # API routes
│   ├── artikel/          # Halaman artikel
│   ├── produk/           # Halaman produk
│   ├── tentang/          # Halaman tentang
│   ├── kontak/           # Halaman kontak
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable components
├── lib/                  # Library & utilities
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.js           # Database seeder
├── public/               # Static files
└── package.json
```

## Customization

### Menambah Produk Baru
1. Via Prisma Studio:
   ```bash
   npm run db:studio
   ```
2. Via API POST ke `/api/products`
3. Manual via SQL

### Menambah Artikel
1. Via Prisma Studio
2. Via API POST ke `/api/articles`



### Deploy ke Vercel

1. Push code ke GitHub
2. Import project di Vercel
3. Set environment variables di Vercel
4. Deploy

Gunakan managed PostgreSQL:
- Supabase
- Railway
- Neon
- PlanetScale

## Contributing

Kontribusi selalu diterima! Silakan buat Pull Request.

## License

ISC

## Support

Untuk pertanyaan dan support, hubungi:
- Email: info@tokosyuhada.com
- WhatsApp: +62 812-3456-7890
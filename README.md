# Portal Unduh & Distribusi Resmi RamSawit

Repositori mandiri website portal unduhan dan dokumentasi publik aplikasi **RamSawit** — sistem kasir dan manajemen operasional ram timbangan kelapa sawit (TBS) berbasis Android (.apk) dan Windows (.exe).

## 🚀 Fitur Portal

- **Landing Page Interaktif**: Desain enterprise bertaraf IBM Carbon Design System dengan palet IBM Blue (`#0F62FE`).
- **Kalkulator Margin TBS**: Simulasi margin pembelian petani dan penjualan pabrik 2 fase dengan estimasi potongan dan susut timbangan.
- **Bilingual & Dark Mode**: Mendukung Bahasa Indonesia dan Bahasa Inggris, serta toggle mode gelap otomatis.
- **Pusat Rilis Mandiri**: Distribusi paket rilis resmi APK Android dan Windows 64-bit portabel.
- **Endpoint Auto-Update API (`version.json`)**: Endpoint standar yang dikonsumsi langsung oleh aplikasi klien Android & Windows untuk verifikasi pembaruan otomatis (in-app updates).

---

## 📁 Struktur Berkas

```
.
├── index.html          # Beranda utama, hero, kalkulator TBS, galeri, FAQ
├── fitur.html          # Dokumentasi 8 modul utama RamSawit
├── instalasi.html      # Panduan instalasi Android (APK) & Windows (ZIP)
├── changelog.html      # Riwayat versi rilis commit asli
├── privasi.html        # Kebijakan privasi
├── syarat.html         # Syarat & ketentuan layanan
├── styles.css          # Styling IBM Carbon & responsif
├── app.js              # Interaksi (i18n, kalkulator, pencarian, carousel)
├── version.json        # Kontrak metadata versi untuk auto-update klien
├── vercel.json         # Konfigurasi deployment & header Vercel
├── netlify.toml        # Konfigurasi deployment & header Netlify
├── images/             # Logo resmi RamSawit
├── screenshots/        # Tangkapan layar aplikasi riil
└── downloads/          # Paket binary rilis resmi:
    ├── RamSawit_V.2.5.4.apk
    └── RamSawit_V.2.5.4_Windows.zip
```

---

## 🌐 Panduan Deployment

Website portal ini bersifat **statis murni (jamstack)** tanpa server backend yang rumit, sehingga dapat di-deploy dalam hitungan detik.

### Opsi A: Deployment via Vercel (Disarankan)

1. Buat repositori baru di GitHub Anda, misalnya bernama `ramsawit-portal`.
2. Push seluruh isi folder ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portal ramsawit v2.5.4"
   git branch -M main
   git remote add origin https://github.com/<username>/ramsawit-portal.git
   git push -u origin main
   ```
3. Buka [Vercel Dashboard](https://vercel.com/new).
4. Klik **Import Project** dan pilih repositori `ramsawit-portal`.
5. Biarkan pengaturan default (Framework Preset: *Other*, Root Directory: `./`).
6. Klik **Deploy**. Website portal langsung aktif dengan domain `https://ramsawit-portal.vercel.app` (lengkap dengan SSL otomatis).

### Opsi B: Deployment via Netlify

1. Buka [Netlify Dashboard](https://app.netlify.com).
2. Pilih **Add new site** -> **Import an existing project** dari GitHub.
3. Pilih repositori `ramsawit-portal`.
4. Klik **Deploy site**.

---

## 🔄 Pembaruan Versi Baru (Auto-Update Workflow)

Ketika rilis versi baru dirilis (misal `v2.5.5`):
1. Masukkan file APK dan ZIP baru ke folder `downloads/`.
2. Perbarui nomor versi dan catatan rilis pada `version.json`:
   ```json
   {
     "latest_version": "2.5.5",
     "version_code": 255,
     "release_date": "YYYY-MM-DD",
     "changelog": ["..."]
   }
   ```
3. Update nomor versi di `index.html` dan `changelog.html`.
4. Commit dan push ke GitHub — Vercel/Netlify akan otomatis melakukan redeployment dalam hitungan detik, dan seluruh aplikasi klien kasir akan otomatis mendeteksi rilis baru tersebut.

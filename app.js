/* RamSawit portal — interactions: i18n, dark mode, search, carousels, calculator */
(function () {
  'use strict';

  /* ============ I18N ============ */
  var I18N = {
    id: {
      'nav.home': 'Beranda', 'nav.features': 'Fitur', 'nav.install': 'Panduan Instalasi',
      'nav.changelog': 'Changelog', 'nav.privacy': 'Kebijakan Privasi', 'nav.terms': 'Syarat Penggunaan',
      'nav.download': 'Unduh gratis', 'nav.search.ph': 'Cari…',
      'hero.eyebrow': 'v2.5.9 · kini dengan AI Analytics & ARM64',
      'hero.title': 'Operasional ram sawit, tercatat rapi dalam satu aplikasi',
      'hero.sub': 'RamSawit mencatat pembelian TBS dari petani, memantau pengiriman ke pabrik, mengelola pengeluaran, dan memberi insight bisnis lewat AI — tetap berjalan tanpa internet, tersinkron otomatis saat online.',
      'hero.cta1': 'Unduh APK ARM64 v2.5.9 (27 MB)', 'hero.cta2': 'Pilih Versi Rilis',
      'hero.cta_and': 'Unduh APK ARM64 (Android)', 'hero.cta_win': 'Unduh Aplikasi (Windows)',
      'hero.meta': 'Gratis · Versi Stabil 2.5.9 (ARM64) · Tersedia untuk Android & Windows (64-bit)',
      'hero.win': 'Windows', 'hero.and': 'Android',
      'hero.note': 'Tampilan asli aplikasi · data contoh mode demo',
      'stats.m1': 'Modul operasional', 'stats.m2': 'Peran: Admin & Kasir',
      'stats.m3': 'Detik sinkronisasi otomatis', 'stats.m4': 'Mode offline penuh',
      'calc.eyebrow': 'Simulasi interaktif', 'calc.title': 'Kalkulator Margin TBS',
      'calc.sub': 'Simulasikan pencatatan pembelian kasir dan proyeksi penjualan ke PKS secara presisi sesuai alur kerja nyata RamSawit.',
      'calc.tab.buy': 'Simulasi Pembelian', 'calc.tab.sell': 'Simulasi Penjualan',
      'calc.weight': 'Berat TBS (kg)', 'calc.price.buy': 'Harga beli per kg (Rp)',
      'calc.cut': 'Potongan (%)', 'calc.netweight': 'Berat bersih',
      'calc.pay': 'Total dibayar ke petani', 'calc.ship': 'Berat kirim (kg)',
      'calc.arrive': 'Berat sampai / diterima (kg)', 'calc.sort': 'Potongan sortasi (%)',
      'calc.price.sell': 'Harga jual per kg (Rp)', 'calc.receive': 'Total diterima dari pabrik',
      'calc.note': 'Simulasi estimasi — hasil aktual mengikuti timbangan dan kebijakan potongan masing-masing.',
      'gal.eyebrow': 'Tampilan aplikasi', 'gal.title': 'Lihat langsung isi aplikasinya',
      'gal.1t': 'Dashboard Analitik', 'gal.1d': 'Tren pembelian vs penjualan, skor margin, dan insight AI.',
      'gal.2t': 'Input Transaksi', 'gal.2d': 'Catat pembelian TBS multi-item dengan potongan per jenis buah.',
      'gal.3t': 'AI Analytics', 'gal.3d': 'Konsultasi bisnis, rekomendasi harga beli, dan deteksi anomali sortasi.',
      'gal.note': 'Screenshot diambil dari aplikasi asli · data contoh mode demo.',
      'vid.eyebrow': 'Video demo', 'vid.title': 'Lihat RamSawit beraksi',
      'vid.cta': 'Putar video demo', 'vid.soon': 'Video demo segera hadir',
      'req.eyebrow': 'Kebutuhan sistem', 'req.title': 'Siap jalan di perangkatmu',
      'req.and': 'Android', 'req.win': 'Windows',
      'perm.title': 'Izin aplikasi',
      'perm.storage.t': 'Penyimpanan', 'perm.storage.d': 'Menyimpan database lokal agar aplikasi tetap berjalan offline.',
      'perm.net.t': 'Jaringan', 'perm.net.d': 'Sinkronisasi data ke cloud dan akses fitur AI saat online.',
      'perm.notif.t': 'Notifikasi', 'perm.notif.d': 'Pengingat sinkronisasi dan ringkasan operasional harian (opsional).',
      'dl.eyebrow': 'Unduh', 'dl.title': 'Pilih versi untuk perangkatmu',
      'dl.and': 'Android', 'dl.andmeta': 'Versi 2.5.9 (ARM64) · 27.1 MB', 'dl.new': 'Rilis Terbaru',
      'dl.win': 'Windows', 'dl.winmeta': 'Versi 2.5.4 (Portabel x64) · 15.9 MB', 'dl.win_badge': 'Disarankan',
      'dl.andf1': 'Agentic AI Analytics & Endpoint Kustom', 'dl.andf2': 'Offline-first penuh (SQLite / Drift)', 'dl.andf3': 'Android 8.0 ke atas (arm64-v8a 27 MB)',
      'dl.winf1': 'Aplikasi desktop native timbangan', 'dl.winf2': 'Termasuk Visual C++ Runtime & SQLite', 'dl.winf3': 'Windows 10 / 11 (64-bit)',
      'dl.btn': 'Unduh APK ARM64 v2.5.9', 'dl.alt': 'Unduh v2.5.4 (Versi Universal 68.6 MB)',
      'dl.winbtn': 'Unduh Paket Windows (.ZIP)', 'dl.winalt': 'Ekstrak dan jalankan RamSawit.exe langsung tanpa instalasi',
      'dl.wininfo': 'Paket installer otomatis memasang Visual C++ dan membuat shortcut desktop.',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Pertanyaan umum',
      'faq.1q': 'Apakah RamSawit gratis?', 'faq.1a': 'Ya. Unduh dan gunakan seluruh fitur tanpa biaya, tanpa batasan transaksi.',
      'faq.2q': 'Apakah butuh koneksi internet?', 'faq.2a': 'Tidak untuk operasional harian. RamSawit menyimpan data di perangkat (offline-first) dan menyinkronkannya otomatis ke cloud begitu ada koneksi.',
      'faq.3q': 'Apakah data saya aman?', 'faq.3a': 'Data tersimpan di database cloud dengan Row Level Security — setiap pengguna hanya bisa mengakses data sesuai perannya. Transaksi yang dibatalkan tercatat sebagai void, tidak pernah dihapus permanen.',
      'faq.4q': 'Perangkat apa saja yang didukung?', 'faq.4a': 'Android 8.0 ke atas dan Windows 10/11 (64-bit) sudah tersedia sekarang.',
      'faq.5q': 'Bagaimana cara memperbarui aplikasi?', 'faq.5a': 'Unduh versi terbaru dari halaman ini dan pasang di atas versi lama — data lokalmu tetap aman dan ikut tersinkron.',
      'cta.title': 'Siap merapikan operasional ram sawitmu?',
      'cta.sub': 'Unduh sekarang, catat transaksi pertama dalam hitungan menit.',
      'cta.btn': 'Unduh RamSawit gratis',
      'cta.btn_and': 'Unduh APK Android',
      'cta.btn_win': 'Unduh Installer Windows',
      'ft.tag': 'Aplikasi kasir & manajemen operasional ram timbangan kelapa sawit.',
      'ft.pages': 'Halaman', 'ft.social': 'Dokumentasi & Sumber', 'ft.contact': 'Kontak Pengembang',
      'ft.rights': 'Hak cipta dilindungi.',
      'feat.eyebrow': 'Modul aplikasi', 'feat.title': 'Delapan modul, satu alur kerja',
      'feat.sub': 'Setiap modul dirancang untuk satu bagian operasional ram — saling terhubung otomatis.',
      'inst.eyebrow': 'Panduan', 'inst.title': 'Panduan Pemasangan & Menjalankan Aplikasi',
      'inst.sub': 'Langkah mudah memasang di ponsel Android atau menjalankan di komputer Windows.',
      'inst.and_title': 'Untuk Ponsel Android (APK)',
      'inst.win_title': 'Untuk Komputer Windows (Desktop 64-bit)',
      'inst.1t': 'Unduh file APK Resmi', 'inst.1d': 'Ketuk tombol unduh di bawah ini. File berekstensi .apk arsitektur ARM64 (v2.5.9, ~27.1 MB) akan tersimpan di folder Unduhan.',
      'inst.2t': 'Izinkan sumber tidak dikenal', 'inst.2d': 'Buka Pengaturan → Keamanan → aktifkan “Instal aplikasi yang tidak dikenal” untuk browser/Chrome. Cukup sekali saja.',
      'inst.3t': 'Buka & pasang', 'inst.3d': 'Ketuk file APK yang sudah diunduh, lalu ketuk “Instal”. Setelah selesai, ikon RamSawit muncul di layar utama.',
      'inst.note': 'Tips Android: jika muncul peringatan Play Protect, pilih “Tetap instal” — file APK ini langsung dari pengembang resmi RamSawit.',
      'inst.win1t': 'Unduh Paket Aplikasi Windows', 'inst.win1d': 'Unduh paket RamSawit_V.2.5.4_Windows.zip (~15.9 MB) yang sudah dilengkapi runtime Visual C++ dan database SQLite.',
      'inst.win2t': 'Ekstrak Berkas ZIP', 'inst.win2d': 'Klik kanan pada berkas ZIP yang diunduh lalu pilih Extract All untuk mendapatkan folder mandiri aplikasi.',
      'inst.win3t': 'Buka & Siap Pakai', 'inst.win3d': 'Jalankan file RamSawit.exe di dalam folder. Aplikasi RamSawit langsung siap dipakai tanpa instalasi manual.',
      'inst.win_note': 'Tips Windows: jika muncul dialog perlindungan Windows SmartScreen saat pertama kali dibuka, klik “More info” lalu pilih “Run anyway”.',
      'cl.eyebrow': 'Riwayat versi', 'cl.title': 'Changelog',
      'cl.sub': 'Diambil langsung dari riwayat commit pengembangan aplikasi.',
      'cl.apknote': '',
      'pv.title': 'Kebijakan Privasi', 'pv.sub': 'Terakhir diperbarui: Oktober 2026',
      'tm.title': 'Syarat Penggunaan', 'tm.sub': 'Terakhir diperbarui: Oktober 2026',
      'm1.t': 'Kasir Transaksi TBS', 'm1.d': 'Pencatatan pembelian TBS multi-item dinamis dengan kalkulasi potongan timbangan otomatis.',
      'm1.f1': 'Multi-item: ragam jenis buah, berat kotor, potongan %, dan harga/kg', 'm1.f2': 'Kalkulasi instan berat bersih timbangan & total bayar petani', 'm1.f3': 'Metode tunai / transfer serta cetak struk nota timbang',
      'm2.t': 'Penjualan ke Pabrik', 'm2.d': 'Alur logistik 2 fase terintegrasi dari RAM hingga slip timbang PKS.',
      'm2.f1': 'Fase 1 (Logistik RAM): PKS tujuan, sopir, nopol armada, & berat kirim', 'm2.f2': 'Fase 2 (Slip PKS): berat sampai, afkir ditolak, sortasi %, & audit susut jalan', 'm2.f3': 'Perhitungan pendapatan bersih otomatis setelah penalti sortasi & biaya',
      'm3.t': 'AI Analytics Advisor', 'm3.d': 'Konsultasi bisnis langsung dengan data operasionalmu.',
      'm3.f1': 'Tanya jawab natural via chat', 'm3.f2': 'Rekomendasi harga beli aman', 'm3.f3': 'Deteksi anomali sortasi',
      'm4.t': 'Dashboard Real-time', 'm4.d': 'Semua angka penting terhitung otomatis dari database.',
      'm4.f1': 'Grafik tren pembelian vs penjualan', 'm4.f2': 'Skor margin & laba bersih', 'm4.f3': 'Filter periode fleksibel',
      'm5.t': 'Dana & Saldo Modal', 'm5.d': 'Pantau modal yang dipakai untuk pembelian harian.',
      'm5.f1': 'Kartu saldo & riwayat mutasi', 'm5.f2': 'Filter periode kustom', 'm5.f3': 'Stok kas selalu terpantau',
      'm6.t': 'Pengeluaran', 'm6.d': 'Catat biaya operasional harian dengan rapi.',
      'm6.f1': 'Kategori BBM, upah, perawatan', 'm6.f2': 'Rekap per periode', 'm6.f3': 'Masuk hitungan laba bersih',
      'm7.t': 'Laporan Excel & PDF', 'm7.d': 'Ekspor siap cetak untuk arsip & audit.',
      'm7.f1': 'Laporan pendapatan (admin)', 'm7.f2': 'Laporan pengiriman pabrik', 'm7.f3': 'Format Excel & PDF',
      'm8.t': 'Multi-peran Aman', 'm8.d': 'Admin dan Kasir dengan hak akses berbeda.',
      'm8.f1': 'Row Level Security di database', 'm8.f2': 'Jejak audit setiap mutasi', 'm8.f3': 'Transaksi void, bukan hapus',
      'cl.234': 'Pembaruan AGENTS.md untuk arsitektur offline-first dan AI analytics',
      'cl.233': 'UI mobile lebih responsif; pembaruan modul AI analytics',
      'cl.232a': 'Modul AI Analytics baru', 'cl.232b': 'Perbaikan bug aplikasi tidak bisa dibuka di Android',
      'cl.224': 'Penyelesaian migrasi offline-first Windows dan mobile',
      'cl.223': 'Setup migrasi dari web ke full mobile (.apk) dan Windows (.exe)',
      'cl.222a': 'Pembaruan dokumentasi', 'cl.222b': 'Perbaikan bug ekspor laporan (TooManyPages) dan sorting',
      'cl.221': 'Kolom jenis pembayaran di tabel & form transaksi pembelian',
      'cl.211': 'Kolom potongan lainnya dan potongan sortasi baru',
      'cl.204': 'Perbaikan filter periode ekspor laporan pengiriman',
      'cl.202': 'Filter periode untuk kartu dan riwayat dana/saldo modal',
      'cl.201': 'Modul baru dana/saldo untuk memantau modal pembelian',
      'cl.191': 'Modul baru pengeluaran untuk laporan biaya operasional',
      'cl.183': 'Perbaikan alur penjualan ke pabrik; tambah field berat sampai',
      'cl.181': 'Ekspor laporan pendapatan khusus admin',
      'cl.155': 'Perbaikan bug login via APK di Android',
      'cl.153': 'Alur penjualan 2 fase pengiriman',
      'pv.1t': 'Data yang kami kumpulkan', 'pv.1d': 'RamSawit menyimpan data operasional yang kamu masukkan: transaksi pembelian, data penjual, pengiriman ke pabrik, pengeluaran, dan saldo dana. Data akun (email & peran) disimpan untuk autentikasi.',
      'pv.2t': 'Penyimpanan lokal & cloud', 'pv.2d': 'Data tersimpan di database lokal perangkat (offline-first) dan tersinkron ke cloud saat online. Database cloud dilindungi Row Level Security — setiap akun hanya mengakses data sesuai perannya.',
      'pv.3t': 'Data yang tidak kami kumpulkan', 'pv.3d': 'Kami tidak melacak lokasi, tidak membaca kontak, dan tidak menjual data ke pihak ketiga. Fitur AI hanya memproses data operasionalmu untuk menghasilkan insight.',
      'pv.4t': 'Hak kamu', 'pv.4d': 'Kamu dapat meminta ekspor atau penghapusan datamu kapan saja melalui kontak pengembang. Transaksi yang dibatalkan tercatat sebagai void demi integritas audit.',
      'tm.1t': 'Lisensi penggunaan', 'tm.1d': 'RamSawit diberikan gratis untuk operasional ram timbangan kelapa sawit. Dilarang menjual ulang, merekayasa balik (reverse-engineering), atau menghilangkan atribusi aplikasi.',
      'tm.2t': 'Tanggung jawab pengguna', 'tm.2d': 'Kamu bertanggung jawab atas keakuratan data yang dimasukkan (berat timbangan, harga, potongan). Kalkulator di situs ini hanya simulasi estimasi, bukan angka resmi transaksi.',
      'tm.3t': 'Ketersediaan layanan', 'tm.3d': 'Aplikasi berjalan offline-first; fitur cloud & AI membutuhkan koneksi internet dan dapat berubah tanpa pemberitahuan. Kami berupaya menjaga layanan tetap tersedia.',
      'tm.4t': 'Batasan tanggung jawab', 'tm.4d': 'Pengembang tidak bertanggung jawab atas kerugian akibat kesalahan input data, perbedaan hasil timbangan, atau gangguan pihak ketiga (pabrik, jaringan).'
    },
    en: {
      'nav.home': 'Home', 'nav.features': 'Features', 'nav.install': 'Install Guide',
      'nav.changelog': 'Changelog', 'nav.privacy': 'Privacy Policy', 'nav.terms': 'Terms of Use',
      'nav.download': 'Download free', 'nav.search.ph': 'Search…',
      'hero.eyebrow': 'v2.5.9 · now with AI Analytics & ARM64',
      'hero.title': 'Palm weighbridge operations, neatly recorded in one app',
      'hero.sub': 'RamSawit records FFB purchases from farmers, monitors mill deliveries, manages expenses, and delivers business insight through AI — keeps running without internet, syncs automatically when online.',
      'hero.cta1': 'Download APK ARM64 (27 MB)', 'hero.cta2': 'See all versions',
      'hero.cta_and': 'Download for Android (ARM64)', 'hero.cta_win': 'Download Package (Windows)',
      'hero.meta': 'Free · Stable Version 2.5.9 (ARM64) · Available for Android & Windows (64-bit)',
      'hero.win': 'Windows', 'hero.and': 'Android',
      'hero.note': 'Real app screenshots · demo sample data',
      'stats.m1': 'Operational modules', 'stats.m2': 'Roles: Admin & Cashier',
      'stats.m3': 'Seconds auto-sync', 'stats.m4': 'Full offline mode',
      'calc.eyebrow': 'Interactive simulation', 'calc.title': 'FFB Margin Calculator',
      'calc.sub': 'Try estimating FFB purchase and sales figures yourself before downloading the app.',
      'calc.tab.buy': 'Purchase Simulation', 'calc.tab.sell': 'Sales Simulation',
      'calc.weight': 'FFB weight (kg)', 'calc.price.buy': 'Buy price per kg (Rp)',
      'calc.cut': 'Deduction (%)', 'calc.netweight': 'Net weight',
      'calc.pay': 'Total paid to farmer', 'calc.ship': 'Shipped weight (kg)',
      'calc.arrive': 'Received weight (kg)', 'calc.sort': 'Grading deduction (%)',
      'calc.price.sell': 'Sell price per kg (Rp)', 'calc.receive': 'Total received from mill',
      'calc.note': 'Estimate simulation — actual results follow each scale and deduction policy.',
      'gal.eyebrow': 'App screens', 'gal.title': 'See inside the app',
      'gal.1t': 'Analytics Dashboard', 'gal.1d': 'Purchase vs sales trends, margin score, and AI insight.',
      'gal.2t': 'New Transaction', 'gal.2d': 'Record multi-item FFB purchases with per-grade deductions.',
      'gal.3t': 'AI Analytics', 'gal.3d': 'Business consultation, buy-price advice, and grading anomaly detection.',
      'gal.note': 'Screenshots taken from the real app · demo sample data.',
      'vid.eyebrow': 'Demo video', 'vid.title': 'See RamSawit in action',
      'vid.cta': 'Play demo video', 'vid.soon': 'Demo video coming soon',
      'req.eyebrow': 'System requirements', 'req.title': 'Ready for your devices',
      'req.and': 'Android', 'req.win': 'Windows',
      'perm.title': 'App permissions',
      'perm.storage.t': 'Storage', 'perm.storage.d': 'Stores the local database so the app keeps working offline.',
      'perm.net.t': 'Network', 'perm.net.d': 'Syncs data to the cloud and powers AI features when online.',
      'perm.notif.t': 'Notifications', 'perm.notif.d': 'Sync reminders and daily operation summaries (optional).',
      'dl.eyebrow': 'Download', 'dl.title': 'Pick your device version',
      'dl.and': 'Android', 'dl.andmeta': 'v2.5.9 (ARM64) · 27.1 MB', 'dl.new': 'Latest',
      'dl.win': 'Windows', 'dl.winmeta': 'v2.5.4 (x64 Portable) · 15.9 MB', 'dl.win_badge': 'Recommended',
      'dl.andf1': 'AI Analytics Advisor & Agentic Tools', 'dl.andf2': 'Full offline-first', 'dl.andf3': 'Android 8.0 and up (arm64-v8a)',
      'dl.winf1': 'Native desktop app for weighbridges', 'dl.winf2': 'Includes Visual C++ Runtime & SQLite', 'dl.winf3': 'Windows 10 & 11 (64-bit)',
      'dl.btn': 'Download APK ARM64 v2.5.9', 'dl.alt': 'Or download v2.5.4 (Universal APK 68.6 MB)',
      'dl.winbtn': 'Download Windows Package (.ZIP)', 'dl.winalt': 'Or download Portable Version (.ZIP 15.9 MB)',
      'dl.wininfo': 'The installer package automatically sets up Visual C++ runtime and desktop shortcuts.',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Common questions',
      'faq.1q': 'Is RamSawit free?', 'faq.1a': 'Yes. Download and use every feature at no cost, with no transaction limits.',
      'faq.2q': 'Do I need internet?', 'faq.2a': 'Not for daily operations. RamSawit stores data on-device (offline-first) and syncs automatically to the cloud when a connection is available.',
      'faq.3q': 'Is my data safe?', 'faq.3a': 'Data lives in a cloud database with Row Level Security — each user only sees data matching their role. Voided transactions are recorded, never permanently deleted.',
      'faq.4q': 'Which devices are supported?', 'faq.4a': 'Android 8.0 and up and Windows 10/11 (64-bit) are available now.',
      'faq.5q': 'How do I update the app?', 'faq.5a': 'Download the latest version from this page and install over the old one — your local data stays safe and syncs along.',
      'cta.title': 'Ready to tidy up your weighbridge operations?',
      'cta.sub': 'Download now, record your first transaction in minutes.',
      'cta.btn': 'Download RamSawit free',
      'cta.btn_and': 'Download for Android (APK)',
      'cta.btn_win': 'Download Windows Installer',
      'ft.tag': 'Cashier & operations management app for palm oil weighbridges.',
      'ft.pages': 'Pages', 'ft.social': 'Docs & Source', 'ft.contact': 'Developer Contact',
      'ft.rights': 'All rights reserved.',
      'feat.eyebrow': 'App modules', 'feat.title': 'Eight modules, one workflow',
      'feat.sub': 'Each module covers one part of weighbridge operations — connected automatically.',
      'inst.eyebrow': 'Installation Guide', 'inst.title': 'How to Install & Run RamSawit',
      'inst.sub': 'Easy steps to install on Android phone or run on Windows PC.',
      'inst.and_title': 'For Android Mobile (APK)',
      'inst.win_title': 'For Windows PC (64-bit Desktop)',
      'inst.1t': 'Download the APK file', 'inst.1d': 'Tap the download button below. The .apk package (v2.5.4) will be saved to your Downloads folder.',
      'inst.2t': 'Allow unknown sources', 'inst.2d': 'Open Settings → Security → enable “Install unknown apps” for your browser/Chrome. Only needed once.',
      'inst.3t': 'Open & install', 'inst.3d': 'Tap the downloaded APK file, then tap “Install”. Once done, the RamSawit icon appears on your home screen.',
      'inst.note': 'Android tip: if Play Protect shows a warning, choose “Install anyway” — this APK comes straight from the official RamSawit developer.',
      'inst.win1t': 'Download Windows Package', 'inst.win1d': 'Download the RamSawit_V.2.5.4_Windows.zip package (~15.9 MB) bundled with Visual C++ runtime and SQLite engine.',
      'inst.win2t': 'Extract ZIP Archive', 'inst.win2d': 'Right-click the downloaded ZIP file and select Extract All to extract the portable app folder.',
      'inst.win3t': 'Open & Ready to Use', 'inst.win3d': 'Run RamSawit.exe inside the folder. RamSawit starts immediately with no installation required.',
      'inst.win_note': 'Windows tip: if Windows SmartScreen pops up on first launch, click “More info” and select “Run anyway”.',
      'cl.eyebrow': 'Version history', 'cl.title': 'Changelog',
      'cl.sub': 'Taken directly from the app development commit history.',
      'cl.apknote': '',
      'pv.title': 'Privacy Policy', 'pv.sub': 'Last updated: October 2026',
      'tm.title': 'Terms of Use', 'tm.sub': 'Last updated: October 2026',
      'm1.t': 'FFB Transaction Cashier', 'm1.d': 'Dynamic multi-item FFB purchase recording with automated weight deduction.',
      'm1.f1': 'Multi-item: fruit grades, gross weight, deduction %, and price/kg', 'm1.f2': 'Instant net weight calculation & farmer payout total', 'm1.f3': 'Cash / transfer payment methods and scale receipt printing',
      'm2.t': 'Mill Sales', 'm2.d': 'Integrated 2-phase logistics flow from RAM dispatch to mill weigh slip.',
      'm2.f1': 'Phase 1 (RAM Dispatch): destination mill, driver, fleet plate, & shipped weight', 'm2.f2': 'Phase 2 (Mill Slip): received weight, rejected fruit, grading %, & transit loss audit', 'm2.f3': 'Automated net revenue calculation after grading penalty & deductions',
      'm3.t': 'AI Analytics Advisor', 'm3.d': 'Business consultation straight from your operational data.',
      'm3.f1': 'Natural chat Q&A', 'm3.f2': 'Safe buy-price recommendations', 'm3.f3': 'Grading anomaly detection',
      'm4.t': 'Real-time Dashboard', 'm4.d': 'Every key figure auto-computed from the database.',
      'm4.f1': 'Purchase vs sales trend charts', 'm4.f2': 'Margin score & net profit', 'm4.f3': 'Flexible period filters',
      'm5.t': 'Funds & Capital Balance', 'm5.d': 'Track capital used for daily purchases.',
      'm5.f1': 'Balance card & mutation history', 'm5.f2': 'Custom period filters', 'm5.f3': 'Cash position always visible',
      'm6.t': 'Expenses', 'm6.d': 'Record daily operational costs neatly.',
      'm6.f1': 'Fuel, wage, maintenance categories', 'm6.f2': 'Per-period recaps', 'm6.f3': 'Counted into net profit',
      'm7.t': 'Excel & PDF Reports', 'm7.d': 'Print-ready exports for archive & audit.',
      'm7.f1': 'Revenue reports (admin)', 'm7.f2': 'Mill delivery reports', 'm7.f3': 'Excel & PDF formats',
      'm8.t': 'Secure Multi-role', 'm8.d': 'Admin and Cashier with different access rights.',
      'm8.f1': 'Row Level Security in database', 'm8.f2': 'Audit trail on every mutation', 'm8.f3': 'Voided transactions, never deleted',
      'cl.234': 'AGENTS.md update for offline-first architecture and AI analytics',
      'cl.233': 'More responsive mobile UI; AI analytics module updates',
      'cl.232a': 'New AI Analytics module', 'cl.232b': 'Fixed bug where app could not open on Android',
      'cl.224': 'Completed Windows and mobile offline-first migration',
      'cl.223': 'Setup migration from web to full mobile (.apk) and Windows (.exe)',
      'cl.222a': 'Documentation updates', 'cl.222b': 'Fixed report export bug (TooManyPages) and sorting',
      'cl.221': 'Payment type column in purchase transaction table & form',
      'cl.211': 'New other-deduction and grading-deduction columns',
      'cl.204': 'Fixed period filter on delivery report export',
      'cl.202': 'Period filter for fund/capital balance cards and history',
      'cl.201': 'New fund/balance module to monitor purchase capital',
      'cl.191': 'New expense module for operational cost reports',
      'cl.183': 'Fixed mill sales flow; added received-weight field',
      'cl.181': 'Revenue report export for admins only',
      'cl.155': 'Fixed login bug via APK on Android',
      'cl.153': '2-phase delivery sales flow',
      'pv.1t': 'Data we collect', 'pv.1d': 'RamSawit stores the operational data you enter: purchase transactions, seller data, mill deliveries, expenses, and fund balances. Account data (email & role) is stored for authentication.',
      'pv.2t': 'Local & cloud storage', 'pv.2d': 'Data is stored in the on-device database (offline-first) and synced to the cloud when online. The cloud database is protected by Row Level Security — each account only accesses data matching its role.',
      'pv.3t': 'Data we do not collect', 'pv.3d': 'We do not track location, read contacts, or sell data to third parties. The AI feature only processes your operational data to generate insight.',
      'pv.4t': 'Your rights', 'pv.4d': 'You may request an export or deletion of your data at any time via the developer contact. Voided transactions are kept as void records for audit integrity.',
      'tm.1t': 'License', 'tm.1d': 'RamSawit is provided free for palm oil weighbridge operations. Reselling, reverse-engineering, or removing app attribution is prohibited.',
      'tm.2t': 'User responsibility', 'tm.2d': 'You are responsible for the accuracy of entered data (scale weights, prices, deductions). The calculator on this site is an estimate simulation, not official transaction figures.',
      'tm.3t': 'Service availability', 'tm.3d': 'The app runs offline-first; cloud & AI features need internet and may change without notice. We strive to keep the service available.',
      'tm.4t': 'Limitation of liability', 'tm.4d': 'The developer is not liable for losses from data entry errors, scale discrepancies, or third-party disruptions (mills, networks).'
    }
  };

  function lang() { return localStorage.getItem('rs-lang') || 'id'; }
  function applyLang(l) {
    localStorage.setItem('rs-lang', l);
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (I18N[l][k] !== undefined) el.innerHTML = I18N[l][k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (I18N[l][k] !== undefined) el.placeholder = I18N[l][k];
    });
    var btn = document.getElementById('langBtn');
    if (btn) btn.textContent = l === 'id' ? 'EN' : 'ID';
  }

  /* ============ DARK MODE ============ */
  function theme() { return localStorage.getItem('rs-theme') || 'light'; }
  function applyTheme(t) {
    localStorage.setItem('rs-theme', t);
    document.documentElement.setAttribute('data-theme', t);
    var btn = document.getElementById('themeBtn');
    if (btn) {
      if (t === 'dark') {
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
      } else {
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      }
    }
  }

  /* ============ SEARCH ============ */
  var SEARCH_INDEX = [
    { t: { id: 'Beranda', en: 'Home' }, d: { id: 'Halaman utama portal', en: 'Portal main page' }, u: 'index.html' },
    { t: { id: 'Fitur aplikasi', en: 'App features' }, d: { id: '8 modul operasional RamSawit', en: '8 RamSawit operational modules' }, u: 'fitur.html' },
    { t: { id: 'Kalkulator Margin TBS', en: 'FFB Margin Calculator' }, d: { id: 'Simulasi pembelian & penjualan', en: 'Purchase & sales simulation' }, u: 'index.html#kalkulator' },
    { t: { id: 'Panduan Instalasi', en: 'Install Guide' }, d: { id: 'Cara memasang APK di Android', en: 'How to install the APK on Android' }, u: 'instalasi.html' },
    { t: { id: 'Changelog', en: 'Changelog' }, d: { id: 'Riwayat versi aplikasi', en: 'App version history' }, u: 'changelog.html' },
    { t: { id: 'Unduh APK Android', en: 'Download Android APK' }, d: { id: 'RamSawit v2.5.9 (ARM64)', en: 'RamSawit v2.5.9 (ARM64)' }, u: 'index.html#unduh' },
    { t: { id: 'Unduh Aplikasi Windows', en: 'Download Windows App' }, d: { id: 'RamSawit v2.5.4 (ZIP 64-bit)', en: 'RamSawit v2.5.4 (64-bit ZIP)' }, u: 'index.html#unduh' },
    { t: { id: 'Fitur & Tangkapan Layar', en: 'Features & Screenshots' }, d: { id: 'Dashboard, transaksi, AI Analytics', en: 'Dashboard, transactions, AI Analytics' }, u: 'fitur.html' },
    { t: { id: 'Kebijakan Privasi', en: 'Privacy Policy' }, d: { id: 'Perlindungan data pengguna', en: 'User data protection' }, u: 'privasi.html' },
    { t: { id: 'Syarat Penggunaan', en: 'Terms of Use' }, d: { id: 'Ketentuan layanan', en: 'Service terms' }, u: 'syarat.html' },
    { t: { id: 'AI Analytics', en: 'AI Analytics' }, d: { id: 'Asisten AI untuk insight bisnis', en: 'AI assistant for business insight' }, u: 'fitur.html' },
    { t: { id: 'Pertanyaan umum', en: 'FAQ' }, d: { id: 'Jawaban atas pertanyaan umum', en: 'Answers to common questions' }, u: 'index.html#faq' }
  ];
  function initSearch() {
    var input = document.getElementById('searchInput');
    var box = document.getElementById('searchResults');
    if (!input || !box) return;
    var l = lang();
    function render(q) {
      q = q.trim().toLowerCase();
      box.innerHTML = '';
      if (q.length < 2) { box.classList.remove('open'); return; }
      var hits = SEARCH_INDEX.filter(function (it) {
        return (it.t.id + ' ' + it.t.en + ' ' + it.d.id + ' ' + it.d.en).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 7);
      if (!hits.length) { box.classList.remove('open'); return; }
      hits.forEach(function (it) {
        var a = document.createElement('a');
        a.href = it.u;
        a.innerHTML = '<strong>' + it.t[l] + '</strong><small>' + it.d[l] + '</small>';
        box.appendChild(a);
      });
      box.classList.add('open');
    }
    input.addEventListener('input', function () { render(input.value); });
    input.addEventListener('focus', function () { render(input.value); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) box.classList.remove('open');
    });
  }

  /* ============ SYNCHRONIZED DEVICE CAROUSEL ============ */
  function initCarousels() {
    var devicesWrap = document.querySelector('.devices');
    var carouselRoots = document.querySelectorAll('[data-carousel]');
    if (!carouselRoots.length) return;

    var instances = [];
    var maxSlides = 0;

    carouselRoots.forEach(function (root) {
      var imgs = root.querySelectorAll('.screen-carousel img');
      var dotsWrap = root.querySelector('.screen-dots');
      if (!imgs.length) return;
      if (imgs.length > maxSlides) maxSlides = imgs.length;

      if (dotsWrap) dotsWrap.innerHTML = '';

      instances.push({
        root: root,
        imgs: imgs,
        dotsWrap: dotsWrap,
        dots: []
      });
    });

    if (!instances.length || maxSlides === 0) return;

    var currentIdx = 0;
    var timer = null;

    function goToSlide(targetIdx) {
      currentIdx = (targetIdx + maxSlides) % maxSlides;
      instances.forEach(function (inst) {
        var count = inst.imgs.length;
        var activeI = currentIdx % count;
        inst.imgs.forEach(function (im, j) {
          im.classList.toggle('active', j === activeI);
        });
        inst.dots.forEach(function (d, j) {
          d.classList.toggle('active', j === activeI);
        });
      });
    }

    function restartTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () {
        goToSlide(currentIdx + 1);
      }, 4000);
    }

    instances.forEach(function (inst) {
      if (!inst.dotsWrap) return;
      var count = inst.imgs.length;
      for (var i = 0; i < count; i++) {
        (function (slideIndex) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('aria-label', 'Screenshot ' + (slideIndex + 1));
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            goToSlide(slideIndex);
            restartTimer();
          });
          inst.dotsWrap.appendChild(btn);
          inst.dots.push(btn);
        })(i);
      }
    });

    if (devicesWrap) {
      devicesWrap.addEventListener('mouseenter', function () {
        if (timer) clearInterval(timer);
      });
      devicesWrap.addEventListener('mouseleave', restartTimer);
    } else {
      instances.forEach(function (inst) {
        inst.root.addEventListener('mouseenter', function () {
          if (timer) clearInterval(timer);
        });
        inst.root.addEventListener('mouseleave', restartTimer);
      });
    }

    goToSlide(0);
    restartTimer();
  }

  /* ============ COUNT-UP ============ */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ============ SCROLL REVEAL ============ */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      els.forEach(function (el) { io.observe(el); });
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll('[data-count]').forEach(function (el) { cio.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ============ CALCULATOR ============ */
  function fmtRp(n) {
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
  }
  function fmtKg(n) {
    return n.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + ' kg';
  }
  function animNum(el, to, fmt) {
    if (!el) return;
    var from = parseFloat(el.getAttribute('data-val') || '0');
    el.setAttribute('data-val', to);
    var dur = 500, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function num(id) { var el = document.getElementById(id); if (!el) return 0; var v = parseFloat(el.value); return isNaN(v) ? 0 : v; }

  function showToast(msg) {
    var toast = document.getElementById('calcToast');
    if (!toast) return;
    toast.innerHTML = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove('show');
    }, 3200);
  }

  function initCalc() {
    var tabs = document.querySelectorAll('.calc-tab');
    var tabBuy = document.getElementById('tabBuy');
    var tabSell = document.getElementById('tabSell');

    // Tab switcher
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        if (tab.getAttribute('data-tab') === 'tabBuy') {
          if (tabBuy) tabBuy.classList.add('active');
          if (tabSell) tabSell.classList.remove('active');
          calcBuy();
        } else {
          if (tabBuy) tabBuy.classList.remove('active');
          if (tabSell) tabSell.classList.add('active');
          calcSell();
        }
      });
    });

    // Payment Radio button style toggle
    var payTunai = document.getElementById('payTunai');
    var payNonTunai = document.getElementById('payNonTunai');
    var labelPayTunai = document.getElementById('labelPayTunai');
    var labelPayNonTunai = document.getElementById('labelPayNonTunai');

    function updatePaymentStyle() {
      if (payTunai && payTunai.checked) {
        if (labelPayTunai) labelPayTunai.classList.add('active');
        if (labelPayNonTunai) labelPayNonTunai.classList.remove('active');
      } else if (payNonTunai && payNonTunai.checked) {
        if (labelPayTunai) labelPayTunai.classList.remove('active');
        if (labelPayNonTunai) labelPayNonTunai.classList.add('active');
      }
    }
    if (payTunai) payTunai.addEventListener('change', updatePaymentStyle);
    if (payNonTunai) payNonTunai.addEventListener('change', updatePaymentStyle);

    // Dynamic Fruit Rows Management
    var rowsContainer = document.getElementById('calcFruitRowsContainer');
    var btnAddFruitRow = document.getElementById('btnAddFruitRow');
    var btnAddFruitRowText = document.getElementById('btnAddFruitRowText');
    var calcItemCountText = document.getElementById('calcItemCountText');

    var FRUIT_VARIANTS = [
      { code: 'TB', label: 'Tandan Besar (Buah Besar)' },
      { code: 'TK', label: 'Tandan Kecil (Buah Kecil)' },
      { code: 'BR', label: 'Berondolan (Brondolan)' }
    ];

    function calcBuy() {
      if (!rowsContainer) return;
      var rows = rowsContainer.querySelectorAll('.calc-fruit-row');
      var totalGross = 0;
      var totalCutWeight = 0;
      var totalNet = 0;
      var grandTotal = 0;

      rows.forEach(function (row) {
        var wInput = row.querySelector('.calc-fruit-weight');
        var cInput = row.querySelector('.calc-fruit-cut');
        var pInput = row.querySelector('.calc-fruit-price');

        var w = parseFloat(wInput ? wInput.value : 0) || 0;
        var c = parseFloat(cInput ? cInput.value : 0) || 0;
        var p = parseFloat(pInput ? pInput.value : 0) || 0;

        var cutWeight = w * (c / 100);
        var netWeight = Math.max(0, w - cutWeight);
        var sub = Math.round(netWeight * p);

        totalGross += w;
        totalCutWeight += cutWeight;
        totalNet += netWeight;
        grandTotal += sub;
      });

      var elGross = document.getElementById('buyTotalGross');
      var elCutWeight = document.getElementById('buyTotalCutWeight');
      var elNet = document.getElementById('buyNet');
      var elTotal = document.getElementById('buyTotal');

      if (elGross) elGross.textContent = totalGross > 0 ? (totalGross.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' kg') : '0 kg';
      if (elCutWeight) elCutWeight.textContent = totalCutWeight > 0 ? (totalCutWeight.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' kg') : '0 kg';
      if (elNet) elNet.textContent = totalNet > 0 ? (totalNet.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' kg') : '0 kg';
      if (elTotal) elTotal.textContent = grandTotal > 0 ? ('Rp ' + grandTotal.toLocaleString('id-ID')) : 'Rp 0';
    }

    function updateRowUIState() {
      if (!rowsContainer) return;
      var rows = rowsContainer.querySelectorAll('.calc-fruit-row');
      var count = rows.length;

      // Update count text
      if (calcItemCountText) {
        calcItemCountText.textContent = count + ' Jenis Buah Aktif';
      }

      // Update delete buttons visibility: hanya muncul jika lebih dari 1 baris
      rows.forEach(function (row) {
        var delBtn = row.querySelector('.calc-fruit-del-btn');
        if (delBtn) {
          delBtn.style.display = (count > 1) ? 'inline-flex' : 'none';
        }
      });

      // Update Add Button status (Max 3 rows for sawit standards)
      if (btnAddFruitRow) {
        if (count >= 3) {
          btnAddFruitRow.disabled = true;
          if (btnAddFruitRowText) btnAddFruitRowText.textContent = 'Maksimal 3 Jenis Buah';
          btnAddFruitRow.style.opacity = '0.5';
          btnAddFruitRow.style.cursor = 'not-allowed';
        } else {
          btnAddFruitRow.disabled = false;
          if (btnAddFruitRowText) btnAddFruitRowText.textContent = 'Tambah Baris Buah';
          btnAddFruitRow.style.opacity = '1';
          btnAddFruitRow.style.cursor = 'pointer';
        }
      }
    }

    function attachRowEvents(row) {
      var inputs = row.querySelectorAll('input, select');
      inputs.forEach(function (inp) {
        inp.addEventListener('input', calcBuy);
        inp.addEventListener('change', calcBuy);
      });

      var delBtn = row.querySelector('.calc-fruit-del-btn');
      if (delBtn) {
        delBtn.addEventListener('click', function () {
          var rows = rowsContainer.querySelectorAll('.calc-fruit-row');
          if (rows.length > 1) {
            row.remove();
            updateRowUIState();
            calcBuy();
          }
        });
      }
    }

    // Attach events to existing initial row
    if (rowsContainer) {
      var initialRows = rowsContainer.querySelectorAll('.calc-fruit-row');
      initialRows.forEach(attachRowEvents);
      updateRowUIState();
    }

    // Add Fruit Row Handler
    var rowCounter = 2;
    if (btnAddFruitRow) {
      btnAddFruitRow.addEventListener('click', function () {
        var currentRows = rowsContainer.querySelectorAll('.calc-fruit-row');
        if (currentRows.length >= 3) return;

        // Cari varian yang belum dipilih di baris-baris sebelumnya
        var chosenTypes = [];
        currentRows.forEach(function (r) {
          var sel = r.querySelector('.calc-fruit-type');
          if (sel && sel.value) chosenTypes.push(sel.value);
        });

        var suggestedCode = '';
        for (var i = 0; i < FRUIT_VARIANTS.length; i++) {
          if (chosenTypes.indexOf(FRUIT_VARIANTS[i].code) === -1) {
            suggestedCode = FRUIT_VARIANTS[i].code;
            break;
          }
        }
        if (!suggestedCode) suggestedCode = 'TK'; // default fallback

        var newRow = document.createElement('div');
        newRow.className = 'calc-fruit-row';
        newRow.setAttribute('data-row-id', rowCounter++);

        var optionsHtml = '<option value="" disabled>Pilih Jenis Buah...</option>';
        FRUIT_VARIANTS.forEach(function (v) {
          var selAttr = (v.code === suggestedCode) ? ' selected' : '';
          optionsHtml += '<option value="' + v.code + '"' + selAttr + '>' + v.label + '</option>';
        });

        newRow.innerHTML = [
          '<div class="calc-fruit-cell-type">',
          '  <label class="calc-fruit-mobile-label">Jenis Mutu Buah *</label>',
          '  <select class="calc-fruit-type calc-input-compact">' + optionsHtml + '</select>',
          '</div>',
          '<div class="calc-fruit-cell-weight">',
          '  <label class="calc-fruit-mobile-label">Berat Kotor (kg) *</label>',
          '  <input type="number" class="calc-fruit-weight calc-input-compact" placeholder="0" min="0" step="any" />',
          '</div>',
          '<div class="calc-fruit-cell-cut">',
          '  <label class="calc-fruit-mobile-label">Sortasi (%)</label>',
          '  <input type="number" class="calc-fruit-cut calc-input-compact" placeholder="0" min="0" max="100" step="0.1" />',
          '</div>',
          '<div class="calc-fruit-cell-price">',
          '  <label class="calc-fruit-mobile-label">Harga / kg (Rp) *</label>',
          '  <input type="number" class="calc-fruit-price calc-input-compact" placeholder="0" min="0" step="any" />',
          '</div>',
          '<div class="calc-fruit-cell-del" style="text-align:center;">',
          '  <button type="button" class="calc-fruit-del-btn" title="Hapus baris ini">',
          '    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
          '  </button>',
          '</div>'
        ].join('');

        rowsContainer.appendChild(newRow);
        attachRowEvents(newRow);
        updateRowUIState();
        calcBuy();
      });
    }

    // Tab Sell inputs (Simulasi Penjualan Pabrik Mandiri Sesuai Model PengirimanPabrik)
    var sellShip = document.getElementById('sellShip');
    var sellArrive = document.getElementById('sellArrive');
    var sellReject = document.getElementById('sellReject');
    var sellSort = document.getElementById('sellSort');
    var sellPrice = document.getElementById('sellPrice');
    var sellSortPerKg = document.getElementById('sellSortPerKg');
    var sellOtherDeduction = document.getElementById('sellOtherDeduction');

    function calcSell() {
      var ship = parseFloat(sellShip ? sellShip.value : 0) || 0;
      var arrive = parseFloat(sellArrive ? sellArrive.value : 0) || 0;
      var reject = parseFloat(sellReject ? sellReject.value : 0) || 0;
      var sort = parseFloat(sellSort ? sellSort.value : 0) || 0;
      var price = parseFloat(sellPrice ? sellPrice.value : 0) || 0;
      var sortPerKg = parseFloat(sellSortPerKg ? sellSortPerKg.value : 0) || 0;
      var otherDeduction = parseFloat(sellOtherDeduction ? sellOtherDeduction.value : 0) || 0;

      // 1. Susut Pengiriman = Berat Dikirim - Berat Sampai (hanya jika ada data timbangan)
      var shrink = 0;
      if (ship > 0 && arrive > 0) {
        shrink = Math.max(0, ship - arrive);
      }

      // 2. Berat Diterima Pabrik = Berat Sampai - Berat Ditolak (afkir)
      var accepted = Math.max(0, arrive - reject);

      // 3. Berat Bersih = Berat Diterima * (1 - Potongan% / 100)
      var net = accepted > 0 ? (accepted * (100 - sort) / 100) : 0;
      net = Math.max(0, net);

      // 4. Nilai Potongan Sortasi per kg (Rp) = sortPerKg * Berat Sampai
      var valSortPerKg = sortPerKg * arrive;

      // 5. Total Nilai Dasar = Harga Jual x Berat Bersih
      var baseTotal = net * price;

      // 6. Total Nilai Jual Bersih = Dasar - Potongan Lainnya - Potongan Sortasi Rp/kg
      var total = Math.max(0, Math.round(baseTotal - otherDeduction - valSortPerKg));

      // 7. Total Potongan Biaya (Nilai pemotongan biaya tetap & tarif sortasi)
      var totalCutRp = Math.round(otherDeduction + valSortPerKg);

      var elShrink = document.getElementById('sellShrink');
      var elNet = document.getElementById('sellNet');
      var elTotalDeduction = document.getElementById('sellTotalDeduction');
      var elTotalSell = document.getElementById('sellTotal');

      if (elShrink) elShrink.textContent = shrink > 0 ? (shrink.toLocaleString('id-ID') + ' kg') : '0 kg';
      if (elNet) elNet.textContent = net > 0 ? (net.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' kg') : '0 kg';
      if (elTotalDeduction) elTotalDeduction.textContent = totalCutRp > 0 ? ('Rp ' + totalCutRp.toLocaleString('id-ID')) : 'Rp 0';
      if (elTotalSell) elTotalSell.textContent = total > 0 ? ('Rp ' + total.toLocaleString('id-ID')) : 'Rp 0';
    }

    [sellShip, sellArrive, sellReject, sellSort, sellPrice, sellSortPerKg, sellOtherDeduction].forEach(function (inp) {
      if (inp) {
        inp.addEventListener('input', calcSell);
        inp.addEventListener('change', calcSell);
      }
    });

    // Perhitungan awal (Akan menghasilkan 0 karena tidak ada dummy data)
    calcBuy();
    calcSell();
  }

  /* ============ MOBILE NAV ============ */
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }
    // active link
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });
  }

  /* ============ VIDEO DEMO ============ */
  function initVideoDemo() {
    var trigger = document.getElementById('videoPlayTrigger') || document.getElementById('videoDemoBox');
    var previewLayer = document.getElementById('videoPreviewLayer');
    var player = document.getElementById('localVideoPlayer');
    var ytContainer = document.getElementById('youtubeEmbedContainer');

    var youtubeVideoId = window.YOUTUBE_DEMO_ID || '';

    if (trigger && player) {
      trigger.addEventListener('click', function () {
        if (youtubeVideoId && ytContainer) {
          if (previewLayer) previewLayer.style.display = 'none';
          ytContainer.style.display = 'block';
          ytContainer.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + encodeURIComponent(youtubeVideoId) + '?autoplay=1&rel=0" title="Demo Video RamSawit Enterprise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border:none; width:100%; height:100%; border-radius:inherit;"></iframe>';
        } else {
          if (previewLayer) previewLayer.style.display = 'none';
          player.style.display = 'block';
          player.play().catch(function (e) {
            console.log('Video playback error / autoplay policy:', e);
          });
        }
      });
    }
  }

  /* ============ INIT ============ */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(theme());
    applyLang(lang());
    var tb = document.getElementById('themeBtn');
    if (tb) tb.addEventListener('click', function () { applyTheme(theme() === 'dark' ? 'light' : 'dark'); });
    var lb = document.getElementById('langBtn');
    if (lb) lb.addEventListener('click', function () { applyLang(lang() === 'id' ? 'en' : 'id'); initSearch(); });
    initNav(); initSearch(); initCarousels(); initReveal(); initCalc(); initVideoDemo();
    window.scrollTo(0, 0);
  });
  // Lightbox for module previews
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.setAttribute('aria-label', 'Tutup pratinjau');
  closeBtn.innerHTML = '&times;';
  const modalImg = document.createElement('img');
  modal.appendChild(closeBtn);
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  document.querySelectorAll('.mod-preview img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });
})();

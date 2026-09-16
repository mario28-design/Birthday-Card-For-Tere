# 🎉 Kartu Ulang Tahun Digital — Versi Animasi

Website kartu ulang tahun interaktif dengan custom animation.

## Fitur animasi

1. Opening aurora + orbit hadiah
2. Transisi antar halaman
3. Confetti saat kejutan dibuka
4. Foto utama floating + rotating rings
5. Glow text
6. Efek typewriter pada surat
7. Paper shine pada surat
8. Floating particles di background
9. Tombol magnetic
10. Galeri dengan efek 3D hover
11. Lightbox foto fullscreen
12. Heartbeat pada halaman terakhir
13. Animated rays
14. Tombol musik dengan pulse
15. Responsive untuk HP

## Kustomisasi

Edit `script.js`:

```js
const CONFIG = {
  friendName: "Nama Teman",
  senderName: "Nama Kamu",
  shortMessage: "Ucapan singkat...",
  letter: `Isi surat...`,
  typingSpeed: 22,
  musicEnabled: true,
  particles: 45
};
```

## File foto

Masukkan:

```text
assets/foto-teman.jpg
assets/kenangan-1.jpg
assets/kenangan-2.jpg
assets/kenangan-3.jpg
assets/kenangan-4.jpg
assets/musik.mp3
```

## Publikasi

Upload semua file ke GitHub, aktifkan GitHub Pages, kemudian gunakan URL Pages sebagai tujuan QR Code.

Contoh:

```text
https://USERNAME.github.io/birthday-card/
```

## Catatan musik

Browser modern umumnya membatasi autoplay. Proyek mencoba memutar musik setelah tombol kejutan ditekan. Pastikan Anda memiliki hak untuk menggunakan file musik jika website dipublikasikan.

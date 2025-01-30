# Latihan Nested If: Sistem Penilaian Nilai dan Keaktifan Siswa

## Soal:
Sekolah ingin memberikan penghargaan kepada siswa berdasarkan nilai ujian dan keaktifan di kelas.

```javascript
// Diberikan variabel
var namaSiswa = "Dina"; // string
var nilaiUjian = 85; // number (0-100)
var jumlahHadir = 14; // number (dalam 16 pertemuan)
var ikutEkskul = true; // boolean (true/false)

// Aturan Penilaian:
// 1. Jika nilai ujian >= 85:
//    - Jika jumlah hadir >= 14: mendapat nilai A
//    - Jika jumlah hadir >= 11: mendapat nilai B
//    - Jika jumlah hadir < 11: mendapat nilai C

// 2. Jika nilai ujian >= 70:
//    - Jika jumlah hadir >= 14: mendapat nilai B
//    - Jika jumlah hadir >= 11: mendapat nilai C
//    - Jika jumlah hadir < 11: mendapat nilai D

// 3. Bonus:
//    - Jika ikutEkskul true: tambah 5 poin ke nilai akhir

// Tampilkan nama siswa, nilai (huruf), dan total nilai!
```

### Contoh Test Case:
```javascript
// Test Case 1
var namaSiswa = "Dina";
var nilaiUjian = 85;
var jumlahHadir = 14;
var ikutEkskul = true;

/*
Proses:
- Nilai 85 masuk kategori pertama (>= 85)
- Hadir 14 kali masuk kategori tertinggi (>= 14)
- Mendapat nilai A
- ikutEkskul true, tambah 5 poin
- Total nilai = 90
*/

// Output yang diharapkan:
// "Siswa Dina mendapat nilai A dengan total nilai 90"


// Test Case 2
var namaSiswa = "Beni";
var nilaiUjian = 75;
var jumlahHadir = 12;
var ikutEkskul = false;

/*
Proses:
- Nilai 75 masuk kategori kedua (>= 70)
- Hadir 12 kali masuk kategori tengah (>= 11)
- Mendapat nilai C
- ikutEkskul false, tidak dapat tambahan
- Total nilai = 75
*/

// Output yang diharapkan:
// "Siswa Beni mendapat nilai C dengan total nilai 75"
```

Gunakan operator-operator ini dalam penyelesaian:
- Perbandingan: `<`, `>`, `<=`, `>=`
- Equality: `===` (untuk boolean cukup menggunakan if(ikutEkskul))
- Operasi matematika: `+`

Tugas Anda:
1. Buatlah pengecekan kondisi menggunakan if/else
2. Tentukan nilai huruf yang didapat
3. Hitung total nilai setelah bonus (jika ada)
4. Tampilkan hasilnya dengan console.log

Hint:
- Mulai dengan mengecek nilai ujian
- Lalu cek jumlah kehadiran
- Terakhir cek keikutsertaan ekskul menggunakan if(ikutEkskul)

Tips Belajar:
1. Perhatikan bagaimana nilai dikelompokkan (>=85 dan >=70)
2. Lihat bagaimana kehadiran mempengaruhi nilai akhir
3. Bonus poin sebagai penghargaan keaktifan
4. Sistem ini mengajarkan bahwa hasil akhir tidak hanya dari nilai ujian
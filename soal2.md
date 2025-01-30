# Latihan Nested If: Sistem Penilaian Siswa

## Soal:
Sekolah ingin memberikan penghargaan kepada siswa berdasarkan nilai ujian dan keaktifan di kelas.

```javascript
// Diberikan variabel
var namaSiswa = "Dina"; // string
var nilaiUjian = 85; // number (0-100)
var jumlahHadir = 14; // number (dalam 16 pertemuan)
var ikutEkskul = true; // boolean (true/false)

// Aturan Penilaian:
// 1. Jika nilai ujian sama dengan atau lebih dari 85:
//    - Jika hadir 14 kali atau lebih: mendapat nilai A
//    - Jika hadir 11 kali atau lebih: mendapat nilai B
//    - Jika hadir kurang dari 11: mendapat nilai C

// 2. Jika nilai ujian sama dengan atau lebih dari 70:
//    - Jika hadir 14 kali atau lebih: mendapat nilai B
//    - Jika hadir 11 kali atau lebih: mendapat nilai C
//    - Jika hadir kurang dari 11: mendapat nilai D

// 3. Bonus:
//    - Jika ikutEkskul bernilai true: tambah 5 poin ke nilai akhir

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
- Nilai 85 termasuk kategori pertama (85 atau lebih)
- Hadir 14 kali termasuk kategori tertinggi (14 kali atau lebih)
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
- Nilai 75 termasuk kategori kedua (70 atau lebih)
- Hadir 12 kali termasuk kategori tengah (11 kali atau lebih)
- Mendapat nilai C
- ikutEkskul false, tidak dapat tambahan
- Total nilai = 75
*/

// Output yang diharapkan:
// "Siswa Beni mendapat nilai C dengan total nilai 75"
```

Tugas Anda:
1. Buatlah pengecekan kondisi menggunakan if/else
2. Tentukan nilai huruf yang didapat
3. Hitung total nilai setelah bonus (jika ada)
4. Tampilkan hasilnya dengan console.log

Hint:
- Mulai dengan mengecek apakah nilai ujian memenuhi kategori tertinggi atau tidak
- Lalu cek berapa kali siswa hadir
- Terakhir cek apakah siswa ikut ekskul 
- Gunakan operator perbandingan yang sesuai
- Perhatikan cara penulisan kondisi boolean

Tips Belajar:
1. Perhatikan bagaimana nilai dikelompokkan (kategori nilai tinggi dan sedang)
2. Lihat bagaimana kehadiran mempengaruhi nilai akhir
3. Bonus poin sebagai penghargaan keaktifan
4. Sistem ini mengajarkan bahwa hasil akhir tidak hanya dari nilai ujian
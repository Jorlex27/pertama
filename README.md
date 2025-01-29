# Latihan Nested If dengan Operator Perbandingan

## Soal: 
Toko mainan memberikan diskon untuk pembelian mainan berdasarkan usia anak dan total belanja.

```javascript
// Diberikan variabel
var namaPembeli = "Budi"; // string
var umurAnak = 7; // number
var totalBelanja = 50000; // number
var membawaPermen = true; // boolean (true/false)

// Aturan:
// 1. Jika umur anak kurang dari 5 tahun:
//    - Total belanja lebih dari 50000: dapat diskon 20%
//    - Total belanja kurang dari 50000: dapat diskon 10%

// 2. Jika umur anak 5 sampai 10 tahun:
//    - Total belanja lebih dari 100000: dapat diskon 25%
//    - Total belanja kurang dari 100000: dapat diskon 15%

// 3. Bonus:
//    - Jika membawaPermen true dapat tambahan diskon 5000

// Tampilkan total yang harus dibayar setelah diskon!
```

### Contoh Test Case:
```javascript
// Test Case 1
var namaPembeli = "Budi";
var umurAnak = 7;
var totalBelanja = 50000;
var membawaPermen = true;

/*
Proses:
- Umur 7 tahun masuk kategori 5-10 tahun
- Belanja 50000 dapat diskon 15% (7500)
- membawaPermen true dapat tambahan diskon 5000
- Total diskon = 12500
- Yang harus dibayar = 37500
*/

// Output yang diharapkan:
// "Halo Budi, total belanja anda Rp 37500"


// Test Case 2
var namaPembeli = "Ani";
var umurAnak = 4;
var totalBelanja = 100000;
var membawaPermen = false;

/*
Proses:
- Umur 4 tahun masuk kategori dibawah 5 tahun
- Belanja 100000 dapat diskon 20% (20000)
- membawaPermen false tidak dapat diskon tambahan
- Total diskon = 20000
- Yang harus dibayar = 80000
*/

// Output yang diharapkan:
// "Halo Ani, total belanja anda Rp 80000"
```

Gunakan operator-operator ini dalam penyelesaian:
- Perbandingan: `<`, `>`, `<=`, `>=`
- Equality: `===` (untuk boolean cukup menggunakan if(membawaPermen) )
- Operasi matematika: `*`, `-`, `+`

Tugas Anda:
1. Buatlah pengecekan kondisi menggunakan if/else
2. Hitung total diskon yang didapat
3. Hitung total yang harus dibayar
4. Tampilkan hasilnya dengan console.log

Hint: 
- Mulai dengan mengecek umur anak
- Lalu cek total belanja
- Terakhir cek bonus permen menggunakan if(membawaPermen)
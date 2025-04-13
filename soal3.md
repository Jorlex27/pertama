# Latihan Nested If: Sistem Belanja Online

## Soal:
Sebuah toko online ingin membuat sistem diskon untuk pelanggan berdasarkan total belanja, status member, dan metode pembayaran.

```javascript
// Diberikan variabel
var namaPembeli = "Clara"; // string
var totalBelanja = 750000; // number
var statusMember = true; // boolean (true/false)
var metodeBayar = "transfer"; // string ("transfer", "cod", "kredit")
var jarakRumah = 5; // number (dalam KM)

// Aturan Diskon:
// 1. Jika total belanja sama dengan atau lebih dari 1000000:
//    - Member: dapat diskon 20% + gratis ongkir
//    - Non-member: dapat diskon 10% + gratis ongkir

// 2. Jika total belanja sama dengan atau lebih dari 500000:
//    - Member: dapat diskon 15% + ongkir 10000
//    - Non-member: dapat diskon 5% + ongkir 15000

// 3. Jika total belanja kurang dari 500000:
//    - Member: dapat diskon 10% + ongkir 15000
//    - Non-member: tidak dapat diskon + ongkir 20000

// 4. Tambahan berdasarkan metode pembayaran:
//    - Transfer: cashback 5% dari total setelah diskon
//    - COD: tambahan ongkir 5000
//    - Kredit: tambahan biaya admin 3% dari total setelah diskon

// 5. Jika jarak rumah lebih dari 10 KM:
//    - Tambahan ongkir 10000 per KM setelah KM ke-10

// Tampilkan:
// - Total diskon yang didapat
// - Ongkir yang harus dibayar
// - Total yang harus dibayar (sudah termasuk diskon, ongkir, dan biaya tambahan)
```

### Contoh Test Case:
```javascript
// Test Case 1
var namaPembeli = "Clara";
var totalBelanja = 750000;
var statusMember = true;
var metodeBayar = "transfer";
var jarakRumah = 5;

/*
Proses:
1. Total belanja 750000 masuk kategori kedua (500000 atau lebih)
2. Status member true:
   - Dapat diskon 15% = 112500
   - Ongkir dasar = 10000
3. Metode bayar transfer:
   - Total setelah diskon = 637500
   - Dapat cashback 5% = 31875
4. Jarak 5 KM tidak kena tambahan ongkir
*/

// Output yang diharapkan:
// "Pelanggan Clara
//  Total diskon: Rp 112500
//  Total ongkir: Rp 10000
//  Total bayar: Rp 615625"


// Test Case 2
var namaPembeli = "Budi";
var totalBelanja = 450000;
var statusMember = false;
var metodeBayar = "cod";
var jarakRumah = 12;

/*
Proses:
1. Total belanja 450000 masuk kategori ketiga (kurang dari 500000)
2. Status member false:
   - Tidak dapat diskon
   - Ongkir dasar = 20000
3. Metode bayar cod:
   - Tambahan ongkir 5000
4. Jarak 12 KM:
   - Tambahan ongkir = (12-10) x 10000 = 20000
*/

// Output yang diharapkan:
// "Pelanggan Budi
//  Total diskon: Rp 0
//  Total ongkir: Rp 45000
//  Total bayar: Rp 495000"
```

Tips Pengerjaan:
1. Mulai dengan mengecek total belanja untuk menentukan kategori diskon
2. Cek status member untuk menentukan persentase diskon
3. Hitung ongkir dasar sesuai kategori
4. Tambahkan biaya berdasarkan metode pembayaran
5. Terakhir, cek jarak rumah untuk tambahan ongkir
6. Perhatikan urutan perhitungan: diskon dulu, baru tambahan biaya

Konsep yang dipelajari:
1. Nested if untuk berbagai kondisi
2. Perhitungan persentase dan diskon
3. Penanganan berbagai tipe data
4. Logika bisnis yang kompleks
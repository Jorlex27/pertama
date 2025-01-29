# Latihan If-Else dengan Tipe Data Sederhana

## Soal: Sistem Warung Makan

Buatlah program untuk menghitung harga makanan di warung.

```javascript
// Diberikan variable:
var namaPembeli; // string
var jenisMakanan; // string ("nasi goreng" atau "mie goreng")
var isPakai_telur; // boolean (true/false)

// Aturan:
// 1. Nama pembeli tidak boleh kosong
// 2. Harga makanan:
//    - Nasi goreng: Rp 10000
//    - Mie goreng: Rp 8000
// 3. Jika pakai telur, tambah Rp 3000
```

### Contoh Test Case:

```javascript
// Test Case 1: Nama Kosong
var namaPembeli = "";
var jenisMakanan = "nasi goreng";
var isPakai_telur = true;
// output: "Mohon maaf, nama pembeli tidak boleh kosong"

// Test Case 2: Nasi Goreng + Telur
var namaPembeli = "Budi";
var jenisMakanan = "nasi goreng";
var isPakai_telur = true;
// output: "Halo Budi, total harga nasi goreng telur adalah Rp 13000"

// Test Case 3: Mie Goreng Tanpa Telur
var namaPembeli = "Ani";
var jenisMakanan = "mie goreng";
var isPakai_telur = false;
// output: "Halo Ani, total harga mie goreng adalah Rp 8000"
```
# Latihan If-Else dan Nested If

## Langkah 1: Latihan If-Else Dasar

### Soal: Sistem Parkir Sederhana
Buatlah program untuk menentukan biaya parkir berdasarkan jenis kendaraan.

```javascript
// Diberikan variable:
var jenisKendaraan; // "motor" atau "mobil"

// Aturan biaya parkir:
// - Jika motor: Rp 2000
// - Jika mobil: Rp 5000
```

Contoh Test Case:
```javascript
// Test Case 1
var jenisKendaraan = "motor";
// output: "Biaya parkir: Rp 2000"

// Test Case 2
var jenisKendaraan = "mobil";
// output: "Biaya parkir: Rp 5000"
```


## Langkah 2: Latihan Nested If (Dimodifikasi)

### Soal: Sistem Bioskop
Buatlah program untuk mengecek apakah seseorang boleh menonton film berdasarkan umur dan status pendampingan.

```javascript
// Diberikan variable:
var umur; // angka
var statusPendampingan; // "didampingi" atau "tidak didampingi"

// Aturan:
// - Jika umur di atas 13 tahun: Boleh nonton
// - Jika umur 13 tahun ke bawah:
//   * Jika statusPendampingan "didampingi": Boleh nonton
//   * Jika statusPendampingan "tidak didampingi": Tidak boleh nonton
```

Contoh Test Case:
```javascript
// Test Case 1
var umur = 15;
var statusPendampingan = "tidak didampingi";
// output: "Silakan masuk, selamat menonton!"

// Test Case 2
var umur = 12;
var statusPendampingan = "didampingi";
// output: "Silakan masuk, selamat menonton!"

// Test Case 3
var umur = 12;
var statusPendampingan = "tidak didampingi";
// output: "Maaf, tidak boleh nonton karena harus didampingi!"
```
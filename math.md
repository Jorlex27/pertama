1. Pembulatan Angka:
```javascript
// Math.round() - pembulatan ke bilangan bulat terdekat
console.log(Math.round(4.6));  // Output: 5
console.log(Math.round(4.4));  // Output: 4

// Math.floor() - pembulatan ke bawah
console.log(Math.floor(4.9));  // Output: 4

// Math.ceil() - pembulatan ke atas
console.log(Math.ceil(4.1));   // Output: 5
```

2. Mencari Nilai Minimum dan Maksimum:
```javascript
// Math.min() - mencari nilai terendah
console.log(Math.min(5, 10, 3, 8, 1));  // Output: 1

// Math.max() - mencari nilai tertinggi
console.log(Math.max(5, 10, 3, 8, 1));  // Output: 10
```

3. Fungsi Matematika Dasar:
```javascript
// Math.abs() - nilai absolut
console.log(Math.abs(-5));     // Output: 5

// Math.sqrt() - akar kuadrat
console.log(Math.sqrt(16));    // Output: 4

// Math.pow() - perpangkatan
console.log(Math.pow(2, 3));   // Output: 8 (2³)
```

4. Fungsi Trigonometri:
```javascript
// Math.sin() - sinus (dalam radian)
console.log(Math.sin(Math.PI / 2));  // Output: 1

// Math.cos() - cosinus
console.log(Math.cos(0));           // Output: 1

// Math.tan() - tangen
console.log(Math.tan(Math.PI / 4)); // Output: ~1
```

5. Menghasilkan Angka Acak:
```javascript
// Math.random() - menghasilkan angka acak antara 0 dan 1
console.log(Math.random());  // Output: angka acak antara 0-1

// Menghasilkan angka acak dalam rentang tertentu (misalnya 1-10)
console.log(Math.floor(Math.random() * 10) + 1);
```

6. Konstanta Matematika:
```javascript
// Math.PI - nilai pi
console.log(Math.PI);  // Output: 3.141592653589793

// Math.E - nilai euler
console.log(Math.E);   // Output: 2.718281828459045
```

Contoh Penggunaan Praktis:
```javascript
// Menghitung luas lingkaran
function hitungLuasLingkaran(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(hitungLuasLingkaran(5));  // Output: ~78.54

// Menghasilkan angka acak antara min dan max
function acakAntara(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(acakAntara(1, 100));  // Output: angka acak antara 1-100
```
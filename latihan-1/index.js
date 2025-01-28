/*
Your pseudocode here
STORE name WITH ANY VALUE
STORE role AS "member baru"
STORE birthMonth AS "Januari"

IF name EQUALS TO "" THEN
    DISPLAY "Nama tidak boleh kosong!"
ELSE
    IF role EQUALS TO "member baru" THEN
        IF birthMonth EQUALS TO "Januari" THEN
            DISPLAY "Selamat %name%! Anda berhak mendapatkan voucher diskon sebesar 50%!"
        ELSE
            DISPLAY "Maaf %name%, voucher diskon hanya untuk yang lahir di bulan Januari."
        END IF
    ELSE IF role EQUALS TO "member lama" THEN
        IF birthMonth EQUALS TO "Januari" THEN
            DISPLAY "Selamat %name%! Anda berhak mendapatkan voucher diskon sebesar 30%!"
        ELSE
            DISPLAY "Maaf %name%, voucher diskon hanya untuk yang lahir di bulan Januari."
        END IF
    ELSE
        DISPLAY "Selamat datang di Bikilipik, %name%. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu."
    END IF
END IF

*/

var name = "Joko";
var role = "member baru";
var birthMonth = "Januari";
//  your code here

if (name){
    if (role === "member baru"){
        if (birthMonth === "Januari"){
            console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`)
        }else {
            console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`)
        }
    }else if (role === "member lama"){
        if (birthMonth === "Januari"){
            console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`)
        }else {
            console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`)
        }
    } else {
        console.log(`Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`)
    }
} else {
    console.log("Nama tidak boleh kosong!")
}
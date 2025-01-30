var umur = 15;
var statusPendampingan = "tidak didampingi";
var name = ""


if (name === "") {
    console.log("Mohon maaf, nama pembeli tidak boleh kosong");
} else {
    if (umur < 10) {
        console.log(`Halo ${name}, umur anda ${umur} tahun, status pendampingan ${statusPendampingan} dan anda tidak boleh makan lagi`);
    } else {
        console.log(`Halo ${name}, umur anda ${umur} tahun, status pendampingan ${statusPendampingan} dan anda boleh makan lagi`);
    }
}

if (name !== "") {
    if (umur < 10) {
        console.log(`Halo ${name}, umur anda ${umur} tahun, status pendampingan ${statusPendampingan} dan anda tidak boleh makan lagi`);
    } else {
        console.log(`Halo ${name}, umur anda ${umur} tahun, status pendampingan ${statusPendampingan} dan anda boleh makan lagi`);
    }
} else {
    console.log("Mohon maaf, nama pembeli tidak boleh kosong");
}


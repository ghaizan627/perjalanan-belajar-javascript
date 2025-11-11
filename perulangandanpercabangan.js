let nomorAngkot = 1;
let jumlahAngkot = 10;

for (nomorAngkot; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  if (nomorAngkot <= 6) {
    console.log("Angkot", nomorAngkot, "sedang beroperasi");
  } else if (nomorAngkot == 8) {
    console.log("Angkot", nomorAngkot, "sedang lembur");
  } else {
    console.log("Angkot", nomorAngkot, "Sedang tidak beroperasi");
  }
}

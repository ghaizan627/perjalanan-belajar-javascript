// declaration
function penjumlahanDuaBilangan(bilanganPertama, bilnganKedua) {
  const total = bilanganPertama + bilnganKedua;
  return total;
}

// console.log(penjumlahanDuaBilangan(1, 2));
function kelilingPersegi(sisi) {
  const result = 4 * sisi;
  return result;
}

// console.log(kelilingPersegi(4));
function volumeKubus(sisi) {
  const result = sisi ** 3;
  return result;
}

function jumlahDuaVolumeKubus(kubusPertama, kubusKedua) {
  const result = kubusPertama + kubusKedua;
  return result;
}

const kubus1 = volumeKubus(8, 8, 8);
const kubus2 = volumeKubus(4, 4, 4);
const jumlah = jumlahDuaVolumeKubus(kubus1, kubus2);
console.log(jumlah);

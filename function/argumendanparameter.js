function penjumlahan() {
  let hasil = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}
function pengurangan() {
  let hasil = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    hasil -= arguments[i];
  }
  return hasil;
}
function perkalian() {
  let hasil = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    hasil *= arguments[i];
  }
  return hasil;
}
function pembagian() {
  let hasil = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    hasil /= arguments[i];
  }
  return hasil;
}
// let tes = penjumlahan(1, 2, 3, 4, 5);
// console.log(tes);
// {
//   let tes = pengurangan(1, 2, 3, 4, 5);
//   console.log(tes);
// }
// {
//   let tes = perkalian(1, 2, 3, 4, 5);
//   console.log(tes);
// }
// {
//   let tes = pembagian(30, 5, 2);
//   console.log(tes);
// }

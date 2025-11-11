// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

function tampilAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return tampilAngka(n - 1);
}
function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
}
var tes = faktorial(5);
console.log(tes);

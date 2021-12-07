// const angka = [5, -9, 2, 7, 4, 3, 0, -8, -1, 6];

// mencari angka >= 3
// menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);
// penerapan arrow function
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kali angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// di jumlahkan seluruh elemen array
// const newAngka = angka.reduce((acumulator, currentValue) => acumulator + currentValue);
// console.log(newAngka);

// method chaining
// cari angka lebih besar dari 5 = 7 dan 6
// di kali 3 21 dan 18
// jumlahkan
// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, cur) => acc + cur);
// console.log(hasil);

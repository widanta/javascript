// konsep hoisting dalam variable
// contoh 1
// var i;
// console.log(i);
// i = 10;
// contoh 2
// var i;
// var j;
// console.log(i);
// (i = 10), (j = "widanta");

// block program pembatas / code program yang ada di dalam kurung kurawal / jika ketemu if , switch

// contoh function scope
// function test() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// test();
// console.log(i);

// function expresion
// var x = function(){

// }
// cara lama
// imedietly function
// (function () {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);

// cara baru
// var = function scope
// let dan const = block scope

// let
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// ============================================================================================================
// const
// jika menggunakan const nilainya tetap tidak bisa di ubah
// let bagus di gunakan saat looping/pengulangan karena nilainya bisa di increment atau di tambah

// nilai const bisa di ubah jika
// const sis = {
//   nama: "widanta",
//   umur: 16,
// };
// sis.umur = 35;

// console.log(sis);

const i = [1, 2, 3];
// i = [1, 2, 3, 4];
i.push = 4;
console.log(i);

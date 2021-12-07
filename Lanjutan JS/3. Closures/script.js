// lexical scope

// function init() {
//   let nama = "Widanta";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// Contoh 2
// function init() {
//   // let nama = "Widanta";
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Danta");
// panggilNama("tata");

// Contoh 3
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu} Semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("widanta");
// selamatMalam("tata");

// Contoh 4

// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

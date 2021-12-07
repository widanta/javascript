// cara membuat object pada javascript

// 1. object literal
// problem : tidak efektif untuk object yang banyak
// let siswa1 = {
//   nama: "danta",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`selamat makan ${this.nama}, Selamat Makan!`);
//   },
// };

// let siswa2 = {
//   nama: "widanta",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`selamat makan ${this.nama}, Selamat Makan!`);
//   },
// };

// ============================================================================================================
// 2. function declaration
// function Siswa(nama, energi) {
//   let siswa = {};
//   siswa.nama = nama;
//   siswa.energi = energi;

//   (siswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }),
//     (siswa.main = function (jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, Selamat Main`);
//     });

//   return siswa;
// }

// let widanta = Siswa("Widanta", 10);
// let tata = Siswa("Tata", 40);

// const methodSiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`);
//   },
// };

// function Siswa(nama, energi) {
//   let siswa = {};
//   siswa.nama = nama;
//   siswa.energi = energi;
//   siswa.makan = methodSiswa.makan;
//   siswa.main = methodSiswa.main;
//   siswa.tidur = methodSiswa.tidur;

//   return siswa;
// }

// let widanta = Siswa("Widanta", 10);
// let tata = Siswa("Tata", 40);

// ============================================================================================================
// 3. constructor function
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   (this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }),
//     (this.main = function (jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, Selamat Main`);
//     });
// }

// let widanta = new Siswa("Widanta", 10);

// ============================================================================================================
// 4. object.create
// const methodSiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`);
//   },
// };

// function Siswa(nama, energi) {
//   let siswa = Object.create(methodSiswa);
//   siswa.nama = nama;
//   siswa.energi = energi;

//   return siswa;
// }

// let widanta = Siswa("Widanta", 10);
// let tata = Siswa("Tata", 40);

// versi Class
// class Siswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan !`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Main !`;
//   }

//   makan(tidur) {
//     this.energi += tidur;
//     return `Halo ${this.nama}, Selamat Tidur !`;
//   }
// }

// let Widanta = new Siswa("Widanta", 10);

// let angka = [];
// let angka = new Array();

// function Array() {
//   let this = Object.create(Array.prototype);
// }
let angka = [2, 1, 3];
console.log(angka);

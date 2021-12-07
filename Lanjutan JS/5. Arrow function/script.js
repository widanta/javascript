// function expresion
// const tampilNama = function (nama){
//   return `Halo, ${nama}`;
// }
// console.log(tampilNama("widanta"));

// arrow function
// const tampilNama = (nama) => {
//   return `halo, ${nama}`;
// };
// console.log("widanta");
// kalau parameternya 1 boleh tidak pakai kurung
// implisit return
// const tampilNama = nama => `halo, ${nama}`;
// console.log("widanta");

// contoh 2
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu},${nama}`;
// };
// console.log(tampilNama("danta", "malam"));

// contoh 3
// let siswa = ["danta", "tata", "widanta"];
// let jumlahHuruf = siswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = siswa.map((nama) => nama.length);
// console.log(jumlahHuruf);
// let jumlahHuruf = siswa.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

// ============================================================================================================
// konsep this pada arrow function
// constructor function
// const Siswa = function () {
//   this.nama = "widanta";
//   this.umur = 16;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}. Dan umur saya ${this.umur} tahun`);
//   };
// };

// const widanta = new Siswa();

// arrow function
// const Siswa = function () {
//   this.nama = "widanta";
//   this.umur = 16;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}. Dan umur saya ${this.umur} tahun`);
//   };
// };

// const widanta = new Siswa();

// Object literal
// arrow function tidak mempunyai konsep this
// dan tidak semua function bisa di ubah menjadi arrow function
// const sis1 = {
//   nama: "widanta",
//   umur: 16,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}. Dan umur saya ${this.umur} tahun`);
//     console.log(this);
//   },
// };

// const Siswa = function () {
//   this.nama = "widanta";
//   this.umur = 16;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}. Dan umur saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const widanta = new Siswa();

// ============================================================================================================
// contoh nyata penggunaan arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

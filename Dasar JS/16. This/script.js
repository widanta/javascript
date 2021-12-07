// // this
// // cara 1 -fucntion declaration
// function halo() {
//   console.log(this);
//   console.log("hallo");
// }
// this.halo();
// // this mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama : "widanta"};
// obj.halo = function () {
//   console.log(this);
//   console.log("hallo");
// }
// obj.halo{};
// this mengembalikan object yang bersangkutan

// cara 3 - constructur
// function halo() {
//   console.log(this);
//   console.log("hallo");
// }
// var obj1 = new halo();
// var obj2 = new halo();
// this mengembalikan object yang baru di buat

// ---------------------------------membuat object dengan literal---------------------------------

// var mhs = {
//   nama: "widanta",
//   umur: 15,
//   ips: [3.0, 2.5, 3.2],
//   alamat: {
//     jalan: "jl. sulatri no 14",
//     kota: "denpasar",
//     provinsi: "bali",
//   },
// };

// ---------------------------------fuction declaration---------------------------------
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs3 = buatObjectMahasiswa("danta", "12345", "danta@gmail.com", "rpl");

// ---------------------------------constructor---------------------------------

// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs4 = new Mahasiswa("tata", "678910", "tata@gmail.com", "rpl");

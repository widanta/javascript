// membuat object dengan literal

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

// fuction declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs3 = buatObjectMahasiswa("danta", "12345", "danta@gmail.com", "rpl");

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("tata", "678910", "tata@gmail.com", "rpl");

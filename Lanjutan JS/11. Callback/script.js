// callback
// synchronous function

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukkan nama");
//   callback(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`halo, ${nama}`);
// });

// ============================================================================================================

// const sis = [
//   {
//     nama: "widanta",
//     nis: 1111,
//     email: "widanta@gmail.com",
//     jurusan: "teknik informatika",
//     idGuruWali: 1,
//   },
//   {
//     nama: "danta",
//     nis: 2222,
//     email: "danta@gmail.com",
//     jurusan: "teknik rekayasa",
//     idGuruWali: 2,
//   },
//   {
//     nama: "tata",
//     nis: 3333,
//     email: "tata@gmail.com",
//     jurusan: "teknik pembangunan",
//     idGuruWali: 3,
//   },
// ];

// console.log("mulai");
// sis.forEach((s) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(s.nama);
// });
// console.log("selesai");

// ============================================================================================================
// Asynchronous Callback
// menggunalkan vanila javascript atau javascruipt murni
// function getDataSiswa(url, succses, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succses(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataSiswa(
//   "data/siswa.json",
//   (results) => {
//     const sis = JSON.parse(results);
//     sis.forEach((s) => {
//       console.log(s.nama);
//     });
//   },
//   () => {}
// );
// console.log("selesai");

// ============================================================================================================
// Asynchronous Callback
// menggunalkan jquery
console.log("mulai");
$.ajax({
  url: "data/siswa.json",
  success: (sis) => {
    sis.forEach((s) => {
      console.log(s.nama);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");

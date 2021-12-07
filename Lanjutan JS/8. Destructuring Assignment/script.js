// destructuring variable/assignment

// ============================================================================================================
// 1. destructuring array

// const perkenalan = ["halo", "nama", "saya", "widanta"];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// ============================================================================================================
// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pafda function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// ============================================================================================================
// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// ============================================================================================================
// 2. destructuring object
// const sis = {
//   nama: "widanta",
//   umur: 16,
// };
// const { nama, umur } = sis;
// console.log(nama);

// assignmenet tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "widanta",
//   umur: 16,
// });
// console.log(nama);

// assign ke variable baru
// const sis = {
//   nama: "widanta",
//   umur: 16,
// };
// const { nama: n, umur: u } = sis;
// console.log(u);

// memberikan default value
// const sis = {
//   nama: "widanta",
//   umur: 16,
//   email: "widanta@gmail.com",
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = sis;
// console.log(e);

// rest parameter
// const sis = {
//   nama: "widanta",
//   umur: 16,
//   email: "widanta@gmail.com",
// };

// const { nama, ...value } = sis;
// console.log(nama);

// mengambil field pada object , setelah di kirim sebagai parameter untuk function
// const sis = {
//   id: 123,
//   nama: "widanta",
//   umur: 16,
//   email: "widanta@gmail.com",
// };

// function getIdSis({ id }) {
//   return id;
// }

// console.log(getIdSis(sis));

// ============================================================================================================
// 3. destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const tambah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];
// console.log(kali);

// const [tambah, kali] = kalkulasi(2, 3);
// console.log(kali);

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// 2. function kalkulasi
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// destructuring function arguments
const sis1 = {
  nama: "widanta",
  umur: 16,
  email: "widanta@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

// function cetakSis(nama, umur) {
//   return `halo nama saya ${nama}. Umur saya ${umur} tahun`;
// }

// console.log(cetakSis(sis1.nama, sis1.umur));

function cetakSis({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `halo nama saya ${nama}. Umur saya ${umur} tahun. Nilai uas saya ${uas} `;
}

console.log(cetakSis(sis1));

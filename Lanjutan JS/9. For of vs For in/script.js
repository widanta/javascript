// for of
// 1. array
// const sis = ["widanta", "tata", "danta"];

// for
// for (let i = 0; i < sis.length; i++) {
//   console.log(sis[i]);
// }

// foreach
// sis.forEach((s) => {
//   console.log(s);
// });

// for of
// for (const s of sis) {
//   console.log(s);
// }

// 2. String
// tidak bisa menggunakan foreach karena foreach khusus untuk array
// const nama = "widanta";

// for of
// for (const n of nama) {
//   console.log(n);
// }

// const sis = ["widanta", "tata", "danta"];
// sis.forEach((s, i) => {
//   console.log(`${s} adalah siswa ke-${i + 1}`);
// });

// for (const [i, s] of sis.entries()) {
//   console.log(`${s} adalah mahasisa ke-${i + 1}`);
// }

// 3. NodeList
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.innerHTML));

// for (n of liNama) {
//   console.log(n.textContent);
// }

// 4. arguments
// function jumlahkanAngka() {
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// ============================================================================================================

// for in
// const sis = {
//   nama: "widanta",
//   umur: 16,
//   email: "widanta@gmail.com",
// };

// for (s in sis) {
//   console.log(s);
// }

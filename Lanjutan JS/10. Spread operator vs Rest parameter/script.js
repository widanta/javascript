// spread operator
// memecah interables menjadi singgle element

// const sis = ["widanta", "danta", "tata"];
// console.log(...sis[0]);

// mengabungkan 2 array
// const sis = ["widanta", "danta", "tata"];
// const guru = ["made", "abdi", "nugraha"];
// const orang = [...sis, "aji", ...guru];
// const orang = sis.concat(guru);
// console.log(orang);

// meng-copy array
// const sis = ["widanta", "danta", "tata"];
// // const sis1 = sis;
// const sis1 = [...sis];
// sis1[0] = "fajar";
// console.log(sis);

// contoh 1
// const liSis = document.querySelectorAll("li");
// const sis = [];
// for (let i = 0; i < liSis.length; i++) {
//   sis.push(liSis[i].textContent);
// }
// console.log(sis);

// const sis = [...liSis].map((m) => m.textContent);
// console.log(sis);

// contoh 2
// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huruf;

// ============================================================================================================

// Rest parameter

// function myFunch() {
//   // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   // return myArgs;
//   // return Array.from(arguments);
//   return [...arguments];
// }

// console.log(myFunch(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;

//   // for (const a of angka) {
//   //   total += a;
//   // }
//   // return total;

//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["danta", "tata", "widanta", "abdi", "nugraha"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(wakil);

// object destructuring
// const team = {
//   pm: "Widanta",
//   frontEnd: "adi",
//   backEnd: "handy",
//   ui: "cahaya",
// };

// const { pm, ...myTeam } = team;
// console.log(pm);

// filtering
// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }
// console.log(filterBy("boolean", 1, 2, "Widanta", false, 10, true, "Danta"));

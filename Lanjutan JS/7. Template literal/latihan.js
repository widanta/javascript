// html fragment
// const sis = {
//   nama: "widanta",
//   umur: 16,
//   nis: 123456,
//   email: "widanta@gmail.com",
// };

// const el = `<div class="sis">
//   <h2>${sis.nama}</h2>
//   <span class="nis">${sis.nis}</span>
// </div>`;

// console.log(el);

// 2. looping
// const sis = [
//   {
//     nama: "widanta",
//     email: "widanta@gmail.com",
//   },
//   {
//     nama: "danta",
//     email: "danta@gmail.com",
//   },
//   {
//     nama: "tata",
//     email: "tata@gmail.com",
//   },
// ];

// const el = `<div class="sis">
//   ${sis
//     .map(
//       (s) => `<ul>
//     <li>${s.nama}</li>
//     <li>${s.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. conditionals
// ternary
// const lagu = {
//   judul: "tetap di dalam jiwa",
//   penyanyi: "isyana saraswati",
//   feat: "rai putra",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. nested
// html fragment bersarang
// const sis = {
//   nama: "widanta",
//   semester: 2,
//   pelajaran: ["rekayasa web", "pbo", "basis data", "permodelan"],
// };

// function cetakPelajaran(pelajaran) {
//   return `
//   <ol>
//     ${pelajaran.map((p) => `<li>${p}</li>`).join("")}
//   </ol>
//   `;
// }

// const el = `<div class="sis">
//   <h2>${sis.nama}</h2>
//   <span class="semester">Semester :${sis.semester}</span>
//   <h4>pelajaran :</h4>
//   ${cetakPelajaran(sis.pelajaran)}
// </div>`;

// document.body.innerHTML = el;

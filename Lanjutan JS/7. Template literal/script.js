// template literal
// const nama = "widanta";
// const umur = 16;
// console.log(`Halo, nama saya ${nama}. Umur saya ${umur} tahu.`);
// console.log("halo, nama saya " + nama + ". Umur saya " + umur + " tahun.");

// ============================================================================================================
// embedded expressions
// console.log(`${1 + 1}`);
// console.log(`${alert("hello!")}`);
// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// ============================================================================================================
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

// ============================================================================================================
// tagged template
// const nama = "widanta";
// const umur = 16;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   // penggunaan higer order function
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo nama saya ${nama}. Umur saya ${umur} tahun.`;
// console.log(str);

// ============================================================================================================
// highlight
const nama = "widanta";
const umur = 16;
const email = "widanta@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo nama saya ${nama}. Umur saya ${umur} tahun. Dan email saya adalah ${email}.`;

document.body.innerHTML = str;

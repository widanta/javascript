// menggunakan event handler

// const p3 = document.querySelector(".p3");

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "green";
// }

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "blue";
// }

// const p2 = document.querySelector(".p2");
// element method
// p2.onclick = ubahWarnaP2;

// menggunakan addEventListener [fungsinya sama dengan onclik namun lebih baru penerapanya]

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("item baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

// perbedaan penggunaan eventHandler dan addEventListener ketika kita memberikan lebih 1 buah perubahan pada event, jika menggunakan eventHandler maka perubahan akan menimpa perubahan yang sebelumnya.
// sedangkan menguunakan addEventListener maka akan menambah perubahannya

// const p3 = document.querySelector(".p3");
// penggunaan eventHandler [menimpa perubahan / perubahan yang baru di jalankan perubahan yang sebelumnya tidak di jalankan]
// p3.onclick = function () {
//   p3.style.backgroundColor = "blue";
// };
// p3.onclick = function () {
//   p3.style.color = "pink";
// };

// penggunaan addEventListener
// p3.addEventListener("mouseover", function () {
//   p3.style.backgroundColor = "pink";
// });
// p3.addEventListener("click", function () {
//   p3.style.color = "blue";
// });

// daftar macam macam event
// KeyboardEvent;
// FormEvent;
// resourceEvent;
// DragEvent;
// TextEvent;
// CloseEvent;
// MouseEvent;
// InputEvent;
// FocusEvent;
// ErrorEvent;
// dll;

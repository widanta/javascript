// dom tranversal method
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling

//event handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// dom transversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (el) {
//   el.addEvenetListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// });

// const nama = document.querySelector(".nama");
// // console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling.nextElementSibling);

// cara mengganti aksi default

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("oke");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});

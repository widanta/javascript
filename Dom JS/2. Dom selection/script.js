// dom selection
// method ada 6
// 1. document.getElementById() mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#dedede";
// judul.innerHTML = "Widanta";

// 2. document.getElementsByTagName() mengembalikan HTML collection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// 3. document.getElementsByClassName() mengembalikan HTML collection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini di rubah oleh java script";

// 4. document.querySelector() mengembalikan element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li3 = document.querySelector("section#b ul li:nth-child(3)");
// li3.style.backgroundColor = "orange";

// 3. document.querySelectorAll()
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = "red";
// }

// contoh menentukan node root js (menentukan method yang tepat)
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "pink";

// atau di balik
// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "red";

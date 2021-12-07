// method manipulasi element
// Element.innerHTML
// Element.style.<property>
// Element.setAttribute
// Element.classList

// 1. Element.innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "widanta";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML =
//   "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga libero magnam molestiae doloribus similique, repudiandae ut nihil quas animi harum sequi? Ratione laudantium totam quae cum architecto corrupti accusantium beatae rerum neque? Perspiciatis cupiditate nulla quasi sed. Sint, illo. Ducimus cupiditate incidunt et, assumenda modi in. Suscipit vel libero neque nam similique? Inventore quisquam aut quia dolore consectetur quam, iure facilis fugit ad ducimus et voluptatum ea exercitationem eligendi, ipsa a harum deleniti labore. Temporibus ducimus nisi ipsam autem vel minus quod hic iste, assumenda inventore neque dolorem fugiat, suscipit qui adipisci earum. Dolorum cupiditate laudantium quos possimus consequatur!</p>";

// 2. Element.style.<property>
// const judul = document.querySelector("#judul");
// judul.style.backgroundColor = "red";
// judul.style.color = "green";

// 3. Element.setAttribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "tata");

// 4. Element.classList
// const p2 = document.querySelector(".p2");

// =============================================================================================================================================

// method manipulasi node
// document.createElement
// document.createTextNode
// node.appendChild [lama]  yang baru   parentNode.append()
// parentNode.prepend()
// node.insertBefore [lama] yang baru   childNode.before()
// childNode.after()
// parentNode.removeChild
// parentNode.replaceChild

// 1.document.createElement
const pBaru = document.createElement("p");
// 2.document.createTextNode
const teksPBaru = document.createTextNode("paragraf baru");
// simpan ke dalam paragraf
// 3.node.appendChild
pBaru.appendChild(teksPBaru);
// simpan p baru di bawah p 3
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
// 4.node.insertBefore
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];
// 5.parentNode.removeChild
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baru");
h2Baru.appendChild(teksH2Baru);
// 6.parentNode.replaceChild
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "red";
liBaru.style.backgroundColor = "red";
h2Baru.style.backgroundColor = "red";

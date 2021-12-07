const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  // document.body.style.backgroundColor = "pink";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const tRandom = document.createElement("button");
const teksTRandom = document.createTextNode("tobol acak");
tRandom.appendChild(teksTRandom);
tRandom.setAttribute("type", "button");
tUbahWarna.after(tRandom);

tRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name = sMerah]");
const sHijau = document.querySelector("input[name = sHijau]");
const sBiru = document.querySelector("input[name = sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (Event) {
  // posisi mouse
  // Event.clientX
  // ukuran browser
  // window.innerWidth
  const xPos = Math.round((Event.clientX / window.innerWidth) * 225);
  const yPos = Math.round((Event.clientY / window.innerHeight) * 225);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});

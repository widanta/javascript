function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI !";
  if (player == "batu") return comp == "gunting" ? "MENANG !" : "KALAH !";
  if (player == "gunting") return comp == "batu" ? "KALAH !" : "MENANG !";
  if (player == "kertas") return comp == "gunting" ? "KALAH !" : "MENANG !";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "gambar/" + gambar[i++] + ".jpeg");
    if (i == gambar.length) i = 0;
  }, 100);
}

// function putar() {
//   const imgComputer = document.querySelector(".img-komputer");
//   const gambar =["batu","gunting","kertas"];
//   let i = 0;
//   const waktuMulai = new Date().getTime()
// }

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".jpeg");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".jpeg");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

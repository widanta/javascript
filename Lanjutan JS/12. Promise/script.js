// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=a3bdd005&s=joker",
//   success: (movies) => console.log(movies),
// });

// menjalankan ajax menggunakan vanila js
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=a3bdd005&s=joker");
// xhr.send();

// menulis ajax menggunakan js moderm
// fetch("http://www.omdbapi.com/?apikey=a3bdd005&s=joker")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// ============================================================================================================
// promise
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// keadaan
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// untuk menjalankan 3 kedaan ini
// harus menjalankan fungsi ini
// callback (resolve) = ketika janji terpenuhi
// (reject) = ketika janji tidak terpenuhi
// (finally) = ketika waktu tumbuh selesai
// ada aksi yang di lakukan aksi (then) = jika terpenuhi
// (catch) = ketika tidak terpenuhi

// ============================================================================================================
// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1.then((response) => console.log("oke : " + response)).catch((response) => console.log("not ok : " + response));
// boleh seperti ini
// janji1
//   .then((response) => console.log("oke : " + response))
//   .catch((response) => console.log("not ok : " + response));

// ============================================================================================================
// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("tidak di tepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("oke : " + response))
//   .catch((response) => console.log("not ok : " + response));
// console.log("selesai");

// ============================================================================================================
// contoh 3
// promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "joker",
        sutradara: "widanta",
        pemeran: "tata, danta",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "denpasar",
        temp: 27,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// atau boleh juga menggunakan
// Promise.all([film, cuaca])
//   .then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});

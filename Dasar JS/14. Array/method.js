// method adalah fucntion yang ada di dalam sebuah object

// 1 length = untuk mengetahui berapa jumlah elemen yang ada di dalam array
// var arr = ["widanta", "danta", "tata", "lukman", "suki"];
// for (var i = 0; i < arr.length; i++) {
//   console.log("siswa ke - " + (i + 1) + " : " + arr[i]);
// }

// 2 join = yang menggabungkkan semua array dan mengubahnya menjadi bertipe string
// var arr = ["widanta", "danta", "tata"];
// console.log(arr.join(" - "));

// 3 push,pop,shift,unshift = untuk menambah atau menghapus elemnt array
// * push = menambahkan atau memasukkan element baru di akhir array . boleh menambahkan sekaligus
// var arr = ["widanta", "danta", "tata"];
// arr.push("toni", "tono");
// console.log(arr.join(" - "));

// * pop = menghilangkan element terakhir dari array . harus menghapus 1 persatu dari element terakhir
// var arr = ["widanta", "danta", "tata"];
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));

// * unshift = menambahkan element baru di awal array
// var arr = ["widanta", "danta", "tata"];
// arr.unshift("made");
// console.log(arr.join(" - "));

// * shift = menghilangkan element pertama di array
// var arr = ["widanta", "danta", "tata"];
// arr.shift();
// console.log(arr.join(" - "));

// 4 splice = untuk menyisipkan atau menambahkan element array di tengah tengah
// rumus = splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2,....)
// var arr = ["widanta", "danta", "tata"];
// arr.splice(1, 2, "tono", "toni");
// console.log(arr.join(" - "));

// 5 slice = mengiris array menjadi array yang baru
// rumus = slice(indexAwal,indexAkhir);
// var arr = ["widanta", "danta", "tata", "tono", "toni"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// 6 foreach = tidak mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["widanta", "danta", "tata"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// } menggunakan for biasa

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("siswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7 map = mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8 sort = mengurutkan isi array
// var angka = [5, 2, 1, 4, 18, 3, 6, 7];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// filter & find = mencari element pada array
// 9 filter = mencari nilai pada array dan mengembalikan dalam bentuk array . filter dapat mengembalikan banyak nilai
// var angka = [5, 2, 1, 4, 18, 3, 6, 7];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// 10 find =mencari nilai pada array dan menghasilkan 1 nilai saja
// var angka = [5, 2, 1, 4, 18, 3, 6, 7];
// var angka2 = angka.find(function (x) {
//   return x > 5;
// });
// console.log(angka2);

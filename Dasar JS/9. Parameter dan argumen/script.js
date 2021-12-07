// penerapan parameter
// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));

// alert(hasil);

// var a = parseInt(prompt("masukkan nilai 1 :"));
// var b = parseInt(prompt("masukkan nilai 2 :"));

// contoh function arguments
function tambah() {
  var hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);

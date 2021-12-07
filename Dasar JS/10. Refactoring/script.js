// refactoring = penghematan code

// awal
// function jumlahVolumeDuaKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));

// refactoring
function jumlahVolumeDuakubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolumeDuakubus(8, 3));

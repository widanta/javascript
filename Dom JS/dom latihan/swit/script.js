var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih : batu,gunting,kertas");

  // menagkap pilihan komputer

  // menambahkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri !";
  } else if (p == "batu") {
    // if (comp == "Gunting"){
    //   hasil = "Menang !"
    // } else{
    //   hasil = "Kalah !"
    // }
    hasil = comp == "gunting" ? "Menang !" : "Kalah !";
  } else if (p == "gunting") {
    hasil = comp == "batu" ? "Menang !" : "Kalah !";
  } else if (p == "kertas") {
    hasil = comp == "gunting" ? "Menang !" : "Kalah !";
  } else {
    hasil = "Memasukkan pilihan yang salah !";
  }

  // tampilkan hasil
  alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + " \nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("Lagi?");
}

alert("Terima kasih telah bermain :)");

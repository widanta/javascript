// membuat object angkot
function Angkot(sopir, rute, penumpang, kas) {
  this.sopir = sopir;
  this.rute = rute;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}
var angkot1 = new Angkot("widanta", ["denpasar", "batubulan"], [], 0);
var angkot2 = new Angkot("tata", ["batubulan", "sanur"], [], 0);
